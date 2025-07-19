import React from 'react';
import './Category.css'; 
import { motion } from 'motion/react';
console.log(motion)

const Category = () => {
      const categories = [
        { img: "Hijabs.jpg", text: "Hijabs->" },
        { img: "Abaya.jpg", text: "Abayas" },
        { img: "Kurtis.jpg", text: "Kurtis" },
        { img: "Dress.jpg", text: "Gray Elegance" },

      ];

      return (
        <div className="category-wrapper">
          <h1 className="category-heading">
            Choose from the <span className="highlight">Vibrant</span> category
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
                className="category-item"
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
              >
                <motion.img
                  className="category-img"
                  src={category.img}
                  alt={category.text}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  className="category-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
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




