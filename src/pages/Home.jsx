import React, { useState } from "react";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import logo from "../../public/logo.png"
import { BsBoxArrowRight } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Footer from "../components/Footer";

const Home = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);


  return (
    <div className="w-full bg-gray-900">
    <div className="min-h-screen bg-gray-900 w-full">
      {/* Header */}
      <Header onContactClick={() => setShowContact(true)} />

      {/* Main Content */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-center pt-20 mx-10 gap-5">
  {/* Left Section */}
  <div className="text-white">
    <h1 className="font-bebas text-center text-3xl mb-5">I am Fullstack Developer</h1>
   <Link >
   <button
      onClick={() => setShowAbout(true)}
      className="bg-blue-500 flex items-center text-2xl gap-2 float-right font-bebas text-white px-6 py-2 rounded-lg text-right shadow-md hover:bg-blue-600"
    >
      <span to="/about">About</span> <BsBoxArrowRight />
    </button>
   </Link>
  </div>

  {/* Right Section */}
  <div>
    <img className="h-72 md:h-96" src={logo} alt="Name Logo" />
  </div>
</div>

   
    <button
      onClick={() => {
    setShowProjects(true);
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Scrolls to the top of the page smoothly
  }}
     className="bg-green-500 font-bebas gap-1 text-2xl flex justify-center items-center text-white px-2 py-1 rounded-lg shadow-md hover:bg-green-600 absolute bottom-1 left-1/2 transform -translate-x-1/2"
          >
           My Projects
       <FaArrowDown />
          </button>

          {/* Socials */}
          <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 text-white text-4xl">
  <a href="https://www.linkedin.com/in/suraj-shinde-1039a42ba/" className="hover:text-blue-400 transition-colors">
    <FaLinkedin />
  </a>
  <a href="https://github.com/surajshinde87" className="hover:text-orange-600 transition-colors">
    <FaGithubSquare />
  </a>
  <a href="https://x.com/surajshinde_87?t=3d6jICZkqewRbfx2pF6RRQ&s=09" className="hover:text-gray-600 transition-colors">
    <FaSquareXTwitter />
  </a>
  <a href="https://www.instagram.com/surajshinde_87/" className="hover:text-pink-400 transition-colors">
    <FaInstagramSquare />
  </a>
  <a href="mailto:surajpshinde8767@gmail.com" className="hover:text-blue-400 transition-colors">
  <IoMail />
</a>

</div>

    
  
      {/* Popups */}
      {showAbout && <About onClose={() => setShowAbout(false)} />}
    </div >
  <div className={ showProjects ? "block" : "w-full hidden"}>
  <Projects/>
  <Contact/>
  <Footer/>
  </div>
           </div>
  );
};

export default Home;


