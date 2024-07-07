import React from "react";
import MeImage from "../assets/image00001-min.png";
function AboutMe() {
  return (
    <>
      <div className="bg-[#161617]">
        <div className="min-h-screen flex  w-[90%] mx-auto py-[120px] text-white">
          <div className="w-[41%]">
            {" "}
            <img src={MeImage} alt="Mohamed Akkaoui" className="rounded-sm" />
          </div>
          <div className="flex flex-col flex-start pt-[50px] ml-[159px]">
            {" "}
            <div>
              <h3 className="space-x-4 mb-[10px]">
                <span>W H O </span>
                <span> A M </span> <span>I</span>{" "}
              </h3>
              <h1 className="py-[5px] px-[10px] bg-[#c49b66] font-bold text-3xl tracking-widest">MOHAMED AKKAOUI.</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
