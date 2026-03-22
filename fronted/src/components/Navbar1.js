import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const navItems = [
    "SYNCC",
    "Cast & Crew",
    "Women",
    "Men",
    "Boys & Girls",
    "Fragrances",
    "Makeup",
    "Skincare",
  ];

  return (
    <nav className="bg-black text-white w-full">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-700">
        
        {/* LEFT */}
        <div className="flex items-center gap-2 text-sm">
          <img
            src="https://flagcdn.com/w40/pk.png"
            alt="PK"
            className="w-5 h-4 object-cover"
          />
          <span>PK</span>
        </div>

        {/* CENTER LOGO */}
        <div className="hidden md:block text-2xl font-serif tracking-widest">
          J.
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 text-sm">
          <button className="hover:opacity-70">SEARCH</button>
          <button className="hover:opacity-70">CART</button>

          <select className="bg-black border border-gray-600 text-white px-2 py-1 text-sm outline-none">
            <option>PKR</option>
            <option>USD</option>
            <option>AED</option>
          </select>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* NAV LINKS */}
      <div className="hidden md:flex justify-center gap-8 py-4 relative">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setActiveMenu(item)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {/* Link */}
            <button className="uppercase text-sm tracking-wide pb-1 border-b-2 border-transparent group-hover:border-white transition duration-300">
              {item}
            </button>

            {/* DROPDOWN */}
            {activeMenu === item && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-4 w-[700px] bg-white text-black p-6 shadow-lg z-50">
                <div className="grid grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Category 1</h4>
                    <ul className="space-y-1">
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Category 2</h4>
                    <ul className="space-y-1">
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Category 3</h4>
                    <ul className="space-y-1">
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black px-6 pb-6">
          {navItems.map((item, index) => (
            <div key={index} className="py-3 border-b border-gray-700">
              {item}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;