import React, { useRef } from "react";

const Featured = () => {
  const scrollRef = useRef();

  const items = [
    {
      img: "https://www.junaidjamshed.com/media/wysiwyg/featured55.jpg",
      title: "Unstitched Collection",
      desc: "Explore the latest designs",
    },
    {
      img: "https://www.junaidjamshed.com/media/wysiwyg/featured51.jpg",
      title: "Stitched Collection",
      desc: "Ready to wear styles",
    },
    {
      img: "https://www.junaidjamshed.com/media/wysiwyg/featured53.jpg",
      title: "Luxury Lawn",
      desc: "Premium seasonal fabrics",
    },
    {
      img: "https://www.junaidjamshed.com/media/wysiwyg/featured50.jpg",
      title: "Festive Wear",
      desc: "Perfect for occasions",
    },
    {
      img: "https://www.junaidjamshed.com/media/wysiwyg/featured56.jpg",
      title: "Accessories",
      desc: "Complete your look",
    },
    {
      img: "https://www.junaidjamshed.com/media/wysiwyg/featured56.jpg",
      title: "Fragrances",
      desc: "Signature scents",
    },
    {
      img: "https://www.junaidjamshed.com/media/wysiwyg/featured56.jpg",
      title: "Makeup",
      desc: "Beauty essentials",
    },
    {
      img: "https://www.junaidjamshed.com/media/wysiwyg/featured56.jpg",
      title: "Skincare",
      desc: "Care for your skin",
    },
  ];

  // Scroll functions
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (

    <section className="bg-[#F4E6D9] py-14 relative my-14">
      
      {/* Heading */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 mb-10">
        <h2 className="text-2xl md:text-3xl font-medium tracking-wide">
          Featured Collections
        </h2>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-[1400px] mx-auto">
        
        {/* LEFT BUTTON */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 flex items-center justify-center border border-black bg-white"
        >
          ―
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 flex items-center justify-center border border-black bg-white"
        >
          ―
        </button>

        {/* Scroll Row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-12"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[260px] md:w-[320px] lg:w-[360px] group cursor-pointer"
            >
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[400px] md:h-[500px] lg:h-[560px] object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="mt-4">
                <h3 className="text-base md:text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;