import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between sm:px-6 lg:px-8">
        {/* Logo */}
        <img
          className="w-20 object-cover"
          src="Logo.png"
          alt="Logo"
        />

        {/* Hamburger Icon (Mobile) */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Nav Links (Desktop) */}
        <ul className="hidden sm:flex sm:gap-9 text-xl font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
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
              className="nav-link-text"
            >
              Home
            </motion.h3>
          </NavLink>

          <NavLink
            to="/category"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
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
              className="nav-link-text"
            >
              Category
            </motion.h3>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
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
              className="nav-link-text"
            >
              About
            </motion.h3>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
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
              className="nav-link-text"
            >
              Contact
            </motion.h3>
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
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
              className="nav-link-text"
            >
              Favs
            </motion.h3>
          </NavLink>
        </ul>

        {/* Mobile Menu */}
        <motion.div
          className={`sm:hidden absolute top-16 left-0 w-full ${isMenuOpen ? "block" : "hidden"}`}
          initial={{ height: 0, opacity: 0 }}
          animate={
            isMenuOpen
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col gap-4 p-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link-active" : "nav-link"
              }
              onClick={toggleMenu}
            >
              <motion.h3
                variants={createDropVariant(0)}
                initial="initial"
                animate="animate"
                className="mobile-nav-link-text"
              >
                Home
              </motion.h3>
            </NavLink>

            <NavLink
              to="/category"
              className={({ isActive }) =>
                isActive ? "nav-link-active" : "nav-link"
              }
              onClick={toggleMenu}
            >
              <motion.h3
                variants={createDropVariant(0.1)}
                initial="initial"
                animate="animate"
                className="mobile-nav-link-text"
              >
                Category
              </motion.h3>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link-active" : "nav-link"
              }
              onClick={toggleMenu}
            >
              <motion.h3
                variants={createDropVariant(0.2)}
                initial="initial"
                animate="animate"
                className="mobile-nav-link-text"
              >
                About
              </motion.h3>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link-active" : "nav-link"
              }
              onClick={toggleMenu}
            >
              <motion.h3
                variants={createDropVariant(0.3)}
                initial="initial"
                animate="animate"
                className="mobile-nav-link-text"
              >
                Contact
              </motion.h3>
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "nav-link-active" : "nav-link"
              }
              onClick={toggleMenu}
            >
              <motion.h3
                variants={createDropVariant(0.4)}
                initial="initial"
                animate="animate"
                className="mobile-nav-link-text"
              >
                Favs
              </motion.h3>
            </NavLink>
          </ul>
        </motion.div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="hidden sm:block bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none rounded-full"
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;