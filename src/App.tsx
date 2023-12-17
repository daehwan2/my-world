import { Canvas } from "@react-three/fiber";
import React from "react";
import Floor from "./components/Floor";
import { Environment, OrbitControls } from "@react-three/drei";
import Dragon from "./components/Dragon";

function App() {
  return (
    <Canvas shadows>
      <OrbitControls />

      <axesHelper scale={10} />

      <Environment preset="sunset" />
      <directionalLight castShadow position={[0, 10, 10]} />
      <Dragon />
      <Floor />
    </Canvas>
  );
}

export default App;
