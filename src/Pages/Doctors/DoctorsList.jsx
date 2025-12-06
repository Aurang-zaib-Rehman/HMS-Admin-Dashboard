// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, useMotionValue, useTransform, animate } from "framer-motion";
// import { FaUserMd, FaUserCheck, FaUserTimes, FaHospital } from "react-icons/fa";
// import { AnimatePresence } from "framer-motion";

// // Count-up animation component
// const CountUp = ({ value, duration = 1.5, className = "" }) => {
//   const mv = useMotionValue(0);
//   const rounded = useTransform(mv, (latest) => Math.round(latest));
//   const [display, setDisplay] = React.useState(0);

//   React.useEffect(() => {
//     const anim = animate(mv, value, { duration, ease: "easeOut" });
//     const unsub = rounded.on("change", (v) => setDisplay(v));
//     return () => {
//       anim.stop();
//       unsub();
//     };
//   }, [value]);

//   return <span className={className}>{display}</span>;
// };

// // Fake Local Doctor Data (12 Doctors)
// const initialDoctors = [
//   { id: 1, name: "Dr. Ayesha Khan", specialization: "Cardiologist", hours: "9 AM - 5 PM", charges: 2500, status: "Available" },
//   { id: 2, name: "Dr. Bilal Ahmed", specialization: "Neurologist", hours: "11 AM - 4 PM", charges: 3000, status: "Absent" },
//   { id: 3, name: "Dr. Sara Malik", specialization: "Dermatologist", hours: "10 AM - 6 PM", charges: 2000, status: "Available" },
//   { id: 4, name: "Dr. Kamran Ali", specialization: "Orthopedic Surgeon", hours: "12 PM - 8 PM", charges: 3500, status: "Available" },
//   { id: 5, name: "Dr. Fatima Noor", specialization: "Gynecologist", hours: "9 AM - 3 PM", charges: 2800, status: "Absent" },
//   { id: 6, name: "Dr. Imran Raza", specialization: "ENT Specialist", hours: "10 AM - 5 PM", charges: 2200, status: "Available" },
//   { id: 7, name: "Dr. Maryam Iqbal", specialization: "Pediatrician", hours: "8 AM - 2 PM", charges: 2400, status: "Available" },
//   { id: 8, name: "Dr. Salman Shah", specialization: "General Surgeon", hours: "2 PM - 10 PM", charges: 4000, status: "Absent" },
//   { id: 9, name: "Dr. Hira Saleem", specialization: "Psychologist", hours: "9 AM - 1 PM", charges: 1800, status: "Available" },
//   { id: 10, name: "Dr. Ahmed Farooq", specialization: "Eye Specialist", hours: "3 PM - 9 PM", charges: 2600, status: "Available" },
//   { id: 11, name: "Dr. Zainab Tariq", specialization: "Nutritionist", hours: "10 AM - 2 PM", charges: 1500, status: "Absent" },
//   { id: 12, name: "Dr. Hassan Javed", specialization: "Radiologist", hours: "1 PM - 7 PM", charges: 3200, status: "Available" },
// ];

// const DoctorsList = () => {
//   const [doctors, setDoctors] = useState(initialDoctors);

//   const totalDoctors = doctors.length;
//   const availableDoctors = doctors.filter((d) => d.status === "Available").length;
//   const absentDoctors = doctors.filter((d) => d.status === "Absent").length;
//   const departments = 12; // Example extra card

//   const stats = [
//     { title: "Total Doctors", value: totalDoctors, icon: <FaUserMd size={36} color="#3B82F6" />, bg: "bg-blue-100" },
//     { title: "Available Doctors", value: availableDoctors, icon: <FaUserCheck size={36} color="#10B981" />, bg: "bg-green-100" },
//     { title: "Absent Doctors", value: absentDoctors, icon: <FaUserTimes size={36} color="#EF4444" />, bg: "bg-red-100" },
//     { title: "Total Departments", value: departments, icon: <FaHospital size={36} color="#8B5CF6" />, bg: "bg-purple-100" },
//   ];

//   const handleDelete = (id) => {
//     setDoctors((prev) => prev.filter((d) => d.id !== id));
//   };

//   const rowVariants = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 30 } };

//   return (
//     <div className="w-full p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-xl font-bold">Doctors Overview</h1>

//         <Link to="/doctors/add" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
//           + Add Doctor
//         </Link>
//       </div>

