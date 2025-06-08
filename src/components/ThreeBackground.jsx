import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, shaderMaterial, useTexture, Stars } from '@react-three/drei';
import * as THREE from 'three';

// 🌌 Textures
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

// 🌞 Solar Flare Shader
const SolarFlareMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color('#FDB813') },
  `varying vec2 vUv;
   void main() {
     vUv = uv;
     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
   }`,
  `uniform float time;
   uniform vec3 color;
   varying vec2 vUv;
   void main() {
     float strength = sin(10.0 * vUv.x + time) * 0.05 + 0.05;
     float radial = distance(vUv, vec2(0.5));
     float flare = smoothstep(0.4, 0.0, radial);
     gl_FragColor = vec4(color, flare * strength);
   }`
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
  const ref = useRef();
  const angle = useRef(Math.random() * Math.PI * 2);
  const texture = useTexture(textures[name]);

  useFrame(() => {
    angle.current += speed;
    ref.current.position.x = distance * Math.cos(angle.current);
    ref.current.position.z = distance * Math.sin(angle.current);
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 48, 48]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const OrbitRing = ({ radius }) => {
  const points = useMemo(() => {
    const segments = 128;
    const pts = [];
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * 2 * Math.PI;
      pts.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }
    return pts;
  }, [radius]);

  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial attach="material" color="#444" />
    </line>
  );
};

const SaturnRing = ({ distance }) => {
  const texture = useTexture(saturnRingTex);
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]} position={[distance, 0, 0]}>
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
        <meshStandardMaterial map={texture} emissive="#FDB813" emissiveIntensity={3} />
      </mesh>

      <mesh ref={flareRef}>
        <sphereGeometry args={[2.2, 64, 64]} />
        <solarFlareMaterial transparent />
      </mesh>

      <mesh>
        <sphereGeometry args={[2.6, 64, 64]} />
        <meshBasicMaterial color="#FDB813" transparent opacity={0.2} side={THREE.BackSide} />
      </mesh>

      <pointLight args={['#FDB813', 4, 80]} />
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
    { name: 'Mercury', size: 0.2, distance: 4, speed: 0.02 },
    { name: 'Venus', size: 0.4, distance: 6, speed: 0.015 },
    { name: 'Earth', size: 0.5, distance: 8, speed: 0.012 },
    { name: 'Mars', size: 0.35, distance: 10, speed: 0.01 },
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
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <Canvas
        camera={{ position: [0, 8, 40], fov: 45 }}
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
        shadows
      >

        <ambientLight intensity={0.35} />
        <Stars radius={200} depth={50} count={3000} factor={4} fade />
        <GalaxyBackground />
        <SolarSystem />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.25}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
