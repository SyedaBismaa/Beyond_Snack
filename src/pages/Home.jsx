import React from "react";
import { motion } from "motion/react"
import SplashCursor from "../componants/SplashCursor";



const Home = () => {
  return (
    <div className="mt-5 relative w-full min-h-[80%]  flex items-center justify-center overflow-hidden text-white font-Helvatica">
      
      <SplashCursor />
  
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