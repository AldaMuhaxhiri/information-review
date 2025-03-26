import React from "react";
import { PhoneIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="w-full p-4 md:p-6 flex flex-col md:flex-row justify-between items-center bg-white shadow-md">
      <h1 className="text-xl md:text-2xl font-bold ml-0 md:ml-64">
        <span className="text-black">K</span>
        <span className="text-blue-600">/</span>
        <span className="text-black">NET</span>
        <span className="text-blue-600">/</span>
        <span className="text-black">C</span>
      </h1>

      <div className="flex flex-wrap justify-center md:justify-end items-center text-sm md:text-lg font-semibold text-blue-900  md:mt-0">
        <span className="mr-2">Talk to a Consolidation Specialist</span>
        <PhoneIcon className="w-5 h-5 text-blue-600" />
        <span className="ml-2">(888) 888-8888</span>
      </div>
    </header>
  );
};

export default Header;
