// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, useMotionValue, useTransform, animate } from "framer-motion";
// import { FaUserMd, FaUserCheck, FaUserTimes } from "react-icons/fa";
// import { AnimatePresence } from "framer-motion";

// /* CountUp Animation */
// const CountUp = ({ value, duration = 1.5 }) => {
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

//   return <span>{display}</span>;
// };

// /* Generate Doctors */
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
//     "Orthopedics", "Gynecology", "Oncology", "Urology", "Surgery",
//     "General Surgery", "Radiology"
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

// const DoctorsList = ({ doctors, setDoctors }) => {
//   // const [doctors, setDoctors] = useState(generateDoctors());
//   const availableDoctors = doctors.filter((d) => d.status === "Available");

//   const stats = [
//     { title: "Total Doctors", value: doctors.length, icon: <FaUserMd size={36} color="#3B82F6" />, bg: "bg-blue-100" },
//     { title: "Available Doctors", value: availableDoctors.length, icon: <FaUserCheck size={36} color="#10B981" />, bg: "bg-green-100" },
//     { title: "Absent Doctors", value: doctors.filter((d) => d.status === "Absent").length, icon: <FaUserTimes size={36} color="#EF4444" />, bg: "bg-red-100" },
//   ];

//   // const handleDelete = (id) => setDoctors((prev) => prev.filter((d) => d.id !== id));
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
//           <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
//             className={`flex items-center gap-4 p-4 rounded-xl shadow-md border ${card.bg}`}>
//             <div>{card.icon}</div>
//             <div>
//               <h2 className="text-gray-500 font-semibold text-sm">{card.title}</h2>
//               <p className="text-gray-900 font-bold text-xl">
//                 <CountUp value={card.value} />
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* ---------------------------- DESKTOP AVAILABLE DOCTORS TABLE ---------------------------- */}
//       <div className="hidden sm:block bg-white rounded-xl shadow-md border p-5 mb-8">
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
//             {availableDoctors.map((d) => (
//               <tr key={d.id} className="border-b">
//                 <td className="p-3">{d.id}</td>
//                 <td className="p-3">{d.name}</td>
//                 <td className="p-3">{d.department}</td>
//                 <td className="p-3">{d.hours}</td>
//                 <td className="p-3">{d.charges}</td>
//                 <td className="p-3 text-green-700">{d.status}</td>
//                 <td className="p-3 text-center">
//                   <button
//                     onClick={() =>
//                       setDoctors((prev) =>
//                         prev.map((doc) =>
//                           doc.id === d.id ? { ...doc, status: "Absent" } : doc
//                         )
//                       )
//                     }
//                     className="px-3 py-1 bg-red-200 text-red-700 rounded-md text-xs"
//                   >
//                     Mark Absent
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* ---------------------------- MOBILE AVAILABLE DOCTORS ---------------------------- */}
//       <h2 className="sm:hidden text-lg font-bold mb-2">Available Doctors</h2>
//       <div className="sm:hidden space-y-3">
//         {availableDoctors.map((d) => (
//           <div key={d.id} className="bg-white border rounded-xl shadow p-4">
//             <div className="flex justify-between mb-1">
//               <span className="font-semibold text-sm">ID: {d.id}</span>
//               <button className="px-2 py-1 bg-red-200 text-red-700 rounded text-xs"
//                 onClick={() =>
//                   setDoctors((prev) =>
//                     prev.map((doc) =>
//                       doc.id === d.id ? { ...doc, status: "Absent" } : doc
//                     )
//                   )
//                 }>
//                 Mark Absent
//               </button>
//             </div>

//             <p className="text-sm">Name: {d.name}</p>
//             <p className="text-sm">Department: {d.department}</p>
//             <p className="text-sm">Shift: {d.hours}</p>
//             <p className="text-sm font-semibold text-green-700">Status: {d.status}</p>
//           </div>
//         ))}
//       </div>

