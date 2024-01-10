import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';


const Target = () => {
  return (
    <mesh position={[3, 3, 3]}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color="red" emissive="red" emissiveIntensity={2} />
    </mesh>
  );
};

const Diamond = () => {
  const [particles, setParticles] = useState([]);
  const targetPosition = new THREE.Vector3(3, 3, 3);
  const ref = useRef();
  const frameCount = useRef(0);

  const handleClick = () => {
    const count = 100;
    const tempParticles = [];
    for (let i = 0; i < count; i++) {
      tempParticles.push({
        position: [Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5],
        velocity: [Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5],
        phase: 'expand'
      });
    }
    setParticles(tempParticles);
    frameCount.current = 0;
  };

  useFrame(() => {
    frameCount.current += 1;
    const transitionFrame = 100; // このフレームで収束フェーズに移行

    setParticles(particles.map(particle => {
      if (frameCount.current > transitionFrame && particle.phase === 'expand') {
        // 収束フェーズに移行
        particle.phase = 'converge';
        particle.velocity = targetPosition.clone().sub(new THREE.Vector3(...particle.position)).normalize().toArray();
      }

      return {
        ...particle,
        position: particle.phase === 'expand' ?
          particle.position.map((p, i) => p + particle.velocity[i] * 0.1) :
          particle.position.map((p, i) => p + particle.velocity[i] * 0.05) // 収束スピードを落とす
      };
    }));
  });

  return (
    <mesh ref={ref} onClick={handleClick}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="royalblue" />
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="white" emissive="yellow" emissiveIntensity={2} />
        </mesh>
      ))}
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ backgroundColor: 'black' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Diamond />
      <Target />
      <OrbitControls />
    </Canvas>
  );
};

export default App;
/*const Target = () => {
  return (
    <mesh position={[2, 2, 2]}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color="red" emissive="red" emissiveIntensity={2} />
    </mesh>
  );
};

const Diamond = () => {
  const ref = useRef();
  const [particles, setParticles] = useState([]);
  const targetPosition = new THREE.Vector3(2, 2, 2);

  const handleClick = () => {
    const count = 100;
    const tempParticles = [];
    for (let i = 0; i < count; i++) {
      tempParticles.push({
        position: [Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5],
        velocity: [Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5]
      });
    }
    setParticles(tempParticles);
  };

  useFrame(() => {
    setParticles(particles.map(particle => {
      const currentPosition = new THREE.Vector3(...particle.position);
      const direction = targetPosition.clone().sub(currentPosition).normalize();
      const speed = 0.1; // 移動スピード

      return {
        ...particle,
        position: [
          particle.position[0] + direction.x * speed,
          particle.position[1] + direction.y * speed,
          particle.position[2] + direction.z * speed
        ]
      };
    }));
  });

  return (
    <mesh ref={ref} onClick={handleClick}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="royalblue" emissive="blue" emissiveIntensity={3} />
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position}>
          <sphereGeometry args={[0.02, 16, 16]} />
          <meshStandardMaterial
            color="white"
            emissive="yellow"
            emissiveIntensity={2} />
        </mesh>
      ))}
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ backgroundColor: 'black' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Diamond />
      <Target />
      <OrbitControls />
    </Canvas>
  );
};

export default App;*/
