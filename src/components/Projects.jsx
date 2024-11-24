import medicheck from "../assets/medicheck.png"
import agrios  from "../assets/agrios.png"
import geminiClone from "../assets/gemini-clone.png"
import webQuiz  from "../assets/web-quiz.png"


const Projects = () => {
    return (
      <div className="bg-gray-900 w-full p-4">
     
      {/* All Projects Div */}
      <div className="w-full flex flex-col gap-5 md:px-5 mt-6">
        
        {/* Project 1 */}
        <div className="w-full flex flex-col md:flex-row items-center gap-6">
          
          {/* Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <a href="https://medicheck-web.netlify.app/">
              <img
                src={medicheck}
                className="w-full max-w-[400px] md:max-w-[500px] h-auto rounded-lg"
                alt="medicheck project image"
              />
            </a>
          </div>
          {/* End Image */}
    
          {/* About */}
          <div className="w-full md:w-1/2 flex items-center flex-col px-0 md:px-4">
            <p className="text-white text-lg md:text-xl mb-4 md:px-3 text-center md:text-left">
              Developed a hospital management website called Medicheck with features for selecting
              doctors, booking appointments, and filtering doctors by specialty. Users can view their
              appointments and manage their profiles. The platform offers a user-friendly experience for
              patients to interact with healthcare services efficiently.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
              {[
                "JavaScript",
                "React.js",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "Responsive Design",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full text-sm md:text-lg px-3 py-1 border-2 text-gray-200 font-medium transition-colors"
                >
                  #{skill}
                </span>
              ))}
            </div>
          </div>
          {/* End About */}
        </div>
        {/* End Project 1 */}
        
        {/* Project 2 Agrois landing page*/}
        <div className="w-full flex flex-col md:flex-row-reverse items-center gap-6">
          
          {/* Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <a href="https://surajshinde87.github.io/agrios-landing-page/">
              <img
                src={agrios}
                className="w-full max-w-[400px] md:max-w-[500px] h-auto rounded-lg"
                alt="medicheck project image"
              />
            </a>
          </div>
          {/* End Image */}
          
          {/* About */}
          <div className="w-full md:w-1/2 flex items-center flex-col px-0 md:px-4">
            <p className="text-white text-lg md:text-xl mb-4 px-0 md:px-3 text-center md:text-left">
            A sleek and responsive landing page designed to showcase Agrios. It features a clean layout, smooth navigation, and engaging interactive elements to highlight the brand's services and offerings, with clear call-to-action sections for optimal user engagement.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
              {[
                "JavaScript",
                "HTML",
                "CSS",
                "Responsive Design",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full text-sm md:text-lg px-3 py-1 border-2 text-gray-200 font-medium transition-colors"
                >
                  #{skill}
                </span>
              ))}
            </div>
          </div>
          {/* End About */}
        </div>
        {/* End Project 2 */}

              {/* Project 3  Gemini Clone*/}
              <div className="w-full flex flex-col md:flex-row items-center gap-6">
          
          {/* Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <a href="https://66d5481e51e7a49d06d09f2f--gemini-clone-surajshinde.netlify.app/">
              <img
                src={geminiClone}
                className="w-full max-w-[400px] md:max-w-[500px] h-auto rounded-lg"
                alt="medicheck project image"
              />
            </a>
          </div>
          {/* End Image */}
    
          {/* About */}
          <div className="w-full md:w-1/2 flex items-center flex-col px-0 md:px-4">
            <p className="text-white text-lg md:text-xl mb-4 md:px-3 text-center md:text-left">
            A web application modeled after Google Gemini, leveraging the Google Gemini API to provide real-time responses to user prompts. The platform mimics the functionality of the original, offering a seamless interface for interactive queries and dynamic content generation. This project showcases the integration of APIs to build intelligent, responsive applications.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
              {[
                "JavaScript",
                "Node js",
                "Rest API",
                "React.js",
                "HTML",
                "Tailwind CSS",
                "Responsive Design",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full text-sm md:text-lg px-3 py-1 border-2 text-gray-200 font-medium transition-colors"
                >
                  #{skill}
                </span>
              ))}
            </div>
          </div>
          {/* End About */}
        </div>
        {/* End Project 3 */}

                {/* Project 4 Web Quiz */}
                <div className="w-full flex flex-col md:flex-row-reverse items-center gap-6">
          
          {/* Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <a href="https://surajshinde87.github.io/web-quiz/">
              <img
                src={webQuiz}
                className="w-full max-w-[400px] md:max-w-[500px] h-auto rounded-lg"
                alt="medicheck project image"
              />
            </a>
          </div>
          {/* End Image */}
          
          {/* About */}
          <div className="w-full md:w-1/2 flex items-center flex-col px-0 md:px-4">
            <p className="text-white text-lg md:text-xl mb-4 px-0 md:px-3 text-center md:text-left">
            An interactive quiz platform designed to test users' knowledge on various topics. It features dynamic questions, real-time scoring, and a detailed summary of correct and incorrect answers, offering an engaging user experience.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
              {[
                "JavaScript",
                "HTML",
                "CSS",
                "Bootstrap",
                "Responsive Design",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full text-sm md:text-lg px-3 py-1 border-2 text-gray-200 font-medium transition-colors"
                >
                  #{skill}
                </span>
              ))}
            </div>
          </div>
          {/* End About */}
        </div>
        {/* End Project 4 */}
        
      </div>
      {/* End All Projects Div */}
    </div>
    
    );
  };
  
  export default Projects;
  