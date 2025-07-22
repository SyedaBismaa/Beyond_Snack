import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import './Home.css';


console.log(motion)

const Home = () => {
  const sectionRef = useRef(null);

  // Smooth scrolling setup using Lenis
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div
      ref={sectionRef}
      className='h-[95%] m-5 mt-17 p-5 flex flex-wrap lg:flex-nowrap gap-10 items-center justify-center rounded-lg relative overflow-hidden'
    >
      {/* Left Text Section */}
      <div className="text z-10 max-w-md">
        <motion.h1
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className='text-5xl font-bold mb-4'
        >
          Enjoy Every Bite of Goodness!
        </motion.h1>
        <p className='text-lg mt-10'>
          Crafted from the finest Nendran bananas, our chips bring together <br />
          bold flavors, irresistible crunch, and a commitment to quality. <br />
          Discover the real taste of Kerala — guilt-free and gluten-free.
        </p>
        <button className='bg-yellow-500 text-black border border-black px-4 py-2 rounded-full hover:bg-green-600 mt-10 transition duration-300'>
          Explore More
        </button>
      </div>

      {/* Center Bowl Video */}
      <div className="Hero-img">
        <video
          className='rounded-full'
          src="Bowl-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Right Feature Texts */}
      <div className="texts z-10 max-w-xs">
        {[
          {
            title: 'Crunchy',
            desc: 'Perfectly thin & crispy with every bite — made using vacuum frying for zero sogginess.',
          },
          {
            title: 'Healthy',
            desc: 'Gluten-free, no added preservatives — just real bananas and real benefits.',
          },
          {
            title: 'Tasty',
            desc: 'Flavored to perfection — classic salted, peri-peri, and more to spice up your snack time.',
          },
        ].map((item, index) => (
          <div key={index} className="crunchy pb-5">
            <h2 className="font-semibold text-xl">{item.title}</h2>
            <p className="text-sm mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
