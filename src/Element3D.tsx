import { useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import Floor from "./components/Floor";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import Desk from "./components/Desk";
import Bed from "./components/Bed";
import Sign from "./components/Sign";

const Element3D = () => {
  const { camera } = useThree();

  const signRef = useRef<any>();
  const orbitControlRef = useRef<any>();

  return (
    <>
      <OrbitControls ref={orbitControlRef} />
      <axesHelper scale={10} />
      <Environment preset="sunset" />
      <directionalLight castShadow position={[0, 10, 10]} />
      {/* <Dragon position={[0, 0, 0]} /> */}
      <Desk
        scale={0.08}
        position={[0, 0, -4]}
        rotation-y={THREE.MathUtils.degToRad(-90)}
      />
      <Bed
        scale={0.01}
        position={[-4.5, 0, -1]}
        rotation-y={THREE.MathUtils.degToRad(90)}
      />

      <Sign
        text="블로그 가기"
        position={[-4.5, 0, 1]}
        rotation-y={THREE.MathUtils.degToRad(90)}
        onClick={() => {
          window.open(`https://program-note.tistory.com/`);
        }}
      />

      <Sign
        refProps={signRef}
        text="방명록"
        position={[-4.5, 0, 4]}
        rotation-y={THREE.MathUtils.degToRad(90)}
        onClick={() => {
          camera.position.set(0, 3, 4);

          if (signRef.current) {
            const meshPosition = signRef.current.position.clone();
            console.log(meshPosition);
            // camera.lookAt(meshPosition);
            orbitControlRef.current.target.set(
              meshPosition.x,
              meshPosition.y,
              meshPosition.z
            );
          }
        }}
      />
      <Floor />
    </>
  );
};

export default Element3D;
