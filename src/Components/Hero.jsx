import React, { useEffect, useState } from "react";
import Backimg from "../assets/pexels-photo-1287075.webp";
import { ReactTyped } from "react-typed";
import { Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

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
        <div className="absolute inset-0 flex flex-col items-center justify-center z-11 w-[90%] mx-auto">
          <div className="text-center w-full items-center">
            <div className="text-white text-8xl font-semibold mb-6">
              <h1>Welcome!</h1>
            </div>
            <div className="text-white font-bold flex justify-center gap-6 text-5xl">
              <span className="text-center">I am</span>
              {/*typing animation using react-typed */}
              <div className="relative text-[#7C7458] ">
                <ReactTyped
                  strings={["Mohamed Akkaoui", "a Web developer"]}
                  typeSpeed={60}
                  backSpeed={40}
                  loop
                ></ReactTyped>
              </div>
            </div>
          </div>
          <div
            className="text-white px-9 py-3 mt-10 rounded-3xl flex gap-10 "
            style={{ backgroundColor: "rgba(200, 200, 200, 0.05)" }}
          >
            <div className="hover:cursor-pointer">
              <a href="https://github.com/Mohamedakkaoui">
                <Github size={20} />
              </a>
            </div>
            <div className="hover:cursor-pointer">
              <a href="https://www.linkedin.com/in/mohamedakkaoui/">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="hover:cursor-pointer">
              <a href="https://x.com/_datboiiMohamed">
                <Twitter size={20} />
              </a>
            </div>
            <div className="hover:cursor-pointer">
              <a href="https://www.instagram.com/mohamed_akkaoui/">
                <Instagram size={20} />
              </a>
            </div>
            <div className="hover:cursor-pointer">
              <a href="https://web.facebook.com/profile.php?id=100008860692186">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
