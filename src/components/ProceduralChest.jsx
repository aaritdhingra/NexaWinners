import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function ProceduralChest({ isOpen }) {
  const lidRef = useRef();

  useFrame((_, delta) => {
    if (lidRef.current) {
      if (isOpen && lidRef.current.rotation.x > -Math.PI * 0.65) {
        lidRef.current.rotation.x -= delta * 2.5;
      }
    }
  });

  return (
    <group scale={1.8} position={[0, -0.5, 0]}>
      {/* Chest Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.2, 1.1, 1.3]} />
        <meshStandardMaterial color="#3d2514" roughness={0.7} metalness={0.1} />
      </mesh>

      {/* Gold Bands on Base */}
      <mesh position={[-0.8, 0, 0]}>
        <boxGeometry args={[0.15, 1.12, 1.32]} />
        <meshStandardMaterial color="#e5b85c" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[0.8, 0, 0]}>
        <boxGeometry args={[0.15, 1.12, 1.32]} />
        <meshStandardMaterial color="#e5b85c" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Front Keyhole Lock */}
      <mesh position={[0, 0.1, 0.66]}>
        <boxGeometry args={[0.3, 0.35, 0.05]} />
        <meshStandardMaterial color="#8c6734" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Gold Treasure Pile Inside */}
      {isOpen && (
        <group position={[0, 0.2, 0]}>
          <mesh position={[0, 0.1, 0]}>
            <sphereGeometry args={[0.7, 16, 16]} />
            <meshStandardMaterial color="#e5b85c" metalness={0.9} roughness={0.1} emissive="#e5b85c" emissiveIntensity={0.3} />
          </mesh>
          <pointLight position={[0, 0.8, 0]} color="#e5b85c" intensity={3} distance={5} />
        </group>
      )}

      {/* Hinged Lid */}
      <group ref={lidRef} position={[0, 0.55, -0.65]}>
        <mesh position={[0, 0.3, 0.65]}>
          <cylinderGeometry args={[0.66, 0.66, 2.22, 16, 1, false, 0, Math.PI]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#4a2e18" roughness={0.7} />
        </mesh>
        {/* Gold Band on Lid */}
        <mesh position={[-0.8, 0.3, 0.65]}>
          <cylinderGeometry args={[0.68, 0.68, 0.16, 16, 1, false, 0, Math.PI]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#e5b85c" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0.8, 0.3, 0.65]}>
          <cylinderGeometry args={[0.68, 0.68, 0.16, 16, 1, false, 0, Math.PI]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#e5b85c" metalness={0.8} roughness={0.3} />
        </mesh>
      </group>

      {/* Lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#fff8e7" />
      <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#8c6734" />
    </group>
  );
}