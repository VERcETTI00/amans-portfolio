import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Box, Torus, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

const FloatingGeometry = ({ position, geometry = 'sphere', color, speed = 1 }: {
  position: [number, number, number]
  geometry?: 'sphere' | 'box' | 'torus'
  color: string
  speed?: number
}) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed
      meshRef.current.rotation.y += 0.015 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3
    }
  })

  const GeometryComponent = () => {
    switch (geometry) {
      case 'box':
        return (
          <Box ref={meshRef} position={position} args={[1, 1, 1]}>
            <MeshDistortMaterial color={color} distort={0.3} speed={2} />
          </Box>
        )
      case 'torus':
        return (
          <Torus ref={meshRef} position={position} args={[0.6, 0.25, 16, 32]}>
            <MeshDistortMaterial color={color} distort={0.4} speed={1.5} />
          </Torus>
        )
      default:
        return (
          <Sphere ref={meshRef} position={position} args={[0.8, 32, 32]}>
            <MeshDistortMaterial color={color} distort={0.5} speed={2} />
          </Sphere>
        )
    }
  }

  return <GeometryComponent />
}

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null!)
  
  const particles = useMemo(() => {
    const temp = new Float32Array(100 * 3)
    for (let i = 0; i < 100; i++) {
      temp.set([
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ], i * 3)
    }
    return temp
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.6} />
    </points>
  )
}

const LoaderScene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
      
      <FloatingGeometry position={[-2, 0, 0]} geometry="sphere" color="#4ecdc4" speed={1.2} />
      <FloatingGeometry position={[2, 0, 0]} geometry="box" color="#45b7d1" speed={0.8} />
      <FloatingGeometry position={[0, 2, 0]} geometry="torus" color="#96ceb4" speed={1.5} />
      <FloatingGeometry position={[0, -2, 0]} geometry="sphere" color="#feca57" speed={0.9} />
      
      <ParticleField />
    </>
  )
}

const Loader3D = () => {
  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="w-full h-full relative">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
        >
          <LoaderScene />
        </Canvas>
        
        {/* Loading text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Loading</h2>
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-accent rounded-full animate-pulse"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '1s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader3D