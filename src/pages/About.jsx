import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Globe from "../componants/Globe";
import { motion } from "framer-motion";
import "./about.css";

console.log(motion)

const About = () => {
  const globeRef = useRef(null);
  const textRef = useRef(null);

  const [typedText, setTypedText] = useState("");
  const fullText = `In 2020, three friends—Manas Madhu, Jyoti Rajguru, and Gautam Raghuraman—set out to give banana chips the spotlight they truly deserve. 🍌✨ 
  
  Our golden Nendran bananas are sourced from the sun-kissed farms of Kerala and processed with zero human contact—ensuring hygiene and top quality.
  
  At Beyond Snack, we’re on a mission to replace boring snacks with crunchy, flavor-packed banana chips. From classic salted to spicy masala, each chip is crafted with care to deliver the ultimate snacking joy. 🏆`;


  useEffect(() => {
    const lenis = new Lenis({ smooth: true });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    lenis.on("scroll", ({ scroll }) => {
      if (globeRef.current) {
        globeRef.current.rotationAngle = scroll * 0.002;
      }
    });

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const interval = setInterval(() => {
            setTypedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
          }, 20);
        }
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  const images = [
    { src: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Black.png?updatedAt=1753158240885", top: "18%", left: "10%" },
    { src: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Peri-peri.png?updatedAt=1753158662760", top: "40%", left: "17%" },
    { src: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Desi-Masala.png?updatedAt=1753158243092", top: "62%", left: "10%" },
    { src: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/chips-plate.png?updatedAt=1753158241180", top: "77%", left: "40%" },
    { src: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/chips-plate.png?updatedAt=1753158241180", top: "27%", left: "85%" },
  ];

  return (
    <section className="about-section min-h-[90%] px-4 sm:px-8 lg:px-16 py-12 flex items-center">
      <div className="about-wrapper max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 relative">

        <div className=" about-globe relative w-full md:w-[500px] h-[300px] md:h-[500px] z-10">

          <div className="absolute inset-0 z-10">
            <Globe rotationRef={globeRef} />
          </div>
        </div>

        <motion.div
          className="about-text min-w-3xl max-w-3xl z-20 relative text-center md:text-left md:ml-12 lg:ml-20 xl:ml-28 "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className=" about-h1 text-3xl md:text-4xl font-bold mb-6 font-Helvatica">
            About<span className="text-green-500">Beyond</span> Snack
          </h2>
          <p
            ref={textRef}
            className=" about-p text-base leading-relaxed text-justify  word-break:break-word whitespace-pre-wrap"
          >
            {typedText}
          </p>
        </motion.div>


        <motion.div className=" about-imgs absolute inset-0 pointer-events-none z-20">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img.src}
              alt={`Floating ${i}`}
              className="absolute h-full w-full md:h-[5rem] md:w-[5rem] rounded-full object-cover shadow-xl"
              style={{ top: img.top, left: img.left }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
