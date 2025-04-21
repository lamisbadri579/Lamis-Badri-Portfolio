import homeBg from '../../assets/home_bg.svg';
import { RevealOnScroll } from '../RevealOnScroll';
import cv from '../../assets/lamisbadri.pdf'
export const Home = () => {
  return (
    <section
      id="home"
      className="min-[320px]:px-[10px] h-screen pt-20 flex items-center justify-center relative bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <RevealOnScroll>
        <div className=" px-4 flex flex-col items-center">
          
          <h2 className=" max-w-3xl min-[320px]:text-3xl min-[400px]:text-4xl sm:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-[#F2B6B6] to-[#AF5059] bg-clip-text text-transparent">
          Hi, I&apos;m Lamis.
          </h2>
          <h3 className="text-center max-w-2xl min-[320px]:text-base min-[400px]:text-lg sm:text-2xl xl:text-3xl font-bold mb-6 bg-clip-text text-gray-300 ">
          
          Computer Science Student | Front-End Developer | Data Analyst | AI Explorer.
          </h3>


          
          <div className="flex justify-center">
            <a
              href={cv}
              download="LamisBadri.pdf"
              className="min-[320px]:text-sm min-[768px]:text-lg text-[#580109] bg-[#e9939a] border-2 border-[#580109] py-3 px-6 rounded font-bold transition hover:-translate-y-0.5 hover:shadow-[0_0_15px] hover:bg-[#e9939ad6]"
            >
              Download CV
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};