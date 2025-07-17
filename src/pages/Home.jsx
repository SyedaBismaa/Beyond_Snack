import React from "react";
import { motion } from "motion/react"
import SplashCursor from "../componants/SplashCursor";


const Home = () => {
  return (
    <div className="mt-5 relative w-full min-h-[80%]  flex items-center justify-center overflow-hidden text-white font-Helvatica">
      <SplashCursor />
 <div className="imgs h-full ">
  <motion.img
    drag
    dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
    whileHover={{ x:12, y:10, scale: 1.09, cursor:"pointer", border:"black"  }}
     transition={{duration:1.2}}
    className="absolute top-[4rem] left-[4rem] h-[8rem] object-cover z-0 rounded-lg"
    src="Hijab1.webp"
    alt=""
  />
   <motion.img
    drag
    dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
    whileHover={{ x:12, y:10, scale: 1.09,cursor: "pointer" }}
     transition={{duration:1.2}}
    className="absolute top-[4rem] right-[2rem] h-[8rem] object-cover z-0 rounded-lg"
    src="Hijab1.webp"
    alt=""
  />
  <motion.img
    drag
    dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
    whileHover={{x:12, y:10, scale: 1.09, cursor: "pointer" }}
     transition={{duration:1.2}}
    className="absolute top-[2rem] left-[22rem] h-[8rem] object-cover z-0 rounded-lg"
    src="Hijab2.webp"
    alt=""
  />
   <motion.img
    drag
    dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
    whileHover={{x:12, y:10, scale: 1.09, cursor: "pointer" }}
     transition={{duration:1.2}}
    className="absolute top-[2rem] right-[22rem] h-[8rem] object-cover z-0 rounded-lg"
    src="Hijab2.webp"
    alt=""
  />
  <motion.img
    drag
    dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
    whileHover={{x:12, y:10, scale: 1.09, cursor: "pointer" }}
     transition={{duration:1.2}}
    className="absolute top-[17rem] left-[9rem] h-[8rem] object-cover z-0 rounded-lg"
    src="Hijab3.webp"
    alt=""
  />
   <motion.img
    drag
    dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
    whileHover={{x:12, y:10, scale: 1.09, cursor: "pointer" }}
     transition={{duration:1.2}}
    className="absolute top-[17rem] right-[9rem] h-[8rem] object-cover z-0 rounded-lg"
    src="Hijab3.webp"
    alt=""
  />
  <motion.img
    drag
    dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
    whileHover={{x:12, y:10, scale: 1.09, cursor: "pointer" }}
     transition={{duration:1.2}}
    className="absolute top-[14rem] left-[20rem] h-[8rem] object-cover z-0 rounded-lg"
    src="Hijab1.1.webp"
    alt=""
  />
   <motion.img
    drag
    dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
    whileHover={{x:12, y:10, scale: 1.09, cursor: "pointer" }}
     transition={{duration:1.2}}
    className="absolute top-[14rem] right-[20rem] h-[8rem] object-cover z-0 rounded-lg"
    src="Hijab1.1.webp"
    alt=""
  />
  <motion.img
    drag
    dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
    whileHover={{x:12, y:10, scale: 1.09, cursor: "pointer" }}
     transition={{duration:1.2}}
    className="absolute top-[22rem] left-[12rem] h-[8rem] object-cover z-0 rounded-lg"
    src="Hijab2.2webp"
    alt=""
  />
    <motion.img
    drag
    dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
    whileHover={{x:12, y:10, scale: 1.09, cursor: "pointer" }}
     transition={{duration:1.2}}
    className="absolute top-[22rem] right-[12rem] h-[8rem] object-cover z-0 rounded-lg"
    src="Hijab2.2webp"
    alt=""
  />
  <motion.img
    drag
    dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
    whileHover={{x:12, y:10, scale: 1.09, cursor: "pointer" }}
     transition={{duration:1.2}}
    className="absolute top-[24rem] left-[28rem] h-[8rem] object-cover z-0 rounded-lg"
    src="Hijab3.3.webp"
    alt=""
  />
    <motion.img
    drag
    dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
    whileHover={{x:12, y:10, scale: 1.09, cursor: "pointer" }}
     transition={{duration:1.2}}
    className="absolute top-[24rem] right-[28rem] h-[8rem] object-cover z-0 rounded-lg"
    src="Hijab3.3.webp"
    alt=""
  />
  <motion.img
    drag
    dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
    whileHover={{ x:12, y:10, scale: 1.09,cursor: "pointer" }}
     transition={{duration:1.2}}
    className="absolute top-[10rem] left-[42rem] h-[8rem] object-cover z-0 rounded-lg"
    src="Hijab1.2.webp"
    alt=""
  />
</div>

  
      <div className="text-center z-10">
        <h1 className="text-5xl text-gray-900 font-bold tracking-wide">Grace in Every Thread</h1>
        <p className="text-lg text-gray-800 mt-4 max-w-xl mx-auto text-gray-300">
          Discover the art of modern elegance with our exclusive Abaya collection.
        </p>
        <button className="mt-6 px-6 py-2 bg-white bg-gray-900 text-gray-800  rounded-full font-semibold hover:bg-gray-100 transition duration-300">
          Explore Collection
        </button>
      </div>
    </div>
  );
};

export default Home;