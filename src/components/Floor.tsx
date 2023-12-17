import React from "react";
import * as THREE from "three";

const Floor = () => {
  return (
    <mesh castShadow receiveShadow rotation-x={THREE.MathUtils.degToRad(90)}>
      <planeGeometry args={[4, 4]} />
      <meshStandardMaterial side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Floor;
