'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { Line, useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'



export function Duck(props) {
  const { scene } = useGLTF('/ship_in_clouds.glb')
  const rotationSpeed = 0.2; // You can adjust this value to control rotation speed

  // Use useFrame hook to update rotation
  useFrame((state, delta) => {
    // Multiply delta with rotationSpeed to control the speed of rotation
    scene.rotation.y += delta * rotationSpeed;
  });
  return <primitive object={scene} {...props} />
}