//       {/* ---------------------------- DESKTOP ALL DOCTORS TABLE ---------------------------- */}
//       <div className="hidden sm:block bg-white rounded-xl shadow-md border p-5 mt-10">
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
//             {doctors.map((d) => (
//               <tr key={d.id} className="border-b">
//                 <td className="p-3">{d.id}</td>
//                 <td className="p-3">{d.name}</td>
//                 <td className="p-3">{d.department}</td>
//                 <td className="p-3">{d.hours}</td>
//                 <td className="p-3">{d.charges}</td>
//                 <td className="p-3 flex justify-center gap-2">
//                   <button onClick={() => handleDelete(d.id)}
//                     className="px-3 py-1 bg-red-200 text-red-700 rounded-md text-xs">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>

//         </table>
//       </div>

//       {/* ---------------------------- MOBILE ALL DOCTORS ---------------------------- */}
//       <h2 className="sm:hidden text-lg font-bold mt-8 mb-2">All Doctors</h2>
//       <div className="sm:hidden space-y-3">
//         {doctors.map((d) => (
//           <div key={d.id} className="bg-white border rounded-xl shadow p-4">
//             <div className="flex justify-between mb-1">
//               <span className="font-semibold text-sm">ID: {d.id}</span>

//               <div className="flex gap-2">
//                 <button className="px-2 py-1 bg-red-200 text-red-700 rounded text-xs"
//                   onClick={() => handleDelete(d.id)}>
//                   Delete
//                 </button>
//               </div>
//             </div>

//             <p className="text-sm">Name: {d.name}</p>
//             <p className="text-sm">Department: {d.department}</p>
//             <p className="text-sm">Shift: {d.hours}</p>
//             <p className="text-sm">Charges: {d.charges}</p>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default DoctorsList;



































































// import React from "react";
// import { Link } from "react-router-dom";
// import { motion, useMotionValue, useTransform, animate } from "framer-motion";
// import { FaUserMd, FaUserCheck, FaUserTimes } from "react-icons/fa";

// /* CountUp Animation */
// const CountUp = ({ value, duration = 1.5 }) => {
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

//   return <span>{display}</span>;
// };

// const DoctorsList = ({ doctors, setDoctors }) => {
//   // Filter doctors by status
//   const availableDoctors = doctors.filter((d) => d.status === "Available");

//   // Stats cards
//   const stats = [
//     { title: "Total Doctors", value: doctors.length, icon: <FaUserMd size={36} color="#3B82F6" />, bg: "bg-blue-100" },
//     { title: "Available Doctors", value: availableDoctors.length, icon: <FaUserCheck size={36} color="#10B981" />, bg: "bg-green-100" },
//     { title: "Absent Doctors", value: doctors.filter((d) => d.status === "Absent").length, icon: <FaUserTimes size={36} color="#EF4444" />, bg: "bg-red-100" },
//   ];

//   // Delete doctor
//   const handleDelete = (id) => setDoctors((prev) => prev.filter((d) => d.id !== id));

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
//           <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
//             className={`flex items-center gap-4 p-4 rounded-xl shadow-md border ${card.bg}`}>
//             <div>{card.icon}</div>
//             <div>
//               <h2 className="text-gray-500 font-semibold text-sm">{card.title}</h2>
//               <p className="text-gray-900 font-bold text-xl">
//                 <CountUp value={card.value} />
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Available Doctors Table (Desktop) */}
//       <div className="hidden sm:block bg-white rounded-xl shadow-md border p-5 mb-8">
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
//             {availableDoctors.map((d) => (
//               <tr key={d.id} className="border-b">
//                 <td className="p-3">{d.id}</td>
//                 <td className="p-3">{d.name}</td>
//                 <td className="p-3">{d.department}</td>
//                 <td className="p-3">{d.hours}</td>
//                 <td className="p-3">{d.charges}</td>
//                 <td className="p-3 text-green-700">{d.status}</td>
//                 <td className="p-3 text-center">
//                   <button
//                     onClick={() =>
//                       setDoctors((prev) =>
//                         prev.map((doc) =>
//                           doc.id === d.id ? { ...doc, status: "Absent" } : doc
//                         )
//                       )
//                     }
//                     className="px-3 py-1 bg-red-200 text-red-700 rounded-md text-xs"
//                   >
//                     Mark Absent
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* All Doctors Table (Desktop) */}
//       <div className="hidden sm:block bg-white rounded-xl shadow-md border p-5 mt-10">
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
//             {doctors.map((d) => (
//               <tr key={d.id} className="border-b">
//                 <td className="p-3">{d.id}</td>
//                 <td className="p-3">{d.name}</td>
//                 <td className="p-3">{d.department}</td>
//                 <td className="p-3">{d.hours}</td>
//                 <td className="p-3">{d.charges}</td>
//                 <td className="p-3 flex justify-center gap-2">
//                   <button onClick={() => handleDelete(d.id)}
//                     className="px-3 py-1 bg-red-200 text-red-700 rounded-md text-xs">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DoctorsList;

















