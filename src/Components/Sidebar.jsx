import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiUsers, FiClipboard, FiSettings, FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <FiHome />, path: "/dashboard" },
    { name: "Patients", icon: <FiUsers />, path: "/patients" },
    { name: "Doctors", icon: <FiClipboard />, path: "/doctors" },
    { name: "Departments", icon: <FiClipboard />, path: "/departments" },
    { name: "Settings", icon: <FiSettings />, path: "/settings/profile" },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden flex justify-between items-center bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">HMS</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FiMenu size={28} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white h-screen p-4 flex flex-col fixed md:relative top-0 left-0 z-50
          ${isOpen ? "w-64" : "w-0"} md:w-1/5 transition-all duration-300 overflow-hidden`}
      >
        <h1 className="text-2xl font-bold mb-8 text-center hidden md:block">HMS</h1>
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-700 transition-colors ${
                location.pathname === item.path ? "bg-gray-700" : ""
              }`}
              onClick={() => setIsOpen(false)} // Close menu on mobile
            >
              {item.icon}
              <span className="hidden md:inline">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Sidebar;
