// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const DepartmentsList = () => {
//   const [search, setSearch] = useState("");

//   const departments = [
//     {
//       id: 1,
//       name: "Cardiology",
//       doctors: 12,
//       patients: 25,
//       image: "/assets/images/cardiology.png",
//     },
//     {
//       id: 2,
//       name: "Neurology",
//       doctors: 8,
//       patients: 18,
//       image: "/assets/images/neurology.png",
//     },
//     {
//       id: 3,
//       name: "Orthopedics",
//       doctors: 5,
//       patients: 11,
//       image: "/assets/images/ortho.png",
//     },
//     {
//       id: 4,
//       name: "Gynecology",
//       doctors: 7,
//       patients: 20,
//       image: "/assets/images/gynecology.png",
//     },
//   ];

//   // Filter departments based on search
//   const filtered = departments.filter((dept) =>
//     dept.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="w-full">

//       {/* ---- PAGE HEADER ---- */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">Departments</h1>

//         <Link
//           to="/departments/add"
//           className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow-md transition-all"
//         >
//           + Add Department
//         </Link>
//       </div>

//       {/* ---- SEARCH BAR ---- */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Search Department..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//         />
//       </div>

//       {/* ---- DEPARTMENTS GRID ---- */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

//         {filtered.map((dept) => (
//           <div
//             key={dept.id}
//             className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100"
//           >
//             {/* Image */}
//             <div className="flex justify-center">
//               <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center">
//                 <img src={dept.image} alt={dept.name} className="h-14 w-14" />
//               </div>
//             </div>

//             {/* Name */}
//             <h3 className="text-xl font-semibold mt-5 text-center text-gray-800">
//               {dept.name}
//             </h3>

//             {/* Doctors & Patients */}
//             <p className="text-center text-gray-500 mt-2">
//               {dept.doctors} Doctors • {dept.patients} Patients
//             </p>

//             {/* View Button */}
//             <div className="mt-5 flex justify-center">
//               <button className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-all">
//                 View Details
//               </button>
//             </div>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// };

// export default DepartmentsList;








// import React, { useState } from "react";
// import { FiSearch, FiPlus } from "react-icons/fi";
// import DepartmentCard from "./DepartmentCard";

// const DepartmentsList = () => {
//   const [departments] = useState([
//     {
//       hodName: "Dr. Maria Garcia",
//       hodImage: "https://i.pravatar.cc/100?img=47",
//       department: "Oncology",
//       doctors: 9,
//       patients: 41,
//       availableBeds: 7,
//       totalBeds: 32,
//       location: "Building C, Floor 3",
//       phone: "+1 234 567 8907",
//     },
//     // Add more departments here...
//   ]);

//   return (
//     <div className="p-6">

//       {/* Page Header */}
//       <h1 className="text-3xl font-semibold">Department Management</h1>
//       <p className="text-gray-600 mt-1">
//         Manage and monitor all hospital departments
//       </p>

//       {/* Top Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">

//         {/* Total Departments */}
//         <div className="p-5 bg-white shadow-md rounded-xl border border-gray-100">
//           <p className="text-gray-600">Total Departments</p>
//           <p className="text-3xl font-bold mt-2">{departments.length}</p>
//         </div>

//         {/* Total Doctors */}
//         <div className="p-5 bg-white shadow-md rounded-xl border border-gray-100">
//           <p className="text-gray-600">Total Doctors</p>
//           <p className="text-3xl font-bold mt-2">
//             {departments.reduce((t, d) => t + d.doctors, 0)}
//           </p>
//         </div>

//         {/* Total Patients */}
//         <div className="p-5 bg-white shadow-md rounded-xl border border-gray-100">
//           <p className="text-gray-600">Total Patients</p>
//           <p className="text-3xl font-bold mt-2">
//             {departments.reduce((t, d) => t + d.patients, 0)}
//           </p>
//         </div>

//         {/* Available Beds */}
//         <div className="p-5 bg-white shadow-md rounded-xl border border-gray-100">
//           <p className="text-gray-600">Available Beds</p>
//           <p className="text-3xl font-bold mt-2">
//             {departments.reduce((t, d) => t + d.availableBeds, 0)} /
//             {departments.reduce((t, d) => t + d.totalBeds, 0)}
//           </p>
//         </div>
//       </div>

