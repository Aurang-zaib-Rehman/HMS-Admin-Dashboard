import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiCamera, FiSave, FiEye, FiEyeOff } from "react-icons/fi";
import defaultProfile from "../../assets/images/profile.png"; 

const ProfileSettings = () => {
  const filePicker = useRef(null);

  const [profile, setProfile] = useState({
    email: "",
    password: "",
    image: defaultProfile,
  });

  const [showPassword, setShowPassword] = useState(false);

  // Load logged in user
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("hms-user"));
    if (currentUser) {
      setProfile({
        email: currentUser.email,
        password: currentUser.password,
        image: currentUser.image || defaultProfile,
      });
    }
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setProfile((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSave = () => {
    if (!isValidEmail(profile.email)) {
      alert("Please enter a valid email like example@gmail.com");
      return;
    }

    let users = JSON.parse(localStorage.getItem("hms-users")) || [];
    const currentUser = JSON.parse(localStorage.getItem("hms-user"));

    const emailChanged = profile.email !== currentUser.email;

    if (emailChanged) {
      const newProfile = {
        ...profile,
        image: profile.image || defaultProfile,
      };

      users.push(newProfile);
      users = users.filter((u) => u.email !== currentUser.email);

      localStorage.setItem("hms-user", JSON.stringify(newProfile));
      alert("New account created with updated email!");
    } else {
      users = users.map((u) => (u.email === currentUser.email ? profile : u));
      alert("Profile updated successfully!");
    }

    localStorage.setItem("hms-users", JSON.stringify(users));
    localStorage.setItem("hms-user", JSON.stringify(profile));
  };

  return (
    <div className="p-4 sm:p-6 w-full max-w-md mx-auto overflow-x-hidden">
      <h1 className="text-3xl font-semibold mb-2">Profile Settings</h1>
      <p className="text-gray-600 mb-6">Update your account info</p>

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
        className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 w-full"
      >
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <img
              src={profile.image}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-lg object-cover"
            />
            <button
              onClick={() => filePicker.current.click()}
              className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700"
            >
              <FiCamera size={16} />
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="text-gray-600 font-medium flex items-center gap-2 mb-1">
            <FiMail /> Email Address
          </label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="mb-4 relative">
          <label className="text-gray-600 font-medium flex items-center gap-2 mb-1">
            <FiLock /> Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={profile.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[38px] text-gray-500"
          >
            {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
          </button>
        </div>

        <div className="flex justify-end">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSave}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl flex items-center gap-2 shadow-lg hover:bg-blue-700"
          >
            <FiSave size={18} />
            Save
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileSettings;





