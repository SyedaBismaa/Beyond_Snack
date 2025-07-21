// ...existing imports...
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis'
import './ResponsiveHome.css';

console.log("motion", motion);
const images = [
  "Black.png",
  "Banana.png",
  "Masala.png",
];

const bgColors = [
  "bg-black",
  "bg-green-900",
  "bg-blue-700",
];

const ROTATION_DURATION = 6; // seconds

const Home = () => {
  const [imgIndex, setImgIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, ROTATION_DURATION * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={sectionRef}
      className='h-[95%] m-5  p-5 flex gap-29 items-center rounded-lg  relative overflow-hidden'
    >


      <div className="text z-10">
        <motion.h1
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className='text-5xl font-bold mb-4'
        >
          Enjoy Your banana Chips !
        </motion.h1>
        <motion.p className='text-lg  mt-10'>
          services designed to enhance your experience and Lorem ipsubr <br />
          m dolor sit amet consectetur adipisicing elit. <br />
          Deleniti impedit abr.
        </motion.p>
        <button className='bg-yellow-500 text-black border-1 border-black px-4 py-2 rounded-[2rem] hover:bg-green-600 mt-10 transition duration-300'>
          Explore More
        </button>
      </div>

      <div className={`Hero-img h-[60%] w-[25%] ${bgColors[imgIndex]} rounded-full flex items-center justify-center overflow-visible relative transition-colors duration-500`}>
        <div className="absolute z-10 border-3 border-green-00 rounded-full h-[105%] w-[105%] pointer-events-none"></div>
        <motion.img
          key={imgIndex}
          src={images[imgIndex]}
          alt=""
          className="h-[140%] w-[140%] object-cover rounded-full z-20"
          animate={{ rotate: [-40, 40], scale: [1.20, 1] }}
          transition={{ repeat: Infinity, duration: ROTATION_DURATION, ease: "linear" }}
          whileHover={{ scale: 1.19 }}
          style={{ top: '-40%', left: '-40%' }}
        />

        {/* <video className='h-[140%] w-[140%] rounded-full' src="Bowl-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video> */}
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