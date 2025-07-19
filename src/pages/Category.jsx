import React from 'react';
import './Category.css'; 
import { motion } from 'motion/react';
console.log(motion)

const Category = () => {
  const categories = [
    { img: "salt-black-bg.webp", text: "Salt-Black-Paper" },
    { img: "peri-peri-bg.png", text:"Peri-Peri" },
    { img: "Desi-masala-bg.webp", text: "Masala" },
    { img: "Original-style-bg.webp", text: "Original" },
    { img: "sauce-creame.webp", text: "Sauce" },
  ];

  return (
    <div className="category-wrapper">
      <h1 className="category-heading">
        View Our <span className="highlight">Best</span> Sellers
      </h1>
      <motion.div
        className="category-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="category-item category-img-hover-group"
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            style={{ position: "relative", overflow: "hidden" }}
          >
            <motion.img
              className="category-img"
              src={category.img}
              alt={category.text}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              style={{ display: "block", width: "100%" }}
            />
            <motion.div
              className="category-text"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1.5rem",
                pointerEvents: "none",
                background: "none",
                textShadow: "0 2px 8px rgba(0,0,0,0.5)",
              }}
            >
              {category.text}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Category;