import React, { useEffect, useState } from "react";
import Backimg from "../assets/pexels-photo-1287075.webp";
import { ReactTyped } from "react-typed";
function Hero() {
  const [Visible, SetVisible] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      SetVisible((PREV) => (PREV === 2 ? 1 : PREV + 1));
    }, 1800);
    return () => clearInterval(interval);
  });
  return (
    <>
      <div
        className="min-h-screen relative z-10"
        style={{
          backgroundImage: `url(${Backimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center z-11 w-[90%] mx-auto">
          <div className="text-center w-full items-center">
            <div className="text-white text-8xl font-semibold mb-6">
              <h1>Welcome!</h1>
            </div>
            <div className="text-white font-bold flex justify-center gap-6 text-5xl">
              <span className="text-center">I am</span>
              {/*typing animation using react-typed */}
              <div className="relative text-[#7C7458] ">
                <ReactTyped
                  strings={["Mohamed Akkaoui", "Web developer"]}
                  typeSpeed={60}
                  backSpeed={40}
                  loop
                ></ReactTyped>
              </div>
            </div>
            {/*typing animation using css  */}
            {/* <div class="animated-text">
              I'am <span></span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
