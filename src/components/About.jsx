import { RiCloseLargeFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const About = ({ onClose }) => {
    return (
  <section className="bg-slate-800  flex flex-col items-center fixed inset-0 lg:m-20 m-5 rounded-3xl lg:p-10 p-2  lg:mx-40 h-[90vh] md:h-[80vh] lg:h-auto">
<h1 className="font-bebas text-3xl text-white">About</h1> 
<div className=" flex items-center flex-col md:flex-row w-full">
  <div className="left md:w-[98vw] lg:w-1/2 p-4 text-white">
<p className="lg:text-xl ">I am a dedicated and versatile Full-Stack Developer with a passion for building efficient and impactful web applications. I specialize in creating seamless digital experiences, from designing intuitive user interfaces to developing robust and scalable backend systems. My expertise lies in transforming ideas into fully functional, user-focused solutions that drive results.</p>
  </div>
  <div className="right lg:w-1/2">
  <div className="flex flex-wrap gap-3">
  {["JavaScript", "React.js", "Node.js", "HTML", "CSS", "Tailwind CSS", "Python", "MongoDB", "Express.js", "Git", "Bootstrap", "Github",].map((skill, index) => (
    <span 
      key={index} 
      className="rounded-lg  lg:text-xl px-4 py-2 bg-gray-200 text-gray-800 font-medium hover:bg-blue-500 hover:text-white transition-colors"
    >
      #{skill}
    </span>
  ))}
</div>

  </div> 
  
</div>
<RiCloseLargeFill
  className="absolute right-5 top-3  font-bebas text-2xl text-white"
   onClick={onClose}
/>
<div className="flex flex-col items-center justify-center mt-5  ">
  {/* MERN Stack name */}
  <div className="text-3xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-5">
  <span className="text-green-500">M</span>
  <span className="text-blue-500">E</span>
  <span className="text-yellow-500">R</span>
  <span className="text-red-500">N</span>
  <span className="text-gray-300"> Stack</span>
</div>

  {/* Icons for each part of the MERN stack */}
  <div className="flex justify-center items-center gap-5">
    {/* MongoDB Icon */}
    <div className="flex flex-col items-center">
      <SiMongodb className="text-green-500 text-4xl" />
      <p className="text-green-500">MongoDB</p>
    </div>

    {/* Express Icon */}
    <div className="flex flex-col items-center">
      <SiExpress className="text-blue-500 text-4xl" />
      <p className="text-blue-500">Express.js</p>
    </div>

    {/* React Icon */}
    <div className="flex flex-col items-center">
      <FaReact className="text-cyan-500 text-4xl" />
      <p className="text-cyan-500">React.js</p>
    </div>

    {/* Node.js Icon */}
    <div className="flex flex-col items-center">
      <FaNodeJs className="text-green-500 text-4xl" />
      <p className="text-green-500">Node.js</p>
    </div>
  </div>
</div>

  </section>
    );
  };
  
  export default About;
  