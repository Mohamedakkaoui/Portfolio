import React from "react";

function Projects() {
  return (
    <>
      <div className="bg-[#161617] flex flex-col pb-10 min-h-screen">
        <div className="mb-19">
          <h1 className="text-white text-center font-bold text-8xl tracking-wide mb-[90px]">
            Selected Work
          </h1>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <div>Real estate website</div>
            <div>Agency website</div>
          </div>
          <div>E-learning platform</div>
          <div>Bookstore Api</div>
        </div>
      </div>
    </>
  );
}

export default Projects;
