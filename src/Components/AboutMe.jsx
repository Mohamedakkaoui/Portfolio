import React from "react";
import MeImage from "../assets/image00001-min.png";
import CV from "../assets/CV-Mohamed-Akkaoui.pdf";
function AboutMe() {
  return (
    <>
      <div className="bg-[#161617]">
        <div className="min-h-screen flex  w-[90%] mx-auto pt-[120px] pb-[50px] text-white">
          <div className="w-[41%] ">
            {" "}
            <img
              src={MeImage}
              alt="Mohamed Akkaoui"
              className="rounded-3xl w-full"
            />
          </div>
          <div className="flex flex-col flex-start pt-[20px] ml-[129px] w-[50%]">
            {" "}
            <div>
              <h3 className="space-x-4 mb-[10px]">
                <span>W H O </span>
                <span> A M </span> <span>I</span>{" "}
              </h3>
              <h1 className="py-[5px] px-[10px] bg-[#c49b66] font-bold text-3xl tracking-widest mb-[40px] inline-block">
                MOHAMED AKKAOUI.
              </h1>
            </div>
            <div className="tracking-widest text-[#8f8f8f]">
              Heyyyy-yo! Akkaoui here, I hold a bachelor's degree in Physics and
              recently graduated from a dynamic program called Arkx, where I
              specialized in Full Stack Development with a focus on the MERN
              stack. Before diving into the world of full-stack development, I
              honed my skills in Software Engineering at ALX. <br /> <br />{" "}
              Currently, I'm bringing my passion and expertise to 2peerfect as a
              Full Stack Developer intern. Coding is not just a job for me—it's
              a source of joy and excitement. I love creating, learning, and
              exploring new technologies and methodologies that push the
              boundaries of what's possible.. <br /> <br /> Beyond the screen,
              I'm an avid reader who finds inspiration in books, and I love the
              challenge and teamwork involved in playing basketball. These
              interests keep me balanced and fueled with fresh ideas and
              perspectives. <br /> <br /> I'm always eager to take on new
              challenges, contribute to exciting projects, and make things
              better. If you're looking for someone who combines technical
              prowess with a passion for continuous learning and personal
              growth, let's connect!
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-white space-x-10 pb-[80px]">
          {" "}
          <div className="border-2 rounded-3xl">
            {" "}
            <button className="px-[34px] py-[12px] border-white">
              <a href={CV} download="CV-Mohamed-Akkaoui.pdf">
                Download CV
              </a>
            </button>
          </div>{" "}
          <div className="">
            {" "}
            <button className="px-[34px] py-[12px] bg-white text-[#7C7458] rounded-3xl ">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
