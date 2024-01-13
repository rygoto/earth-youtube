import React, { useRef, useState, useEffect, forwardRef, memo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html, Text } from '@react-three/drei';
import * as THREE from 'three';
import { cubeDataAsia, cubeDataAmerica, cubeDataWest } from './CountyCube';

function Earth({ cubeDataAsia }) {
  const earthRef = useRef();
  const textureLoader = new THREE.TextureLoader();
  const earthTexture = textureLoader.load('./Albedo.jpg');
  const diamondRefs = useRef(new Map());

  useFrame(() => {
    //earthRef.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={earthRef} geometry={new THREE.SphereGeometry(1, 64, 64)}>
      <meshStandardMaterial map={earthTexture} />
      {cubeDataAsia.map((data) => (
        <Diamond
          key={data.id}
          position={data.position}
          name={data.ename}
          id={data.id}
          ref={(ref) => diamondRefs.current.set(data.name, ref)}
        />
      ))}
    </mesh>
  );
}

function CameraLogger() {
  const { camera } = useThree();
  useFrame(() => {
    const position = camera.position;
    console.log("カメラの位置:", position);
    const unitVector = position.clone().normalize();
    //console.log("カメラの単位ベクトル:", unitVector);
    const yRotation = camera.rotation.y;
    //console.log("カメラのy軸回転角度:", yRotation);
  });
  return null;
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

const Diamond = React.memo(forwardRef(({ position, name, id, tag, currentTag }, ref) => {
  const { scene } = useThree();
  const { camera } = useThree();

  const [videos, setVideos] = useState([]);
  const [conePosition, setConePosition] = useState(new THREE.Vector3());
  //const [visibleName, setVisibleName] = useState("");
  //const [isVisible, setIsVisible] = useState(false);

  const pyramid1Ref = useRef();
  const pyramid2Ref = useRef();

  useFrame(() => {
    const time = Date.now() * 0.002;
    const color = (time % 2 < 1) ? new THREE.Color(0x0000ff) : new THREE.Color(0xff0000);
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

  const handleClick = async () => {

    const conePosition = pyramid1Ref.current.position;
    event.stopPropagation();
    setConePosition(pyramid1Ref.current.position);
    console.log(conePosition);
    console.log(id);
    try {
      const response = await fetch(`http://localhost:3000/api/videos?regionCode=${id}`);
      const videos = await response.json();
      console.log(videos);
      setVideos(videos);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTouch = async (event) => {

    const conePosition = pyramid1Ref.current.position;
    event.stopPropagation();
    setConePosition(pyramid1Ref.current.position);
    console.log(conePosition);
    console.log(id);
    try {
      const response = await fetch(`http://localhost:3000/api/videos?regionCode=${id}`);
      const videos = await response.json();
      console.log(videos);
      setVideos(videos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <group ref={ref} position={adjustedPosition} rotation={[pitch, yaw, 0]}  >
      <mesh ref={pyramid1Ref} onClick={handleClick} onTouchStart={handleTouch}>
        <coneGeometry args={[1 / 108, 1 / 54, 16]} />
        <meshStandardMaterial />
      </mesh>
      <mesh ref={pyramid2Ref} rotation={[Math.PI, 0, 0]} position={[0, -1 / 54, 0]}>
        <coneGeometry args={[1 / 108, 1 / 54, 16]} />
        <meshStandardMaterial />
      </mesh>
      <Text
        position={[0, 0.01, -0.05]}
        scale={[-1, 1, 0.5]}
        fontSize={0.02}
        color="white"
      >
        {name}
      </Text>
      <ThumbnailBoxes videos={videos} proxyServerUrl="http://localhost:3001" position={conePosition} />
    </group>
  );
}));

function ThumbnailBoxes({ videos, proxyServerUrl, position }) {
  const textureLoader = new THREE.TextureLoader();

  return videos.map((video, index) => {
    const proxyUrl = `${proxyServerUrl}/proxy?url=${encodeURIComponent(video.thumbnail)}`;
    const texture = textureLoader.load(proxyUrl);
    const material = new THREE.MeshBasicMaterial({ map: texture });

    const meshRef = useRef();
    const offset = index * 0.13;
    const boxPosition = [position.x + offset, position.y + 0.03, position.z];

    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.lookAt(camera.position);
      }
    });


    return (
      <mesh key={index} position={boxPosition} material={material} onClick={() => showVideo(video.videoId)} onTouchStart={() => showVideo(video.videoId)}>
        <boxGeometry args={[0.1, 0.01, 0.055]} />
      </mesh>
    );
  });
}

function showVideo(videoId) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const iframe = document.createElement('iframe');
  iframe.src = embedUrl;
  iframe.width = '640';  // iframeの幅
  iframe.height = '360'; // iframeの高さ
  iframe.frameBorder = '0';
  iframe.allowFullscreen = true;
  // idが'video-container'の要素内
  const container = document.getElementById('video-container');
  container.appendChild(iframe);
  console.log(videoId);

  window.addEventListener('click', function (event) {
    // iframe要素を取得
    const iframe = document.querySelector('#video-container iframe');
    // iframeが存在し、クリックがiframe外で発生した場合
    if (iframe && !iframe.contains(event.target)) {
      // iframeを削除
      iframe.remove();
    }
  });
}




function App() {

  return (

    <Canvas style={{ backgroundColor: 'black' }}>
      <CameraLogger />
      <ambientLight intensity={5} />
      <pointLight position={[0, 0, 3]} />
      <Earth cubeDataAsia={cubeDataAsia} cubeDataAmerica={cubeDataAmerica} cubeDataWest={cubeDataWest} />
      <Atmosphere />
      <OrbitControls />
      <Html>
        <div id="video-container"></div>
      </Html>
    </Canvas>


  );
}

export default App;