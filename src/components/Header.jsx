import React from "react";
import { FaFacebookMessenger } from "react-icons/fa6";


const Header = ({ onContactClick }) => {
  return (
    <header className="w-full text-white py-4 px-6 flex items-center justify-around gap-10">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <a href="/" className="flex items-center space-x-2 font-gaMaamli text-4xl">
      <span>Suraj</span> <span>Shinde</span>
        </a>
      </div>

      {/* Contact Button */}
      <a 
  href="https://wa.me/+918767027809?text=Hi%20there!%20I%20came%20across%20your%20profile%20and%20would%20like%20to%20discuss%20a%20project.%20Can%20we%20chat?" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaFacebookMessenger className="text-3xl text-blue-500 hover:text-blue-700" />
</a>
    </header>
  );
};

export default Header;
