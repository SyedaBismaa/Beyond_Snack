import React from "react";
import { motion } from "framer-motion";

const PCard = (props) => {
 
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white/10 backdrop-blur-md border border-gray-300/40 shadow-[0_0_25px_rgba(34,197,94,0.3)] rounded-2xl p-5 flex flex-col items-center justify-between w-72 hover:shadow-[0_0_35px_rgba(132,204,22,0.6)] transition-all duration-300"
    >
      {/* Product Image */}
      <motion.img
        src={props.img}
        className="rounded-xl object-cover h-48 w-full mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />

      {/* Flavor & Price */}
      <div className="text-center">
        <h2 className="text-xl font-semibold">
          {props.name}
        </h2>
        <p className="text-lg text-lime-600 font-bold mt-1">{props.price}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-5">
        <motion.button
          
          whileHover={{
            scale: 1.1,
            backgroundColor: "#84cc16",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 border border-lime-400 rounded-full font-medium transition-all duration-300"
        >
          Buy Now
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "#facc15",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 border border-yellow-400 rounded-full font-medium transition-all duration-300"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PCard;
