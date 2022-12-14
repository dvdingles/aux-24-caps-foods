/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dav(props) {
  const { nodes, materials } = useGLTF("/4D CAPS FOODS.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano001.geometry}
        material={materials["Material.001"]}
        position={[0.06, 0.18, -0.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano002.geometry}
        material={materials["Material.001"]}
        position={[0.06, 0.18, -0.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano003.geometry}
        material={materials["Material.001"]}
        position={[-0.27, 0.18, -0.26]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto.geometry}
        material={materials["Material.001"]}
        position={[-0.14, -0.03, 0.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.62}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto001.geometry}
        material={materials["Material.001"]}
        position={[-0.28, -0.03, -0.14]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.56}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto002.geometry}
        material={materials["Material.001"]}
        position={[-0.03, -0.02, 0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.65}
      />
      <group position={[0.1, -0.14, -0.11]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom"].geometry}
          material={materials.TQ_ARD_front}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom_1"].geometry}
          material={materials.TQ_ARD_back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom_2"].geometry}
          material={materials.TQ_ARD_edge}
        />
      </group>
      <group position={[0.32, -0.09, 0.17]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom001"].geometry}
          material={materials["TQ_ARD_front.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom001_1"].geometry}
          material={materials["TQ_ARD_back.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom001_2"].geometry}
          material={materials["TQ_ARD_edge.001"]}
        />
      </group>
      <group
        position={[0.11, -0.02, -0.16]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.28}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        position={[0.11, 0.01, 0.06]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.27}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve001_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve001_2.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <group
        position={[0.11, 0.01, 0.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.27}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve001_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve001_2.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/4D CAPS FOODS.gltf");
