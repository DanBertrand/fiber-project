import { Canvas } from "@react-three/fiber";
import Box from "./Components/Box";
import Floor from "./Components/Floor";
import FloorShadow from "./Components/FloorShadow";
import { OrbitControls, softShadows } from "@react-three/drei";

function Project1() {
  softShadows();

  return (
    <>
      <Canvas shadows={true} camera={{ position: [0, 1, 10], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <group>
          <Box args={[1, 1, 1]} position={[0, 2, 0]} />
          <FloorShadow args={[10, 10, 10]} position={[0, -1, 0]} />
          <Floor args={[10, 10, 10]} position={[0, -1.02, 0]} />
        </group>
        <OrbitControls autoRotate autoRotateSpeed={6} />
      </Canvas>
    </>
  );
}

export default Project1;
