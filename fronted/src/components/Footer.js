import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white px-4 md:px-10 lg:px-20 py-12 md:py-16 text-gray-800">
      
      

      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-4">Need Help?</h3>

          <div className="flex items-start gap-3 mb-4">
            <FaPhoneAlt className="mt-1 text-sm" />
            <div className="text-sm">
              <p>+922 137 170 445</p>
              <p className="text-gray-500">
                (Mon - Sat: 9:30am - 05:30pm | Sun: 11:30am - 5pm)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <FaEnvelope />
            <p>eshop@junaidjamshed.com</p>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-4">CATALOGUE</h3>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer">Contact Us</li>
            <li className="hover:text-black cursor-pointer">Delivery & Orders</li>
            <li className="hover:text-black cursor-pointer">Returns & Exchanges</li>
            <li className="hover:text-black cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
            <li className="hover:text-black cursor-pointer">Track My Order</li>
            <li className="hover:text-black cursor-pointer">Payment Guide</li>
            <li className="hover:text-black cursor-pointer">Fabric Glossary</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Careers</li>
            <li className="hover:text-black cursor-pointer">Store Addresses</li>
            <li className="hover:text-black cursor-pointer">Corporate</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="font-semibold mb-4">FOLLOW US</h3>
          <div className="flex gap-4 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-gray-600" />
            <FaTwitter className="cursor-pointer hover:text-gray-600" />
          </div>
        </div>

      </div>

{/* Top Logos */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        
        {/* Left Logos */}
        <div className="flex items-center gap-6">
          <img
            src="https://www.junaidjamshed.com/media/wysiwyg/ubl_pay_logo.png"
            alt="UBL"
            className="h-8 object-contain"
          />
          <img
            src="https://www.junaidjamshed.com/media/wysiwyg/Raast_Logo-1.png"
            alt="Raast"
            className="h-8 object-contain"
          />
        </div>

        {/* Right Logos */}
        <div className="flex items-center gap-6">
          <img
            src="https://www.junaidjamshed.com/media/wysiwyg/pci-dss-logo-1.png"
            alt="PCI"
            className="h-8 object-contain"
          />
          <img
            src="https://www.junaidjamshed.com/media/wysiwyg/SSLlogo1.jpeg"
            alt="SSL"
            className="h-8 object-contain"
          />
        </div>
      </div>

    </footer>
  );
};

export default Footer;