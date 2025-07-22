import React, { useState } from "react";
import { motion } from "motion/react";

const icons = [
  {
    name: "Banana",
    defaultImg: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Banana.avif",
    hoverImg: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/hover-banana.png",
  },
  {
    name: "No Preservatives",
    defaultImg: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/chemical-free.avif",
    hoverImg: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/hover-chemical.png",
  },
  {
    name: "Non-GMO",
    defaultImg: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/natural.avif",
    hoverImg: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/hover-natural.png",
  },
  {
    name: "No Hand Touch",
    defaultImg: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Touch-free.avif",
    hoverImg: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/hover-touch.png",
  },
  {
    name: "Perfect Crunch",
    defaultImg: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Thin-spicy.avif",
    hoverImg: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/crispy.png",
  },
];

const Process = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="py-16 px-4 mt-6 text-center relative z-10 overflow-hidden">
      {/* Heading Animation */}
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold mb-10 relative z-50"
        animate={{
          scale: [1, 1.1, 1],
          zIndex: [10, 50, 10],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      >
        What <span className="text-red-500 font-bold">Makes</span> {" "}
        Our Chips Uniquly{" "}
        <span className="text-yellow-500 font-bold">Delicious</span>
      </motion.h2>

      {/* Icon Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {icons.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center cursor-pointer relative z-10"
            onMouseEnter={() => setHoverIndex(idx)}
            onMouseLeave={() => setHoverIndex(null)}
            animate={{ x: ["0rem", "0.9rem", "0rem"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.2,
            }}
          >
            <img
              src={hoverIndex === idx ? item.hoverImg : item.defaultImg}
              alt={item.name}
              className="w-[70px] sm:w-[80px] md:w-[90px] object-contain mb-2"
            />
            <p className="text-sm sm:text-base font-medium">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
