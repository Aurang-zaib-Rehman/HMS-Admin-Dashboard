import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../../Components/Layout.jsx";

import Login from "../Auth/Login.jsx";
import Signup from "../Auth/Signup.jsx";

import Dashboard from "../dashboard/Dashboard";

import PatientsList from "../Patients/PatientsList";
import AddPatients from "../Patients/AddPatients";

import DoctorsList from "../Doctors/DoctorsList";
import AddDoctors from "../Doctors/AddDoctors";

import DepartmentsList from "../Departments/DepartmentsList";

import ProfileSettings from "../settings/ProfileSettings.jsx";
import { div } from "framer-motion/client";

const AppRoutes = ({ patients, setPatients, doctors, setDoctors }) => {
  return (
    <Routes>
      {/* no layout */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<Layout />}>

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/patients" element={<PatientsList patients={patients} setPatients={setPatients} />}/>
        <Route path="/patients/add" element={<AddPatients patients={patients} setPatients={setPatients} />}/>

        <Route path="/doctors" element={<DoctorsList doctors={doctors} setDoctors={setDoctors} />} />
        <Route path="/doctors/add" element={<AddDoctors doctors={doctors} setDoctors={setDoctors} />} />

        <Route path="/departments" element={<DepartmentsList />} />

        <Route path="/settings" element={<ProfileSettings />} />

      </Route>

      <Route path="*" element={<h1 className="text-5xl font-bold text-center text-gray-800 mt-20">404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
