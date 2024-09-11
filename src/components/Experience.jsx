import { Environment, Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Euler } from "three";
import { Book } from "./Book";

export const Experience = () => {
  const controlsRef = useRef();

  // Limita a rotação nos eixos X, Y e Z para no máximo 10 graus (~0.1745 radianos)
  useFrame(() => {
    if (controlsRef.current) {
      const maxRotation = 0.1745; // 10 degrees in radians
      const minRotation = -0.1745;

      const { x, y, z } = controlsRef.current.getAzimuthalAngle();
      controlsRef.current.object.rotation.x = Math.max(minRotation, Math.min(maxRotation, x));
      controlsRef.current.object.rotation.y = Math.max(minRotation, Math.min(maxRotation, y));
      controlsRef.current.object.rotation.z = Math.max(minRotation, Math.min(maxRotation, z));
    }
  });

  return (
    <>
      <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={1}
        speed={2}
        rotationIntensity={2}
      >
        <Book />
      </Float>
      <OrbitControls
        ref={controlsRef}
        maxPolarAngle={Math.PI / 2 + 0.1745} // Limita rotação vertical no eixo X
        minPolarAngle={Math.PI / 2 - 0.1745} // Limita rotação vertical no eixo X
      />
      <Environment preset="studio" />
      <directionalLight
        position={[2, 5, 2]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
