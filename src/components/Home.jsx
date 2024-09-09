import React from "react";
import CV from "../assets/CV.pdf";
// import image from "../assets/image.png";
import hero from "../assets/hero.jpg";

export const Home = () => {
  return (
    <>
      <div className="text-center sm:text-left flex w-full min-h-screen bg-dark">
        <div className="w-1/2 flex items-center justify-center p-10">
          <div className="bg-gradient-to-r from-blue-900 to-gray-500 p-10 rounded-lg shadow-lg text-white">
            <h1 className="text-[3rem]">
              Hi, <br />
              I'm
              <span className="text-3xl, font-bold"> Faiza Fatima</span>
              <br />
              <div>And I'm a developer</div>
            </h1>
            <h2>Frontend Developer/UG Student</h2>

            <div className="buttons mt-4">
              <button className="btn px-4 py-2 text-white rounded">
                <a href={CV} download>
                  Download CV
                </a>
              </button>
              <button className="btn px-4 py-2 bg-blue-500 text-white rounded mt-2">
                <a
                  href="https://github.com/Faiza2850"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img src={hero} alt="Profile" className="rounded-full w-80 h-80 hover:animate-bounce " />
        </div>
      </div>
    </>
  );
};
