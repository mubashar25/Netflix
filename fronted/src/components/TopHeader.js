import React from "react";

const TopHeader = () => {
  return (
    <div className="w-full bg-[#F2F1EE] text-[12px] md:text-[13px] text-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-2 flex items-center justify-between">
        
        {/* LEFT */}
        <div className="flex items-center gap-4 md:gap-6 whitespace-nowrap">
          <a href="#" className="hover:underline">Sign In</a>
          <a href="#" className="hover:underline">Tracking Info</a>
          <a href="#" className="hover:underline">Gifting</a>
        </div>

        {/* CENTER */}
        <div className="hidden md:block text-center flex-1 px-4">
          <p className="truncate">
            Last Order Dates for Pre-Eid Delivery: International & Nationwide 15 Mar | Karachi 17 Mar
          </p>
        </div>

        {/* RIGHT */}
        <div className="whitespace-nowrap text-right font-medium">
          WELCOME TO J.
        </div>

      </div>
    </div>
  );
};

export default TopHeader;