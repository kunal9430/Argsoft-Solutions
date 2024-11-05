import React, { useState } from "react";
import HeroSection from "./HeroSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faHome, faRoad, faS, faUserTie, faX } from "@fortawesome/free-solid-svg-icons";
import { faProductHunt} from "@fortawesome/free-brands-svg-icons";
import { faAddressCard, faChartBar } from "@fortawesome/free-regular-svg-icons";

const NavBar = () => {

  const [hover, setHover] = useState(0)
  const [displayValue, setdisplayValue] = useState("hidden")
  return (
    <div className="relative w-full h-fit flex items-center justify-center">
      <video muted loop autoPlay className="absolute top-0 -z-30 h-[100%] w-full object-cover" src="./public/istockphoto-1315161903-640_adpp_is.mp4" />
      <div className="w-full">

        <div className="border-b-4 bg-indigo-800 bg-opacity-30 border-b-indigo-500 w-full xl:flex xl:justify-center xl:items-center h-32">

          <nav className="xl:w xl:w-[1240px] flex flex-row justify-between xl:gap-32 items-center h-full bg-opacity-0 font-mono text-white text-lg font-medium p-2.5">
          
              <div>
                <a href="/">
                  <img
                    alt="Logo"
                    className="h-[68px] w-[68px]"
                    src="/logo.jpeg"
                  />
                </a>
              </div>

              <div className=" list-none h-fit items-center justify-center l:gap-7 gap-4 hidden l:flex">
                <a href="/"><li>Home</li></a>
                <a href="/"><li>Products</li></a>
                <a href="/"><li>Services</li></a>
                <a href="/"><li>About Us</li></a>
                <a href="/"><li>Portfolio</li></a>
                <a href="/"><li>Careers</li></a>
                <a href="/"><li>Blogs</li></a>
              </div>

              <div className=" l:hidden flex flex-col">
                <div className="list-none hidden sm:flex gap-6 w-fit">
                  <a href="/">
                    <li onMouseEnter={()=>setHover(1)} onMouseLeave={()=>setHover(0)} className="flex flex-col">
                      <FontAwesomeIcon icon={faHome} className="text-3xl hover:text-indigo-400" /> 
                      <span>{(hover==1)&&"Home"}</span>
                    </li>
                  </a>
                  <a href="/">
                    <li onMouseEnter={()=>setHover(2)} onMouseLeave={()=>setHover(0)} className="flex flex-col">
                      <FontAwesomeIcon icon={faProductHunt} className="text-3xl hover:text-indigo-400" />
                      <span>{(hover==2)&&"Products"}</span>
                    </li>
                  </a>
                  <a href="/">
                    <li onMouseEnter={()=>setHover(3)} onMouseLeave={()=>setHover(0)} className="flex flex-col">
                      <FontAwesomeIcon icon={faS} className="text-3xl hover:text-indigo-400" />
                      <span>{(hover==3)&&"Services"}</span>
                    </li>
                  </a>
                  <a href="/">
                    <li onMouseEnter={()=>setHover(4)} onMouseLeave={()=>setHover(0)} className="flex flex-col">
                      <FontAwesomeIcon icon={faAddressCard} className="text-3xl hover:text-indigo-400" />
                      <span>{(hover==4)&&"About Us"}</span>
                    </li>
                  </a>
                  <a href="/">
                    <li onMouseEnter={()=>setHover(5)} onMouseLeave={()=>setHover(0)} className="flex flex-col">
                      <FontAwesomeIcon icon={faUserTie} className="text-3xl hover:text-indigo-400" />
                      <span>{(hover==5)&&"Portfolio"}</span>
                    </li>
                  </a>
                  <a href="/">
                    <li onMouseEnter={()=>setHover(6)} onMouseLeave={()=>setHover(0)} className="flex flex-col">
                      <FontAwesomeIcon icon={faRoad} className="text-3xl hover:text-indigo-400" />
                      <span>{(hover==6)&&"Careers"}</span>
                    </li>
                  </a>
                  <a href="/">
                    <li onMouseEnter={()=>setHover(7)} onMouseLeave={()=>setHover(0)} className="flex flex-col">
                      <FontAwesomeIcon icon={faBlog} className="text-3xl hover:text-indigo-400" />
                      <span>{(hover==7)&&"Blog"}</span>
                    </li>
                  </a>
                </div>
              </div>

              <button className="bg-indigo-600 text-white leading-6 font-medium py-2 px-3 rounded-lg hidden sm:flex">Contact Us</button>

              <button onClick={()=> displayValue?setdisplayValue(""):setdisplayValue("hidden")} className="text-3xl flex sm:hidden"  href="/">{displayValue?<FontAwesomeIcon icon={faChartBar} className="text-3xl hover:text-indigo-400"/>:<FontAwesomeIcon icon={faX} className="text-3xl hover:text-indigo-400" />}</button>

              <div className={`absolute top-[2px] left-0 border-2 bg-indigo-800 h-screen w-[80%] bg-opacity-95 ${displayValue} sm:hidden`}>
                <div className="list-none ">
                  <a href="/"><li className="p-2.5 pl-4 flex justify-between text-2xl items-center hover:bg-indigo-600"><FontAwesomeIcon icon={faHome} /> <span>Home</span><span></span></li></a>
                  <a href="/"><li className="p-2.5 pl-4 flex justify-between text-2xl items-center hover:bg-indigo-600"><FontAwesomeIcon icon={faProductHunt} /> <span>Products</span><span></span></li></a>
                  <a href="/"><li className="p-2.5 pl-4 flex justify-between text-2xl items-center hover:bg-indigo-600"><FontAwesomeIcon icon={faS} /> <span>Services</span><span></span></li></a>
                  <a href="/"><li className="p-2.5 pl-4 flex justify-between text-2xl items-center hover:bg-indigo-600"><FontAwesomeIcon icon={faAddressCard} /> <span>About Us</span><span></span></li></a>
                  <a href="/"><li className="p-2.5 pl-4 flex justify-between text-2xl items-center hover:bg-indigo-600"><FontAwesomeIcon icon={faUserTie} /> <span>Portfolio</span><span></span></li></a>
                  <a href="/"><li className="p-2.5 pl-4 flex justify-between text-2xl items-center hover:bg-indigo-600"><FontAwesomeIcon icon={faRoad} /> <span>Careers</span><span></span></li></a>
                  <a href="/"><li className="p-2.5 pl-4 flex justify-between items-center text-2xl hover:bg-indigo-600"><FontAwesomeIcon icon={faBlog} /> <span>Blogs</span><span></span></li></a>
                  <div className="flex flex-col gap-2">
                    <button className="bg-indigo-600 text-white leading-6 font-medium py-2 px-3 rounded-lg w-fit m-auto my-4">Contact Us</button>
                    <span className="text-white text-lg text-center">2024 Motto Solutions. All Rights Reserved</span>
                  </div>
                </div>
              </div>
          </nav> 
        </div>
        <HeroSection/>
      </div>
    </div>
  );
};

export default NavBar;
