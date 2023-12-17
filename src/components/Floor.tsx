import { useTexture } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

const Floor = () => {
  const textures = useTexture({
    map: "./map-images/floor/Substance_Graph_BaseColor.jpg",
    normal: "./map-images/floor/Substance_Graph_Normal.jpg",
    roughness: "./map-images/floor/Substance_Graph_Roughness.jpg",
  });
  return (
    <mesh castShadow receiveShadow rotation-x={THREE.MathUtils.degToRad(90)}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial
        side={THREE.DoubleSide}
        map={textures.map}
        normalMap={textures.normal}
        roughnessMap={textures.roughness}
        roughnessMap-colorSpace={THREE.NoColorSpace}
      />
    </mesh>
  );
};

export default Floor;