//       {/* Search + Add */}
//       <div className="flex items-center gap-4 mt-6 bg-white p-4 rounded-xl shadow-md border border-gray-100">
//         <div className="flex items-center gap-2 flex-grow">
//           <FiSearch className="text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search departments or department head..."
//             className="w-full outline-none"
//           />
//         </div>

//         <button className="px-5 py-2 bg-blue-600 text-white flex items-center gap-2 rounded-lg hover:bg-blue-700">
//           <FiPlus /> Add Department
//         </button>
//       </div>

//       {/* Department Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
//         {departments.map((d, i) => (
//           <DepartmentCard key={i} dept={d} />
//         ))}
//       </div>

//     </div>
//   );
// };

// export default DepartmentsList;













// import React, { useState } from "react";
// import { FiSearch, FiPlus } from "react-icons/fi";
// import DepartmentCard from "../pages/Departments/DepartmentCard.jsx"; // ✅ Correct path

// const DepartmentsList = () => {
//   const [departments] = useState([
//     {
//       hodName: "Dr. Maria Garcia",
//       hodImage: "https://i.pravatar.cc/100?img=47",
//       department: "Oncology",
//       doctors: 9,
//       patients: 41,
//       availableBeds: 7,
//       totalBeds: 32,
//       location: "Building C, Floor 3",
//       phone: "+1 234 567 8907",
//     },
//     {
//       hodName: "Dr. John Smith",
//       hodImage: "https://i.pravatar.cc/100?img=12",
//       department: "Cardiology",
//       doctors: 12,
//       patients: 30,
//       availableBeds: 5,
//       totalBeds: 25,
//       location: "Building A, Floor 1",
//       phone: "+1 234 567 8910",
//     },
//   ]);

//   return (
//     <div className="p-6">
//       {/* Page Header */}
//       <h1 className="text-3xl font-semibold">Department Management</h1>
//       <p className="text-gray-600 mt-1">
//         Manage and monitor all hospital departments
//       </p>

//       {/* Top Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
//         <div className="p-5 bg-white shadow-md rounded-xl border border-gray-100">
//           <p className="text-gray-600">Total Departments</p>
//           <p className="text-3xl font-bold mt-2">{departments.length}</p>
//         </div>
//         <div className="p-5 bg-white shadow-md rounded-xl border border-gray-100">
//           <p className="text-gray-600">Total Doctors</p>
//           <p className="text-3xl font-bold mt-2">
//             {departments.reduce((t, d) => t + d.doctors, 0)}
//           </p>
//         </div>
//         <div className="p-5 bg-white shadow-md rounded-xl border border-gray-100">
//           <p className="text-gray-600">Total Patients</p>
//           <p className="text-3xl font-bold mt-2">
//             {departments.reduce((t, d) => t + d.patients, 0)}
//           </p>
//         </div>
//         <div className="p-5 bg-white shadow-md rounded-xl border border-gray-100">
//           <p className="text-gray-600">Available Beds</p>
//           <p className="text-3xl font-bold mt-2">
//             {departments.reduce((t, d) => t + d.availableBeds, 0)} /{" "}
//             {departments.reduce((t, d) => t + d.totalBeds, 0)}
//           </p>
//         </div>
//       </div>

//       {/* Search + Add */}
//       <div className="flex items-center gap-4 mt-6 bg-white p-4 rounded-xl shadow-md border border-gray-100">
//         <div className="flex items-center gap-2 flex-grow">
//           <FiSearch className="text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search departments or department head..."
//             className="w-full outline-none"
//           />
//         </div>
//         <button className="px-5 py-2 bg-blue-600 text-white flex items-center gap-2 rounded-lg hover:bg-blue-700">
//           <FiPlus /> Add Department
//         </button>
//       </div>

//       {/* Department Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
//         {departments.map((d, i) => (
//           <DepartmentCard key={i} dept={d} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DepartmentsList;




import React from 'react'

function DepartmentsList() {
  return (
    <div>
      
    </div>
  )
}

export default DepartmentsList
