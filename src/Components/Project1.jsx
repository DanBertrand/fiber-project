import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import FrontText from "./FrontText";
import { Suspense, useRef } from "react";
import BackText from "./BackText";
import Wall from "./Wall";
import Tree from "./Tree";
import Ground from "./Ground";
import Tree2 from "./Tree2";
import MapleTree from "./MapleTree";
import MapleLeaf1 from "./MapleLeaf1";

const Project1 = () => {
  const wall = useRef();

  return (
    <>
      <Canvas shadows camera={{ position: [-6, 2, 70], fov: 45 }}>
        <hemisphereLight intensity={0.1} />
        <directionalLight
          castShadow
          position={[0, -0.5, 10]}
          intensity={0.4}
          far={1}
          shadow-mapSize-width={360}
          shadow-mapSize-height={360}
          shadow-camera-left={-12}
          shadow-camera-right={12}
        />
        <directionalLight
          castShadow
          position={[0, -0.5, -10]}
          intensity={0.4}
          shadow-mapSize-width={360}
          shadow-mapSize-height={360}
          shadow-camera-left={-12}
          shadow-camera-right={12}
        />

        <Suspense fallback={null}>
          <group ref={wall}>
            <Tree scale={0.6} position={[-10, -4.4, 4]} roughness={0.01} />
            <Tree2 scale={0.6} position={[10, -4.4, -8]} roughness={0.01} />

            <MapleTree scale={55} position={[14, -4.5, 14]} roughness={0.01} />

            <MapleLeaf1
              position={[4, 6, 5]}
              rotationX={Math.random()}
              rotationY={Math.random()}
              positionX={Math.random()}
              positionY={Math.random()}
            />
            <MapleLeaf1
              position={[4, 8, 5]}
              rotationX={Math.random()}
              rotationY={Math.random()}
              positionX={Math.random()}
              positionY={Math.random()}
            />
            <MapleLeaf1
              position={[1, 6, 8]}
              rotationX={Math.random()}
              rotationY={Math.random()}
              positionX={Math.random()}
              positionY={Math.random()}
            />
            <MapleLeaf1
              position={[1, 2, 5]}
              rotationX={Math.random()}
              rotationY={Math.random()}
              positionX={Math.random()}
              positionY={Math.random()}
            />
            <MapleLeaf1
              position={[8, 6, 5]}
              rotationX={Math.random()}
              rotationY={Math.random()}
              positionX={Math.random()}
              positionY={Math.random()}
            />
            <MapleLeaf1
              position={[1, 6, 5]}
              rotationX={Math.random()}
              rotationY={Math.random()}
              positionX={Math.random()}
              positionY={Math.random()}
            />

            <FrontText position={[0, 0, 4]} scale={0.06} color={"orange"} />
            <Wall position={[0, 0, 0]} scale={3} args={[8, 3, 0.15]} />
            <BackText
              position={[0, 0, -4]}
              scale={0.06}
              rotation={[0, Math.PI, 0]}
              color={"orange"}
            />

            <Ground />
          </group>
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </>
  );
};

export default Project1;
