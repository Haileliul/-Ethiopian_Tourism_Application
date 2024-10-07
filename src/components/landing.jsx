import React from "react";
import { Link } from "react-router-dom";
import Images from "../assets/images";

function landing() {
  return (
    <div
      className="text-white h-[400px] md:h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${Images.lalibela})` }}
    >
      {/* Overlay */}
      <div className="absolute h-[400px] md:h-[600px] inset-0 bg-black opacity-30"></div>
      <div className="relative container mx-auto">
        <div className="pt-20 flex flex-col justify-between ">
          <div className="self-center flex flex-col items-center justify-center">
            <p className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-extrabold ">
              Discover <span className="text-green-500 m-0 p-0">Eth</span>
              <span className="text-yellow-500 m-0 p-0">io</span>
              <span className="sm text-red-500 m-0 p-0">pia </span>
            </p>
            <p className="text-[10px] sm:text-sm sm:block md:text-lg lg:text-xl">
              The Land of Origins, Culture, and Timeless Beauty
            </p>
          </div>
          <div className="hidden h-[300px]  mt-20 md:flex justify-between items-center">
            <img
              src={Images.map2}
              alt=""
              className="h-[250px] transform-gpu hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-in-out"
            />
            <Link to="/about">
              <button className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium  bg-orange-500 shadow-lg mt-10 px-4 py-2 mr-20 rounded-lg tracking-wide text-white hover:cursor-pointer ">
                About Us
              </button>
            </Link>
          </div>
          <div className="flex h-[100px]  mt-10 md:hidden justify-center items-center">
            <Link to="/about">
              <button className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium  bg-orange-500 shadow-lg mt-10 px-4 py-2 rounded-lg tracking-wide text-white hover:cursor-pointer ">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default landing;
