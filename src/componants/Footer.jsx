import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-red-400">Beyond Snack</h2>
          <p className="text-sm text-gray-300">
            Premium banana chips crafted with flavor, fun, and crunch in every bite. 
            100% Kerala bananas. 100% addictive.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#products" className="hover:text-white">Products</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <p className="text-sm text-gray-300 mb-4">support@beyondsnack.in</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-400">Instagram</a>
            <a href="#" className="hover:text-red-400">Facebook</a>
            <a href="#" className="hover:text-red-400">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Beyond Snack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
