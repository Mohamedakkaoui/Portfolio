import React, { useState } from "react";
import MapImg from "../assets/map.png";
import axios from "axios";

function Contactme() {
  const [FormData, SetFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3500/Add", FormData);
      if (response.status === 201) {
        alert("Comment added successfully");
        SetFormData({
          Name: "",
          Email: "",
          Subject: "",
          Message: "",
        });
      } else {
        alert("Failed to add comment");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative bg-[#161617] min-h-screen">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${MapImg})`,
          backgroundRepeat: "repeat",
          backgroundSize: "50%",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative flex flex-col min-h-screen w-[90%] mx-auto py-[120px] bg-opacity-75 ">
        <div className="mb-19">
          <h1 className="text-white text-center font-bold text-8xl tracking-wide mb-[90px]">
            Contact Me
          </h1>
        </div>
        <div className="flex text-white gap-8">
          <div className="w-[35%]">
            <div className="text-[#c49b66] font-semibold mb-1 tracking-widest">
              PHONE :
            </div>
            <div className="mb-8 text-lg">+212631603723</div>
            <div className="text-[#c49b66] font-semibold mb-1 tracking-widest">
              ADDRESS :
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
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between mb-4">
                <div className="w-[45%]">
                  <div className="relative mt-1">
                    <input
                      type="text"
                      name="Name"
                      value={FormData.Name}
                      onChange={handleChange}
                      className="block w-full p-3 ps-6 text-[#9ca3af] focus:outline-none rounded-full bg-[#222222]"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>
                <div className="w-[45%]">
                  <div className="relative mt-1">
                    <input
                      type="email"
                      name="Email"
                      value={FormData.Email}
                      onChange={handleChange}
                      className="block w-full p-3 ps-6 text-[#9ca3af] focus:outline-none rounded-full bg-[#222222]"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="relative mt-1 outline-none">
                  <input
                    type="text"
                    name="Subject"
                    value={FormData.Subject}
                    onChange={handleChange}
                    className="block w-full p-3 ps-6 text-[#9ca3af] focus:outline-none rounded-full bg-[#222222]"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>
              <div>
                <textarea
                  name="Message"
                  value={FormData.Message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="text-[#9ca3af] focus:outline-none p-3 ps-6 w-full h-[150px] mt-4 rounded-xl bg-[#222222]"
                ></textarea>
              </div>
              <div className="w-full ">
                <button
                  type="submit"
                  className="flex justify-end mt-12 bg-[#c49b66] text-lg font-medium text-white px-5 py-4 rounded-full ml-auto"
                >
                  Matb5lch Bchi Message!!!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
