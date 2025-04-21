import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<RunCodeNotAway />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="max-[470px]:text-2xl mb-4 text-4xl font-mono font-bold">
        {text}<span className="animate-blink text-[#78787886]">|</span>
      </div>
      <div className="max-[768px]:w-[90%] w-[50%] h-[2px] bg-[#78787886] rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-[#580109] shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

LoadingScreen.propTypes = {
  onComplete: PropTypes.func.isRequired,
};
