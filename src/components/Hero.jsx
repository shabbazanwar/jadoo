const Hero = () => {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between px-26 py-16"
      style={{ paddingTop: '6rem' }}
    >

      <div className="max-w-xl">
        <p className="text-orange-500 uppercase text-sm font-semibold mb-4">
          Best Destinations Around the World
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Travel, <span className="relative">
            enjoy
            <span className="absolute left-0 bottom-1 w-full h-2 bg-orange-300 -z-10"></span>
          </span> and live a new and full life
        </h1>

        <p className="text-gray-500 mt-6">
          Built Wicket longer admire do barton vanity itself do in it.
          Preferred to sportsmen it engrossed listening. Park gate sell they west hard
          for the.
        </p>


        <div className="flex items-center mt-8 space-x-6">
          <button className="bg-[#FA9C0F] px-6 py-3 rounded shadow hover:bg-yellow-300">
            Find out more
          </button>

          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-10 h-10 flex items-center justify-center bg-red-400 text-white rounded-full">
              ▶
            </div>
            <span className="text-gray-700">Play Demo</span>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-0 flex justify-center md:justify-start">
        <img
          src="/src/assets/hero-img 1.jpg"
          alt="Traveler"
          className="w-96 md:w-125"
        />
      </div>
    </section>
  );
};

export default Hero;