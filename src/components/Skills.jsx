import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

export const Skills = () => {
  return (
    <>
      <div className="container mx-auto p-6 relative">
        <div className="text-white max-w-4xl mb-8 ">
          <p className="text-lg leading-relaxed">
            I bring a dynamic blend of creativity and technical proficiency to
            the table, excelling in frontend development with a mastery of
            modern tools and libraries such as React, Angular, and JavaScript.
            My expertise in HTML5, CSS3, and Git allows me to craft responsive,
            interactive, and visually appealing web experiences. I am constantly
            evolving, embracing new challenges, and staying ahead of the curve
            by working with the latest technologies.
          </p>
        </div>
        <div className="text-white w-48 h-48 absolute right-0 top-0  md:block overflow-hidden">
          <div className="cubespinner animation-spin">
            <div className="face1 bg-[#DD0031] text-white">
              <FontAwesomeIcon icon={faAngular} />
            </div>
            <div className="face2 bg-[#F06529] text-white">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="face3 bg-[#28A4D9] text-white">
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="face4 bg-[#5ED4F4] text-white">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="face5 bg-[#EFD81D] text-white">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="face6 bg-[#EC4D28] text-white">
              <FontAwesomeIcon icon={faGitAlt} />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
