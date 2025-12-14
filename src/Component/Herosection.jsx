import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
function Herosection() {
  return (
    <div>
      <div className="flex mx-15 mt-10  items-center">
        <div className=" rounded-2xl h-[60vh] w-[60vw]  bg-gray-200">
          <div className="flex">
            <p className="text-5xl font-semibold leading-18 px-15 pt-15">
              DIGITAL SOLUTIONS <br /> THAT DRIVE SUCCESS
            </p>
            <FaArrowAltCircleRight
              size={45}
              className="text-violet-500 -ml-10 mt-18"
            />
            <p className="text-violet-500 text-[23px] ml-2 mt-18">
              Start a project
            </p>
          </div>
          <p className="ml-15 mt-8 text-[15px]">
            At NexGen, we belive in the transformation power of digital
            solutions. Our team of experts is dedicated to helping <br />{" "}
            businesses like yours thrive in the fast-paced digital landscape.
          </p>
          <div className="flex px-10 py-5 rounded-2xl mt-20 bg-white mx-5 text-[12px] gap-10">
            <li>Digital Markting</li>
            <li>WEBSITE DESIGN</li>
            <li>BRANDING</li>
            <li>WEBSITE DEVELOPMENT</li>
            <li>MOBILE APP DEVELOPMENT</li>
          </div>
        </div>
        <div className="w-[35vw] -mt-10 ml-5 rounded-2xl">
          <img
            src="/Screenshot 2025-12-14 223055.png"
            alt="Photo of the dashboard"
          />
          <p className="ml-7 mt-5 text-2xl">ESTATEIN REAL ESTATE</p>
          <p className="ml-7 text-[13px]">Web Development.</p>
        </div>
      </div>
      <div className="border border-gray-300 p-5 gap-5 rounded-2xl mx-15 flex mt-3 justify-between items-center">
        <div className="h-[13vh] w-[15vw] rounded-2xl bg-gray-300 ">
            <p className="text-center text-[15px] pt-5">CLIENTS<br/><span className="text-4xl text-violet-600 font-bold">200+</span></p>
        </div>
        <div className="h-[13vh] w-[15vw] rounded-2xl bg-gray-300 ">
            <p className="text-center text-[15px] pt-5">PROJECTS<br/><span className="text-4xl text-violet-600 font-bold">280+</span></p>
        </div>
        <div className="h-[13vh] w-[15vw] rounded-2xl bg-gray-300 ">
            <p className="text-center text-[15px] pt-5">HAPPY CLIENTS<br/><span className="text-4xl text-violet-600 font-bold">100%</span></p>
        </div>
        <div className="h-[13vh] w-[15vw] rounded-2xl bg-gray-300 ">
            <p className="text-center text-[15px] pt-5">FOLLOWER<br/><span className="text-4xl text-violet-600 font-bold">420K</span></p>
        </div>
        <div className="h-[13vh] w-[15vw] rounded-2xl bg-gray-300 ">
            <p className="text-center text-[15px] pt-5">Years of Experiance<br/><span className="text-4xl text-violet-600 font-bold">10+</span></p>
        </div>
        <div className="h-[13vh] w-[15vw] rounded-2xl bg-gray-300 ">
            <p className="text-center text-[15px] pt-5">Know More<br/><span className="text-4xl text-violet-600 font-bold"><FaLocationArrow className="ml-18 mt-2"/></span></p>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
