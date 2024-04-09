import React, { useRef, useState, useEffect, forwardRef, memo, createContext, useContext } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html, Text } from '@react-three/drei';
import * as THREE from 'three';
import { cubeDataAsia, cubeDataAmerica, cubeDataWest } from './CountyCube';

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [videoInfo, setVideoInfo] = useState(null);

  return (
    <VideoContext.Provider value={{ videoInfo, setVideoInfo }}>
      {children}
    </VideoContext.Provider>
  );
};

const VideoModal = () => {
  const { videoInfo, setVideoInfo } = useContext(VideoContext);
  const modalRef = useRef();
  const overlayRef = useRef();

  const closeModal = () => {
    setVideoInfo(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && overlayRef.current.contains(event.target)) {
        closeModal();
      }
    };
    if (videoInfo) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [videoInfo, setVideoInfo]);

  if (!videoInfo) {
    return null;
  }

  //const videoUrl = `https://www.youtube.com/embed/${videoInfo[0].videoId}`;
  const videoUrl = `https://www.youtube.com/embed/${videoInfo[0].videoId}`;
  //const videoUrl = 'https://www.youtube.com/embed/4WXs3sKu41I';
  console.log(videoInfo[0].videoId);

  return (
    <div ref={overlayRef} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div ref={modalRef} style={{ position: 'relative' }}>
        <iframe
          src={videoUrl}
          width="640"
          height="360"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

function Earth({ cubeDataAsia }) {
  const earthRef = useRef();
  const textureLoader = new THREE.TextureLoader();
  const earthTexture = textureLoader.load('./Albedo.jpg');
  const diamondRefs = useRef(new Map());

  /*useFrame(() => {
    earthRef.current.rotation.y += 0.001;
  });*/

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

function Atmosphere() {
  return (
    <mesh geometry={new THREE.SphereGeometry(1.02, 64, 64)}>
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

  const pyramid1Ref = useRef();
  const pyramid2Ref = useRef();

  const { setVideoInfo } = useContext(VideoContext);

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
      //console.log(videos);
      console.log(videos);
      setVideos(videos);
      setVideoInfo(videos);
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
        position={[0, 0.001, -0.02]}
        scale={[-1, 1, 0.5]}
        fontSize={0.02}
        color="white"
      >
        {name}
      </Text>
      {/*<ThumbnailBoxes videos={videos} proxyServerUrl="http://localhost:3001" position={conePosition} />*/}
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
  iframe.width = '640';
  iframe.height = '360';
  iframe.allowFullscreen = true;
  const container = document.getElementById('video-container');
  container.appendChild(iframe);
  console.log(videoId);

  window.addEventListener('click', function (event) {
    const iframe = document.querySelector('#video-container iframe');
    if (iframe && !iframe.contains(event.target)) {
      iframe.remove();
    }
  });
}

function App() {

  return (
    <VideoProvider>
      <Canvas style={{ backgroundColor: 'black' }}>
        <ambientLight intensity={5} />
        <pointLight position={[0, 0, 3]} />
        <Atmosphere />
        <Earth cubeDataAsia={cubeDataAsia} cubeDataAmerica={cubeDataAmerica} cubeDataWest={cubeDataWest} />
        <OrbitControls enablePan={false} />
        <Html>
          <div id="video-container"></div>
        </Html>
      </Canvas>
      <VideoModal />
    </VideoProvider>
  );
}

export default App;