import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiGrid,
  FiUserPlus,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // AUTO EXPAND WHEN SWITCHING TO DESKTOP
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true); // force open on desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: <FiHome className="md:w-[22px] md:h-[22px] w-[18px] h-[18px]" />, path: "/dashboard" },
    { name: "Patients", icon: <FiUsers className="md:w-[22px] md:h-[22px] w-[18px] h-[18px]" />, path: "/patients" },
    { name: "Doctors", icon: <FiUserPlus className="md:w-[22px] md:h-[22px] w-[18px] h-[18px]" />, path: "/doctors" },
    { name: "Departments", icon: <FiGrid className="md:w-[22px] md:h-[22px] w-[18px] h-[18px]" />, path: "/departments" },
    { name: "Settings", icon: <FiSettings className="md:w-[22px] md:h-[22px] w-[18px] h-[18px]" />, path: "/settings" },
  ];

  return (
    <>
      <div
        className={`
          fixed top-0 left-0 h-screen bg-[#0D1224] z-50 text-white
          flex flex-col py-6 transition-all duration-300
          ${isOpen ? "w-[20%] min-w-[240px]" : "w-[85px]"}
          rounded-r-[15px]
        `}
      >
        {/* TOP AREA */}
        <div className="flex items-center justify-between px-4">
          
          {/* Logo responsive */}
          <div className="font-bold text-blue-500 text-xl lg:text-2xl">
            HMS
          </div>

          {/* Toggle Button - smaller + mobile only */}
          <button
            onClick={handleToggle}
            className="
              lg:hidden 
              bg-white text-black 
              p-[2px] rounded-md shadow ml-3
              flex items-center justify-center
              border border-blue-500
            "
          >
            {isOpen ? (
              <FiChevronLeft size={16} />
            ) : (
              <FiChevronRight size={16} />
            )}
          </button>
        </div>

        {/* MENU ITEMS */}
        <nav className="mt-8 flex flex-col gap-[20px]">
          {menuItems.map((item) => {
            const active = pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  relative flex items-center gap-4 
                  pl-7 pr-1 py-3 
                  w-[90%] mx-auto
                  rounded-[12px] transition-all
                  ${active ? "bg-white text-black" : "text-white hover:bg-[#1A2340]"}
                `}
              >
                {/* ICON - centered perfectly */}
                <span className="flex items-center justify-center">
                  {item.icon}
                </span>

                {isOpen && (
                  <span className={`text-[16px] ${active ? "text-black" : "text-white"}`}>
                    {item.name}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* CONTENT SPACING */}
      <div
        className={`${isOpen ? "ml-[20%]" : "ml-[80px]"} transition-all duration-300`}
      ></div>
    </>
  );
};

export default Sidebar;
