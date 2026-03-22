import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/b/a/banner-234.jpg",
  },
  {
    id: 2,
    image:
      "https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/m/e/men1_22.jpg",
  },
  {
    id: 3,
    image:
      "https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/w/e/website_banner_jewellery_desktop.jpg",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto Slide (like real eCommerce sites)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // 4 sec

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full overflow-hidden">
      
      {/* SLIDES */}
      <div className="relative h-[300px] sm:h-[450px] md:h-[600px] lg:h-[750px] w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow"
      >
        ❮
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow"
      >
        ❯
      </button>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full ${
              current === index ? "bg-black" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;