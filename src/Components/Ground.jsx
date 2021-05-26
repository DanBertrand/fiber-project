import React from "react";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import colorTexture from "../textures/GroundForest008/REGULAR/6K/GroundForest008_COL_6K.jpg";
import normalTexture from "../textures/GroundForest008/REGULAR/6K/GroundForest008_NRM_6K.jpg";
import displacementTexture from "../textures/GroundForest008/REGULAR/6K/GroundForest008_DISP_6K.jpg";
import aoTexture from "../textures/GroundForest008/REGULAR/6K/GroundForest008_AO_6K.jpg";
import roughnessTexture from "../textures/GroundForest008/REGULAR/6K/GroundForest008_GLOSS_6K.jpg";
import { NearestFilter, RepeatWrapping } from "three";

const Ground = ({ args, position, scale }) => {
  const Ground = useRef();

  const [colorMap, normalMap, displacementMap, aoMap, roughnessMap] = useLoader(
    TextureLoader,
    [
      colorTexture,
      normalTexture,
      displacementTexture,
      aoTexture,
      roughnessTexture,
    ]
  );

  // colorMap.offset.set(0.1, 0.1);
  // colorMap.generateMipmaps = false;
  // colorMap.minFilter = NearestFilter;
  // colorMap.magFilter = NearestFilter;

  colorMap.repeat.set(2, 2);
  colorMap.wrapS = RepeatWrapping;
  colorMap.wrapT = RepeatWrapping;

  // normalMap.offset.set(0.1, 0.1);
  // normalMap.generateMipmaps = false;
  // normalMap.minFilter = NearestFilter;
  // normalMap.magFilter = NearestFilter;

  normalMap.repeat.set(2, 2);
  normalMap.wrapS = RepeatWrapping;
  normalMap.wrapT = RepeatWrapping;

  // displacementMap.offset.set(0.1, 0.1);
  // displacementMap.generateMipmaps = false;
  // displacementMap.minFilter = NearestFilter;
  // displacementMap.magFilter = NearestFilter;

  displacementMap.repeat.set(2, 2);
  displacementMap.wrapS = RepeatWrapping;
  displacementMap.wrapT = RepeatWrapping;

  // aoMap.offset.set(0.1, 0.1);
  // aoMap.generateMipmaps = false;
  // aoMap.minFilter = NearestFilter;
  // aoMap.magFilter = NearestFilter;

  aoMap.repeat.set(2, 2);
  aoMap.wrapS = RepeatWrapping;
  aoMap.wrapT = RepeatWrapping;

  // roughnessMap.offset.set(0.1, 0.1);
  // roughnessMap.generateMipmaps = false;
  // roughnessMap.minFilter = NearestFilter;
  // roughnessMap.magFilter = NearestFilter;

  roughnessMap.repeat.set(2, 2);
  roughnessMap.wrapS = RepeatWrapping;
  roughnessMap.wrapT = RepeatWrapping;

  return (
    <mesh
      scale={scale}
      ref={Ground}
      position={[0, -4.4, 0]}
      rotation={[-Math.PI * 0.5, 0, 0]}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" args={[45, 45]} />
      <meshLambertMaterial
        attach="material"
        map={colorMap}
        normalMap={normalMap}
        displacementMap={displacementMap}
        displacementScale={5}
        aoTexture={aoMap}
        lightMapIntensity={2}
        // aoMapIntensity={2}
        // roughness={0.1}
        roughnessMap={roughnessMap}
      />
    </mesh>
  );
};

export default Ground;
