import React from "react";
import { Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

function Footer() {
  return (
    <>
      <div className="bg-[#0f0f0f] pt-20 pb-10">
        <div className="text-center text-white font-bold text-4xl mb-8">
          Akkaoui
        </div>
        <div className="flex text-[#c49b66] items-center justify-center gap-8 pt-8">
          <div
            className="hover:cursor-pointer p-5 bg-[#222] rounded-xl "
            style={{ transform: "rotate(45deg)" }}
          >
            <a href="https://github.com/Mohamedakkaoui">
              <Github size={18} style={{ transform: "rotate(-45deg)" }} />
            </a>
          </div>
          <div
            className="hover:cursor-pointer p-5 bg-[#222] rounded-xl "
            style={{ transform: "rotate(45deg)" }}
          >
            <a href="https://www.linkedin.com/in/mohamedakkaoui/">
              <Linkedin size={18} style={{ transform: "rotate(-45deg)" }} />
            </a>
          </div>
          <div
            className="hover:cursor-pointer p-5 bg-[#222] rounded-xl"
            style={{ transform: "rotate(45deg)" }}
          >
            <a href="https://x.com/_datboiiMohamed">
              <Twitter size={18} style={{ transform: "rotate(-45deg)" }} />
            </a>
          </div>
          <div
            className="hover:cursor-pointer p-5 bg-[#222] rounded-xl"
            style={{ transform: "rotate(45deg)" }}
          >
            <a href="https://www.instagram.com/mohamed_akkaoui/">
              <Instagram size={18} style={{ transform: "rotate(-45deg)" }} />
            </a>
          </div>
          <div
            className="hover:cursor-pointer p-5 bg-[#222] rounded-xl"
            style={{ transform: "rotate(45deg)" }}
          >
            <a href="https://web.facebook.com/profile.php?id=100008860692186">
              <Facebook size={18} style={{ transform: "rotate(-45deg)" }} />
            </a>
          </div>
        </div>
        <div className="text-[#999999] text-center mt-7">
          © 2024 UI-Depecez-vous. ALL RIGHTS RESERVED.
        </div>
      </div>
    </>
  );
}

export default Footer;
