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

//   const availableDoctors = doctors.filter((d) => d.status === "Available");

//   const stats = [
//     { title: "Total Doctors", value: doctors.length, icon: <FaUserMd size={36} color="#3B82F6" />, bg: "bg-blue-100" },
//     { title: "Available Doctors", value: availableDoctors.length, icon: <FaUserCheck size={36} color="#10B981" />, bg: "bg-green-100" },
//     { title: "Absent Doctors", value: doctors.filter((d) => d.status === "Absent").length, icon: <FaUserTimes size={36} color="#EF4444" />, bg: "bg-red-100" },
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

//       {/* Available Doctors Table */}
//       <div className="bg-white rounded-xl shadow-md border p-5 mb-6">
//         <h2 className="text-lg font-semibold mb-3">Available Doctors ({availableDoctors.length})</h2>
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
//                 {availableDoctors.map((d) => (
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
//                       <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">
//                         {d.status}
//                       </span>
//                     </td>
//                     <td className="p-3 text-center">
//                       <button
//                         onClick={() => setDoctors((prev) =>
//                           prev.map((doc) =>
//                             doc.id === d.id ? { ...doc, status: "Absent" } : doc
//                           )
//                         )}
//                         className="px-3 py-1 bg-red-200 text-red-700 rounded-md text-sm"
//                       >
//                         Mark Absent
//                       </button>
//                     </td>
//                   </motion.tr>
//                 ))}
//               </AnimatePresence>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Full Doctors Table (without status) */}
//       <div className="bg-white rounded-xl shadow-md border p-5">
//         <h2 className="text-lg font-semibold mb-3">All Doctors</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full text-left min-w-[850px]">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="p-3">ID</th>
//                 <th className="p-3">Name</th>
//                 <th className="p-3">Department</th>
//                 <th className="p-3">Shift Hours</th>
//                 <th className="p-3">Charges (PKR)</th>
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

// // Generate Doctors
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
//     "Cardiology", "ENT", "Dermatology", "Neurology", "Pediatrics",
//     "Orthopedics", "Gynecology", "Oncology", "Urology",
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

//   const availableDoctors = doctors.filter((d) => d.status === "Available");

//   const stats = [
//     { title: "Total Doctors", value: doctors.length, icon: <FaUserMd size={36} color="#3B82F6" />, bg: "bg-blue-100" },
//     { title: "Available Doctors", value: availableDoctors.length, icon: <FaUserCheck size={36} color="#10B981" />, bg: "bg-green-100" },
//     { title: "Absent Doctors", value: doctors.filter((d) => d.status === "Absent").length, icon: <FaUserTimes size={36} color="#EF4444" />, bg: "bg-red-100" },
//   ];

//   const handleDelete = (id) => setDoctors((prev) => prev.filter((d) => d.id !== id));
//   const rowVariants = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 30 } };

//   return (
//     <div className="w-full p-4 sm:p-6 max-w-full overflow-x-hidden">

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
//             className={`flex items-center gap-4 p-4 sm:p-6 rounded-xl shadow-md border ${card.bg} hover:shadow-xl transition-all`}
//           >
//             <div>{card.icon}</div>
//             <div>
//               <h2 className="text-gray-500 font-semibold text-sm">{card.title}</h2>
//               <p className="text-gray-900 font-bold text-xl sm:text-2xl mt-1">
//                 <CountUp value={card.value} />
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Desktop Table (Available Doctors) */}
//       <div className="hidden sm:block bg-white rounded-xl shadow-md border p-5 mb-6">
//         <h2 className="text-lg font-semibold mb-3">Available Doctors</h2>
//         <table className="w-full text-left">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="p-3">ID</th>
//               <th className="p-3">Name</th>
//               <th className="p-3">Department</th>
//               <th className="p-3">Shift</th>
//               <th className="p-3">Charges</th>
//               <th className="p-3">Status</th>
//               <th className="p-3 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             <AnimatePresence>
//               {availableDoctors.map((d) => (
//                 <motion.tr key={d.id} variants={rowVariants} initial="hidden" animate="show" exit="exit" className="border-b hover:bg-gray-50">
//                   <td className="p-3">{d.id}</td>
//                   <td className="p-3">{d.name}</td>
//                   <td className="p-3">{d.department}</td>
//                   <td className="p-3">{d.hours}</td>
//                   <td className="p-3">{d.charges}</td>
//                   <td className="p-3">
//                     <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">{d.status}</span>
//                   </td>
//                   <td className="p-3 text-center">
//                     <button
//                       onClick={() =>
//                         setDoctors((prev) =>
//                           prev.map((doc) =>
//                             doc.id === d.id ? { ...doc, status: "Absent" } : doc
//                           )
//                         )
//                       }
//                       className="px-3 py-1 bg-red-200 text-red-700 rounded-md text-xs"
//                     >
//                       Mark Absent
//                     </button>
//                   </td>
//                 </motion.tr>
//               ))}
//             </AnimatePresence>
//           </tbody>
//         </table>
//       </div>

