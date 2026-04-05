import React from "react";
import jetstar from "../assets/fly4.webp";
import expedia from "../assets/fly3.webp";
import qantas from "../assets/fly (1).webp";
import alitalia from "../assets/fly (2).webp";

const CTA = () => {
  const partners = [jetstar, expedia, qantas, alitalia];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* PARTNER LOGOS */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mb-16 opacity-80">
          {partners.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="w-60 h-60 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>

        <div className="relative bg-linear-to-r from-purple-50 to-purple-100 rounded-3xl px-6 md:px-16 py-12 md:py-16 text-center overflow-hidden shadow-lg">

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200 rounded-full opacity-40"></div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug max-w-2xl mx-auto mb-8">
            Subscribe to get updates, latest news, and special travel offers
          </h2>

          <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            
            <div className="flex w-full items-center bg-white rounded-lg shadow-sm border border-gray-200 px-4 py-3">
              <span className="text-gray-400 mr-2 text-lg">📧</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none text-sm placeholder-gray-400"
              />
            </div>


            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-400 transition duration-300 font-semibold"
            >
              Subscribe
            </button>
          </form>


          <div className="absolute top-6 right-6 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md text-lg">
            ✈️
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;