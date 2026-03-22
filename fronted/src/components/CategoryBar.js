import React from "react";

const CategoryBar = () => {
  const categories = ["Women", "Men", "Boys & Girls", "Fragrances"];

  return (
    <section className="w-full bg-white my-14">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* LEFT */}
        <div>
          <h3 className="text-base md:text-lg font-medium tracking-wide">
            Shop For New Arrival
          </h3>
        </div>

        {/* RIGHT */}
        <div className="flex gap-3 overflow-x-auto md:overflow-visible">
          {categories.map((item, index) => (
            <button
              key={index}
              className="px-5 py-2 rounded-full bg-black text-white text-sm tracking-wide whitespace-nowrap hover:opacity-80 transition duration-300"
            >
              {item}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoryBar;