import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

console.log("motion", motion);
const images = [
  "Black.png",
  "Banana.png",
  "Masala.png"
];

const ROTATION_DURATION = 5; // seconds

const Home = () => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, ROTATION_DURATION * 1000); // change after each rotation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-[90%] m-5 bg-gray-300 p-5 flex gap-29 items-center rounded-lg shadow-lg'>
      <div className="text">
        <h1 className='text-5xl font-bold mb-4'>Enjoy Your banana Chips !</h1>
        <p className='text-lg mb-4'> services designed to enhance your experience and Lorem ipsubr <br /> m dolor sit amet consectetur adipisicing elit. <br />Deleniti impedit abr
          .</p>
        <button className='bg-yellow-500 text-black px-4 py-2 rounded-[1rem] hover:bg-green-600 transition duration-300'>
          Explore More
        </button>
      </div>
       <div className="Hero-img h-[60%] w-[25%] bg-yellow-500 rounded-full flex items-center justify-center overflow-visible relative">
        
        <div className="absolute z-10 border-3 border-green-600 rounded-full h-[110%] w-[110%] pointer-events-none"></div>
       
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

      <div className="texts ">
          <div className="crunchy pb-5 ">
          <h2 className='font-bold text-xl'>Crunchy</h2>
        <p>Lorem, ipsum. <br />Lorem ipsum dolor sit.</p>
        </div>
          <div className="crunchy pb-5 ">
          <h2 className='font-bold text-xl'>Healthy</h2>
        <p>Lorem, ipsum. <br />Lorem ipsum dolor sit.</p>
        </div>
          <div className="crunchy pb-5 ">
          <h2 className='font-bold text-xl'>Teasty</h2>
        <p>Lorem, ipsum. <br />Lorem ipsum dolor sit.</p>
        </div>

      </div>
    </div>
  )
}

export default Home