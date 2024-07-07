import React from "react";

function Contactme() {
  return (
    <div className="bg-[#161617]">
      <div className="flex flex-col  min-h-screen w-[90%] mx-auto py-[120px]">
        <div className="mb-19">
          <h1 className="text-white text-center font-bold text-8xl tracking-wide mb-[90px]">
            Contact Me
          </h1>
        </div>
        <div className="flex text-white gap-8">
          <div className="w-[35%] ">
            <div className="text-[#c49b66] font-semibold mb-1 tracking-widest">
              PHONE :
            </div>
            <div className="mb-8 text-lg">+212618151693</div>
            <div className="text-[#c49b66] font-semibold mb-1 tracking-widest">
              ADRESS :
            </div>
            <div className="mb-8 text-lg">
              3rd Avenue Upper eeat side,
              <br />
              San francisco
            </div>
            <div className="text-[#c49b66] font-semibold mb-1 tracking-widest">
              EMAIL :
            </div>
            <div className="mb-8 text-lg">moahmedakkaoui00@gmail.com</div>
          </div>
          <div className="w-[60%] ">
            <div className="flex">
              <div>input one</div>
              <div>input two</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
