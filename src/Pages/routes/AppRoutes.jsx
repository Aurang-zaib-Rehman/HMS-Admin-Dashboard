





// import React from "react";
// import { Routes, Route } from "react-router-dom";

// // Layout
// import Layout from "../../Components/Layout.jsx";

// // Auth
// import Login from "../Auth/Login.jsx";
// import Signup from "../Auth/Signup.jsx";

// // Dashboard
// import Dashboard from "../dashboard/Dashboard";

// // Patients
// import PatientsList from "../Patients/PatientsList";
// import AddPatients from "../Patients/AddPatients";
// import EditPatients from "../Patients/EditPatients";

// // Doctors
// import DoctorsList from "../Doctors/DoctorsList";
// import AddDoctors from "../Doctors/AddDoctors";
// import EditDoctors from "../Doctors/EditDoctors";

// // Departments
// import DepartmentsList from "../Departments/DepartmentsList";
// import AddDepartments from "../Departments/AddDepartments";

// // Settings
// import ProfileSettings from "../Settings/ProfileSettings";

// const AppRoutes = ({ patients, setPatients, doctors, setDoctors }) => {
//   return (
//     <Routes>

//       {/* ---- Public routes (no layout) ---- */}
//       <Route path="/" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />

//       {/* ---- Protected / Layout routes ---- */}
//       <Route element={<Layout />}>

//         {/* Dashboard */}
//         <Route path="/dashboard" element={<Dashboard />} />

//         {/* Patients */}
//         <Route path="/patients" element={<PatientsList patients={patients} setPatients={setPatients} />} />
//         <Route path="/patients/add" element={<AddPatients patients={patients} setPatients={setPatients} />} />
//         <Route path="/patients/edit/:id" element={<EditPatients patients={patients} setPatients={setPatients} />} />

//         {/* Doctors */}
//         <Route path="/doctors" element={<DoctorsList doctors={doctors} setDoctors={setDoctors} />} />
//         <Route path="/doctors/add" element={<AddDoctors doctors={doctors} setDoctors={setDoctors} />} />
//         <Route path="/doctors/edit/:id" element={<EditDoctors doctors={doctors} setDoctors={setDoctors} />} />

//         {/* Departments */}
//         <Route path="/departments" element={<DepartmentsList />} />
//         <Route path="/departments/add" element={<AddDepartments />} />

//         {/* Settings */}
//         <Route path="/settings/profile" element={<ProfileSettings />} />

//       </Route>

//       {/* 404 */}
//       <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      
//     </Routes>
//   );
// };

// export default AppRoutes;











import React, { useState } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";
import DepartmentCard from "./DepartmentCard"; // IMPORTANT ✔

const DepartmentsList = () => {

  const [departments] = useState([
    {
      hodName: "Dr. Maria Garcia",
      hodImage: "https://i.pravatar.cc/100?img=47",
      department: "Oncology",
      doctors: 9,
      patients: 41,
      availableBeds: 7,
      totalBeds: 32,
      location: "Building C, Floor 3",
      phone: "+1 234 567 8907",
    },
    // Add more departments here...
  ]);

  return (
    <div className="p-6">

      {/* Page Header */}
      <h1 className="text-3xl font-semibold">Department Management</h1>
      <p className="text-gray-600 mt-1">Manage and monitor all hospital departments</p>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        
        <div className="p-5 bg-white shadow-md rounded-xl border border-gray-100">
          <p className="text-gray-600">Total Departments</p>
          <p className="text-3xl font-bold mt-2">{departments.length}</p>
        </div>

        <div className="p-5 bg-white shadow-md rounded-xl border border-gray-100">
          <p className="text-gray-600">Total Doctors</p>
          <p className="text-3xl font-bold mt-2">
            {departments.reduce((sum, d) => sum + d.doctors, 0)}
          </p>
        </div>

        <div className="p-5 bg-white shadow-md rounded-xl border border-gray-100">
          <p className="text-gray-600">Total Patients</p>
          <p className="text-3xl font-bold mt-2">
            {departments.reduce((sum, d) => sum + d.patients, 0)}
          </p>
        </div>

        <div className="p-5 bg-white shadow-md rounded-xl border border-gray-100">
          <p className="text-gray-600">Available Beds</p>
          <p className="text-3xl font-bold mt-2">
            {departments.reduce((sum, d) => sum + d.availableBeds, 0)} /
            {departments.reduce((sum, d) => sum + d.totalBeds, 0)}
          </p>
        </div>

      </div>

      {/* Search + Add */}
      <div className="flex items-center gap-4 mt-6 bg-white p-4 rounded-xl shadow-md border border-gray-100">
        <div className="flex items-center gap-2 flex-grow">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search departments or department head..."
            className="w-full outline-none"
          />
        </div>

        <button className="px-5 py-2 bg-blue-600 text-white flex items-center gap-2 rounded-lg hover:bg-blue-700">
          <FiPlus /> Add Department
        </button>
      </div>

      {/* Department Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        {departments.map((d, index) => (
          <DepartmentCard key={index} dept={d} />
        ))}
      </div>

    </div>
  );
};

export default DepartmentsList;

