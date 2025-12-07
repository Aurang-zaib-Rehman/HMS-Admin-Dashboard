import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiLock,
  FiCamera,
  FiSave,
  FiLogOut,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProfileSettings = () => {
  const navigate = useNavigate();
  const filePicker = useRef(null);

  // Load saved data or default
  const [profile, setProfile] = useState(() => {
    const stored = localStorage.getItem("profileData");
    return stored
      ? JSON.parse(stored)
      : {
          name: "Admin User",
          email: "admin@hospital.com",
          phone: "+1 234 567 890",
          address: "UET Mardan, Block A",
          password: "",
          image: "https://i.pravatar.cc/150?img=13",
        };
  });

  // Handle form changes
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image picking
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setProfile((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  // Save to localStorage
  const handleSave = () => {
    localStorage.setItem("profileData", JSON.stringify(profile));
    alert("Profile updated successfully!");
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("profileData");
    navigate("/");
  };

  return (
    <div className="p-6">

      {/* Header + Logout */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Profile Settings</h1>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-xl flex items-center gap-2 shadow hover:bg-red-600"
        >
          <FiLogOut /> Logout
        </button>
      </div>

      <p className="text-gray-600 mt-1">Manage your account information</p>

      {/* Hidden File Picker */}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={filePicker}
        onChange={handleImageSelect}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 bg-white rounded-2xl shadow-xl p-8 border border-gray-100 max-w-3xl mx-auto"
      >
        {/* Profile Photo */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={profile.image}
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-600 shadow-lg"
            />

            {/* Camera button */}
            <button
              onClick={() => filePicker.current.click()}
              className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700"
            >
              <FiCamera size={16} />
            </button>
          </div>

          <h2 className="text-xl font-semibold mt-4">{profile.name}</h2>
          <p className="text-gray-500">{profile.email}</p>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

          {/* Name */}
          <div>
            <label className="text-gray-600 font-medium flex items-center gap-2 mb-1">
              <FiUser /> Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder={profile.name}
              value={profile.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-600 font-medium flex items-center gap-2 mb-1">
              <FiMail /> Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder={profile.email}
              value={profile.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-gray-600 font-medium flex items-center gap-2 mb-1">
              <FiPhone /> Phone Number
            </label>
            <input
              type="text"
              name="phone"
              placeholder={profile.phone}
              value={profile.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Address */}
          <div>
            <label className="text-gray-600 font-medium flex items-center gap-2 mb-1">
              <FiMapPin /> Address
            </label>
            <input
              type="text"
              name="address"
              placeholder={profile.address}
              value={profile.address}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Password */}
          <div className="md:col-span-2">
            <label className="text-gray-600 font-medium flex items-center gap-2 mb-1">
              <FiLock /> Update Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter new password"
              value={profile.password}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-8">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleSave}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl flex items-center gap-2 shadow-lg hover:bg-blue-700"
          >
            <FiSave size={18} />
            Save Changes
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileSettings;
