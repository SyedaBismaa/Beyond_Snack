import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { ThemeContext } from "../main"; // adjust path if needed

console.log(motion);


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

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="w-full shadow-md rounded-full overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between flex-nowrap">
        {/* Logo */}
        <img
          className="w-12 object-cover flex-shrink-0"
          src="Logo.png"
          alt="Logo"
        />

        {/* Navigation Links */}
        <ul className="flex gap-6 font-medium items-center flex-nowrap whitespace-nowrap overflow-x-auto">
          {[
            { path: "/", label: "Home", delay: 0 },
            { path: "/category", label: "Category", delay: 0.3 },
            { path: "/about", label: "About", delay: 0.6 },
            { path: "/contact", label: "Contact", delay: 0.9 },
            { path: "/cart", label: "Favs", delay: 1.2 },
          ].map(({ path, label, delay }) => (
            <li key={label}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `text-base ${
                    isActive
                      ? "text-pastelPink underline"
                      : "hover:text-pastelPink transition"
                  }`
                }
              >
                <motion.h3
                  variants={createDropVariant(delay)}
                  initial="initial"
                  animate="animate"
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    borderBottom: "2px solid #3b8f26ff",
                    transition: { duration: 0.3 },
                  }}
                  className="whitespace-nowrap min-w-fit"
                >
                  {label}
                </motion.h3>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="ml-4 px-4 py-1 text-base rounded-full border border-gray-400 bg-white dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition whitespace-nowrap flex-shrink-0"
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
