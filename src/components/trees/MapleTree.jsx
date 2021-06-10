import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import treeModel from "models/mapleTree.glb";

const MapleTree = ({ scale, position, roughness }) => {
  const mapleTree = useLoader(GLTFLoader, treeModel);

  // if (mapleTree) {
  //   console.log("mapleTree", mapleTree);
  //   console.log("mapleTree Scene", mapleTree.scene);
  // }

  return (
    <Suspense fallback={null}>
      <primitive object={mapleTree.scene} scale={scale} position={position} />
    </Suspense>
  );
};

export default MapleTree;
