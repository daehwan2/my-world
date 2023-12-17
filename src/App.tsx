import { Canvas } from "@react-three/fiber";
import React from "react";
import Floor from "./components/Floor";
import { Environment, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas shadows>
      <OrbitControls />

      <axesHelper scale={10} />

      <Environment preset="sunset" />
      <Floor />
    </Canvas>
  );
}

export default App;
