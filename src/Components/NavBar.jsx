import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-indigo-900 flex justify-center items-center font-mono py-2.5 border-solid border-b-4 border-b-indigo-50 text-sm">
        <div className="flex justify-between items-center gap-24 text-white text-lg font-medium p-2.5">
          <div>
            <a href="/">
              <img
                alt="Logo"
                className="h-16 w-16"
                src="../../public/logo.jpeg"
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
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
