import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const images = [
    "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Desi-masala-bg.webp?updatedAt=1753158244383",
    "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Original-style-bg.webp?updatedAt=1753158661005",
    "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/peri-peri-bg.png?updatedAt=1753158662697",
    "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/salt-black-bg.webp?updatedAt=1753158660682",
    "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/sauce-creame.webp?updatedAt=1753158660754",
  ];

  return (
    <section className="min-h-[70vh] flex flex-col lg:flex-row items-center justify-center px-5 lg:px-16 py-7 transition-colors duration-500 bg-transparent font-[Helvetica]">
      {/* ---------- LEFT: TEXT + IMAGES ---------- */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mb-12 lg:mb-0"
      >
        <h2 className="text-2xl lg:text-4xl font-bold mb-4">
          Let’s Connect & Crunch Together 🥔✨
        </h2>
        <p className=" max-w-md mb-10 leading-relaxed">
          Have questions, feedback, or ideas?  
          We’re here to make your snacking experience even better — drop us a
          message, and let’s talk over a pack of banana chips!
        </p>

        <div className="flex flex-wrap gap-5 items-center justify-center lg:justify-start">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt="Banana Chips"
              className="h-24 w-24 object-contain rounded-2xl shadow-lg border border-gray-300/20 dark:border-gray-600/30 hover:scale-110 transition-transform duration-300"
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* ---------- RIGHT: FORM ---------- */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 w-full max-w-lg  backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-gray-300/30 dark:border-gray-600/30"
      >
        <h3 className="text-3xl font-bold text-center mb-6">
          Contact Us
        </h3>
        <p className="text-center mb-8">
          We’d love to hear from you — fill out the form below and we’ll get back soon.
        </p>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block font-medium mb-2 ">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-400/40 dark:border-gray-500/40 focus:ring-2 focus:ring-lime-400 dark:focus:ring-lime-500 outline-none transition-all"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-2 text-gray-800 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-400/40 dark:border-gray-500/40 focus:ring-2 focus:ring-lime-400 dark:focus:ring-lime-500 outline-none transition-all "
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-medium mb-2 ">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-400/40 dark:border-gray-500/40 focus:ring-2 focus:ring-lime-400 dark:focus:ring-lime-500 outline-none resize-none transition-all"
              required
            ></textarea>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 font-semibold rounded-xl bg-lime-500  dark:bg-lime-600 hover:bg-lime-600 dark:hover:bg-lime-500 transition-all shadow-md"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