//       {/* Desktop Table (All Doctors) */}
//       <div className="hidden sm:block bg-white rounded-xl shadow-md border p-5">
//         <h2 className="text-lg font-semibold mb-3">All Doctors</h2>
//         <table className="w-full text-left">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="p-3">ID</th>
//               <th className="p-3">Name</th>
//               <th className="p-3">Department</th>
//               <th className="p-3">Shift</th>
//               <th className="p-3">Charges</th>
//               <th className="p-3 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             <AnimatePresence>
//               {doctors.map((d) => (
//                 <motion.tr key={d.id} variants={rowVariants} initial="hidden" animate="show" exit="exit" className="border-b hover:bg-gray-50">
//                   <td className="p-3">{d.id}</td>
//                   <td className="p-3">{d.name}</td>
//                   <td className="p-3">{d.department}</td>
//                   <td className="p-3">{d.hours}</td>
//                   <td className="p-3">{d.charges}</td>
//                   <td className="p-3 flex gap-2 justify-center">
//                     <Link to={`/doctors/edit/${d.id}`} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-xs">Edit</Link>
//                     <button onClick={() => handleDelete(d.id)} className="px-3 py-1 bg-red-200 text-red-700 rounded-md text-xs">Delete</button>
//                   </td>
//                 </motion.tr>
//               ))}
//             </AnimatePresence>
//           </tbody>
//         </table>
//       </div>

//       {/* Mobile Cards (Combined List) */}
//       <div className="sm:hidden space-y-2 mt-4">
//         <AnimatePresence>
//           {doctors.map((d) => (
//             <motion.div key={d.id} variants={rowVariants} initial="hidden" animate="show" exit="exit"
//               className="bg-white rounded-xl shadow-md border p-4 flex flex-col gap-1">
              
//               <div className="flex justify-between">
//                 <span className="font-semibold text-sm">ID: {d.id}</span>
//                 <div className="flex gap-1">
//                   <Link to={`/doctors/edit/${d.id}`} className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">Edit</Link>
//                   <button onClick={() => handleDelete(d.id)} className="px-2 py-1 bg-red-200 text-red-700 rounded text-xs">Delete</button>
//                 </div>
//               </div>

//               <span className="text-sm">Name: {d.name}</span>
//               <span className="text-sm">Department: {d.department}</span>
//               <span className="text-sm">Shift: {d.hours}</span>
//               <span className="text-sm font-semibold">
//                 Status:{" "}
//                 <span className={d.status === "Available" ? "text-green-700" : "text-red-700"}>
//                   {d.status}
//                 </span>
//               </span>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default DoctorsList;







































import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FaUserMd, FaUserCheck, FaUserTimes } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";

/* CountUp Animation */
const CountUp = ({ value, duration = 1.5 }) => {
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

  return <span>{display}</span>;
};

/* Generate Doctors */
const generateDoctors = () => {
  const names = [
    "Ayesha Khan", "Bilal Ahmed", "Sara Malik", "Kamran Ali", "Fatima Noor",
    "Imran Raza", "Maryam Iqbal", "Salman Shah", "Hira Saleem", "Ahmed Farooq",
    "Zainab Tariq", "Hassan Javed", "Laila Khan", "Omar Farooq", "Rabia Iqbal",
    "Sami Ullah", "Nadia Rehman", "Faisal Qureshi", "Tariq Mahmood", "Amina Farid",
    "Saad Ali", "Hina Yousaf", "Usman Sheikh", "Fariha Khan", "Adil Shah",
    "Samina Malik", "Arslan Tariq", "Sadia Riaz", "Danish Iqbal", "Huma Khan",
    "Murtaza Abbas", "Noor Fatima", "Junaid Hussain", "Iqra Shah", "Adeel Aslam"
  ];

  const departments = [
    "Cardiology", "ENT", "Dermatology", "Neurology", "Pediatrics",
    "Orthopedics", "Gynecology", "Oncology", "Urology", "Surgery",
    "General Surgery", "Radiology"
  ];

  const shifts = ["8 AM - 4 PM", "4 PM - 12 AM", "12 AM - 8 AM"];

  return names.map((name, i) => ({
    id: i + 1,
    name: `Dr. ${name}`,
    department: departments[i % departments.length],
    hours: shifts[i % shifts.length],
    charges: 2000 + (i % 12) * 200,
    status: i % 3 === 0 ? "Absent" : "Available",
  }));
};