//       {/* Top Cards */}
//       <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//         {stats.map((card, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className={`flex items-center gap-4 p-6 rounded-xl shadow-md border ${card.bg} hover:shadow-xl transition-all`}
//           >
//             <div>{card.icon}</div>
//             <div>
//               <h2 className="text-gray-500 font-semibold text-sm">{card.title}</h2>
//               <p className="text-gray-900 font-bold text-2xl mt-1">
//                 <CountUp value={card.value} />
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Doctors Table */}
//       <div className="bg-white rounded-xl shadow-md border p-5">
//         <h2 className="text-lg font-semibold mb-3">Doctors List</h2>

//         <div className="overflow-x-auto">
//           <table className="w-full text-left min-w-[850px]">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="p-3">ID</th>
//                 <th className="p-3">Name</th>
//                 <th className="p-3">Specialization</th>
//                 <th className="p-3">Active Hours</th>
//                 <th className="p-3">Charges (PKR)</th>
//                 <th className="p-3">Status</th>
//                 <th className="p-3 text-center">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               <AnimatePresence>
//                 {doctors.map((d) => (
//                   <motion.tr
//                     key={d.id}
//                     variants={rowVariants}
//                     initial="hidden"
//                     animate="show"
//                     exit="exit"
//                     className="border-b hover:bg-gray-50"
//                   >
//                     <td className="p-3">{d.id}</td>
//                     <td className="p-3">{d.name}</td>
//                     <td className="p-3">{d.specialization}</td>
//                     <td className="p-3">{d.hours}</td>
//                     <td className="p-3">{d.charges}</td>

//                     <td className="p-3">
//                       <span
//                         className={
//                           d.status === "Available"
//                             ? "bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm"
//                             : "bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm"
//                         }
//                       >
//                         {d.status}
//                       </span>
//                     </td>

//                     <td className="p-3 flex gap-2 justify-center">
//                       <Link to={`/doctors/edit/${d.id}`} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">
//                         Edit
//                       </Link>

//                       <button
//                         onClick={() => handleDelete(d.id)}
//                         className="px-3 py-1 bg-red-200 text-red-700 rounded-md text-sm"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </motion.tr>
//                 ))}
//               </AnimatePresence>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorsList;






// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, useMotionValue, useTransform, animate } from "framer-motion";
// import { FaUserMd, FaUserCheck, FaUserTimes } from "react-icons/fa";
// import { AnimatePresence } from "framer-motion";

// // Count-up animation component
// const CountUp = ({ value, duration = 1.5, className = "" }) => {
//   const mv = useMotionValue(0);
//   const rounded = useTransform(mv, (latest) => Math.round(latest));
//   const [display, setDisplay] = React.useState(0);

//   React.useEffect(() => {
//     const anim = animate(mv, value, { duration, ease: "easeOut" });
//     const unsub = rounded.on("change", (v) => setDisplay(v));
//     return () => {
//       anim.stop();
//       unsub();
//     };
//   }, [value]);

//   return <span className={className}>{display}</span>;
// };

// // Generate 35 doctors dynamically
// const generateDoctors = () => {
//   const specializations = [
//     "Cardiologist", "Neurologist", "Dermatologist", "Orthopedic Surgeon",
//     "Gynecologist", "ENT Specialist", "Pediatrician", "General Surgeon",
//     "Psychologist", "Eye Specialist", "Nutritionist", "Radiologist",
//   ];

//   return Array.from({ length: 35 }, (_, i) => ({
//     id: i + 1,
//     name: `Dr. Doctor ${i + 1}`,
//     specialization: specializations[i % specializations.length],
//     hours: "9 AM - 5 PM",
//     charges: 2000 + (i % 12) * 200, // example charges
//     status: i % 3 === 0 ? "Absent" : "Available",
//   }));
// };

// const DoctorsList = () => {
//   const [doctors, setDoctors] = useState(generateDoctors());

//   const totalDoctors = doctors.length;
//   const availableDoctors = doctors.filter((d) => d.status === "Available").length;
//   const absentDoctors = doctors.filter((d) => d.status === "Absent").length;

