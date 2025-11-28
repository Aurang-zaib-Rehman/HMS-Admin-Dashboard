import React from "react";
import { FiBell, FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="h-[100px] bg-white shadow-md flex items-center justify-between px-4 md:px-6">
      
      {/* Search Bar */}
      <div className="flex items-center w-full md:w-1/3 relative">
        <FiSearch className="absolute left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-4 md:gap-6 mt-2 md:mt-0">
        <FiBell size={24} className="text-gray-700 cursor-pointer" />
        <FaUserCircle size={28} className="text-gray-700 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
