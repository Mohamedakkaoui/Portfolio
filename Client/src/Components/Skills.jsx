import React from "react";
import NodeJs from "../assets/icons8-nodejs-48.png";
import ExpressJs from "../assets/icons8-express-js-50.png";
import Javascript from "../assets/icons8-javascript-48.png";
import Python from "../assets/icons8-python-64.png";
import C from "../assets/icons8-c-100.png";
import MongoDb from "../assets/icons8-mongo-db-48.png";
import Html from "../assets/icons8-html-48.png";
import Css from "../assets/icons8-css-48.png";
import Typescript from "../assets/icons8-typescript-24.png";
import Git from "../assets/icons8-git-48.png";
import Github from "../assets/icons8-github-50.png";
import ReactJs from "../assets/icons8-react-50.png";
import Tailwindcss from "../assets/icons8-tailwind-css-48.png";
function Skills() {
  const Icons = [
    { id: 1, icon: NodeJs, text: "Node.js" },
    { id: 2, icon: ExpressJs, text: "Express.js" },
    { id: 3, icon: Javascript, text: "Javascript" },
    { id: 4, icon: Python, text: "Python" },
    { id: 5, icon: C, text: "C" },
    { id: 6, icon: Css, text: "CSS" },
    { id: 7, icon: Html, text: "HTML" },
    { id: 8, icon: MongoDb, text: "MongoDB" },
    { id: 9, icon: Typescript, text: "Typescript" },
    { id: 10, icon: Git, text: "Git" },
    { id: 11, icon: Github, text: "Github" },
    { id: 12, icon: ReactJs, text: "React.js" },
    { id: 13, icon: Tailwindcss, text: "Tailwind.css" },
  ];
  return (
    <div className="relative bg-[#161617] min-h-screen text-white ">
      <div className="relative flex flex-col min-h-screen w-[80%] mx-auto pb-[120px] pt-[60px] bg-opacity-75 ">
        <div className="mb-19">
          <h1 className="text-white text-center font-bold text-8xl tracking-wide mb-[90px]">
            Skills
          </h1>
        </div>
        <div className="flex flex-wrap space-x-16 justify-center items-center">
          {Icons.map((el) => (
            <div className="mb-12">
              <div
                key={el.id}
                id={el.id}
                className="p-6 bg-white rounded-md mb-2 flex flex-col"
              >
                <img
                  src={el.icon}
                  alt="node.js"
                  className="w-[60px] h-[60px]"
                />
              </div>
              <div className="text-[#c49b66] text-center font-semibold text-xl">
                {el.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
