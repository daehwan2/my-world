/* eslint-disable react-hooks/exhaustive-deps */
import { useAnimations, useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useEffect } from "react";

const Desk = (props: GroupProps) => {
  const model = useGLTF("./models/desk/scene.gltf");
  const animations = useAnimations(model.animations, model.scene);
  const { actionName } = useControls({
    actionName: {
      value: animations.names[1],
      options: animations.names,
    },
  });

  useEffect(() => {
    const action = animations.actions[actionName];
    action?.stop().fadeIn(0.5).play();

    return () => {
      action?.fadeOut(0.5);
    };
  }, [actionName]);

  return (
    <group castShadow receiveShadow {...props}>
      <primitive object={model.scene} />
    </group>
  );
};

export default Desk;
