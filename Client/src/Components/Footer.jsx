import React, { useState } from "react";
import { Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div className="bg-[#0f0f0f] pt-20 pb-10">
        <div className="text-center text-white font-bold text-4xl mb-8">
          Akkaoui
        </div>
        <div className="flex text-[#c49b66] items-center justify-center gap-8 pt-8">
          {[
            {
              href: "https://github.com/Mohamedakkaoui",
              icon: <Github size={18} />,
            },
            {
              href: "https://www.linkedin.com/in/mohamedakkaoui/",
              icon: <Linkedin size={18} />,
            },
            {
              href: "https://x.com/_datboiiMohamed",
              icon: <Twitter size={18} />,
            },
            {
              href: "https://www.instagram.com/mohamed_akkaoui/",
              icon: <Instagram size={18} />,
            },
            {
              href: "https://web.facebook.com/profile.php?id=100008860692186",
              icon: <Facebook size={18} />,
            },
          ].map((link, index) => (
            <div
              key={index}
              className="hover:cursor-pointer p-5 bg-[#222] rounded-xl hover:bg-[#c49b66] hover:text-white"
              style={{
                transform:
                  hoveredIndex === index ? "rotate(0deg)" : "rotate(45deg)",
                transition: "transform 0.3s",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
            >
              <a href={link.href}>
                <div
                  style={{
                    transform:
                      hoveredIndex === index
                        ? "rotate(0deg)"
                        : "rotate(-45deg)",
                    transition: "transform 0.3s",
                  }}
                >
                  {link.icon}
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="text-[#999999] text-center mt-10">
          © 2024 UI-Depechez-vous. ALL RIGHTS RESERVED.
        </div>
      </div>
    </>
  );
}

export default Footer;
