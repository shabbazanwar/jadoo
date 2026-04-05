import React from "react";
import tripImg from "../assets/image.png";

const BookingSteps = () => {
  const steps = [
    {
      id: 1,
      color: "bg-yellow-400",
      title: "Choose Destination",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      id: 2,
      color: "bg-orange-400",
      title: "Make Payment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      id: 3,
      color: "bg-blue-500",
      title: "Reach Airport on Selected Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-sm text-orange-500 uppercase font-semibold mb-2 tracking-wide">
            Easy and Fast
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-snug">
            Book Your Next Trip In 3 Easy Steps
          </h2>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start space-x-4">

                <div
                  className={`w-10 h-10 rounded-lg ${step.color} flex items-center justify-center`}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-sm mx-auto">

          <img
            src={tripImg}
            alt="Trip to Greece"
            className="w-full h-52 object-cover"
          />

          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Trip To Greece
            </h3>

            <p className="text-gray-500 text-sm mb-4">
              14–29 June | by Robbin jr.
            </p>

            <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
              <span>📍 Greece</span>
              <span>24 people going</span>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-orange-400 w-[40%]"></div>
            </div>

            <p className="text-xs text-gray-500 mt-2">
              40% completed
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookingSteps;