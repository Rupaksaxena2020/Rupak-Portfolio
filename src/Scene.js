import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/portfolio_scene_baked_final.glb");
  return (
    <group {...props} dispose={null}>
      <group name="CharaterSpot" position={[-0.074, 0, -1.521]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001.geometry}
          material={materials["BlackWood.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001_1.geometry}
          material={materials["BlackCoatSteel.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001_2.geometry}
          material={materials["GrayPlastic.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001_3.geometry}
          material={materials["WhiteSteelScrew.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001_4.geometry}
          material={materials["BlackPlastic.001"]}
        />
      </group>
      <group position={[-0.868, 1.694, -2.038]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_ShelfSM_Shelf1_1.geometry}
          material={materials.lambert2SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry}
          material={materials["795548.001"]}
        />
      </group>
      <group position={[-1.302, 2.071, -1.986]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh001"].geometry}
          material={materials.lambert4SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh001_1"].geometry}
          material={materials["lambert2SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh001_2"].geometry}
          material={materials["lambert3SG.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WawaRug.geometry}
        material={materials.Rug}
        position={[-0.281, 0.009, 0.765]}
      />
      <group
        position={[-0.61, 2.044, -1.958]}
        rotation={[-Math.PI, 0.728, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434900071.geometry}
          material={materials.mat14}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434900071_1.geometry}
          material={materials.mat13}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434900071_2.geometry}
          material={materials["mat12.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434900071_3.geometry}
          material={materials["mat21.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434900071_4.geometry}
          material={materials["mat23.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434900071_5.geometry}
          material={materials.mat11}
        />
      </group>
      <group
        position={[0.215, 0.981, -1.215]}
        rotation={[0, -0.224, 0]}
        scale={0.63}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh425587018.geometry}
          material={materials["mat21.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh425587018_1.geometry}
          material={materials["mat22.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh425587018_2.geometry}
          material={materials["mat9.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh425587018_3.geometry}
          material={materials["mat16.001"]}
        />
      </group>
      <group
        position={[0.454, 0.939, -1.723]}
        rotation={[Math.PI, -1.099, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iMac_1.geometry}
          material={materials.Screen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iMac_1_1.geometry}
          material={materials.ScreenBlack}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iMac_1_2.geometry}
          material={materials.iMacBody}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Comp_Mouse.geometry}
        material={materials["lambert3SG.003"]}
        position={[-0.008, 0, 0.076]}
      />
      <group position={[-0.78, 1.071, -1.61]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh24448074.geometry}
          material={materials["mat9.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh24448074_1.geometry}
          material={materials["mat20.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh24448074_2.geometry}
          material={materials["mat21.005"]}
        />
      </group>
      <group
        position={[-2.019, -0.042, -1.526]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Houseplant_7_1.geometry}
          material={materials["Black.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Houseplant_7_2.geometry}
          material={materials["Brown.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Houseplant_7_3.geometry}
          material={materials["Plant_Green.001"]}
        />
      </group>
      <group
        position={[2.13, -0.081, -1.055]}
        rotation={[-Math.PI, 0.672, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["palm_tree_01-Mesh"].geometry}
          material={materials["795548.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["palm_tree_01-Mesh_1"].geometry}
          material={materials["8BC34A.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["palm_tree_01-Mesh_2"].geometry}
          material={materials["DD9944.001"]}
        />
      </group>
      <group position={[0.089, 0, -0.664]} rotation={[0, -0.35, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh"].geometry}
          material={materials.Office_Cha}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh_1"].geometry}
          material={materials.Office_Cha_1}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        material={materials.Screen}
        position={[0.454, 0.939, -1.723]}
        rotation={[Math.PI, -1.099, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.Floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_1.geometry}
        material={materials.White}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_2.geometry}
        material={materials.Wall}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_3.geometry}
        material={materials.Glass}
      />
    </group>
  );
}

useGLTF.preload("/portfolio_scene_baked_final.glb");


rembrandt

city
