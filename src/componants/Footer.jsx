import React from "react";
import { motion } from "framer-motion";

console.log(motion);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-20 mt-12 font-Helvatica rounded-lg">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <motion.div
            className="space-y-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-3xl font-extrabold text-red-400 drop-shadow-xl">
              Beyond Snack
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Premium Kerala banana chips crafted with love, delivering flavor,
              fun, and crunch in every bite. 100% authentic. 100% irresistible.
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {["Home", "Products", "About Us", "Contact"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm text-gray-300 mb-4">
              <a
                href="mailto:support@beyondsnack.in"
                className="hover:text-red-400 transition-colors duration-300"
              >
                support@beyondsnack.in
              </a>
            </p>
            <div className="flex space-x-6">
              {[
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/beyondsnacks/",
                },
                {
                  name: "Facebook",
                  href: "https://www.facebook.com/beyondsnack",
                },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/company/beyondsnack/",
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.15, rotate: -2 }}
                  className="text-gray-400 hover:text-red-400 transition-all duration-300"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-300 mb-4">
              Join our newsletter for exclusive offers and updates!
            </p>
            <div className="flex w-full max-w-sm shadow-lg rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <button className="px-4 py-2 bg-red-400 text-white hover:bg-red-500 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>


        <motion.div
          className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Beyond Snack. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
