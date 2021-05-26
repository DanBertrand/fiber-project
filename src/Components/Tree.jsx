import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import treeModel from "../models/uploads_files_2551085_tree.glb";

const Tree = ({ scale, position, roughness }) => {
  const gltf = useLoader(GLTFLoader, treeModel);

  console.log("treeModel", treeModel);

  if (gltf) {
    console.log("tree", gltf.nodes.Cube);
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

export default Tree;
