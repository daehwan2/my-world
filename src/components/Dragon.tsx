import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import React, { useEffect } from "react";

const Dragon = () => {
  const model = useGLTF("./models/dragon/scene.gltf");
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
  return <primitive object={model.scene} castShadow receiveShadow />;
};

export default Dragon;