//   const stats = [
//     { title: "Total Doctors", value: totalDoctors, icon: <FaUserMd size={36} color="#3B82F6" />, bg: "bg-blue-100" },
//     { title: "Available Doctors", value: availableDoctors, icon: <FaUserCheck size={36} color="#10B981" />, bg: "bg-green-100" },
//     { title: "Absent Doctors", value: absentDoctors, icon: <FaUserTimes size={36} color="#EF4444" />, bg: "bg-red-100" },
//   ];

//   const handleDelete = (id) => {
//     setDoctors((prev) => prev.filter((d) => d.id !== id));
//   };

//   const rowVariants = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 30 } };

//   return (
//     <div className="w-full p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-xl font-bold">Doctors Overview</h1>
//         <Link to="/doctors/add" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
//           + Add Doctor
//         </Link>
//       </div>

//       {/* Top Cards */}
//       <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
//         {stats.map((card, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className={`flex items-center gap-4 p-6 rounded-xl shadow-md border ${card.bg} hover:shadow-xl transition-all`}
//           >
//             <div>{card.icon}</div>
//             <div>
//               <h2 className="text-gray-500 font-semibold text-sm">{card.title}</h2>
//               <p className="text-gray-900 font-bold text-2xl mt-1">
//                 <CountUp value={card.value} />
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Doctors Table */}
//       <div className="bg-white rounded-xl shadow-md border p-5">
//         <h2 className="text-lg font-semibold mb-3">Doctors List</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full text-left min-w-[850px]">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="p-3">ID</th>
//                 <th className="p-3">Name</th>
//                 <th className="p-3">Specialization</th>
//                 <th className="p-3">Active Hours</th>
//                 <th className="p-3">Charges (PKR)</th>
//                 <th className="p-3">Status</th>
//                 <th className="p-3 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <AnimatePresence>
//                 {doctors.map((d) => (
//                   <motion.tr
//                     key={d.id}
//                     variants={rowVariants}
//                     initial="hidden"
//                     animate="show"
//                     exit="exit"
//                     className="border-b hover:bg-gray-50"
//                   >
//                     <td className="p-3">{d.id}</td>
//                     <td className="p-3">{d.name}</td>
//                     <td className="p-3">{d.specialization}</td>
//                     <td className="p-3">{d.hours}</td>
//                     <td className="p-3">{d.charges}</td>
//                     <td className="p-3">
//                       <span
//                         className={
//                           d.status === "Available"
//                             ? "bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm"
//                             : "bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm"
//                         }
//                       >
//                         {d.status}
//                       </span>
//                     </td>
//                     <td className="p-3 flex gap-2 justify-center">
//                       <Link to={`/doctors/edit/${d.id}`} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">
//                         Edit
//                       </Link>
//                       <button
//                         onClick={() => handleDelete(d.id)}
//                         className="px-3 py-1 bg-red-200 text-red-700 rounded-md text-sm"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </motion.tr>
//                 ))}
//               </AnimatePresence>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorsList;




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, useMotionValue, useTransform, animate } from "framer-motion";
// import { FaUserMd, FaUserCheck, FaUserTimes } from "react-icons/fa";
// import { AnimatePresence } from "framer-motion";

// // Count-up animation component
// const CountUp = ({ value, duration = 1.5, className = "" }) => {
//   const mv = useMotionValue(0);
//   const rounded = useTransform(mv, (latest) => Math.round(latest));
//   const [display, setDisplay] = React.useState(0);

//   React.useEffect(() => {
//     const anim = animate(mv, value, { duration, ease: "easeOut" });
//     const unsub = rounded.on("change", (v) => setDisplay(v));
//     return () => {
//       anim.stop();
//       unsub();
//     };
//   }, [value]);

//   return <span className={className}>{display}</span>;
// };

// // Generate 35 doctors with proper names, departments, and shifts
// const generateDoctors = () => {
//   const names = [
//     "Ayesha Khan", "Bilal Ahmed", "Sara Malik", "Kamran Ali", "Fatima Noor",
//     "Imran Raza", "Maryam Iqbal", "Salman Shah", "Hira Saleem", "Ahmed Farooq",
//     "Zainab Tariq", "Hassan Javed", "Laila Khan", "Omar Farooq", "Rabia Iqbal",
//     "Sami Ullah", "Nadia Rehman", "Faisal Qureshi", "Tariq Mahmood", "Amina Farid",
//     "Saad Ali", "Hina Yousaf", "Usman Sheikh", "Fariha Khan", "Adil Shah",
//     "Samina Malik", "Arslan Tariq", "Sadia Riaz", "Danish Iqbal", "Huma Khan",
//     "Murtaza Abbas", "Noor Fatima", "Junaid Hussain", "Iqra Shah", "Adeel Aslam"
//   ];

