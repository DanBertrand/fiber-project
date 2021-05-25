import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import FrontText from "./FrontText";
import { Suspense } from "react";
import BackText from "./BackText";
import Wall from "./Wall";

const Project1 = () => {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 20], fov: 45 }}>
        <hemisphereLight intensity={0.05} />
        <directionalLight
          castShadow
          position={[0, -0.5, 5]}
          intensity={0.45}
          far={0.1}
          shadow-mapSize-width={720}
          shadow-mapSize-height={720}
          shadow-camera-left={-10}
          shadow-camera-right={10}
        />
        <directionalLight
          castShadow
          position={[0, -0.5, -5]}
          intensity={0.45}
          shadow-mapSize-width={360}
          shadow-mapSize-height={360}
          shadow-camera-left={-10}
          shadow-camera-right={10}
        />

        <Suspense fallback={null}>
          <FrontText position={[0, 0, 4]} scale={0.06} color={"orange"} />

          <Wall position={[0, 0, 0]} scale={3} args={[6, 3, 0.15]} />
          <BackText
            position={[0, 0, -4]}
            scale={0.06}
            rotation={[0, Math.PI, 0]}
            color={"orange"}
          />
        </Suspense>

        <OrbitControls autoRotate />
      </Canvas>
    </>
  );
};

export default Project1;
