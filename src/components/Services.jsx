import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "🌤️", 
      title: "Calculated Weather",
      description: "Get accurate weather forecasts and real-time updates for your travel plans."
    },
    {
      id: 2,
      icon: "✈️", 
      title: "Best Flights",
      description: "Find and book the best flight deals with our comprehensive flight search engine."
    },
    {
      id: 3,
      icon: "🎤", 
      title: "Local Events",
      description: "Discover exciting local events and attractions at your travel destination."
    },
    {
      id: 4,
      icon: "⚙️", 
      title: "Customization",
      description: "Customize your travel experience with personalized recommendations and settings."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-sm text-orange-500 uppercase font-semibold tracking-wider mb-3">
            Category
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We Offer Best Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience exceptional travel services designed to make your journey unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 text-center border border-gray-100"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 h-1 bg-orange-500 rounded-full w-0 group-hover:w-12 transition-all duration-300 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;