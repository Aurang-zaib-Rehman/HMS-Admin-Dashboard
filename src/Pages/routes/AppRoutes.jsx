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
import EditPatients from "../Patients/EditPatients";
import PatientsDetails from "../Patients/PatientsDetails";

// Doctors
import DoctorsList from "../Doctors/DoctorsList";
import AddDoctors from "../Doctors/AddDoctors";
import EditDoctors from "../Doctors/EditDoctors";
import DoctorsDetails from "../Doctors/DoctorsDetails";

// Departments
import DepartmentsList from "../Departments/DepartmentsList";
import AddDepartments from "../Departments/AddDepartments";

// Settings
import ProfileSettings from "../Settings/ProfileSettings";


const AppRoutes = () => {
  return (
    <Routes>

      {/* ---- (No Layout) ---- */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* ---- (Inside Layout) ---- */}
      <Route element={<Layout />}>

        
        <Route path="/dashboard" element={<Dashboard />} />

        
        <Route path="/patients" element={<PatientsList />} />
        <Route path="/patients/add" element={<AddPatients />} />
        <Route path="/patients/edit/:id" element={<EditPatients />} />
        <Route path="/patients/:id" element={<PatientsDetails />} />

       
        <Route path="/doctors" element={<DoctorsList />} />
        <Route path="/doctors/add" element={<AddDoctors />} />
        <Route path="/doctors/edit/:id" element={<EditDoctors />} />
        <Route path="/doctors/:id" element={<DoctorsDetails />} />

        
        <Route path="/departments" element={<DepartmentsList />} />
        <Route path="/departments/add" element={<AddDepartments />} />

        
        <Route path="/settings/profile" element={<ProfileSettings />} />

      </Route>

      
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />

    </Routes>
  );
};

export default AppRoutes;



// import React from "react";
// import { Routes, Route } from "react-router-dom";

// // Layout
// import Layout from "../../Components/Layout.jsx";

// // Dashboard
// import Dashboard from "../dashboard/Dashboard";

// // Patients
// import PatientsList from "../Patients/PatientsList";
// import AddPatients from "../Patients/AddPatients";
// import EditPatients from "../Patients/EditPatients";
// import PatientsDetails from "../Patients/PatientsDetails";

// // Doctors
// import DoctorsList from "../Doctors/DoctorsList";
// import AddDoctors from "../Doctors/AddDoctors";
// import EditDoctors from "../Doctors/EditDoctors";
// import DoctorsDetails from "../Doctors/DoctorsDetails";

// // Departments
// import DepartmentsList from "../Departments/DepartmentsList";
// import AddDepartments from "../Departments/AddDepartments";

// // Settings
// import ProfileSettings from "../Settings/ProfileSettings";

// const AppRoutes = () => {
//   return (
//     <Routes>

//       {/* Layout Wrapper */}
//       <Route path="/" element={<Layout />}>

//         {/* Default route inside layout */}
//         <Route index element={<Dashboard />} />

//         {/* Dashboard manual route */}
//         <Route path="dashboard" element={<Dashboard />} />

//         {/* Patients */}
//         <Route path="patients" element={<PatientsList />} />
//         <Route path="patients/add" element={<AddPatients />} />
//         <Route path="patients/edit/:id" element={<EditPatients />} />
//         <Route path="patients/:id" element={<PatientsDetails />} />

//         {/* Doctors */}
//         <Route path="doctors" element={<DoctorsList />} />
//         <Route path="doctors/add" element={<AddDoctors />} />
//         <Route path="doctors/edit/:id" element={<EditDoctors />} />
//         <Route path="doctors/:id" element={<DoctorsDetails />} />

//         {/* Departments */}
//         <Route path="departments" element={<DepartmentsList />} />
//         <Route path="departments/add" element={<AddDepartments />} />

//         {/* Settings */}
//         <Route path="settings/profile" element={<ProfileSettings />} />

//       </Route>

//       {/* 404 */}
//       <Route path="*" element={<h1>404 - Page Not Found</h1>} />
//     </Routes>
//   );
// };

// export default AppRoutes;
