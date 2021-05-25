import React from "react";
import { FontLoader } from "three";
import Raleway from "../fonts/Raleway.json";

const FrontText = ({ position, color, rotation, scale }) => {
  const font = new FontLoader().parse(Raleway);

  const text1 = "Viele kleine leute die in".toUpperCase();
  const text2 = "Vielen kleinen orten".toUpperCase();
  const text3 = "Viele kleine dinge tun,".toUpperCase();
  const text4 = "Können das gesicht der welt verändern".toUpperCase();

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
        position={[-72.43147941968631, 0, 0]}
        rotation={rotation}
        receiveShadow
        castShadow
      >
        <textGeometry attach="geometry" args={[text1, textOptions]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
      <mesh
        position={[-64.82084710670225, -10, 0]}
        rotation={rotation}
        receiveShadow
        castShadow
      >
        <textGeometry attach="geometry" args={[text2, textOptions]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
      <mesh
        position={[-69.37245579380547, -20, 0]}
        rotation={rotation}
        receiveShadow
        castShadow
      >
        <textGeometry attach="geometry" args={[text3, textOptions]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
      <mesh
        position={[-125.76339178635322, -30, 0]}
        rotation={rotation}
        receiveShadow
        castShadow
      >
        <textGeometry attach="geometry" args={[text4, textOptions]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </group>
  );
};

export default FrontText;
