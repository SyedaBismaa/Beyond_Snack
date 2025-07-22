import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import './Home.css';

console.log(motion)

const images = [
  'https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Black.png',
  'https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Banana.png',
  'https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Masala.png',
  'https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Black.png',
];

const bgColors = [
  "bg-transparent",
  "bg-transparent",
  "bg-transparent",
  "bg-transparent",
];

const ROTATION_DURATION = 4;

const Home = () => {
  const sectionRef = useRef(null);
  const [imgIndex, setImgIndex] = useState(0);

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
      className='h-[95%] m-5 mt-17 p-3 flex flex-wrap lg:flex-nowrap gap-20 items-center justify-center rounded-lg relative overflow-hidden font-[Helvetica]'
    >

      {/* Left Text Section */}
      <div className="text z-10 max-w-md">
        <motion.h1
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className='text-5xl font-bold mb-4 '
        >
          Enjoy Every Bite of Goodness!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className='text-lg mt-10'
        >
          Crafted from the finest Nendran bananas, our chips bring together
          bold flavors, irresistible crunch, and a commitment to quality.
          Discover the real taste of Kerala — guilt-free and gluten-free.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='text-xl border-2 border px-4 py-2 rounded-full hover:bg-green-300 mt-10 transition duration-300'
        >
          Explore More
        </motion.button>
      </div>

      <div className={`Hero-img h-74 w-74 m-10 p-5 ${bgColors[imgIndex]} border-1 shadow-[0_0_20px_rgba(34,197,94,0.6)] rounded-full flex items-center justify-center overflow-visible relative`}>
        <div className="absolute z-10 border-2 border-gray-500 rounded-full h-[108%] w-[108%] shadow-[0_0_25px_rgba(34,197,94,0.6)] animate-pulse"></div>

        <motion.img
          key={imgIndex}
          src={images[imgIndex]}
          alt="Banana Chips"
          className="h-[115%] w-[115%] object-cover rounded-full z-20"
          animate={{
            rotate: [-15, 15, -15],
            scale: [1.12, 1.19, 1.12],
            y: [-10, 0, -10],
          }}
          transition={{
            rotate: { repeat: Infinity, duration: 5, ease: 'easeInOut' },
            scale: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
            y: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
          }}
          whileHover={{ scale: 1.25 }}
          style={{ transformOrigin: 'center', marginTop: '-2%' }}
        />
      </div>

      <motion.div
        className="texts z-10 max-w-xs"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {[
          {
            title: 'Crunchy ⚡',
            desc: 'Perfectly thin & crispy with every bite — made using vacuum frying for zero sogginess.',
          },
          {
            title: 'Healthy 🌿',
            desc: 'Gluten-free, no added preservatives — just real bananas and real benefits.',
          },
          {
            title: 'Tasty 😋',
            desc: 'Flavored to perfection — classic salted, peri-peri, and more to spice up your snack time.',
          },
        ].map((item, index) => (
          <div key={index} className="crunchy pb-5">
            <h2 className="font-semibold text-2xl">{item.title}</h2>
            <p className="text-xl mt-1 ">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