//   const departments = [
//     "Cardiology", "ENT", "Dermatology", "Neurology",
//     "Pediatrics", "Orthopedics", "Gynecology", "Oncology", "Urology",
//     "Surgery", "General Surgery", "Radiology"
//   ];

//   const shifts = ["8 AM - 4 PM", "4 PM - 12 AM", "12 AM - 8 AM"];

//   return names.map((name, i) => ({
//     id: i + 1,
//     name: `Dr. ${name}`,
//     department: departments[i % departments.length],
//     hours: shifts[i % shifts.length],
//     charges: 2000 + (i % 12) * 200,
//     status: i % 3 === 0 ? "Absent" : "Available",
//   }));
// };

// const DoctorsList = () => {
//   const [doctors, setDoctors] = useState(generateDoctors());

//   const totalDoctors = doctors.length;
//   const availableDoctors = doctors.filter((d) => d.status === "Available").length;
//   const absentDoctors = doctors.filter((d) => d.status === "Absent").length;

//   const stats = [
//     { title: "Total Doctors", value: totalDoctors, icon: <FaUserMd size={36} color="#3B82F6" />, bg: "bg-blue-100" },
//     { title: "Available Doctors", value: availableDoctors, icon: <FaUserCheck size={36} color="#10B981" />, bg: "bg-green-100" },
//     { title: "Absent Doctors", value: absentDoctors, icon: <FaUserTimes size={36} color="#EF4444" />, bg: "bg-red-100" },
//   ];

//   const handleDelete = (id) => setDoctors((prev) => prev.filter((d) => d.id !== id));

//   const rowVariants = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 30 } };

//   return (
//     <div className="w-full p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-xl font-bold">Doctors Overview</h1>
//         <Link to="/doctors/add" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
//           + Add Doctor
//         </Link>
//       </div>

//       {/* Top Cards */}
//       <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
//         {stats.map((card, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className={`flex items-center gap-4 p-6 rounded-xl shadow-md border ${card.bg} hover:shadow-xl transition-all`}
//           >
//             <div>{card.icon}</div>
//             <div>
//               <h2 className="text-gray-500 font-semibold text-sm">{card.title}</h2>
//               <p className="text-gray-900 font-bold text-2xl mt-1">
//                 <CountUp value={card.value} />
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Doctors Table */}
//       <div className="bg-white rounded-xl shadow-md border p-5">
//         <h2 className="text-lg font-semibold mb-3">Doctors List</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full text-left min-w-[850px]">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="p-3">ID</th>
//                 <th className="p-3">Name</th>
//                 <th className="p-3">Department</th>
//                 <th className="p-3">Shift Hours</th>
//                 <th className="p-3">Charges (PKR)</th>
//                 <th className="p-3">Status</th>
//                 <th className="p-3 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <AnimatePresence>
//                 {doctors.map((d) => (
//                   <motion.tr
//                     key={d.id}
//                     variants={rowVariants}
//                     initial="hidden"
//                     animate="show"
//                     exit="exit"
//                     className="border-b hover:bg-gray-50"
//                   >
//                     <td className="p-3">{d.id}</td>
//                     <td className="p-3">{d.name}</td>
//                     <td className="p-3">{d.department}</td>
//                     <td className="p-3">{d.hours}</td>
//                     <td className="p-3">{d.charges}</td>
//                     <td className="p-3">
//                       <span
//                         className={
//                           d.status === "Available"
//                             ? "bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm"
//                             : "bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm"
//                         }
//                       >
//                         {d.status}
//                       </span>
//                     </td>
//                     <td className="p-3 flex gap-2 justify-center">
//                       <Link to={`/doctors/edit/${d.id}`} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">
//                         Edit
//                       </Link>
//                       <button
//                         onClick={() => handleDelete(d.id)}
//                         className="px-3 py-1 bg-red-200 text-red-700 rounded-md text-sm"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </motion.tr>
//                 ))}
//               </AnimatePresence>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorsList;



import React from 'react'

function DoctorsList() {
  return (
    <div>
      
    </div>
  )
}

export default DoctorsList
