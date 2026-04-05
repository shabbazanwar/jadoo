import React from "react";
import googlePlay from "../assets/play-store-logo-nisi-filters-australia-11.png";
import appStore from "../assets/apple-app-store-appstore-icon-png-image-purepng-transparent-4.png"; // add this image

const Footer = () => {
  return (
    <footer className="bg-white py-20 px-4 md:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Jadoo<span className="text-orange-500">.</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">
            Company
          </h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-orange-500 transition">About</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Careers</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Mobile</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-orange-500 transition">Help / FAQ</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Press</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Affiliates</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">
            More
          </h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-orange-500 transition">Airlinefees</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Airline</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Low fare tips</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">
            Discover our app
          </h3>

          <div className="flex space-x-3 mb-6">
            {["F", "I", "T"].map((icon, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600 hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer hover:scale-110"
              >
                {icon}
              </div>
            ))}
          </div>

          <div className="flex space-x-3">
            <img
              src={googlePlay}
              alt="Google Play"
              className="h-10 object-contain hover:scale-105 transition"
            />
            <img
              src={appStore}
              alt="App Store"
              className="h-10 object-contain hover:scale-105 transition"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-100 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          All rights reserved © jadoo.co
        </p>
      </div>
    </footer>
  );
};

export default Footer;