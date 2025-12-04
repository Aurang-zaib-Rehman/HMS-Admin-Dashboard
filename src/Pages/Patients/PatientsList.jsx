import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FaUserInjured, FaProcedures, FaHospitalUser } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";

// Count-up animation component
const CountUp = ({ value, duration = 1.5, className = "" }) => {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (latest) => Math.round(latest));
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    const anim = animate(mv, value, { duration, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => {
      anim.stop();
      unsub();
    };
  }, [value]);

  return <span className={className}>{display}</span>;
};

// Fake Local State Data
const initialPatients = [
  { id: 101, name: "Aisha Khan", age: 32, gender: "F", disease: "Appendicitis", surgery: true, status: "Admitted" },
  { id: 102, name: "Bilal Ahmed", age: 45, gender: "M", disease: "Hypertension", surgery: false, status: "Follow-up" },
  { id: 103, name: "Sara Malik", age: 29, gender: "F", disease: "Fracture", surgery: true, status: "Admitted" },
  { id: 104, name: "Omar Farooq", age: 56, gender: "M", disease: "Diabetes", surgery: false, status: "Recovered" },
  { id: 105, name: "Maryam Saleem", age: 40, gender: "F", disease: "Migraine", surgery: false, status: "Follow-up" },
  { id: 106, name: "Hassan Raza", age: 62, gender: "M", disease: "CABG", surgery: true, status: "Admitted" },
  { id: 107, name: "Zara Noor", age: 21, gender: "F", disease: "Tonsillitis", surgery: false, status: "Recovered" },
  { id: 108, name: "Kamran Ali", age: 37, gender: "M", disease: "Kidney Stones", surgery: true, status: "Follow-up" },
  { id: 109, name: "Imran Shah", age: 48, gender: "M", disease: "Pneumonia", surgery: false, status: "Admitted" },
  { id: 110, name: "Rabia Iqbal", age: 33, gender: "F", disease: "C-section", surgery: true, status: "Recovered" },
  { id: 111, name: "Sami Ullah", age: 28, gender: "M", disease: "Infection", surgery: false, status: "Follow-up" },
  { id: 112, name: "Nadia Rehman", age: 50, gender: "F", disease: "Arthritis", surgery: false, status: "Recovered" },
  { id: 113, name: "Faisal Qureshi", age: 60, gender: "M", disease: "Prostate", surgery: true, status: "Admitted" },
  { id: 114, name: "Laila Khan", age: 27, gender: "F", disease: "UTI", surgery: false, status: "Follow-up" },
  { id: 115, name: "Tariq Mahmood", age: 54, gender: "M", disease: "Hernia", surgery: true, status: "Admitted" },
  { id: 116, name: "Amina Farid", age: 36, gender: "F", disease: "Anemia", surgery: false, status: "Recovered" }
];

const PatientsList = () => {
  const [patients, setPatients] = useState(initialPatients);

  // Override stats for display
  const stats = [
    { title: "Total Patients Treated", value: 1500, icon: <FaUserInjured size={36} color="#3B82F6" />, bg: "bg-blue-100" },
    { title: "Total Surgeries", value: 150, icon: <FaProcedures size={36} color="#EF4444" />, bg: "bg-red-100" },
    { title: "Currently Admitted", value: 30, icon: <FaHospitalUser size={36} color="#10B981" />, bg: "bg-green-100" },
  ];

  const displayed = patients.slice(0, 15);

  const handleDelete = (id) => setPatients((prev) => prev.filter((p) => p.id !== id));

  const rowVariants = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 30 } };

  return (
    <div className="w-full p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-bold">Overview of patient records</h1>

        </div>
        <Link to="/patients/add" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
          + Add Patient
        </Link>
      </div>

      {/* Dashboard-style Top Cards with CountUp */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {stats.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-4 p-6 rounded-xl shadow-md border ${card.bg} hover:shadow-xl transition-all`}
          >
            <div>{card.icon}</div>
            <div>
              <h2 className="text-gray-500 font-semibold text-sm">{card.title}</h2>
              <p className="text-gray-900 font-bold text-2xl mt-1">
                <CountUp value={card.value} />
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md border p-5">
        <h2 className="text-lg font-semibold mb-3">Recent Patients</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Age</th>
                <th className="p-3">Gender</th>
                <th className="p-3">Disease</th>
                <th className="p-3">Operation</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {displayed.map((p) => (
                  <motion.tr
                    key={p.id}
                    variants={rowVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-3">{p.id}</td>
                    <td className="p-3">{p.name}</td>
                    <td className="p-3">{p.age}</td>
                    <td className="p-3">{p.gender}</td>
                    <td className="p-3">{p.disease}</td>
                    <td className="p-3">{p.surgery ? "Yes" : "No"}</td>
                    <td className="p-3">
                      <span
                        className={
                          p.status === "Admitted"
                            ? "bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm"
                            : p.status === "Recovered"
                            ? "bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm"
                            : "bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-sm"
                        }
                      >
                        {p.status}
                      </span>
                    </td>
                    <td className="p-3 flex gap-2 justify-center">
                      <Link
                        to={`/patients/edit/${p.id}`}
                        className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="px-3 py-1 bg-red-200 text-red-700 rounded-md text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientsList;


