import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, shaderMaterial, useTexture, Stars } from '@react-three/drei';
import * as THREE from 'three';

// 🌌 Textures (update paths as needed)
import mercuryTex from '../assets/textures/mercury.jpg';
import venusTex from '../assets/textures/venus.jpg';
import earthTex from '../assets/textures/earth.jpg';
import marsTex from '../assets/textures/mars.jpg';
import jupiterTex from '../assets/textures/jupiter.jpg';
import saturnTex from '../assets/textures/saturn.jpg';
import uranusTex from '../assets/textures/uranus.jpg';
import neptuneTex from '../assets/textures/neptune.jpg';
import saturnRingTex from '../assets/textures/saturn_ring.png';
import sunTex from '../assets/textures/sun.jpg';
import starfieldTex from '../assets/textures/starfield.jpg';

// 🌞 Solar Flare Shader (inline GLSL strings)
const SolarFlareMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color('#FDB813') },
  /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec3 pos = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  /* glsl */ `
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;

    void main() {
      float strength = sin(10.0 * vUv.x + time) * 0.05 + 0.05;
      float radial = distance(vUv, vec2(0.5));
      float flare = smoothstep(0.4, 0.0, radial);
      gl_FragColor = vec4(color, flare * strength);
    }
  `
);

extend({ SolarFlareMaterial });

const textures = {
  Mercury: mercuryTex,
  Venus: venusTex,
  Earth: earthTex,
  Mars: marsTex,
  Jupiter: jupiterTex,
  Saturn: saturnTex,
  Uranus: uranusTex,
  Neptune: neptuneTex,
};

const Planet = ({ name, size, distance, speed }) => {
  const planetRef = useRef();
  const angleRef = useRef(Math.random() * Math.PI * 2);
  const texture = useTexture(textures[name]);

  useFrame(() => {
    angleRef.current += speed;
    planetRef.current.position.x = distance * Math.cos(angleRef.current);
    planetRef.current.position.z = distance * Math.sin(angleRef.current);
    planetRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const OrbitRing = ({ radius }) => {
  const segments = 128;
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }
    return pts;
  }, [radius]);

  const ringGeometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  return (
    <line geometry={ringGeometry}>
      <lineBasicMaterial attach="material" color="#555" />
    </line>
  );
};

const SaturnRing = ({ distance }) => {
  const ringRef = useRef();
  const texture = useTexture(saturnRingTex);

  return (
    <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]} position={[distance, 0, 0]}>
      <ringGeometry args={[1.2, 2, 64]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} transparent />
    </mesh>
  );
};

const Sun = () => {
  const texture = useTexture(sunTex);
  const flareRef = useRef();

  useFrame(({ clock }) => {
    if (flareRef.current) {
      flareRef.current.material.uniforms.time.value = clock.elapsedTime;
    }
  });

  return (
    <>
      <mesh>
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshStandardMaterial emissive="#FDB813" emissiveIntensity={2} map={texture} />
      </mesh>

      <mesh ref={flareRef}>
        <sphereGeometry args={[2.2, 64, 64]} />
        <solarFlareMaterial transparent />
      </mesh>

      <mesh>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshBasicMaterial color="#FDB813" transparent opacity={0.2} side={THREE.BackSide} />
      </mesh>

      <pointLight args={["#FDB813", 3, 100]} />
    </>
  );
};

const GalaxyBackground = () => {
  const texture = useTexture(starfieldTex);
  return (
    <mesh>
      <sphereGeometry args={[300, 64, 64]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
};

const SolarSystem = () => {
  const planets = [
    { name: 'Mercury', size: 0.2, distance: 3, speed: 0.02 },
    { name: 'Venus', size: 0.4, distance: 5, speed: 0.015 },
    { name: 'Earth', size: 0.5, distance: 7, speed: 0.012 },
    { name: 'Mars', size: 0.35, distance: 9, speed: 0.01 },
    { name: 'Jupiter', size: 1.1, distance: 13, speed: 0.008 },
    { name: 'Saturn', size: 1, distance: 17, speed: 0.006 },
    { name: 'Uranus', size: 0.8, distance: 21, speed: 0.004 },
    { name: 'Neptune', size: 0.8, distance: 25, speed: 0.003 },
  ];

  return (
    <>
      <Sun />
      {planets.map((planet) => (
        <React.Fragment key={planet.name}>
          <Planet {...planet} />
          <OrbitRing radius={planet.distance} />
          {planet.name === 'Saturn' && <SaturnRing distance={planet.distance} />}
        </React.Fragment>
      ))}
    </>
  );
};

const ThreeBackground = () => {
  return (
    <Canvas
      camera={{ position: [0, 15, 40], fov: 45 }}
      gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      shadows
    >
      <ambientLight intensity={0.3} />
      <Stars radius={300} depth={60} count={5000} factor={5} fade />
      <GalaxyBackground />
      <SolarSystem />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.2}
        dampingFactor={0.05}
      />
    </Canvas>
  );
};

export default ThreeBackground;  