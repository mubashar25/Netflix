import React from "react";

const Skincare = () => {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-12 md:py-16">
      
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-8 md:mb-12">
        Skincare
      </h2>

      {/* Desktop Video */}
      <div className="hidden md:block w-full">
        <video
          className="w-full h-auto object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/videos/LA-Protection-2025-web.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Mobile Video */}
      <div className="block md:hidden w-full">
        <video
          className="w-full h-auto object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/videos/LA-Protection-2025-mobile.mp4"
            type="video/mp4"
          />
        </video>
      </div>

    </section>
  );
};

export default Skincare;