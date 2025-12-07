import React, { useState } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";
import DepartmentCard from "./DepartmentCard.jsx";
import { motion } from "framer-motion";

const DepartmentsList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Assign patients to each department
  const [departments] = useState([
    { hodName: "Dr. Maria Garcia", department: "Oncology", doctors: 3, patients: 10, availableBeds: 7, totalBeds: 10, location: "Building C, Floor 3", phone: "+1 234 567 8907" },
    { hodName: "Dr. John Smith", department: "Cardiology", doctors: 4, patients: 12, availableBeds: 5, totalBeds: 10, location: "Building A, Floor 1", phone: "+1 234 567 8910" },
    { hodName: "Dr. Sara Khan", department: "ENT", doctors: 2, patients: 5, availableBeds: 8, totalBeds: 10, location: "Building B, Floor 2", phone: "+1 234 567 8911" },
    { hodName: "Dr. Ali Raza", department: "Dermatology", doctors: 2, patients: 8, availableBeds: 6, totalBeds: 10, location: "Building D, Floor 2", phone: "+1 234 567 8912" },
    { hodName: "Dr. Nadia Iqbal", department: "Neurology", doctors: 3, patients: 6, availableBeds: 4, totalBeds: 10, location: "Building E, Floor 1", phone: "+1 234 567 8913" },
    { hodName: "Dr. Omar Farooq", department: "Pediatrics", doctors: 2, patients: 7, availableBeds: 5, totalBeds: 10, location: "Building F, Floor 3", phone: "+1 234 567 8914" },
    { hodName: "Dr. Hina Yousaf", department: "Orthopedics", doctors: 3, patients: 8, availableBeds: 7, totalBeds: 10, location: "Building G, Floor 1", phone: "+1 234 567 8915" },
    { hodName: "Dr. Faisal Qureshi", department: "Gynecology", doctors: 1, patients: 5, availableBeds: 9, totalBeds: 10, location: "Building H, Floor 2", phone: "+1 234 567 8916" },
    { hodName: "Dr. Sami Ullah", department: "Urology", doctors: 2, patients: 7, availableBeds: 6, totalBeds: 10, location: "Building I, Floor 3", phone: "+1 234 567 8917" },
    { hodName: "Dr. Amina Farid", department: "Surgeons", doctors: 1, patients: 5, availableBeds: 7, totalBeds: 10, location: "Building J, Floor 1", phone: "+1 234 567 8918" },
  ]);

  const filteredDepartments = departments.filter(
    (d) =>
      d.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.hodName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalDoctors = departments.reduce((t, d) => t + d.doctors, 0);
  const totalBeds = departments.reduce((t, d) => t + d.totalBeds, 0);
  const availableBeds = departments.reduce((t, d) => t + d.availableBeds, 0);
  const totalPatients = departments.reduce((t, d) => t + d.patients, 0);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">Department Management</h1>
      <p className="text-gray-600 mt-1">Manage and monitor all hospital departments</p>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className="p-5 bg-white shadow-lg rounded-xl border border-gray-100">
          <p className="text-gray-600">Total Departments</p>
          <p className="text-3xl font-bold mt-2">{departments.length}</p>
        </div>
        <div className="p-5 bg-white shadow-lg rounded-xl border border-gray-100">
          <p className="text-gray-600">Total Doctors</p>
          <p className="text-3xl font-bold mt-2">{totalDoctors}</p>
        </div>
        <div className="p-5 bg-white shadow-lg rounded-xl border border-gray-100">
          <p className="text-gray-600">Total Patients</p>
          <p className="text-3xl font-bold mt-2">{totalPatients}</p>
        </div>
        <div className="p-5 bg-white shadow-lg rounded-xl border border-gray-100">
          <p className="text-gray-600">Available Beds</p>
          <p className="text-3xl font-bold mt-2">{availableBeds} / {totalBeds}</p>
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="px-5 py-2 bg-blue-600 text-white flex items-center gap-2 rounded-lg hover:bg-blue-700">
          <FiPlus /> Add Department
        </button>
      </div>

      {/* Department Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        {filteredDepartments.map((d, i) => (
          <DepartmentCard key={i} dept={d} />
        ))}
      </motion.div>
    </div>
  );
};

export default DepartmentsList;