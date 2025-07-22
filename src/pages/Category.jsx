// ...existing imports...
import React, { useRef, useEffect } from 'react';
import './Category.css'; 
import { motion, useAnimation } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

console.log(motion)

const chipPositions = [
  { top: '5%', left: '10%' },
  { top: '15%', left: '80%' },
  { top: '60%', left: '5%' },
  { top: '75%', left: '70%' },
  { top: '40%', left: '45%' },
];

const chipVariants = {
  initial: { opacity: 0, scale: 0.7, z: -200 },
  visible: { opacity: 1, scale: 1, z: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.7, z: 200, transition: { duration: 0.8, ease: "easeIn" } }
};

const Category = () => {
  const categories = [
    { img: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/salt-black-bg.webp?updatedAt=1753158660682", text: "Salt-Black-Paper" },
    { img: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/peri-peri-bg.png?updatedAt=1753158662697", text:"Peri-Peri" },
    { img: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Desi-masala-bg.webp?updatedAt=1753158244383", text: "Masala" },
    { img: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Original-style-bg.webp?updatedAt=1753158661005", text: "Original" },
    { img: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/sauce-creame.webp?updatedAt=1753158660754", text: "Sauce" },
  ];

  // Chip animation controls
  const controlsArray = chipPositions.map(() => useAnimation());
  const sectionRef = useRef(null);

  // Lenis smooth scroll setup
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Scroll-based chip animation
  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      let progress = 1 - Math.max(0, Math.min(1, sectionTop / windowHeight));
      if (sectionBottom < 0 || sectionTop > windowHeight) progress = 0;

      controlsArray.forEach((controls, i) => {
        if (progress > 0.15 && progress < 0.85) {
          controls.start("visible");
        } else {
          controls.start("exit");
        }
      });
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controlsArray]);

  return (
    <div ref={sectionRef} className="category-wrapper relative ">
      {/* Chip Images with scroll-based animation */}
      {chipPositions.map((pos, i) => (
        <motion.img
          key={i}
          src="https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Chip.png?updatedAt=1753170610263"
          alt=""
          className="absolute w-[10rem] z-[1] pointer-events-none"
          style={{ top: pos.top, left: pos.left }}
          variants={chipVariants}
          initial="initial"
          animate={controlsArray[i]}
        />
      ))}

      <h1
      
        className="text-center text-4xl sm:text-5xl md:text-6xl font-[Helvetica] font-medium tracking-tight"
      >
        View Our <motion.span
  className="text-green-500 inline-block"
  animate={{ x: [0, 16, 0] }} // 1rem = 16px
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  BEST
</motion.span> Sellers
      </h1>
      <motion.div
        className="category-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="category-item category-img-hover-group"
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            style={{ position: "relative", overflow: "hidden" }}
          >
            <motion.img
              className="category-img"
              src={category.img}
              alt={category.text}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              style={{ display: "block", width: "100%" }}
            />
            <motion.div
              className="category-text"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1.5rem",
                pointerEvents: "none",
                background: "none",
                textShadow: "0 2px 8px rgba(0,0,0,0.5)",
              }}
            >
              {category.text}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Category;