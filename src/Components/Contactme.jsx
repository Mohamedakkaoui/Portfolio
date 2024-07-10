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
            <div className="mb-8 text-lg">+212631603723</div>
            <div className="text-[#c49b66] font-semibold mb-1 tracking-widest">
              ADRESS :
            </div>
            <div className="mb-8 text-lg">
              Oulad Aarfa AL Amal Nr 663,
              <br />
              Kenitra
            </div>
            <div className="text-[#c49b66] font-semibold mb-1 tracking-widest">
              EMAIL :
            </div>
            <div className="mb-8 text-lg">akkaouimohamed00@gmail.com</div>
          </div>
          <div className="w-[60%]">
            <div className="flex justify-between mb-4">
              <div className="w-[45%]">
                {" "}
                <div class="relative mt-1">
                  <input
                    type="text"
                    id="Full Name"
                    className="block w-full p-3 ps-6 text-[#9ca3af] focus:outline-none rounded-full bg-[#222222] "
                    placeholder="Name"
                    required
                  />
                </div>
              </div>
              <div className="w-[45%]">
                <div class="relative mt-1">
                  <input
                    type="email"
                    id="Full Name"
                    className="block w-full p-3 ps-6 text-[#9ca3af] focus:outline-none rounded-full bg-[#222222]"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div class="relative mt-1 outline-none">
                <input
                  type="text"
                  id="Full Name"
                  className="block w-full p-3 ps-6 text-[#9ca3af] focus:outline-none rounded-full bg-[#222222] "
                  placeholder="Subject"
                  required
                />
              </div>
            </div>
            <div>
              <textarea
                name="Message"
                placeholder="Message"
                id="Message"
                className=" text-[#9ca3af] focus:outline-none p-3 ps-6 w-full h-[150px] mt-4 rounded-xl bg-[#222222] "
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
