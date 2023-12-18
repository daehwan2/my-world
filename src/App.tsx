import { Canvas } from "@react-three/fiber";
import React from "react";
import Element3D from "./Element3D";

function App() {
  return (
    <Canvas
      shadows
      camera={{
        position: [4, 7, 4],
      }}
    >
      <Element3D />
    </Canvas>
  );
}

export default App;
