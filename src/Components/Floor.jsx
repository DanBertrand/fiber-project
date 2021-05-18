import { useRef } from "react";

const Floor = ({ args, position }) => {
  const mesh = useRef();
  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={position}>
      <planeBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color="darkgrey" opacity={0.5} />
    </mesh>
  );
};

export default Floor;
