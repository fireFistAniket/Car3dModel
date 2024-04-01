import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { RepeatWrapping, TextureLoader } from "three";

const FloatingGround = () => {
  const texture = useLoader(
    TextureLoader,
    `${import.meta.env.VITE_PUBLIC_URL}grid-texture.png`
  );

  useEffect(() => {
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.anisotropy = 4;
    texture.repeat.set(30, 30);
    texture.offset.set(0, 0);
  }, [texture]);

  useFrame((state, delta) => {
    let t = state.clock.getElapsedTime() * 0.48;
    texture.offset.set(0, -t);
  });
  return (
    <>
      <mesh rotation-x={-Math.PI * 0.5} position={[0, 0.425, 0]}>
        <planeGeometry args={[35, 35]} />
        <meshStandardMaterial
          color={[1, 1, 1]}
          opacity={0.15}
          map={texture}
          alphaMap={texture}
          transparent
        />
      </mesh>
    </>
  );
};

export default FloatingGround;
