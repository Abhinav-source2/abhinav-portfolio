// src/components/ThreeBackground.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Stars, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader, AdditiveBlending } from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// Textures
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
  const texture = useLoader(TextureLoader, textures[name]);

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
  const ringGeometry = new THREE.BufferGeometry();
  const points = [];

  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
  }

  ringGeometry.setFromPoints(points);

  return (
    <line geometry={ringGeometry}>
      <lineBasicMaterial color="#444" />
    </line>
  );
};

const SaturnRing = ({ distance }) => {
  const ringRef = useRef();
  const texture = useLoader(TextureLoader, saturnRingTex);

  return (
    <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]} position={[distance, 0, 0]}>
      <ringGeometry args={[1.2, 2, 64]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} transparent />
    </mesh>
  );
};

const Sun = () => {
  const sunTexture = useLoader(TextureLoader, sunTex);

  return (
    <>
      {/* Core of the Sun */}
      <mesh>
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshStandardMaterial map={sunTexture} emissive="#FDB813" emissiveIntensity={3} />
      </mesh>

      {/* Glowing corona using additive blending */}
      <mesh>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshBasicMaterial
          color="#FDB813"
          transparent
          opacity={0.4}
          blending={AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Point Light from the Sun */}
      <pointLight color="#FDB813" intensity={3.5} distance={50} />
    </>
  );
};

const GalaxyBackground = () => {
  const galaxy = useLoader(TextureLoader, starfieldTex);
  return (
    <mesh>
      <sphereGeometry args={[300, 64, 64]} />
      <meshBasicMaterial map={galaxy} side={THREE.BackSide} />
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
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 50, 100], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <Stars radius={200} depth={60} count={5000} factor={5} fade />
        <GalaxyBackground />
        <SolarSystem />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.15} />
        {/* 🎇 Bloom Effect for glowing bodies */}
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.5} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
