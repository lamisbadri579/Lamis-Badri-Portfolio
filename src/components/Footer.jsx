import { useState, useRef, useEffect } from "react";
import email_icon from '../assets/email_icon.svg';
import github_icon from '../assets/github_icon.svg';
import linkedin_icon from '../assets/linkedin_icon.svg';

const Footer = () => {
  const [showEmails, setShowEmails] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowEmails(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEmailClick = () => {
    setShowEmails(false); 
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4 gap-[20px] relative">
        <div className="flex items-center justify-center gap-[20px]" ref={dropdownRef}>
          <a href="https://github.com/lamisbadri579" target="_blank" rel="noopener noreferrer">
            <img src={github_icon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/lamis-badri-734851361/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin_icon} alt="LinkedIn" />
          </a>

          
          <button className="cursor-pointer" onClick={() => setShowEmails(!showEmails)}>
            <img src={email_icon} alt="Email" />
          </button>

          {showEmails && (
            <div className="absolute bottom-[60px] bg-[#0c0c0c] border border-white/10 rounded shadow z-10">
              <a
                href="mailto:lamisbadri579@gmail.com"
                className="flex items-center gap-2 px-4 py-2 text-white hover:bg-[#1a1a1a] whitespace-nowrap"
                onClick={handleEmailClick}
              >
                <img src={email_icon} alt="Email" className="w-4 h-4" />
                lamisbadri579@gmail.com
              </a>
              <a
                href="mailto:badrilamis@isimsf.u-sfax.tn"
                className="flex items-center gap-2 px-4 py-2 text-white hover:bg-[#1a1a1a] whitespace-nowrap"
                onClick={handleEmailClick}
              >
                <img src={email_icon} alt="Email" className="w-4 h-4" />
                badrilamis@isimsf.u-sfax.tn
              </a>
            </div>
          )}
        </div>

        <p className="max-[375px]:text-sm text-[#ffffff4e]">
          © 2025 Lamis Badri. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
