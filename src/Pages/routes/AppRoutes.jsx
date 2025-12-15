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

// // Doctors
// import DoctorsList from "../Doctors/DoctorsList";
// import AddDoctors from "../Doctors/AddDoctors";

// // Departments
// import DepartmentsList from "../Departments/DepartmentsList";
// import AddDepartments from "../Departments/AddDepartments";

// // Settings
// import ProfileSettings from "../settings/ProfileSettings.jsx";

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
//         <Route path="/patients/add" element={<AddPatients patients={patients} setPatients={setPatients} />}/>
        
//         {/* Doctors */}
//         <Route path="/doctors" element={<DoctorsList doctors={doctors} setDoctors={setDoctors} />} />
//         <Route path="/doctors/add" element={<AddDoctors doctors={doctors} setDoctors={setDoctors} />} />

//         {/* Departments */}
//         <Route path="/departments" element={<DepartmentsList />} />
//         <Route path="/departments/add" element={<AddDepartments />} />

//         {/* Settings */}
//         <Route path="/settings" element={<ProfileSettings />} />

//       </Route>

//       {/* 404 */}
//       <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      
//     </Routes>
//   );
// };

// export default AppRoutes;




























import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "../../Components/Layout.jsx";

// Auth
import Login from "../Auth/Login.jsx";
import Signup from "../Auth/Signup.jsx";

// Dashboard
import Dashboard from "../dashboard/Dashboard";

// Patients
import PatientsList from "../Patients/PatientsList";
import AddPatients from "../Patients/AddPatients";

// Doctors
import DoctorsList from "../Doctors/DoctorsList";
import AddDoctors from "../Doctors/AddDoctors";

// Departments
import DepartmentsList from "../Departments/DepartmentsList";
import AddDepartments from "../Departments/AddDepartments";

// Settings
import ProfileSettings from "../settings/ProfileSettings.jsx";

const AppRoutes = ({ patients, setPatients, doctors, setDoctors }) => {
  return (
    <Routes>
      {/* ---- Public routes (no layout) ---- */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* ---- Protected / Layout routes ---- */}
      <Route element={<Layout />}>

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Patients */}
        <Route path="/patients" element={<PatientsList patients={patients} setPatients={setPatients} />}/>
        <Route path="/patients/add" element={<AddPatients patients={patients} setPatients={setPatients} />}/>

        {/* Doctors */}
        {/* <Route path="/doctors" element={<DoctorsList doctors={doctors} setDoctors={setDoctors} />}/>
        <Route path="/doctors/add" element={<AddDoctors doctors={doctors} setDoctors={setDoctors} />}/> */}
        <Route path="/doctors" element={<DoctorsList doctors={doctors} setDoctors={setDoctors} />} />
        <Route path="/doctors/add" element={<AddDoctors doctors={doctors} setDoctors={setDoctors} />} />
        
        {/* Departments */}
        <Route path="/departments" element={<DepartmentsList />} />
        <Route path="/departments/add" element={<AddDepartments />} />

        {/* Settings */}
        <Route path="/settings" element={<ProfileSettings />} />

      </Route>

      {/* 404 */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
