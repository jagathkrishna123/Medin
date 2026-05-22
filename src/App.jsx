import React, { useEffect } from 'react'
import Landingpage from './components/Landingpage'
import Lenis from 'lenis';

const App = () => {

      useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);
  return (
    <div>
      <Landingpage/>
    </div>
  )
}

export default App