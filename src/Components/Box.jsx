import React, { useRef } from "react";

const Box = ({ args, position }) => {
  const mesh = useRef();
  return (
    <mesh ref={mesh} position={position} castShadow>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  );
};

export default Box;
