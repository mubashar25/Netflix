import React from "react";

const EmailInput = () => {
  return (
    <section className="w-full bg-black px-4 md:px-10 lg:px-20 py-14 md:py-20">
      
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-wide mb-4">
          BE THE FIRST
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
          New arrivals. Exclusive previews. First access to sales. Sign up to stay in the know.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Input */}
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:flex-1 px-5 py-3 bg-white text-gray-800 text-sm md:text-base outline-none"
          />

          {/* Button */}
          <button
            type="submit"
            className="px-8 py-3 border border-white text-white text-sm md:text-base font-medium transition duration-300 hover:bg-white hover:text-black"
          >
            SIGN UP
          </button>

        </form>

      </div>
    </section>
  );
};

export default EmailInput;