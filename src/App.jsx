// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componants/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import About from "./pages/About";
import Product from "./pages/Product";
import ContactForm from "./componants/ConatctForm";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  );
};

export default App;
