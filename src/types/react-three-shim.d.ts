// src/types/react-three-shim.d.ts

import type * as React from "react";

// --- Minimal shims for @react-three/fiber ---
declare module "@react-three/fiber" {
  export const Canvas: React.FC<any>;
  export function useFrame(callback: any): void;
  export function useThree(): any;

  // simple alias so your ThreeEvent type works
  export type ThreeEvent<T = Event> = T;
}

// --- Minimal shims for @react-three/postprocessing ---
declare module "@react-three/postprocessing" {
  export const EffectComposer: React.FC<any>;
  export function wrapEffect(impl: any): any;
}

// --- Allow JSX tags like <mesh />, <planeGeometry />, etc. ---
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      planeGeometry: any;
      shaderMaterial: any;
      meshBasicMaterial: any;
    }
  }
}

export {};
