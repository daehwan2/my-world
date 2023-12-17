import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import React from "react";

const Bed = (props: GroupProps) => {
  const model = useGLTF("./models/bed/scene.gltf");

  return (
    <group castShadow receiveShadow {...props}>
      <primitive object={model.scene} />
    </group>
  );
};

export default Bed;
