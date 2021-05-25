import React from "react";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import colorTexture from "../textures/Concrete_Wall_001_SD/Concrete_Wall_001_basecolor.jpg";
import normalTexture from "../textures/Concrete_Wall_001_SD/Concrete_Wall_001_normal.jpg";
import roughnessTexture from "../textures/Concrete_Wall_001_SD/Concrete_Wall_001_roughness.jpg";
import aoTexture from "../textures/Concrete_Wall_001_SD/Concrete_Wall_001_ambient_occlusion.jpg";

const Wall = ({ args, position, scale }) => {
  const mesh = useRef();

  const [colorMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    colorTexture,
    normalTexture,
    roughnessTexture,
    aoTexture,
  ]);

  return (
    <mesh scale={scale} ref={mesh} position={position} receiveShadow castShadow>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoTexture={aoMap}
        aoMapIntensity={2}
      />
    </mesh>
  );
};

export default Wall;
