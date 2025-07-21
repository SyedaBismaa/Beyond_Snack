import React from "react";
import { motion } from "framer-motion";

// Dynamically import images
import banana from "/public/Banana.png";

const logos = [banana, banana, banana, banana, banana];

const MarqueeRow = ({ direction = "left" }) => {
  const baseAnimation = {
    animate: {
      x: direction === "left" ? ["0%", "-100%"] : ["0%", "100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
   
    <motion.div
      {...baseAnimation}
      className="flex gap-10 min-w-full absolute"
    >
      {[...logos, ...logos].map((logo, i) => (
        <img
          key={i}
          src={logo}
          alt={`logo-${i}`}
          className="h-16 w-auto object-contain"
        />
      ))}
    </motion.div>
  );
};

const ReachUs = () => {
  return (
    <div className="h-[200px] w-full relative overflow-hidden px-4 py-6">
        <h1 className="flex justify-center text-3xl pb-5">Catch us here</h1>
      <div className="absolute top-1/4 w-full">
        <MarqueeRow direction="left" />
      </div>

      <div className="absolute bottom-1/4 w-full">
        <MarqueeRow direction="right" />
      </div>
    </div>
    
  );
};

export default ReachUs;
