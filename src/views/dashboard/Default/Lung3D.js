import React from 'react';
// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Environment, OrbitControls } from '@react-three/drei';

// import Model from './Model';
import X3D from './X3D';

const Lung3D = () => {
  return (
    // <Canvas>
    //   <Suspense fallback={null}>
    //     <Model />
    //     <OrbitControls />
    //     <Environment preset="park" background />
    //   </Suspense>
    // </Canvas>
    <X3D />
  );
};

export default Lung3D;
