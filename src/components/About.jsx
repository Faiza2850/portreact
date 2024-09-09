import React from "react";

export const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-700 py-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300 mx-80 "
    >
      <div className="container text-center sm:text-left mx-auto px-4">
        <p className="md:flex text-lg text-gray-100 mb-4">
          Hello! I'm Faiza, a frontend developer with a passion for creating
          visually stunning and highly functional websites. I have a deep
          understanding of HTML, CSS, JavaScript, and various frontend
          frameworks. My goal is to build intuitive and responsive web
          experiences that engage users and drive results.
        </p>
        <p className="md:flex text-lg text-gray-100 mb-4 mx-5 ml-2">
          When I'm not coding, you can find me exploring new technologies,
          reading up on the latest industry trends, or working on personal
          projects to refine my skills. I believe in continuous learning and
          always strive to improve my craft.
        </p>
      </div>
    </section>
  );
};

