import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import './Home.css';

const images = [
  "Black.png",
  "Banana.png",
  "Masala.png",
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
      className='h-[95%] m-5 p-5 flex flex-wrap lg:flex-nowrap gap-10 items-center justify-center rounded-lg relative overflow-hidden'
    >
      {/* Left Text */}
      <div className="text z-10 max-w-md">
        <motion.h1
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className='text-5xl font-bold mb-4'
        >
          Enjoy Your Banana Chips!
        </motion.h1>
        <motion.p className='text-lg mt-10'>
          Services designed to enhance your experience and Lorem ipsum <br />
          dolor sit amet consectetur adipisicing elit. <br />
          Deleniti impedit abr.
        </motion.p>
        <button className='bg-yellow-500 text-black border border-black px-4 py-2 rounded-full hover:bg-green-600 mt-10 transition duration-300'>
          Explore More
        </button>
      </div>

      {/* Center Video Bowl */}
      <div className="Hero-img">
        <video
          className='rounded-full'
          src="Bowl-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>

      {/* Right Texts */}
      <div className="texts z-10 max-w-xs">
        <motion.div className="crunchy pb-5">
          <h2>Crunchy</h2>
          <p>Lorem, ipsum. <br />Lorem ipsum dolor sit.</p>
        </motion.div>
        <motion.div className="crunchy pb-5">
          <h2>Healthy</h2>
          <p>Lorem, ipsum. <br />Lorem ipsum dolor sit.</p>
        </motion.div>
        <motion.div className="crunchy pb-5">
          <h2>Tasty</h2>
          <p>Lorem, ipsum. <br />Lorem ipsum dolor sit.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
