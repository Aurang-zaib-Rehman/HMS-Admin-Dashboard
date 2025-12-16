import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDoctors = ({ doctors, setDoctors }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    department: "",
    hours: "8 AM - 4 PM",
    charges: 2000,
    status: "Available",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = doctors.length ? Math.max(...doctors.map((d) => d.id)) + 1 : 1;

    setDoctors((prev) => [...prev, { ...formData, id: newId }]);

    navigate("/doctors");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Doctor</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Department</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Shift</label>
          <select
            name="hours"
            value={formData.hours}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
          >
            <option>8 AM - 4 PM</option>
            <option>4 PM - 12 AM</option>
            <option>12 AM - 8 AM</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Charges</label>
          <input
            type="number"
            name="charges"
            value={formData.charges}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
          >
            <option>Available</option>
            <option>Absent</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all"
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctors;
