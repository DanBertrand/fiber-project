import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import treeModel from "../models/uploads_files_2551085_tree2.glb";

const Tree2 = ({ scale, position, roughness }) => {
  const gltf = useLoader(GLTFLoader, treeModel);


  if (gltf) {
    gltf.nodes.Cube.castShadow = true;
    gltf.nodes.Cube.receiveShadow = true;
    gltf.nodes.Cube.roughness = { roughness };
  }

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} scale={scale} position={position} />
    </Suspense>
  );
};

export default Tree2;
