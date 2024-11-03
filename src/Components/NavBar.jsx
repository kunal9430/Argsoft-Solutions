import React from "react";
import HeroSection from "./HeroSection";

const NavBar = () => {
  return (
    <div className="relative w-full h-fit flex items-center justify-center">
    <video className="absolute top-0 -z-30 h-[100%] w-full object-cover">
      <source src="https://res.cloudinary.com/devxykr37/video/upload/f_auto:video,q_auto/v1/SWS/Animation/n56snbmr0hrptawoqowx" />
    </video>
    <div className="w-full">
      <nav className="flex flex-row justify-center gap-[9%] items-center w-full h-auto bg-sky-600 bg-opacity-15 font-mono border-b-4 border-b-indigo-500 text-white text-lg font-medium p-2.5">
      <div>
            <a href="/">
              <img
                alt="Logo"
                className="h-16 w-16"
                src="/logo.jpeg"
              />
            </a>
          </div>
          <div className=" list-none h-fit flex items-center justify-center gap-7 p-4">
            <a href="/"><li>Home</li></a>
            <a href="/"><li>Products</li></a>
            <a href="/"><li>Services</li></a>
            <a href="/"><li>About Us</li></a>
            <a href="/"><li>Portfolio</li></a>
            <a href="/"><li>Careers</li></a>
            <a href="/"><li>Blogs</li></a>
          </div>
          <button className="bg-indigo-600 text-white leading-6 font-medium py-2 px-3 rounded-lg">Contact Us</button>
      </nav> 
      <HeroSection/>
    </div>
    </div>
  );
};

export default NavBar;
