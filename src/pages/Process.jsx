import React, { useState } from "react";

const icons = [
  {
    name: "Banana",
    defaultImg: "Banana.avif",
    hoverImg: "hover-banana.png",
  },
  {
    name: "No Preservatives",
    defaultImg: "chemical-free.avif",
    hoverImg: "hover-chemical.png",
  },
  {
    name: "Non-GMO",
    defaultImg: "natural.avif",
    hoverImg: "hover-natural.png",
  },
  {
    name: "No Hand Touch",
    defaultImg: "Touch-free.avif",
    hoverImg: "hover-touch.png",
  },
  {
    name: "Perfect Crunch",
    defaultImg: "Thin-spicy.avif",
    hoverImg: "crispy.png",
  },
];

const Process = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="py-16 px-4  mt-6 text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-10">
        What <span className="text-red-500 font-bold">Makes</span> Our Chips
        Uniquely <span className="text-yellow-500 font-bold">Delicious</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {icons.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 hover:scale-110 cursor-pointer"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <img
              src={hoverIndex === index ? item.hoverImg : item.defaultImg}
              alt={item.name}
              className="w-[70px] sm:w-[80px] md:w-[90px] object-contain mb-2"
            />
            <p className="text-sm sm:text-base font-medium ">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
