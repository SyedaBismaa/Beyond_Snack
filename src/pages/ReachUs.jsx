import React from "react";
import { motion } from "framer-motion";

console.log(motion)
const logos = [
  "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Logo.png?updatedAt=1753161411688",
  "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Amazon.webp?updatedAt=1753162389585",
  "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Zepto.png?updatedAt=1753161411522",
  "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/BB.webp?updatedAt=1753162254134",
  "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/JioMart.png?updatedAt=1753161410354",
  "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Flipkart.png?updatedAt=1753161407791",
  "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Instamart.png?updatedAt=1753161407086",
  "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/BB.webp?updatedAt=1753162254134",
  "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Zepto.png?updatedAt=1753161411522",
];

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
      className="flex gap-8 sm:gap-10 md:gap-12 lg:gap-10 min-w-full absolute"
    >
      {[...logos, ...logos].map((logo, i) => (
        <img
          key={i}
          src={logo}
          alt={`logo-${i}`}
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
        />
      ))}
    </motion.div>
  );
};

const ReachUs = () => {
  return (
    <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] overflow-hidden px-6 sm:px-8 md:px-10 py-8 sm:py-10 mt-10">
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-[3rem] sm:mb-[3rem] md:mb-[5rem] text-green-900">
        CATCH <span className="text-yellow-500">US</span> HERE
      </h1>
      <div className="absolute top-[90%] sm:top-[35%] md:top-[33%] w-full">
        <MarqueeRow direction="left" />
      </div>
      <div className="absolute bottom-[38%] sm:bottom-[33%] md:bottom-[31%] w-full">
        <MarqueeRow direction="right" />
      </div>
    </div>
  );
};

export default ReachUs;