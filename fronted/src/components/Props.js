import React from "react";

const Props = ({ title, products }) => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-12">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
        {title}
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="group cursor-pointer text-center"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[320px] object-cover transition duration-300 group-hover:opacity-90"
              />
            </div>

            {/* Title */}
            <h3 className="mt-4 text-sm md:text-base font-semibold text-gray-800 transition duration-300 group-hover:text-gray-600">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Props;