const DoctorsList = () => {
  const [doctors, setDoctors] = useState(generateDoctors());
  const availableDoctors = doctors.filter((d) => d.status === "Available");

  const stats = [
    { title: "Total Doctors", value: doctors.length, icon: <FaUserMd size={36} color="#3B82F6" />, bg: "bg-blue-100" },
    { title: "Available Doctors", value: availableDoctors.length, icon: <FaUserCheck size={36} color="#10B981" />, bg: "bg-green-100" },
    { title: "Absent Doctors", value: doctors.filter((d) => d.status === "Absent").length, icon: <FaUserTimes size={36} color="#EF4444" />, bg: "bg-red-100" },
  ];

  const handleDelete = (id) => setDoctors((prev) => prev.filter((d) => d.id !== id));
  const rowVariants = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 30 } };

  return (
    <div className="w-full p-4 sm:p-6 max-w-full overflow-x-hidden">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Doctors Overview</h1>
        <Link to="/doctors/add" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
          + Add Doctor
        </Link>
      </div>

      {/* Top Cards */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {stats.map((card, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-4 p-4 rounded-xl shadow-md border ${card.bg}`}>
            <div>{card.icon}</div>
            <div>
              <h2 className="text-gray-500 font-semibold text-sm">{card.title}</h2>
              <p className="text-gray-900 font-bold text-xl">
                <CountUp value={card.value} />
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ---------------------------- DESKTOP AVAILABLE DOCTORS TABLE ---------------------------- */}
      <div className="hidden sm:block bg-white rounded-xl shadow-md border p-5 mb-8">
        <h2 className="text-lg font-semibold mb-3">Available Doctors</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Department</th>
              <th className="p-3">Shift</th>
              <th className="p-3">Charges</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {availableDoctors.map((d) => (
              <tr key={d.id} className="border-b">
                <td className="p-3">{d.id}</td>
                <td className="p-3">{d.name}</td>
                <td className="p-3">{d.department}</td>
                <td className="p-3">{d.hours}</td>
                <td className="p-3">{d.charges}</td>
                <td className="p-3 text-green-700">{d.status}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() =>
                      setDoctors((prev) =>
                        prev.map((doc) =>
                          doc.id === d.id ? { ...doc, status: "Absent" } : doc
                        )
                      )
                    }
                    className="px-3 py-1 bg-red-200 text-red-700 rounded-md text-xs"
                  >
                    Mark Absent
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------------------------- MOBILE AVAILABLE DOCTORS ---------------------------- */}
      <h2 className="sm:hidden text-lg font-bold mb-2">Available Doctors</h2>
      <div className="sm:hidden space-y-3">
        {availableDoctors.map((d) => (
          <div key={d.id} className="bg-white border rounded-xl shadow p-4">
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-sm">ID: {d.id}</span>
              <button className="px-2 py-1 bg-red-200 text-red-700 rounded text-xs"
                onClick={() =>
                  setDoctors((prev) =>
                    prev.map((doc) =>
                      doc.id === d.id ? { ...doc, status: "Absent" } : doc
                    )
                  )
                }>
                Mark Absent
              </button>
            </div>

            <p className="text-sm">Name: {d.name}</p>
            <p className="text-sm">Department: {d.department}</p>
            <p className="text-sm">Shift: {d.hours}</p>
            <p className="text-sm font-semibold text-green-700">Status: {d.status}</p>
          </div>
        ))}
      </div>

      {/* ---------------------------- DESKTOP ALL DOCTORS TABLE ---------------------------- */}
      <div className="hidden sm:block bg-white rounded-xl shadow-md border p-5 mt-10">
        <h2 className="text-lg font-semibold mb-3">All Doctors</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Department</th>
              <th className="p-3">Shift</th>
              <th className="p-3">Charges</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((d) => (
              <tr key={d.id} className="border-b">
                <td className="p-3">{d.id}</td>
                <td className="p-3">{d.name}</td>
                <td className="p-3">{d.department}</td>
                <td className="p-3">{d.hours}</td>
                <td className="p-3">{d.charges}</td>
                <td className="p-3 flex justify-center gap-2">
                  <Link to={`/doctors/edit/${d.id}`} className="px-3 py-1 bg-gray-200 rounded-md text-xs">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(d.id)}
                    className="px-3 py-1 bg-red-200 text-red-700 rounded-md text-xs">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* ---------------------------- MOBILE ALL DOCTORS ---------------------------- */}
      <h2 className="sm:hidden text-lg font-bold mt-8 mb-2">All Doctors</h2>
      <div className="sm:hidden space-y-3">
        {doctors.map((d) => (
          <div key={d.id} className="bg-white border rounded-xl shadow p-4">
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-sm">ID: {d.id}</span>

              <div className="flex gap-2">
                <Link to={`/doctors/edit/${d.id}`} className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">Edit</Link>
                <button className="px-2 py-1 bg-red-200 text-red-700 rounded text-xs"
                  onClick={() => handleDelete(d.id)}>
                  Delete
                </button>
              </div>
            </div>

            <p className="text-sm">Name: {d.name}</p>
            <p className="text-sm">Department: {d.department}</p>
            <p className="text-sm">Shift: {d.hours}</p>
            <p className="text-sm">Charges: {d.charges}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DoctorsList;
