import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlog,
  faHome,
  faRoad,
  faS,
  faUserTie,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard, faChartBar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [hover, setHover] = useState(0);
  const [displayValue, setdisplayValue] = useState("hidden");
  return (
      <div className="w-full bg-indigo-800 bg-opacity-30">
        <div className="border-b-4 border-b-indigo-500 w-full xl:flex xl:justify-center xl:items-center h-32">
          <nav className="xl:w xl:w-[1240px] flex flex-row justify-between xl:gap-32 items-center h-full bg-opacity-0 font-mono text-white text-lg font-medium p-2.5">
            <div>
              <Link to="/">
                <img
                  alt="Logo"
                  className="h-[68px] w-[68px]"
                  src="/logo.jpeg"
                />
              </Link>
            </div>

            <div className=" list-none h-fit items-center justify-center l:gap-7 gap-4 hidden l:flex">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/OurProducts">
                <li>Products</li>
              </Link>
              <Link to="/OurServices">
                <li>Services</li>
              </Link>
              <Link to="/AboutUs">
                <li>About Us</li>
              </Link>
              <Link to="/Portfolio">
                <li>Portfolio</li>
              </Link>
              <Link to="/Careers">
                <li>Careers</li>
              </Link>
              <Link to="/Blogs">
                <li>Blogs</li>
              </Link>
            </div>

            <div className=" l:hidden flex flex-col">
              <div className="list-none hidden sm:flex gap-6 w-fit">
                <Link to="/">
                  <li
                    onMouseEnter={() => setHover(1)}
                    onMouseLeave={() => setHover(0)}
                    className="flex flex-col"
                  >
                    <FontAwesomeIcon
                      icon={faHome}
                      className="relative text-3xl"
                    />
                    <span className="absolute top-20">
                      {hover == 1 && "Home"}
                    </span>
                  </li>
                </Link>
                <Link to="/OurProducts">
                  <li
                    onMouseEnter={() => setHover(2)}
                    onMouseLeave={() => setHover(0)}
                    className="flex flex-col"
                  >
                    <FontAwesomeIcon
                      icon={faProductHunt}
                      className="relative text-3xl"
                    />
                    <span className="absolute top-20">
                      {hover == 2 && "Products"}
                    </span>
                  </li>
                </Link>
                <Link to="/OurServices">
                  <li
                    onMouseEnter={() => setHover(3)}
                    onMouseLeave={() => setHover(0)}
                    className="flex flex-col"
                  >
                    <FontAwesomeIcon icon={faS} className="relative text-3xl" />
                    <span className="absolute top-20">
                      {hover == 3 && "Services"}
                    </span>
                  </li>
                </Link>
                <Link to="/AboutUs">
                  <li
                    onMouseEnter={() => setHover(4)}
                    onMouseLeave={() => setHover(0)}
                    className="flex flex-col"
                  >
                    <FontAwesomeIcon
                      icon={faAddressCard}
                      className="relative text-3xl"
                    />
                    <span className="absolute top-20">
                      {hover == 4 && "About us"}
                    </span>
                  </li>
                </Link>
                <Link to="/Portfolio">
                  <li
                    onMouseEnter={() => setHover(5)}
                    onMouseLeave={() => setHover(0)}
                    className="flex flex-col"
                  >
                    <FontAwesomeIcon
                      icon={faUserTie}
                      className="relative text-3xl"
                    />
                    <span className="absolute top-20">
                      {hover == 5 && "Portfolio"}
                    </span>
                  </li>
                </Link>
                <Link to="/Careers">
                  <li
                    onMouseEnter={() => setHover(6)}
                    onMouseLeave={() => setHover(0)}
                    className="flex flex-col"
                  >
                    <FontAwesomeIcon
                      icon={faRoad}
                      className="relative text-3xl"
                    />
                    <span className="absolute top-20">
                      {hover == 6 && "Careers"}
                    </span>
                  </li>
                </Link>
                <Link to="/Blogs">
                  <li
                    onMouseEnter={() => setHover(7)}
                    onMouseLeave={() => setHover(0)}
                    className="flex flex-col"
                  >
                    <FontAwesomeIcon
                      icon={faBlog}
                      className="relative text-3xl"
                    />
                    <span className="absolute top-20">
                      {hover == 7 && "Blog"}
                    </span>
                  </li>
                </Link>
              </div>
            </div>

            <button className="bg-indigo-600 text-white leading-6 font-medium py-2 px-3 rounded-lg hidden sm:flex">
              Contact Us
            </button>

            <button
              onClick={() =>
                displayValue ? setdisplayValue("") : setdisplayValue("hidden")
              }
              className="text-3xl flex sm:hidden"
            >
              {displayValue ? (
                <FontAwesomeIcon
                  icon={faChartBar}
                  className="relative text-3xl"
                />
              ) : (
                <FontAwesomeIcon icon={faX} className="relative text-3xl" />
              )}
            </button>

            <div
              className={`z-20 absolute top-[2px] left-0 border-2 bg-indigo-800 h-screen w-[80%] bg-opacity-95 ${displayValue} sm:hidden`}
            >
              <div className="list-none">
                <div onClick={() => displayValue ? setdisplayValue("") : setdisplayValue("hidden")} >
                  <Link to="/">
                    <li className="p-2.5 pl-4 flex justify-between text-2xl items-center hover:bg-indigo-600">
                      <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                      <span></span>
                    </li>
                  </Link>
                  <Link to="/OurProducts">
                    <li className="p-2.5 pl-4 flex justify-between text-2xl items-center hover:bg-indigo-600">
                      <FontAwesomeIcon icon={faProductHunt} />{" "}
                      <span>Products</span>
                      <span></span>
                    </li>
                  </Link>
                  <Link to="/OurServices">
                    <li className="p-2.5 pl-4 flex justify-between text-2xl items-center hover:bg-indigo-600">
                      <FontAwesomeIcon icon={faS} /> <span>Services</span>
                      <span></span>
                    </li>
                  </Link>
                  <Link to="/AboutUs">
                    <li className="p-2.5 pl-4 flex justify-between text-2xl items-center hover:bg-indigo-600">
                      <FontAwesomeIcon icon={faAddressCard} />{" "}
                      <span>About Us</span>
                      <span></span>
                    </li>
                  </Link>
                  <Link to="/Portfolio">
                    <li className="p-2.5 pl-4 flex justify-between text-2xl items-center hover:bg-indigo-600">
                      <FontAwesomeIcon icon={faUserTie} /> <span>Portfolio</span>
                      <span></span>
                    </li>
                  </Link>
                  <Link to="/Careers">
                    <li className="p-2.5 pl-4 flex justify-between text-2xl items-center hover:bg-indigo-600">
                      <FontAwesomeIcon icon={faRoad} /> <span>Careers</span>
                      <span></span>
                    </li>
                  </Link>
                  <Link to="/Blogs">
                    <li className="p-2.5 pl-4 flex justify-between items-center text-2xl hover:bg-indigo-600">
                      <FontAwesomeIcon icon={faBlog} /> <span>Blogs</span>
                      <span></span>
                    </li>
                  </Link>
                </div>
                
                <div className="flex flex-col gap-2">
                  <button onClick={() => displayValue ? setdisplayValue("") : setdisplayValue("hidden")} className="bg-indigo-600 text-white leading-6 font-medium py-2 px-3 rounded-lg w-fit m-auto my-4">
                    Contact Us
                  </button>
                  <span className="text-white text-lg text-center">
                    2024 Motto Solutions. All Rights Reserved
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
  );
};

export default NavBar;
