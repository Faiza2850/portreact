import React from "react";

export const Navbar = () => {
  return (
    <>
    <section className="fixed- top-0, max-w-full ">
      <div className="text-center sm:text-left container mx-auto px-9 py-2 flex justify-between items-center bg-gray-800 text-white">
        <div className="left">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          
        </div>
        <div className="right flex space-x-4">
          <a href="#" className="nav_items hover:text-gray-400">
            Home
          </a>
          <a href="#" className="nav_items hover:text-gray-400">
            About
          </a>
          <a href="#" className="nav_items hover:text-gray-400">
            Skills
          </a>
          <a href="#" className="nav_items hover:text-gray-400">
            Projects
          </a>
          <a href="#" className="nav_items hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>
      </section>
    </>
  );
};
