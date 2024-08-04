import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import turtleGLTF from '../assets/turtle.gltf';

const ProgrammerModel = () => {
  const group = useRef();
  const { nodes, materials } = useGLTF(turtleGLTF);
  useFrame((state) => {
    const { x, y } = state.mouse;
    group.current.rotation.y = x * Math.PI;
    group.current.rotation.x = y * Math.PI;
  });

  if (!nodes || !materials) {
    return null; // or a loading spinner
  }

  // Ensure materials are correctly applied
  return (
    <group ref={group} dispose={null}>
      {Object.keys(nodes).map((key) => (
        <mesh key={key} geometry={nodes[key].geometry} material={materials[key]}>
          {/* Optional: Add additional props or transformations */}
        </mesh>
      ))}
    </group>
  );
};

useGLTF.preload(turtleGLTF);

export default ProgrammerModel;
