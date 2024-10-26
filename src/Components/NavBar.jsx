import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-sky-500 flex justify-center items-center gap-20 text-white text-lg font-medium">
        <div>ARG</div>
        <div className=" list-none h-20 flex items-center justify-center gap-24 p-4 t">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Page</li>
        </div>
        <div>
          <button className="bg-cyan-400 px-5 py-3 rounded-md">
            Contact Us
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
