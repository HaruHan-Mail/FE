import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useGLTF, PerformanceMonitor } from '@react-three/drei';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import { BallCollider, RigidBody, Physics, CylinderCollider } from '@react-three/rapier';

THREE.ColorManagement.enabled = true;
const baubleMaterial = new THREE.MeshLambertMaterial({ color: "#FF9933", emissive: "#FF6600" })
const capMaterial = new THREE.MeshStandardMaterial({ metalness: 0.75, roughness: 0.15, color: "#E65C00", emissive: "#CC4C00", envMapIntensity: 20 })
const sphereGeometry = new THREE.SphereGeometry(1, 20, 20)

function Bauble({ vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread }) {
    const { nodes } = useGLTF("/cap.glb")
    const api = useRef()
    useFrame((state, delta) => {
      if (!api.current) return;
      delta = Math.min(0.1, delta)
      try {
        api.current.applyImpulse(
          vec
            .copy(api.current.translation())
            .normalize()
            .multiply({ x: -50 * delta * scale, y: -150 * delta * scale, z: -50 * delta * scale }),
        )
      } catch (error) {
        console.warn('Physics impulse error:', error);
      }
    })
    return (
      <RigidBody linearDamping={0.75} angularDamping={0.15} friction={0.2} position={[r(20), r(20) - 25, r(20) - 10]} ref={api} colliders={false} dispose={null}>
        <BallCollider args={[scale]} />
        <CylinderCollider rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 1.2 * scale]} args={[0.15 * scale, 0.275 * scale]} />
        <mesh castShadow receiveShadow scale={scale} geometry={sphereGeometry} material={baubleMaterial} />
        {nodes?.Mesh_1?.geometry && (
          <mesh castShadow scale={2.5 * scale} position={[0, 0, -1.8 * scale]} geometry={nodes.Mesh_1.geometry} material={capMaterial} />
        )}
      </RigidBody>
    )
  }

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef()
  useFrame(({ mouse, viewport }) => {
    if (!ref.current) return;
    try {
      vec.lerp({ x: (mouse.x * viewport.width) / 2, y: (mouse.y * viewport.height) / 2, z: 0 }, 0.2)
      ref.current?.setNextKinematicTranslation(vec)
    } catch (error) {
      console.warn('Pointer movement error:', error);
    }
  })
  return (
    <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[2]} />
    </RigidBody>
  )
}

const ThreeScene = () => {
  const [isDegraded, setIsDegraded] = useState(false);
  const [baubles, setBaubles] = useState([]);

  useEffect(() => {
    const getBaubleCount = () => (window.innerWidth <= 768 ? 20 : 30);
    
    const newBaubles = [...Array(getBaubleCount())].map(() => ({
      scale: [0.75, 0.75, 1, 1, 1.25][Math.floor(Math.random() * 5)],
    }));
    setBaubles(newBaubles);

    const handleResize = () => {
        const count = getBaubleCount();
        setBaubles(currentBaubles => {
            if (currentBaubles.length !== count) {
                return [...Array(count)].map(() => ({
                    scale: [0.75, 0.75, 1, 1, 1.25][Math.floor(Math.random() * 5)],
                }));
            }
            return currentBaubles;
        });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    
      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}>
        <PerformanceMonitor onDecline={() => setIsDegraded(true)} />
        <ambientLight intensity={1} />
        <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="orange" castShadow shadow-mapSize={[512, 512]} />
        <directionalLight position={[0, 5, -4]} intensity={4} />
        <directionalLight position={[0, -15, -0]} intensity={4} color="orange" />
        <Physics gravity={[0, 0, 0]}>
          <Pointer />
          {baubles.map((props, i) => <Bauble key={i} {...props} />) /* prettier-ignore */}
        </Physics>
        <Environment files="/adamsbridge.hdr" />
        {!isDegraded && (
          <EffectComposer disableNormalPass>
            <N8AO color="#FF6600" aoRadius={2} intensity={1.15} />
          </EffectComposer>
        )}
      </Canvas>
  )
}

export default ThreeScene; 