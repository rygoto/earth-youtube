import React, { useRef, useState, useEffect, forwardRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
//import { cubeData } from './CountyCube';

const cubeData = [
  //なんか位置がずれている！！！
  //東アジア 
  { id: "JP", position: new THREE.Vector3(-0.6076, 0.5934, -0.5264), name: "日本" },    //日本
  { id: "KR", position: new THREE.Vector3(-0.4928, 0.5976, -0.6257), name: "韓国" },    //韓国
  { id: "US", position: new THREE.Vector3(-0.159207, 0.635375, 0.755181), name: "アメリカ" },    //アメリカ
  { id: "CA", position: new THREE.Vector3(-0.110040, 0.809703, 0.575856), name: "カナダ" },    //カナダ
]

function Earth({ cubeData }) {
  const earthRef = useRef();
  const textureLoader = new THREE.TextureLoader();
  const earthTexture = textureLoader.load('./Albedo.jpg');
  const diamondRefs = useRef(new Map());

  useFrame(({ camera }) => {
    // 地球のアニメーションを追加する場合
    //earthRef.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={earthRef} geometry={new THREE.SphereGeometry(1, 64, 64)}>
      <meshStandardMaterial map={earthTexture} />
      {cubeData.map((data) => (
        <Diamond key={data.id} position={data.position} name={data.name} ref={(ref) => diamondRefs.current.set(data.name, ref)} />
      ))}
    </mesh>
  );
}

function Atmosphere() {
  return (
    <mesh geometry={new THREE.SphereGeometry(1.06, 64, 64)}>
      <shaderMaterial
        side={THREE.FrontSide}
        transparent
        uniforms={{ color: { value: new THREE.Color(0x0099ff) } }}
        vertexShader={`
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 color;
          varying vec3 vNormal;
          void main() {
            float intensity = 1.05 - dot(vNormal, vec3(0.0, 0.0, 1.0));
            vec3 atmosphereColor = color * intensity;
            gl_FragColor = vec4(atmosphereColor, intensity);
          }
        `}
      />
    </mesh>
  );
}

const Diamond = forwardRef(({ position, name }, ref) => {

  const pyramid1Ref = useRef();
  const pyramid2Ref = useRef();


  useFrame(() => {
    const time = Date.now() * 0.002;
    const color = (time % 2 < 1) ? new THREE.Color(0x0000ff) : new THREE.Color(0xff0000);

    // 直接meshのマテリアルを更新
    if (pyramid1Ref.current) {
      pyramid1Ref.current.material.color = color;
    }
    if (pyramid2Ref.current) {
      pyramid2Ref.current.material.color = color;
    }
  });




  const earthRadius = 1;
  const diamondOffset = 0.02;

  const adjustedPosition = position.normalize().multiplyScalar(earthRadius + diamondOffset);  // 位置を調整

  // 回転角度を計算（ピッチとヨー）
  const pitch = Math.asin(adjustedPosition.y / adjustedPosition.length());
  const yaw = Math.atan2(-adjustedPosition.x, -adjustedPosition.z);



  return (
    <group ref={ref} position={adjustedPosition} rotation={[pitch, yaw, 0]}>
      <mesh ref={pyramid1Ref}>
        <coneGeometry args={[1 / 108, 1 / 54, 16]} />
        <meshStandardMaterial />
      </mesh>
      <mesh ref={pyramid2Ref} rotation={[Math.PI, 0, 0]} position={[0, -1 / 54, 0]}>
        <coneGeometry args={[1 / 108, 1 / 54, 16]} />
        <meshStandardMaterial />
      </mesh>
      <Html>
        <div style={{ color: 'white', fontSize: '10px' }}>
          {name}
        </div>
      </Html>
    </group>
  );
});

function App() {

  return (

    <Canvas style={{ backgroundColor: 'black' }}>
      <ambientLight intensity={5} />
      <pointLight position={[0, 0, 3]} />
      <Earth cubeData={cubeData} />
      <Atmosphere />
      <OrbitControls />
    </Canvas>

  );
}

export default App;