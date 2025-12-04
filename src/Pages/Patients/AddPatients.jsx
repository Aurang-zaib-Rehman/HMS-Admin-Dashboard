import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PatientForm = ({ patients, setPatients, isEdit = false }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "M",
    disease: "",
    surgery: false,
    status: "Admitted",
  });

  // Prefill form for editing
  useEffect(() => {
    if (isEdit && id) {
      const patient = patients.find((p) => p.id === parseInt(id));
      if (patient) setFormData(patient);
    }
  }, [isEdit, id, patients]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      // Update patient
      setPatients((prev) =>
        prev.map((p) => (p.id === parseInt(id) ? { ...formData, id: p.id } : p))
      );
    } else {
      // Add new patient
      const newId = patients.length ? Math.max(...patients.map((p) => p.id)) + 1 : 101;
      setPatients((prev) => [...prev, { ...formData, id: newId }]);
    }
    navigate("/patients"); // Redirect back to patient list
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {isEdit ? "Edit Patient" : "Add Patient"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        {/* Disease */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Disease</label>
          <input
            type="text"
            name="disease"
            value={formData.disease}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>

        {/* Surgery */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="surgery"
            checked={formData.surgery}
            onChange={handleChange}
            className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
          />
          <label className="text-gray-700 font-medium">Surgery</label>
        </div>

        {/* Status */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
          >
            <option>Admitted</option>
            <option>Recovered</option>
            <option>Follow-up</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all"
        >
          {isEdit ? "Update Patient" : "Add Patient"}
        </button>
      </form>
    </div>
  );
};

export default PatientForm;
