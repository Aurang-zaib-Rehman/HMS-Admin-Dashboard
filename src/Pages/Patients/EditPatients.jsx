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

  // Prefill form if editing
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
      // Add patient
      const newId = Math.max(...patients.map((p) => p.id)) + 1;
      setPatients((prev) => [...prev, { ...formData, id: newId }]);
    }
    navigate("/patients");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">{isEdit ? "Edit Patient" : "Add Patient"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Disease</label>
          <input
            type="text"
            name="disease"
            value={formData.disease}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="surgery"
            checked={formData.surgery}
            onChange={handleChange}
          />
          <label className="text-sm font-medium">Surgery</label>
        </div>
        <div>
          <label className="block text-sm font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          >
            <option>Admitted</option>
            <option>Recovered</option>
            <option>Follow-up</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          {isEdit ? "Update Patient" : "Add Patient"}
        </button>
      </form>
    </div>
  );
};

export default PatientForm;
