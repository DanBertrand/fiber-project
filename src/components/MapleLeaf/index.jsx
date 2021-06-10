import React, { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { useLoader, useFrame } from "@react-three/fiber";
import colorTexture from "textures/MapleLeaves/ASWEETGUM10.png";
import aoTexture from "textures/MapleLeaves/ASWEETGUM10_oc.jpg";
import { DoubleSide } from "three";

const MapleLeaf1 = ({
  scale,
  position,
  rotationX,
  rotationY,
  positionX,
  positionY,
}) => {
  const leaf = useRef();
  const [colorMap, aoMap] = useLoader(TextureLoader, [colorTexture, aoTexture]);

  useFrame(() => {
    leaf.current.rotation.x += 0.1 * rotationX;
    leaf.current.rotation.y += 0.1 * rotationY;
    leaf.current.position.x -= 0.1 * positionX;
    leaf.current.position.y -= 0.2 * positionY;
  });

  return (
    <mesh
      scale={0.032}
      ref={leaf}
      position={position}
      rotation={[-Math.PI * 0.75, 0, 0]}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" args={[45, 45]} />
      <meshStandardMaterial
        attach="material"
        side={DoubleSide}
        map={colorMap}
        transparent={true}
        aoMap={aoMap}
        color={"red"}
        aoMapIntensity={2}
      />
    </mesh>
  );
};

export default MapleLeaf1;
