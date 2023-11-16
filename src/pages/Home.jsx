import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../components/Loader'
import Island from '../models/island'
import Sky from '../models/sky'
import Plane from '../models/Plane'
import Bird from '../models/Bird'
import { useState } from 'react'

{/* <div className='absolute top-28 left-0 z-10 flex items-center justify-center'>
  POPUP
</div> */}
function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjustIslandForScreenSize = () => {
    let sreenScalle = null;
    let screenPosition =[0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      sreenScalle = [0.9, 0.9, 0.9];
    } else {
      sreenScalle = [1, 1, 1];
    }
    return { sreenScalle, screenPosition , rotation};
  }
  const adjustPlaneForScreeSize = () => {
    let planeScalle, planePosition;
    if (window.innerWidth < 768) {
      planeScalle = [1.5, 1.5, 1.5];
      planePosition = [0, -1.5, 0];
    } else {
      planeScalle = [3, 3, 3];
     planePosition = [0, -4, -4];
    }
    return { planeScalle, planePosition };
  }
  const { sreenScalle, screenPosition, rotation } = adjustIslandForScreenSize();
  const { planeScalle, planePosition } = adjustPlaneForScreeSize();
  return (
    <section className='w-full h-screen relative'>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
      camera={{near :0.1, far:1000}}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={2} />
          <ambientLight intensity={0.5} />
          {/* <pointLight position={[10, 10, 10]} /> */}
          {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
          <hemisphereLight skyColor={'#b1e1ff'} groundColor={'#ffffff'} intensity={1} />
          <Bird/>
          <Sky
          isRotating={isRotating}
          />
          <Island 
            position={screenPosition} 
            scale={sreenScalle} 
            rotation={rotation}
            setIsRotating={setIsRotating}
            isRotating={isRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            planeScalle={planeScalle}
            planePosition={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home