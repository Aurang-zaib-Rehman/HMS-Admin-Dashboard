// import React from "react";
// import { FiUsers, FiUser, FiPhone, FiMapPin, FiEye } from "react-icons/fi";

// const DepartmentCard = ({ dept }) => {
//   const occupancy =
//     ((dept.totalBeds - dept.availableBeds) / dept.totalBeds) * 100;

//   return (
//     <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden w-full">
      
//       {/* Header */}
//       <div className="bg-blue-600 p-5 flex items-center gap-4 text-white">
//         <img
//           src={dept.hodImage}
//           alt="hod"
//           className="w-14 h-14 rounded-full border-2 border-white"
//         />
//         <div>
//           <p className="text-sm opacity-90">HOD</p>
//           <p className="text-lg font-semibold">{dept.hodName}</p>
//           <p className="text-sm opacity-90">{dept.department}</p>
//         </div>
//       </div>

//       {/* Body */}
//       <div className="p-5 space-y-4">

//         {/* Doctors */}
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-2 text-gray-700">
//             <FiUser className="text-gray-500" /> Doctors
//           </div>
//           <p className="font-semibold">{dept.doctors}</p>
//         </div>

//         {/* Patients */}
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-2 text-gray-700">
//             <FiUsers className="text-gray-500" /> Patients
//           </div>
//           <p className="font-semibold">{dept.patients}</p>
//         </div>

//         {/* Available Beds */}
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-2 text-gray-700">
//             🛏 Available Beds
//           </div>
//           <p className="font-semibold">
//             {dept.availableBeds} / {dept.totalBeds}
//           </p>
//         </div>

//         {/* Bed Occupancy Progress */}
//         <div>
//           <p className="text-sm text-gray-600 mb-1">Bed Occupancy</p>
//           <div className="w-full bg-gray-200 h-2 rounded-lg">
//             <div
//               className="h-2 bg-orange-500 rounded-lg"
//               style={{ width: `${Math.floor(occupancy)}%` }}
//             ></div>
//           </div>
//           <p className="text-right text-sm text-gray-600 mt-1">
//             {Math.floor(occupancy)}%
//           </p>
//         </div>

//         {/* Address */}
//         <div className="flex items-center gap-2 text-gray-700">
//           <FiMapPin className="text-gray-500" />
//           {dept.location}
//         </div>

//         {/* Phone */}
//         <div className="flex items-center gap-2 text-gray-700">
//           <FiPhone className="text-gray-500" />
//           {dept.phone}
//         </div>

//         {/* Footer */}
//         <div className="pt-3">
//           <button className="w-full flex items-center justify-center gap-2 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 font-medium">
//             <FiEye /> View Details
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DepartmentCard;















import React from 'react'

function DepartmentCard() {
  return (
    <div>
      
    </div>
  )
}

export default DepartmentCard















// import React from "react";
// import { FiUsers, FiUser, FiPhone, FiMapPin, FiEye } from "react-icons/fi";

// const DepartmentCard = ({ dept }) => {
//   const bedOccupancyPercent = Math.floor(
//     ((dept.totalBeds - dept.availableBeds) / dept.totalBeds) * 100
//   );

//   return (
//     <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden w-full">
//       {/* Header */}
//       <div className="bg-blue-600 p-5 flex items-center gap-4 text-white">
//         <img
//           src={dept.hodImage}
//           alt="hod"
//           className="w-14 h-14 rounded-full border-2 border-white"
//         />
//         <div>
//           <p className="text-sm opacity-90">HOD</p>
//           <p className="text-lg font-semibold">{dept.hodName}</p>
//           <p className="text-sm opacity-90">{dept.department}</p>
//         </div>
//       </div>

//       {/* Body */}
//       <div className="p-5 space-y-4">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-2 text-gray-700">
//             <FiUser className="text-gray-500" /> Doctors
//           </div>
//           <p className="font-semibold">{dept.doctors}</p>
//         </div>

//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-2 text-gray-700">
//             <FiUsers className="text-gray-500" /> Patients
//           </div>
//           <p className="font-semibold">{dept.patients}</p>
//         </div>

//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-2 text-gray-700">🛏 Available Beds</div>
//           <p className="font-semibold">
//             {dept.availableBeds} / {dept.totalBeds}
//           </p>
//         </div>

//         {/* Bed Occupancy */}
//         <div>
//           <p className="text-sm text-gray-600 mb-1">Bed Occupancy</p>
//           <div className="w-full bg-gray-200 h-2 rounded-lg">
//             <div
//               className="h-2 bg-orange-500 rounded-lg"
//               style={{ width: `${bedOccupancyPercent}%` }}
//             ></div>
//           </div>
//         </div>

//         <div className="flex items-center gap-2 text-gray-700">
//           <FiMapPin className="text-gray-500" /> {dept.location}
//         </div>

//         <div className="flex items-center gap-2 text-gray-700">
//           <FiPhone className="text-gray-500" /> {dept.phone}
//         </div>

//         <div className="pt-3">
//           <button className="w-full flex items-center justify-center gap-2 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 font-medium">
//             <FiEye /> View Details
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DepartmentCard;
