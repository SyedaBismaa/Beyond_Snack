import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import "./Home.css";
import Category from "./Category";
import About from "./About";
import Products from "./Products";
import ReachUs from "./ReachUs";
import Footer from "../componants/Footer";

const images = [
  "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Black.png",
  "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Banana.png",
  "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Masala.png",
  "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Black.png",
];

const bgColors = [
  "bg-transparent",
  "bg-transparent",
  "bg-transparent",
  "bg-transparent",
];

const ROTATION_DURATION = 4;

const Home = () => {
  const sectionRef = useRef(null);
  const [imgIndex, setImgIndex] = useState(0);

  // Lenis smooth scroll setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  // Image auto rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, ROTATION_DURATION * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-[Helvetica] w-full overflow-hidden">
      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-center gap-16 px-8 py-12"
      >
        {/* Left Text Section */}
        <div className="max-w-md z-10 text-center lg:text-left">
          <motion.h1
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-5xl font-bold mb-4"
          >
            Enjoy Every Bite of Goodness!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-lg mt-6 leading-relaxed"
          >
            Crafted from the finest Nendran bananas, our chips bring together
            bold flavors, irresistible crunch, and a commitment to quality.
            Discover the real taste of Kerala — guilt-free and gluten-free.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-lg border-2 border-lime-400 px-6 py-3 rounded-full hover:bg-lime-300 hover:text-black mt-8 transition duration-300"
          >
            Explore More
          </motion.button>
        </div>

        {/* Center Image */}
        <div
          className={`Hero-img relative h-72 w-72 ${bgColors[imgIndex]} shadow-[0_0_25px_rgba(34,197,94,0.5)] rounded-full flex items-center justify-center`}
        >
          <div className="absolute z-10 border-2 border-gray-500 rounded-full h-[108%] w-[108%] shadow-[0_0_25px_rgba(34,197,94,0.6)] animate-pulse"></div>

          <motion.img
            key={imgIndex}
            src={images[imgIndex]}
            alt="Banana Chips"
            className="h-[115%] w-[115%] object-cover rounded-full z-20"
            animate={{
              rotate: [-15, 15, -15],
              scale: [1.12, 1.19, 1.12],
              y: [-10, 0, -10],
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" },
              scale: { repeat: Infinity, duration: 4, ease: "easeInOut" },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.25 }}
            style={{ transformOrigin: "center", marginTop: "-2%" }}
          />
        </div>

        {/* Right Text Section */}
        <motion.div
          className="z-10 max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Crunchy ⚡",
              desc: "Perfectly thin & crispy with every bite — made using vacuum frying for zero sogginess.",
            },
            {
              title: "Healthy 🌿",
              desc: "Gluten-free, no added preservatives — just real bananas and real benefits.",
            },
            {
              title: "Tasty 😋",
              desc: "Flavored to perfection — classic salted, peri-peri, and more to spice up your snack time.",
            },
          ].map((item, index) => (
            <div key={index} className="pb-5">
              <h2 className="font-semibold text-2xl">{item.title}</h2>
              <p className="text-lg mt-1">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Category Section */}
      <section className="mt-8">
        <Category />
      </section>
      <section className="mt-8">
        <About />
      </section>
        <section className="mt-8">
        <Products/>
      </section>
         <section className="mt-8">
        <ReachUs/>
      </section>
        <section className="mt-8">
        <Footer/>
      </section>
    </div>
  );
};

export default Home;
