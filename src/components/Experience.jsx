import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";

export const Experience = () => {
  return (
    <>
      <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={0.5}
        speed={0.5}
        rotationIntensity={0.5}
      >
        <Book />
      </Float>
      {/* OrbitControls limitados a 10 graus em X, Y e Z */}
      <OrbitControls
  maxPolarAngle={Math.PI / 2 + 0.436} // Limita a rotação no eixo X a 25 graus
  minPolarAngle={Math.PI / 2 - 0.436} // Limita a rotação no eixo X a -25 graus
  maxAzimuthAngle={0.436} // Limita rotação no eixo Y a 25 graus
  minAzimuthAngle={-0.436} // Limita rotação no eixo Y a -25 graus
/>
      <Environment preset="studio" />
      <directionalLight
        position={[2, 5, 2]}
        intensity={0.1}
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

