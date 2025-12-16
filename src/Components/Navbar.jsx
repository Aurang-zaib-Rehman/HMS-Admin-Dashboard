import React from "react";
import { FiBell, FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ sidebarOpen }) => {
  return (
    <div className="h-16 bg-white shadow-sm flex items-center  justify-between px-4 md:px-6 static top-0 z-40">
      
      
      <div className="flex items-center w-full justify-between">
        <div className="hidden md:block relative w-full max-w-md">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
        <div className="flex items-center gap-4  md:hidden ml-auto">
          <FiSearch size={22} className="text-gray-600 cursor-pointer" />
          <FiBell size={22} className="text-gray-600 cursor-pointer" />
          <FaUserCircle size={26} className="text-gray-700 cursor-pointer" />
        </div>

        
        <div className="hidden md:flex items-center gap-4 ml-4">
          <FiBell size={22} className="text-gray-600 cursor-pointer hover:text-blue-600" />
          <FaUserCircle size={26} className="text-gray-700 cursor-pointer hover:text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
