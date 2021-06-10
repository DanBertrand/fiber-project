import React from "react";
import { FontLoader } from "three";
import Raleway from "../../fonts/Raleway.json";

const BackText = ({ position, text, color, rotation, scale }) => {
  const font = new FontLoader().parse(Raleway);

  const text1 = "MANY SMALL PEOPLE WHO IN";
  const text2 = "MANY SMALL PLACES DO";
  const text3 = "MANY SMALL THINGS";
  const text4 = "THAT CAN ALTER THE FACE OF THE WORLD";

  const textOptions = {
    font,
    size: 8,
    height: 1,
    bevelEnabled: true,
    bevelThickness: 3,
    bevelSize: 0.02,
    // bevelOffset: 0.25,
    // bevelSegments: 300,
  };

  return (
    <group scale={scale} position={position}>
      <mesh
        position={[80.5176376518733, 0, 0]}
        rotation={rotation}
        castShadow
        receiveShadow
      >
        <textGeometry attach="geometry" args={[text1, textOptions]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
      <mesh
        position={[67.44339179394206, -11, 0]}
        rotation={rotation}
        castShadow
        receiveShadow
      >
        <textGeometry attach="geometry" args={[text2, textOptions]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
      <mesh
        position={[58.09688874502937, -20, 0]}
        rotation={rotation}
        castShadow
        receiveShadow
      >
        <textGeometry attach="geometry" args={[text3, textOptions]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
      <mesh
        position={[117.10305406884478, -30, 0]}
        rotation={rotation}
        castShadow
        receiveShadow
      >
        <textGeometry attach="geometry" args={[text4, textOptions]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </group>
  );
};

export default BackText;
