import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

function SilkBlob({ position, color, speed, scale }) {
    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere args={[1, 64, 64]} position={position} scale={scale}>
                <MeshDistortMaterial
                    color={color}
                    envMapIntensity={0.4}
                    clearcoat={0.8}
                    clearcoatRoughness={0.1}
                    metalness={0.1}
                    distort={0.4}
                    speed={2}
                />
            </Sphere>
        </Float>
    );
}

export default function ThreeBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none bg-stone-50">
            <Canvas camera={{ position: [0, 0, 8] }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} color="#fff0f5" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#pink" />

                {/* Large "Silk" Blobs - Elegant and Organic */}
                <SilkBlob position={[-3, 1, -2]} color="#EAE0D5" speed={1.5} scale={1.8} />
                <SilkBlob position={[4, -1, -3]} color="#F5D0D0" speed={1.2} scale={2.2} />
                <SilkBlob position={[1, 3, -5]} color="#D48C92" speed={1} scale={1.5} />
                <SilkBlob position={[-4, -3, -4]} color="#C07078" speed={1.8} scale={1.2} />
            </Canvas>
        </div>
    );
}
