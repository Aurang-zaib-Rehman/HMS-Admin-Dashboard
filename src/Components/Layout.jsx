import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-0">
        <Navbar />
        <div className="p-4 md:p-6 bg-gray-100 flex-1 min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;