import React from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FaUserMd, FaUserCheck, FaUserTimes } from "react-icons/fa";

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

const DoctorsList = ({ doctors, setDoctors }) => {
  const availableDoctors = doctors.filter((d) => d.status === "Available");

  const stats = [
    { title: "Total Doctors", value: doctors.length, icon: <FaUserMd size={36} color="#3B82F6" />, bg: "bg-blue-100" },
    { title: "Available Doctors", value: availableDoctors.length, icon: <FaUserCheck size={36} color="#10B981" />, bg: "bg-green-100" },
    { title: "Absent Doctors", value: doctors.filter((d) => d.status === "Absent").length, icon: <FaUserTimes size={36} color="#EF4444" />, bg: "bg-red-100" },
  ];

  const handleDelete = (id) => setDoctors(prev => prev.filter(d => d.id !== id));

  const markAbsent = (id) => setDoctors(prev =>
    prev.map(doc => doc.id === id ? { ...doc, status: "Absent" } : doc)
  );

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

      {/* ------------------- DESKTOP TABLES ------------------- */}
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
            {availableDoctors.map(d => (
              <tr key={d.id} className="border-b">
                <td className="p-3">{d.id}</td>
                <td className="p-3">{d.name}</td>
                <td className="p-3">{d.department}</td>
                <td className="p-3">{d.hours}</td>
                <td className="p-3">{d.charges}</td>
                <td className="p-3 text-green-700">{d.status}</td>
                <td className="p-3 text-center">
                  <button onClick={() => markAbsent(d.id)}
                    className="px-3 py-1 bg-red-200 text-red-700 rounded-md text-xs">
                    Mark Absent
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
            {doctors.map(d => (
              <tr key={d.id} className="border-b">
                <td className="p-3">{d.id}</td>
                <td className="p-3">{d.name}</td>
                <td className="p-3">{d.department}</td>
                <td className="p-3">{d.hours}</td>
                <td className="p-3">{d.charges}</td>
                <td className="p-3 flex justify-center gap-2">
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

      {/* ------------------- MOBILE CARDS ------------------- */}
      {/* Available Doctors */}
      <h2 className="sm:hidden text-lg font-bold mt-6 mb-2">Available Doctors</h2>
      <div className="sm:hidden space-y-3">
        {availableDoctors.map(d => (
          <div key={d.id} className="bg-white border rounded-xl shadow p-4">
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-sm">ID: {d.id}</span>
              <div className="flex gap-2">
                <button className="px-2 py-1 bg-red-200 text-red-700 rounded text-xs" onClick={() => handleDelete(d.id)}>Delete</button>
              </div>
            </div>
            <p className="text-sm">Name: {d.name}</p>
            <p className="text-sm">Department: {d.department}</p>
            <p className="text-sm">Shift: {d.hours}</p>
            <p className="text-sm">Charges: {d.charges}</p>
            <p className="text-sm font-semibold text-gray-700">Status: {d.status}</p>
          </div>
        ))}
      </div>

      {/* All Doctors */}
      <h2 className="sm:hidden text-lg font-bold mt-6 mb-2">All Doctors</h2>
      <div className="sm:hidden space-y-2">
        {doctors.map(d => (
          <div key={d.id} className="bg-white border rounded-xl shadow p-4">
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-sm">ID: {d.id}</span>
              <div className="flex gap-2">
                <button className="px-2 py-1 bg-red-200 text-red-700 rounded text-xs" onClick={() => handleDelete(d.id)}>Delete</button>
              </div>
            </div>
            <p className="text-sm">Name: {d.name}</p>
            <p className="text-sm">Department: {d.department}</p>
            <p className="text-sm">Shift: {d.hours}</p>
            <p className="text-sm">Charges: {d.charges}</p>
            <p className="text-sm font-semibold text-gray-700">Status: {d.status}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DoctorsList;
