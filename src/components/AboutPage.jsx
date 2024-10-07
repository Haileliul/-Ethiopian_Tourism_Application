import React from "react";
import { Link } from "react-router-dom";
import Images from "../assets/images";

function AboutPage() {
  return (
    <div className=" pt-16">
      <div
        className="bg-cover  bg-bottom h-[300px] md:h-[400px]"
        style={{ backgroundImage: `url(${Images.fassil})` }}
      >
        {/* Overlay */}
        <div className="absolute h-[300px] md:h-[400px] w-full  bg-black opacity-30"></div>
        <div className="relative container mx-auto">
          <div className="flex flex-col justify-center items-start h-[300px] md:h-[400px] text-white ">
            <p className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-extrabold ">
              About Us
            </p>
            <p className="md:text-lg lg:text-xl">
              We specialize in providing unforgettable experiences in Ethiopia,
              from breathtaking landscapes to rich cultural heritage.
            </p>
            <Link to="/">
              <button className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium  bg-orange-500 shadow-lg mt-10 px-4 py-2 rounded-lg tracking-wide text-white hover:cursor-pointer ">
                HOME
              </button>
            </Link>
          </div>
          <div className="h-[300px] md:h-[400px]">
            this is place after about page
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
