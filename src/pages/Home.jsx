import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion';
import Lenis from '@studio-freight/lenis'
import './ResponsiveHome.css';


console.log("motion", motion);
const images = [
  "Black.png",
  "Banana.png",
  "Masala.png",
];

const chipPositions = [
  { top: '5%', left: '10%' },
  { top: '15%', left: '80%' },
  { top: '60%', left: '5%' },
  { top: '75%', left: '70%' },
  { top: '40%', left: '45%' },
];

const bgColors = [
  "bg-black",
  "bg-green-900",
  "bg-blue-700",
];

const ROTATION_DURATION = 6; // seconds

const chipVariants = {
  initial: { opacity: 0, scale: 0.7, z: -200 },
  visible: { opacity: 1, scale: 1, z: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.7, z: 200, transition: { duration: 0.8, ease: "easeIn" } }
};

const Home = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const controlsArray = chipPositions.map(() => useAnimation());
  const sectionRef = useRef(null);
  

  // Lenis smooth scroll setup
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Scroll-based chip animation
  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      // Calculate progress (0 = top of viewport, 1 = bottom of viewport)
      let progress = 1 - Math.max(0, Math.min(1, sectionTop / windowHeight));
      if (sectionBottom < 0 || sectionTop > windowHeight) progress = 0;

      controlsArray.forEach((controls, i) => {
        if (progress > 0.15 && progress < 0.85) {
          controls.start("visible");
        } else {
          controls.start("exit");
        }
      });
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controlsArray]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, ROTATION_DURATION * 1000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={sectionRef}
      className='h-[90%] m-5  p-5 flex gap-29 items-center rounded-lg shadow-lg relative overflow-hidden'
    >
      {/* Animated Chip Images with scroll-based animation */}
      {chipPositions.map((pos, i) => (
        <motion.img
          key={i}
          src="Chip.png"
          alt=""
          className="absolute w-[10rem] z-[1] pointer-events-none"
          style={{ top: pos.top, left: pos.left }}
          variants={chipVariants}
          initial="initial"
          animate={controlsArray[i]}
        />
      ))}

      <div className="text z-10">
        <motion.h1
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className='text-5xl font-bold mb-4'
        >
          Enjoy Your banana Chips !
        </motion.h1>
        <motion.p className='text-lg mb-4'>
          services designed to enhance your experience and Lorem ipsubr <br />
          m dolor sit amet consectetur adipisicing elit. <br />
          Deleniti impedit abr.
        </motion.p>
        <button className='bg-yellow-500 text-black border-1 border-black px-4 py-2 rounded-[2rem] hover:bg-green-600 transition duration-300'>
          Explore More
        </button>
      </div>

      <div className={`Hero-img h-[60%] w-[25%] ${bgColors[imgIndex]} rounded-full flex items-center justify-center overflow-visible relative`}>
        <div className="absolute z-10 border-3 border-green-00 rounded-full h-[110%] w-[110%] pointer-events-none"></div>
        <motion.img 
          key={imgIndex}
          src={images[imgIndex]} 
          alt="" 
          className="h-[130%] w-[130%] object-cover rounded-full z-20"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: ROTATION_DURATION, ease: "linear" }}
          whileHover={{ scale: 1.19 }}
          style={{ top: '-40%', left: '-40%' }}
        />
      </div>

      <div className="texts z-10 ">
        <motion.div 
          className="crunchy pb-5 ">
          <h2 className='font-bold text-xl'>Crunchy</h2>
          <p>Lorem, ipsum. <br />Lorem ipsum dolor sit.</p>
        </motion.div>
        <motion.div 
          className="crunchy pb-5 ">
          <h2 className='font-bold text-xl'>Healthy</h2>
          <p>Lorem, ipsum. <br />Lorem ipsum dolor sit.</p>
        </motion.div>
        <motion.div 
          className="crunchy pb-5 ">
          <h2 className='font-bold text-xl'>Teasty</h2>
          <p>Lorem, ipsum. <br />Lorem ipsum dolor sit.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Home