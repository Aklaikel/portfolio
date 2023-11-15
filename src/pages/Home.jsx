import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../components/Loader'
import Island from '../models/island'
import Sky from '../models/sky'

{/* <div className='absolute top-28 left-0 z-10 flex items-center justify-center'>
  POPUP
</div> */}
function Home() {
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
  const { sreenScalle, screenPosition, rotation } = adjustIslandForScreenSize();
  return (
    <section className='w-full h-screen relative'>
      <Canvas className='w-full h-screen bg-transparent' 
      camera={{near :0.1, far:1000}}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={2} />
          <ambientLight intensity={0.5} />
          {/* <pointLight position={[10, 10, 10]} /> */}
          {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
          <hemisphereLight skyColor={'#b1e1ff'} groundColor={'#ffffff'} intensity={1} />
          <Sky/>
          <Island 
          position={screenPosition} 
          scale={sreenScalle} 
          rotation={rotation}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home