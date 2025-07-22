import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-20 mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4 transform transition-transform hover:scale-105">
            <h2 className="text-3xl font-extrabold text-red-400 tracking-tight">Beyond Snack</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Premium Kerala banana chips crafted with love, delivering flavor, fun, and crunch in every bite. 
              100% authentic. 100% irresistible.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {["Home", "Products", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
            <p className="text-sm text-gray-300 mb-4">
              <a href="mailto:support@beyondsnack.in" className="hover:text-red-400 transition-colors duration-300">
                support@beyondsnack.in
              </a>
            </p>
            <div className="flex space-x-6">
              {[
                { name: "Instagram", href: "https://www.instagram.com/beyondsnacks/" },
                { name: "Facebook", href: "https://www.facebook.com/beyondsnack" },
                { name: "LinkedIn", href: "https://www.linkedin.com/company/beyondsnack/" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-red-400 transform hover:scale-110 transition-all duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-sm text-gray-300 mb-4">Join our newsletter for exclusive offers and updates!</p>
            <div className="flex w-full max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm text-gray-900 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <button className="px-4 py-2 bg-red-400 text-white rounded-r-md hover:bg-red-500 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Beyond Snack. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;