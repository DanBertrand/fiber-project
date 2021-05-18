import { useRef } from "react";

const FloorShadow = ({ args, position }) => {
  const mesh = useRef();
  return (
    <mesh
      ref={mesh}
      rotation={[-Math.PI / 2, 0, 0]}
      position={position}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" args={args} />
      <shadowMaterial attach="material" opacity={0.7} />
    </mesh>
  );
};

export default FloorShadow;
