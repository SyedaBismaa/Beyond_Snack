import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Category from "../pages/Category";
const createDropVariant = (delay) => ({
  initial: { y: -50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      delay,
    },
  },
});
console.log(motion)
const Navbar = () => {
  return (
    <nav className="w-full shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        <img className=" w-[5rem] object-cover " src="Logo.png" alt="" />

        <ul className="flex gap-9 font-medium">
          {/* 1. Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-pastelPink underline" : "hover:text-pastelPink transition"
            }
          >
            <motion.h3
              variants={createDropVariant(0)}
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.1,
                borderBottom: "2px solid #F472B6",
                transition: { duration: 0.3 },
              }}
              className="text-xl"
            >
              Home
            </motion.h3>
          </NavLink>

          {/* 2. Category */}
          <NavLink
            to="Category"
            className={({ isActive }) =>
              isActive ? "text-pastelPink underline" : "hover:text-pastelPink transition"
            }
          >
            <motion.h3
              variants={createDropVariant(0.3)}
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.1,
                borderBottom: "2px solid #F472B6",
                transition: { duration: 0.3 },
              }}
              className="text-xl"
            >
              Category
            </motion.h3>
          </NavLink>

          {/* 3. About */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-pastelPink underline" : "hover:text-pastelPink transition"
            }
          >
            <motion.h3
              variants={createDropVariant(0.6)}
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.1,
                borderBottom: "2px solid #F472B6",
                transition: { duration: 0.3 },
              }}
              className="text-xl"
            >
              About
            </motion.h3>
          </NavLink>

          {/* 4. Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-pastelPink underline" : "hover:text-pastelPink transition"
            }
          >
            <motion.h3
              variants={createDropVariant(0.9)}
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.1,
                borderBottom: "2px solid #F472B6",
                transition: { duration: 0.3 },
              }}
              className="text-xl"
            >
              Contact
            </motion.h3>
          </NavLink>

          {/* 5. Add to fav */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-pastelPink underline" : "hover:text-pastelPink transition"
            }
          >
            <motion.h3
              variants={createDropVariant(1.2)}
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.1,
                borderBottom: "2px solid #F472B6",
                transition: { duration: 0.3 },
              }}
              className="text-xl"
            >
              Favs
            </motion.h3>
          </NavLink>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
