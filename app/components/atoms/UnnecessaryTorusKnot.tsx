'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function TorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null) // import namespace THREE from @react-three/drei
  useFrame(() => {
    if (meshRef.current === null) return

    meshRef.current.rotation.x += 0.005
    meshRef.current.rotation.y += 0.005
  })
  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[10, 3, 100, 16]} />
      <meshStandardMaterial color={'white'} wireframe />
    </mesh>
  )
}

export default function UnnecessaryTorusKnot() {
  return (
    <Canvas camera={{ position: [0, 0, 40] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <TorusKnot />
    </Canvas>
  )
}
