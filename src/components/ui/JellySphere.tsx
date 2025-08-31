import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { useMousePosition } from '@/hooks/useMousePosition'

// Vertex shader for organic wave displacement
const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uMouseInfluence;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  // Simple noise function
  float noise(vec3 p) {
    return sin(p.x * 10.0) * sin(p.y * 10.0) * sin(p.z * 10.0) * 0.1;
  }
  
  void main() {
    vPosition = position;
    vNormal = normal;
    
    vec3 pos = position;
    
    // Add organic wave displacement
    float wave1 = sin(pos.x * 3.0 + uTime * 2.0) * 0.1;
    float wave2 = sin(pos.y * 4.0 + uTime * 1.5) * 0.08;
    float wave3 = sin(pos.z * 5.0 + uTime * 2.5) * 0.06;
    
    // Add noise for organic feel
    float n = noise(pos * 2.0 + uTime * 0.5) * 0.15;
    
    // Mouse interaction
    vec3 mousePos = vec3(uMouse, 0.0);
    float mouseDist = distance(pos.xy, mousePos.xy);
    float mouseEffect = smoothstep(1.0, 0.0, mouseDist) * uMouseInfluence;
    
    // Combine all effects
    vec3 displacement = normal * (wave1 + wave2 + wave3 + n + mouseEffect * 0.3);
    pos += displacement;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

// Fragment shader for black and white gradient
const fragmentShader = `
  varying vec3 vPosition;
  varying vec3 vNormal;
  uniform float uTime;
  
  void main() {
    // Create gradient based on world position
    float gradient = (vPosition.y + 1.0) * 0.5;
    
    // Add some noise for organic variation
    float noise = sin(vPosition.x * 10.0 + uTime) * sin(vPosition.z * 8.0 + uTime * 0.8) * 0.1;
    gradient += noise;
    
    // Smooth the gradient
    gradient = smoothstep(0.2, 0.8, gradient);
    
    // Create strong black to white gradient
    vec3 color = mix(vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0), gradient);
    
    // Add subtle rim lighting
    float rim = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
    rim = smoothstep(0.6, 1.0, rim);
    color += rim * 0.3;
    
    gl_FragColor = vec4(color, 1.0);
  }
`

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const mousePosition = useMousePosition()
  
  // Debug: Log component mount
  React.useEffect(() => {
    console.log('JellySphere: AnimatedSphere mounted')
    console.log('JellySphere: Mouse position:', mousePosition)
  }, [])
  
  // Create shader material with debugging
  const shaderMaterial = useMemo(() => {
    console.log('JellySphere: Creating shader material')
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uMouseInfluence: { value: 0.3 }
      },
      transparent: false,
      side: THREE.FrontSide,
      wireframe: false,
    })
  }, [])
  
  useFrame((state) => {
    if (meshRef.current) {
      // Update time for animation
      shaderMaterial.uniforms.uTime.value = state.clock.getElapsedTime()
      
      // Convert mouse position to normalized coordinates (-1 to 1)
      const normalizedMouse = new THREE.Vector2(
        (mousePosition.x / window.innerWidth) * 2 - 1,
        -(mousePosition.y / window.innerHeight) * 2 + 1
      )
      
      shaderMaterial.uniforms.uMouse.value = normalizedMouse
      
      // Gentle rotation
      meshRef.current.rotation.y += 0.002
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.05
    }
  })
  
  return (
    <Sphere ref={meshRef} args={[2.5, 32, 32]} position={[0, 0, 0]}>
      <primitive object={shaderMaterial} />
    </Sphere>
  )
}

const JellySphere = () => {
  React.useEffect(() => {
    console.log('JellySphere: Component mounted')
  }, [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%'
        }}
        onCreated={() => console.log('JellySphere: Canvas created')}
        onError={(error) => console.error('JellySphere: Canvas error:', error)}
      >
        <ambientLight intensity={1.0} />
        <directionalLight position={[5, 5, 5]} intensity={1.0} />
        <pointLight position={[0, 0, 5]} intensity={0.5} />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}

export default JellySphere