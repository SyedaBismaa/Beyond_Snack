import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full   shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-pastelPurple">Hijabista</h1>

        <ul className="flex gap-6 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-pastelPink underline"
                : "hover:text-pastelPink transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive
                ? "text-pastelPink underline"
                : "hover:text-pastelPink transition"
            }
          >
            Collection
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-pastelPink underline"
                : "hover:text-pastelPink transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-pastelPink underline"
                : "hover:text-pastelPink transition"
            }
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
