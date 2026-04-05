import React from "react";
import user1 from "../assets/diego-hernandez-MSepzbKFz10-unsplash.jpg";
import user2 from "../assets/podmatch-GEnCnYhA1J4-unsplash.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
      image: user1,
    },
    {
      id: 2,
      text: "Shewing met parties gravity husband sex pleased. On to no kind do next feel held walk. Lasted my coming uneasy marked so should.",
      name: "Chris Thomas",
      location: "CEO of Red Button",
      image: user2,
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-sm text-orange-500 uppercase font-semibold mb-3 tracking-wider">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            What People Say About Us.
          </h2>

          <div className="flex mt-8 space-x-3">
            <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-start">

          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md relative z-10">
            <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">
              "{testimonials[0].text}"
            </p>

            <div className="flex items-center space-x-4">
              <img
                src={testimonials[0].image}
                alt={testimonials[0].name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonials[0].name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonials[0].location}
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:block absolute top-12 left-16 bg-white p-6 rounded-2xl shadow-md max-w-sm opacity-80">
            <p className="text-gray-500 mb-5 text-sm leading-relaxed">
              "{testimonials[1].text}"
            </p>

            <div className="flex items-center space-x-3">
              <img
                src={testimonials[1].image}
                alt={testimonials[1].name}
                className="w-10 h-10 rounded-full object-cover"
              />

              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  {testimonials[1].name}
                </h4>
                <p className="text-xs text-gray-400">
                  {testimonials[1].location}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;