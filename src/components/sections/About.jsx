import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "TailwindCSS",
    "Figma",
    "Python",
    "Pandas",
    "Seaborn",
    "SQL"
  ];


  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#F2B6B6] to-[#AF5059] bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className=" mb-8 rounded-xl p-8 border-[#580109] border hover:border-[#AF5059]  hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-5">
            I&apos;m a Computer Science student specializing 
            in Big Data and Data Analysis, with experience 
            in front-end development, UI/UX design, and 
            leveraging data for insights. 
            </p>

            <p className="text-gray-300 mb-5">
            I work with Python 
            for data 
            analysis and have a growing interest in 
            artificial intelligence, exploring its 
            potential to solve real-world problems.
            </p>

            <p className="text-gray-300">
            I&apos;m passionate about learning and applying 
            AI technologies to drive innovative solutions.


            </p>
          </div>
            <div className="grid grid-cols-1  gap-6 border-1 border-[#580109] rounded-xl hover:border-[#AF5059] hover:-translate-y-1 transition-all">
              <div className="flex flex-col items-center p-6 ">
                <h3 className="text-2xl font-bold mb-6 text-center text-white">My skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#1a0406] border-[#580109] text-gray-200 border-2 py-1 px-3 rounded-xl text-sm 
                                    hover:border-[#AF5059] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              

              
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex flex-col justify-center p-6 rounded-xl border-[#580109] border hover:border-[#AF5059] hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-white">Education</h3>
              
                <li className="font-bold mb-2 text-[#dbb4b7]">Computer Science Student at ISIMS &ndash; Higher
                   Institute of Computer Science and Multimedia 
                   of Sfax (2023 &ndash; Present)</li>
                <p className="text-gray-300">Specializing in Big Data and Data Analysis.</p>
                <p className="text-gray-300">Currently in second year of the Bachelor&apos;s program.</p>
                  
            </div>
            <div className="flex flex-col justify-center p-6 rounded-xl border-[#580109] border hover:border-[#AF5059] hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-white">  Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <li className="mb-2 font-bold text-[#dbb4b7]">
                    {" "}
                    Front-End Intern at Saker Othmen Ltd (Aug &ndash; Sep 2024)</li>
                  <p>
                  Developed and styled responsive web pages using HTML, CSS, and React.
Designed and prototyped UI components in Figma before implementation.
Created key pages including landing, login, and contact sections.
                  </p>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
