import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import treeModel from "../models/mapleTree.glb";

const MapleTree = ({ scale, position, roughness }) => {
  const gltf = useLoader(GLTFLoader, treeModel);

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} scale={scale} position={position} />
    </Suspense>
  );
};

export default MapleTree;
