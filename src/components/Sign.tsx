import { Text } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

const Sign = (props: GroupProps & { text: string; refProps?: any }) => {
  const fontPath = "./fonts/Cafe24Ohsquare-v2.0.woff";

  // useFrame((_, delta) => {
  //   ref.current.rotation.y += delta;

  //   console.log(ref.current.rotation.y);
  // });

  return (
    <group {...props} ref={props.refProps}>
      <mesh position={[0, 0.8, 0]}>
        <planeGeometry args={[1.5, 0.5]} />
        <meshStandardMaterial side={THREE.DoubleSide} />

        <Text
          position={[0, 0, 0.01]}
          scale={[0.2, 0.2, 0.2]}
          color="black" // default
          anchorX="center" // default
          anchorY="middle" // default
          font={fontPath}
        >
          {props.text}
        </Text>
      </mesh>

      <mesh position={[0, 0.31, 0]}>
        <boxGeometry args={[0.25, 0.6, 0.08]} />
        <meshStandardMaterial side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Sign;
