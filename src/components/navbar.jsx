import React from "react";

function navbar({ logo }) {
  return (
    <div>
      <div className="w-screen fixed top-0 z-10 bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto  ">
          <div className=" flex items-center justify-between  h-[70px] px-5 md:px-0 lg:px-0  ">
            <div className="flex gap-4 ">
              <img src={logo} alt="Logo" className="w-20" />
              <p className="self-center">
                <span className="text-green-500">ETH</span>
                <span className="text-yellow-500">IO</span>
                <span className="text-red-500">PIA</span>
              </p>
            </div>
            <div className="text-black dark:text-white">
              <ul className="flex text-lg font-bold gap-10 mr-5 ">
                <li>Home</li>
                <li>About</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default navbar;
