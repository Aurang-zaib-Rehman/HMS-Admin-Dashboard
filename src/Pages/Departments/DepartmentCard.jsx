import React from "react";
import { FiUsers, FiUser, FiMapPin, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

const DepartmentCard = ({ dept }) => {
  const bedOccupancyPercent = Math.floor(
    ((dept.totalBeds - dept.availableBeds) / dept.totalBeds) * 100
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden w-full"
    >
      {/* Header */}
      <div className="bg-blue-600 p-5 text-white text-center">
        <h2 className="text-xl font-bold">{dept.department.toUpperCase()}</h2>
        <p className="text-sm opacity-80 mt-1">{dept.hodName}</p>
      </div>

      {/* Body */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-700">
            <FiUser className="text-gray-500" /> Doctors
          </div>
          <p className="font-semibold">{dept.doctors}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-700">
            <FiUsers className="text-gray-500" /> Patients
          </div>
          <p className="font-semibold">{dept.patients || 0}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-700">🛏 Beds</div>
          <p className="font-semibold">
            {dept.availableBeds} / {dept.totalBeds}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-1">Bed Occupancy</p>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="h-2 bg-orange-500 rounded-full"
              style={{ width: `${bedOccupancyPercent}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-700">
          <FiMapPin className="text-gray-500" />
          {dept.location || "-"}
        </div>

        <div className="flex items-center gap-2 text-gray-700">
          <FiPhone className="text-gray-500" />
          {dept.phone || "-"}
        </div>
      </div>
    </motion.div>
  );
};

export default DepartmentCard;