import React from "react";
import romeImg from "../assets/david-kohler-VFRTXGw1VjU-unsplash.jpg";
import londonImg from "../assets/alex-azabache-W1Y4Y_DBGKw-unsplash.jpg";
import europeImg from "../assets/joss-woodhead-3wFRlwS91yk-unsplash.jpg";

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      image: romeImg,
      location: "Rome, Italy",
      price: "$5.42k",
      duration: "10 Days Trip",
    },
    {
      id: 2,
      image: londonImg,
      location: "London, UK",
      price: "$4.2k",
      duration: "12 Days Trip",
    },
    {
      id: 3,
      image: europeImg,
      location: "Full Europe",
      price: "$15k",
      duration: "28 Days Trip",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-14">
          <p className="text-sm text-orange-500 uppercase font-semibold tracking-wide mb-2">
            Top Selling
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Top Destinations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              <img
                src={destination.image}
                alt={destination.location}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">

                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {destination.location}
                  </h3>
                  <span className="text-gray-600 text-sm">
                    {destination.price}
                  </span>
                </div>

                <div className="flex items-center text-gray-500 text-sm">
                  <span className="mr-2">✈️</span>
                  {destination.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Destinations;