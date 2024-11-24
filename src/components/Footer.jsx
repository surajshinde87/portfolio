import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


const Footer = () => {
  return (
    <div className='w-full mt-5 flex items-center justify-center p-10 flex-col'>
         <h1 className='font-gaMaamli text-3xl text-white mb-4'>Suraj Shinde</h1>

             {/* Socials */}
             <div className=" flex items-center gap-4 text-white text-4xl">
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
    </div>
  )
}

export default Footer
