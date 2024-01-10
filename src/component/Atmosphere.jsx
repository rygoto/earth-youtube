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