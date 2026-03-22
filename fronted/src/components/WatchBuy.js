import React, { useRef, useState, useEffect } from "react";

const WatchBuy = () => {
  const scrollRef = useRef();
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const videos = [
    "https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/videos/platinum-mobile.mp4",
    "https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/videos/platinum-mobile.mp4",
    "https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/videos/platinum-mobile.mp4",
    "https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/videos/platinum-mobile.mp4",
  ];

  // Handle scroll visibility
  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setShowLeft(el.scrollLeft > 10);
    setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="py-10 bg-white">
      
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-medium mb-10">
        Watch And Buy!
      </h2>

      <div className="relative max-w-[1400px] mx-auto">
        
        {/* LEFT BUTTON */}
        {showLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-black bg-white flex items-center justify-center"
          >
            ←
          </button>
        )}

        {/* RIGHT BUTTON */}
        {showRight && (
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-black bg-white flex items-center justify-center"
          >
            →
          </button>
        )}

        {/* VIDEO ROW */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto scroll-smooth px-6 md:px-12"
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[70%] sm:w-[45%] md:w-[35%] lg:w-[28%]"
            >
              <video
                src={video}
                className="w-full h-[300px] md:h-[380px] lg:h-[420px] object-cover"
                controls
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchBuy;