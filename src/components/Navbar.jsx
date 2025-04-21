import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import logo from "../assets/personal_logo2.svg";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section;
        }
      });

      setActiveLink(currentSection);
      setIsScrolled(window.scrollY > 0); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#060505] border-b-3 border-[#580109] shadow-md"
          : "bg-transparent border-[#580109]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home">
            <img src={logo} alt="logo" className="h-10" />
          </a>

         
          <div
            className="text-3xl text-gray-300 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          
          <div className="hidden md:flex items-center justify-between gap-[5rem]">
            <a
              href="#home"
              className={`text-xl ${
                activeLink === "home" ? "text-white" : "text-gray-300"
              } hover:text-white transition-colors`}
            >
              Home
            </a>
            <a
              href="#about"
              className={` text-xl ${
                activeLink === "about" ? "text-white" : "text-gray-300"
              } hover:text-white transition-colors`}
            >
              About
            </a>
            <a
              href="#projects"
              className={`text-xl ${
                activeLink === "projects" ? "text-white" : "text-gray-300"
              } hover:text-white transition-colors`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={` text-xl ${
                activeLink === "contact" ? "text-white" : "text-gray-300"
              } hover:text-white transition-colors`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
