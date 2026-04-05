import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white px-26 py-4 fixed w-full z-50">
      <div className="flex items-center justify-between">

        <div className="text-2xl font-bold cursor-pointer">
          Jad<span className="text-[#FA9C0F]">oo</span>
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-700">
          {['Destinations', 'Hotels', 'Flights', 'Bookings'].map((item) => (
            <li key={item} className="hover:text-gray-900 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-700 hover:text-gray-900">Login</button>
          <button className="bg-[#FA9C0F] px-4 py-2 rounded hover:bg-opacity-90">
            Sign Up
          </button>
          <select className="border border-gray-300 rounded px-2 py-1">
            <option>EN</option>
            <option>FR</option>
          </select>
        </div>


        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden mt-4 space-y-3 text-gray-700">
          {['Destinations', 'Hotels', 'Flights', 'Bookings', 'Login'].map((item) => (
            <li key={item} className="hover:text-gray-900 cursor-pointer">
              {item}
            </li>
          ))}
          <li>
            <button className="w-full bg-[#FA9C0F] px-4 py-2 rounded hover:bg-opacity-90">
              Sign Up
            </button>
          </li>
          <li>
            <select className="w-full border border-gray-300 rounded px-2 py-1">
              <option>EN</option>
              <option>FR</option>
            </select>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;