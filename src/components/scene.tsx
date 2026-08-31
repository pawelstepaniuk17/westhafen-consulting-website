"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import * as THREE from "three"

/**
 * A calm, slow-moving particle field rendered from a sphere geometry.
 * No FBO swapping, no noise jitter — just a smooth sinusoidal drift
 * to give an ambient, professional feel without shaking.
 */

const PARTICLE_COUNT = 4000

const renderMaterial = new THREE.ShaderMaterial({
  vertexShader: `
    attribute float aRandom;
    uniform float uTime;
    varying vec3 vColor;
    varying float vAlpha;

    void main() {
      vec3 pos = position;

      // Very slow, smooth sine-based drift (no noise/jitter)
      float t = uTime * 0.08;
      pos.x += sin(pos.y * 2.0 + t) * 0.06;
      pos.y += cos(pos.x * 2.0 + t * 0.7) * 0.06;
      pos.z += sin(pos.z * 1.5 + t * 0.5) * 0.04;

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * mvPosition;

      // Size attenuation
      gl_PointSize = (2.5 + aRandom * 1.5) * (1.0 / -mvPosition.z);

      // Subtle color variation based on position - JHC brand colors (navy to teal)
      float colorMix = (pos.y + 2.0) / 4.0;
      vColor = mix(vec3(0.1, 0.21, 0.36), vec3(0.29, 0.62, 0.7), colorMix);

      // Distance-based fade
      vAlpha = smoothstep(8.0, 2.0, -mvPosition.z) * (0.4 + aRandom * 0.4);
    }
  `,
  fragmentShader: `
    varying vec3 vColor;
    varying float vAlpha;

    void main() {
      // Soft circle
      float d = length(gl_PointCoord - vec2(0.5));
      if (d > 0.5) discard;
      float alpha = smoothstep(0.5, 0.15, d) * vAlpha;
      gl_FragColor = vec4(vColor, alpha);
    }
  `,
  uniforms: {
    uTime: { value: 0 },
  },
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
})

export function Scene() {
  const pointsRef = useRef<THREE.Points>(null!)

  const { positions, randoms } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const randoms = new Float32Array(PARTICLE_COUNT)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Distribute on a sphere + some radial spread
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 1.4 + Math.random() * 1.2

      positions[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      randoms[i] = Math.random()
    }

    return { positions, randoms }
  }, [])

  useFrame((state) => {
    renderMaterial.uniforms.uTime.value = state.clock.elapsedTime

    // Very slow, steady rotation — no per-frame random jitter
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1
    }
  })

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={PARTICLE_COUNT} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-aRandom" count={PARTICLE_COUNT} array={randoms} itemSize={1} />
        </bufferGeometry>
        <primitive object={renderMaterial} attach="material" />
      </points>
      <EffectComposer>
        <Bloom intensity={0.3} luminanceThreshold={0.05} luminanceSmoothing={0.9} height={512} />
      </EffectComposer>
    </>
  )
}
