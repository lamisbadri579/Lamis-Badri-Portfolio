import { RevealOnScroll } from "../RevealOnScroll";
import aws_logo from '../../assets/cloud.svg'
import to_heaven_logo from '../../assets/TO_HEAVEN_logo.svg'
import android_app_logo from'../../assets/ic_launcher-playstore.png'
import data_analyst_certif_badge from '../../assets/DA-Badge.png'
import github_button from '../../assets/github_icon_button.svg'
import demo_button from '../../assets/demo_icon.svg'
import saker from '../../assets/saker.svg'
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center"
    >
      
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#F2B6B6] to-[#AF5059] bg-clip-text text-transparent text-center">
            {" "}
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl flex flex-col justify-center border border-[#580109] hover:-translate-y-1 hover:border-[#AF5059] transition">

              <div className="flex items-center gap-[10px] mb-6">
              <img src={to_heaven_logo} alt='logo_travel_agency_project' className="w-[50px]" />
              <h3 className="text-xl font-bold text-white"> Travel Agency Website</h3>
              </div>

              <p className="text-gray-300 mb-6">My first web project — a multi-page, responsive travel agency website created to showcase a variety of destinations, services, and promotional offers.

              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["HTML", "CSS"].map((tech, key) => (
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

              <div className="flex  items-center gap-[5%]">
                
                <a href="https://github.com/lamisbadri579/TOHEAVEN_TravelAgency" target="_blank" rel="noopener noreferrer" className="bg-[#e1b5ba] text-black p-2 rounded-lg  flex items-center gap-[7px] hover:bg-[#e1b5bae4] "><img className="w-1/4" src={github_button} alt="github" />Github</a>
                <a href="https://lamisbadri579.github.io/TOHEAVEN_TravelAgency/" target="_blank" rel="noopener noreferrer" className="h-[42px] bg-[#580109] p-2 rounded-lg flex items-center gap-[7px] hover:bg-[#58010ac1]"><img className="w-1/4" src={demo_button} alt="" />Demo</a>
                
              </div>
            </div>
            <div
              className="
              flex flex-col justify-center
              glass p-6 rounded-xl border border-[#580109]
              hover:-translate-y-1 
              hover:border-[#AF5059]
              transition-all 
            "
            >
              <div className="flex items-center gap-[10px] mb-6 ">
              <img src={aws_logo} alt="" className="w-[50px]" />
              <h3 className="text-xl font-bold text-white">Multistep Club Registration Form</h3>
              </div>

              <p className="text-gray-300 mb-6">
              A dynamic multistep form designed for students to register
               and join the AWS Cloud Club at ISIMS, offering a smooth 
               and user-friendly sign-up process.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["HTML","React","TailwindCSS","EmailJS","Google Sheets"].map((tech, key) => (
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
              <div className="flex  items-center gap-[5%]">
                
                <a href="https://github.com/lamisbadri579/aws-cloud-club-isims-registration" target="_blank" rel="noopener noreferrer" className="bg-[#e1b5ba] text-black p-2 rounded-lg  flex items-center gap-[7px]  hover:bg-[#e1b5bae4]"><img className="w-1/4" src={github_button} alt="" />Github</a>
                <a href="https://lamisbadri579.github.io/aws-cloud-club-isims-registration/" target="_blank" rel="noopener noreferrer" className="h-[42px] bg-[#580109] p-2 rounded-lg flex items-center gap-[7px] hover:bg-[#58010ac1]"><img className="w-1/4" src={demo_button} alt="" />Demo</a>
                
              </div>
            </div>


            <div
              className="
              flex flex-col justify-center
              glass p-6 rounded-xl border border-[#580109]
              hover:-translate-y-1 
              hover:border-[#AF5059]
              transition-all 
            "
            >
              <div className="flex items-center gap-[10px] mb-6 ">
              <img src={saker} alt="" className="w-[50px]" />
              <h3 className="text-xl font-bold text-white">Internship Project</h3>
              </div>

              <p className="text-gray-300 mb-6">
              A website that highlights the company&apos;s services with a
               responsive landing page, contact page, and login page, 
               designed and developed to provide a seamless user experience.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["HTML","React","CSS"].map((tech, key) => (
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
              <div className="flex  items-center gap-[5%]">
                
                <a href="https://github.com/lamisbadri579/SakerOthmen" target="_blank" rel="noopener noreferrer" className="bg-[#e1b5ba] text-black p-2 rounded-lg  flex items-center gap-[7px]  hover:bg-[#e1b5bae4]"><img className="w-1/4" src={github_button} alt="" />Github</a>
                <a href="https://lamisbadri579.github.io/SakerOthmen/" target="_blank" rel="noopener noreferrer" className="h-[42px] bg-[#580109] p-2 rounded-lg flex items-center gap-[7px] hover:bg-[#58010ac1]"><img className="w-1/4" src={demo_button} alt="" />Demo</a>
                
              </div>
            </div>


            <div
              className="
              flex flex-col justify-center
              glass p-6 rounded-xl border border-[#580109]
              hover:-translate-y-1
              hover:border-[#AF5059]
              transition-all
            "
            >
             <div className="flex items-center gap-[10px] mb-6">
             <img src={android_app_logo} alt="" className="w-[50px] rounded-lg" />
             <h3 className="text-xl font-bold text-white">Smart Guide &minus; Android App</h3>
             </div>

              <p className="text-gray-300 mb-6">
              The Traveler Helper App assists abroad students,
               travelers, and newcomers in navigating new cities.
                Features include an AI-powered chatbot, a map for
                 local spots, an AI-driven itinerary planner, and 
                 translation support.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Java", "XML", "Firebase", "REST APIs","Android Studio"].map((tech, key) => (
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
              <div className="flex  items-center gap-[5%]">
                
                <a href="https://github.com/lamisbadri579/NotLost_JustNew/tree/master" target="_blank" rel="noopener noreferrer" className="bg-[#e1b5ba] text-black p-2 rounded-lg  flex items-center gap-[7px]  hover:bg-[#e1b5bae4]"><img className="w-1/4" src={github_button} alt="" />Github</a>
                <a href="https://appetize.io/app/b_nxsfybngagoc63utqaamrv2tvu" target="_blank" rel="noopener noreferrer" className="h-[42px] bg-[#580109] p-2 rounded-lg flex items-center gap-[7px] hover:bg-[#58010ac1]"><img className="w-1/4" src={demo_button} alt="" />Demo</a>
                
              </div>
            </div>



            <div
              className="
              flex flex-col justify-center
              glass p-6 rounded-xl border border-[#580109]
              hover:-translate-y-1 
              hover:border-[#AF5059]
              transition-all
            "
            >
              <div className="flex items-center gap-[10px] mb-6">
                <img src={data_analyst_certif_badge} alt="" className="w-[50px] rounded-lg" />
              <h3 className="text-xl font-bold text-white">Data Analyst Certificate</h3>
              </div>

              <p className="text-gray-300 mb-6">
              I completed the Data Analyst certification from DataCamp,
               where I worked on a project analyzing office product sales
                data. Using tools like Python, Pandas, and Matplotlib, 
                I conducted data cleaning, performed statistical analysis,
                 and created visualizations to uncover insights that 
                 supported improved sales strategies and informed 
                 business decision-making.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "Pandas", "Seaborn", "Matplotlib"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="bg-[#1a0406] border-[#580109] text-gray-200 border-2 py-1 px-3 rounded-xl text-sm 
                      hover:border-[#AF5059] transition
      "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex  items-center gap-[5%]">
                
                <a href="https://github.com/lamisbadri579/Data_Analyst_Certification" target="_blank" rel="noopener noreferrer" className="bg-[#e1b5ba] text-black p-2 rounded-lg  flex justify-center items-center gap-[7px]  hover:bg-[#e1b5bae4]"><img className="w-1/4" src={github_button} alt="" />Github</a>
                <a href="https://www.datacamp.com/certificate/DA0027269789496" target="_blank" rel="noopener noreferrer" className=" bg-[#580109] p-2 rounded-lg flex items-center justify-center gap-[7px] h-[42px] hover:bg-[#58010ac1]"><img className="w-1/4" src={demo_button} alt="" />Certificate</a>
                
              </div>
            </div>

            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
