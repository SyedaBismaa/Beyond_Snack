// Products.jsx
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Products.css';
import { motion, useAnimation } from 'framer-motion';

const products = [
    {
    id: 3,
    name: "Banana Chips Green",
    price: "₹109",
    img: "Banana.png",
    desc: "Fresh green banana chips with a unique flavor.",
  },
  {
    id: 1,
    name: "Banana Chips Classic",
    price: "₹99",
    img: "Banana.png",
    desc: "Crispy, lightly salted banana chips. Perfect for snacking!",
  },
    {
    id: 3,
    name: "Banana Chips Green",
    price: "₹109",
    img: "Banana.png",
    desc: "Fresh green banana chips with a unique flavor.",
  },
  {
    id: 2,
    name: "Masala Banana Chips",
    price: "₹119",
    img: "Masala.png",
    desc: "Spicy and tangy banana chips with a masala twist.",
  },
  {
    id: 3,
    name: "Banana Chips Green",
    price: "₹109",
    img: "Banana.png",
    desc: "Fresh green banana chips with a unique flavor.",
  },
];


const fallingImages = [
  { src: "green-leaf.png", top: "10%", left: "8%" },
  { src: "Chili-flex.png", top: "20%", left: "80%" },
  { src: "Chili-flex.png", top: "60%", left: "5%" },
  { src: "green-leaf2.png", top: "75%", left: "70%" },
  { src: "masala-splash.png", top: "40%", left: "45%" },
  { src: "Chili-flex.png", top: "85%", left: "20%" },
  { src: "Chip.png", top: "15%", left: "30%" },
  { src: "Chip.png", top: "55%", left: "60%" },
  { src: "Chip.png", top: "80%", left: "50%" },
  { src: "green-leaf.png", top: "30%", left: "60%" },
  { src: "masala-splash.png", top: "70%", left: "15%" },
  { src: "masala-splash.png", top: "35%", left: "75%" },
  { src: "Chip.png", top: "60%", left: "85%" },
  { src: "green-leaf2.png", top: "25%", left: "15%" },
  { src: "masala-splash.png", top: "50%", left: "35%" },
];

const fallingVariants = {
  initial: { opacity: 0, y: -40, scale: 0.7 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1.5,
    transition: { delay: 0.2 + i * 0.15, duration: 0.7, type: "spring" }
  }),
  exit: { opacity: 0, y: 40, scale: 0.7, transition: { duration: 0.5 } }
};

const Products = () => {
  const controlsArray = fallingImages.map(() => useAnimation());
  const sectionRef = useRef(null);

  // Scroll-based animation for falling images
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
        if (progress > 0.1 && progress < 1) {
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
    <div className="products-section relative" ref={sectionRef}>
      {/* Falling images randomly arranged */}
      {fallingImages.map((img, i) => (
        <motion.img
          key={i}
          src={img.src}
          alt=""
          className="falling-img pointer-events-none"
          style={{
            position: "absolute",
            top: img.top,
            left: img.left,
            width: "70px",
            zIndex: 1,
            opacity: 0.8,
            userSelect: "none"
          }}
          custom={i}
          variants={fallingVariants}
          initial="initial"
          animate={controlsArray[i]}
        />
      ))}

      <h1 className="products-title text-5xl mb-[1.5rem] font-medium "> Check Out All The Flavoure</h1>
      <p className='mb-10 text-xl  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, esse accusantium? Iure incidunt .</p>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.2}
        navigation
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="product-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-slide">
              <div className="product-img-wrapper">
                <img
                  src={product.img}
                  alt={product.name}
                  className="product-img"
                  loading="lazy"
                  onError={(e) => (e.target.src = "fallback.png")}
                />
              </div>
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-desc">{product.desc}</p>
                <div className="price flex justify-between items-center pt-10">
                  <button
                    className="product-btn"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    Add to Cart
                  </button>
                  <p className="product-price">{product.price}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
