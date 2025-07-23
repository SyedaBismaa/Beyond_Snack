import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeContext } from "../main";

console.log(motion)

const createDropVariant = (delay) => ({
  initial: { y: -50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10,
      delay,
    },
  },
});

const navItemStyle =
  "font-helvetica px-4 py-2 rounded-full transition duration-300 ease-in-out";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full font-helvetica  transition-all duration-300 hover:shadow-xl rounded-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between sm:px-6 lg:px-8 py-4">

        <motion.img
          className="w-20 object-cover rounded-full"
          src="Logo.png"
          alt="Beyond Snacks Logo"
          whileHover={{
            scale: 1.1,
            rotate: 5,
            boxShadow: "0 0 15px rgba(132, 204, 22, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        />

        {/* Mobile Toggle */}
        <motion.button
          className="sm:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
              animate={{ rotate: isMenuOpen ? 180 : 0, scale: isMenuOpen ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
            />
          </svg>
        </motion.button>

        <ul className="hidden sm:flex sm:gap-10 text-lg font-medium">
          {[
            { to: "/Home", text: "Home", delay: 0 },
            { to: "/Category", text: "Category", delay: 0.2 },
            { to: "/about", text: "About", delay: 0.4 },
            { to: "/products", text: "Products", delay: 0.6 },
            { to: "/contact", text: "Contact Us", delay: 0.8 },
          ].map(({ to, text, delay }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${navItemStyle} ${isActive
                  ? "text-lime-500"
                  : "hover:text-lime-500 hover:border-b border-lime-400"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.h3
                variants={createDropVariant(delay)}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.97 }}
              >
                {text}
              </motion.h3>
            </NavLink>
          ))}
        </ul>

        <motion.button
          onClick={toggleTheme}
          className="hidden sm:block px-4 py-2 rounded-full shadow-md transition-all duration-300"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px rgba(37, 204, 22, 0.71)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          {theme === "light" ? "🌞 Light" : "🌙 Dark"}
        </motion.button>
      </div>

      <motion.div
        className={`sm:hidden absolute top-16 right-0 w-3/4 max-w-xs z-50 shadow-2xl ${isMenuOpen ? "block" : "hidden"
          }`}
        initial={{ x: "100%", opacity: 0 }}
        animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <ul className="flex flex-col gap-4 p-6">
          {[
            { to: "/Home", text: "Home", delay: 0 },
            { to: "/Category", text: "Category", delay: 0.1 },
            { to: "/about", text: "About", delay: 0.2 },
            { to: "/contact", text: "Contact", delay: 0.3 },
            { to: "/cart", text: "Favs", delay: 0.4 },
          ].map(({ to, text, delay }) => (
            <NavLink
              key={to}
              to={to}
              onClick={toggleMenu}
              className="text-lg font-medium"
            >
              <motion.h3
                variants={createDropVariant(delay)}
                initial="initial"
                animate="animate"
                whileHover={{
                  scale: 1.05,
                  color: "#4dcc16ff", // lime-500
                }}
                whileTap={{ scale: 0.97 }}
                className={`${navItemStyle} hover:border-b border-lime-400`}
              >
                {text}
              </motion.h3>
            </NavLink>
          ))}
          <motion.button
            onClick={toggleTheme}
            className="text-sm px-4 py-2 rounded-full shadow-md transition-all duration-300"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(132, 204, 22, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === "light" ? "🌞 Light" : "🌙 Dark"}
          </motion.button>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
