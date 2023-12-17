import { Canvas } from "@react-three/fiber";
import React from "react";
import Floor from "./components/Floor";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import Dragon from "./components/Dragon";
import Desk from "./components/Desk";
import Bed from "./components/Bed";

function App() {
  return (
    <Canvas shadows>
      <OrbitControls />

      <axesHelper scale={10} />

      <Environment preset="sunset" />
      <directionalLight castShadow position={[0, 10, 10]} />
      <Dragon position={[0, 0, 0]} />
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
      <Floor />
    </Canvas>
  );
}

export default App;
