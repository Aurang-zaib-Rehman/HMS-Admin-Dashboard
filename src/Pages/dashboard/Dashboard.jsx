import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import { FaUserInjured, FaUserMd, FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  LineController,    
  BarController,     
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  LineController,   
  BarController,     
  Tooltip,
  Legend
);

// Count-up 
const CountUp = ({ value, duration = 1.5, className = "" }) => {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const anim = animate(mv, value, { duration, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => {
      anim.stop();
      unsub();
    };
  }, [value]);

  return <span className={className}>{display}</span>;
};


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
];

const Dashboard = () => {
  const [patients, setPatients] = useState(initialPatients);

  const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const cardVariants = { hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0 } };
  const chartVariants = { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { duration: 0.5 } } };
  const rowVariants = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 30 } };

  const baseChartOptions = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: true, position: "bottom", labels: { boxWidth: 10, padding: 8, font: { size: 11 }, usePointStyle: true } }, tooltip: { mode: "index", intersect: false } }, layout: { padding: { top: 8, right: 10, left: 10, bottom: 40 } } };
  const barChartOptions = { ...baseChartOptions, scales: { x: { ticks: { autoSkip: false, maxRotation: 45, font: { size: 11 } }, grid: { display: false } }, y: { beginAtZero: true, ticks: { font: { size: 11 } }, grid: { drawBorder: false } } } };
  const doughnutOptions = { ...baseChartOptions, plugins: { ...baseChartOptions.plugins, legend: { ...baseChartOptions.plugins.legend, labels: { ...baseChartOptions.plugins.legend.labels, font: { size: 11 }, boxWidth: 10 } } } };

  const departments = ["Surgery", "Cardiology", "ENT", "Dermatology", "Neurology", "Pediatrics", "Orthopedics", "Gynecology", "Oncology", "Urology"];
  const departmentColors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#06B6D4", "#F97316", "#E879F9", "#22D3EE", "#A3E635"];
  const barData = { labels: departments, datasets: [{ label: "Appointments", data: [30, 28, 25, 22, 20, 35, 24, 26, 18, 22], backgroundColor: departmentColors, borderRadius: 10 }] };
  const doctorsData = { labels: departments, datasets: [{ data: [5, 4, 3, 3, 4, 5, 3, 2, 3, 3], backgroundColor: departmentColors }] };
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const currentMonthIndex = new Date().getMonth();
  const revenueData = [800,1200,950,1100,1500,1700,2000,1800,1600,2100,1900,2200];
  const revenueBarColors = revenueData.map((_, i) => i===currentMonthIndex ? "#F59E0B" : "#3B82F6");
  const revenueChartData = { labels: months, datasets: [ { type: "bar", label: "Monthly Revenue", data: revenueData, backgroundColor: revenueBarColors, borderRadius: 6 }, { type: "line", label: "Revenue Trend", data: revenueData, borderColor: "#10B981", borderWidth: 3, fill: false, tension: 0.3 } ] };

  const totalPatients = barData.datasets[0].data.reduce((a,b)=>a+b,0);
  const totalDoctors = doctorsData.datasets[0].data.reduce((a,b)=>a+b,0);
  const totalAppointmentsToday = 75;
  const totalRevenueNumber = revenueData.reduce((a,b)=>a+b,0);

  const displayedPatients = patients.slice(0, 15);
  const handleDelete = (id) => setPatients((prev) => prev.filter((p) => p.id !== id));

  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="space-y-6 p-4 w-full">

      {/* TOP CARDS */}
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: "Total Patients", value: totalPatients, icon: <FaUserInjured size={36} color="#3B82F6"/> },
          { title: "Total Doctors", value: totalDoctors, icon: <FaUserMd size={36} color="#8B5CF6"/> },
          { title: "Appointments Today", value: totalAppointmentsToday, icon: <FaCalendarAlt size={36} color="#10B981"/> },
          { title: "Revenue", value: totalRevenueNumber, icon: <FaDollarSign size={36} color="#F59E0B"/> },
        ].map((card,i)=>(
          <motion.div variants={cardVariants} key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 flex items-center gap-4 border border-gray-100">
            <div>{card.icon}</div>
            <div>
              <h2 className="text-gray-500 font-semibold text-sm">{card.title}</h2>
              <p className="text-gray-900 font-bold text-2xl mt-1">
                {card.title==="Revenue" ? "$" : ""}<CountUp value={card.value}/></p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <motion.div variants={chartVariants} initial="hidden" animate="show" className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full overflow-hidden h-[420px] md:h-[480px]">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Appointments Per Department</h2>
          <Bar data={barData} options={barChartOptions}/>
        </motion.div>
        <motion.div variants={chartVariants} initial="hidden" animate="show" className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full overflow-hidden h-[420px] md:h-[480px]">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Doctors by Department</h2>
          <Doughnut data={doctorsData} options={doughnutOptions}/>
        </motion.div>
        <motion.div variants={chartVariants} initial="hidden" animate="show" className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 lg:col-span-2 w-full overflow-hidden h-[520px] md:h-[600px]">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Monthly Revenue</h2>
          <Bar data={revenueChartData} options={barChartOptions}/>
        </motion.div>
      </div>

      {/* PATIENTS LIST */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold mb-2">Recently Admitted Patients</h2>

        <div className="hidden sm:block bg-white rounded-xl shadow-md border overflow-hidden">
          <table className="w-full text-left text-sm">
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
                {displayedPatients.map((p)=>(
                  <motion.tr key={p.id} variants={rowVariants} initial="hidden" animate="show" exit="exit" className="border-b hover:bg-gray-50">
                    <td className="p-3">{p.id}</td>
                    <td className="p-3">{p.name}</td>
                    <td className="p-3">{p.age}</td>
                    <td className="p-3">{p.gender}</td>
                    <td className="p-3">{p.disease}</td>
                    <td className="p-3">{p.surgery?"Yes":"No"}</td>
                    <td className="p-3">
                      <span className={
                        p.status==="Admitted"?"bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs":
                        p.status==="Recovered"?"bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs":
                        "bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs"
                      }>{p.status}</span>
                    </td>
                    <td className="p-3 flex gap-2 justify-center">
                      <button onClick={()=>handleDelete(p.id)} className="px-2 py-1 bg-red-200 text-red-700 rounded text-xs">Delete</button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* responsive */}
        <div className="sm:hidden space-y-2">
          <AnimatePresence>
            {displayedPatients.map((p)=>(
              <motion.div key={p.id} variants={rowVariants} initial="hidden" animate="show" exit="exit" className="bg-white rounded-xl shadow-md p-4 border flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-sm">ID: {p.id}</span>
                  <div className="flex gap-1">
                    <button onClick={()=>handleDelete(p.id)} className="px-2 py-1 bg-red-200 text-red-700 rounded text-xs">Delete</button>
                  </div>
                </div>
                <span className="text-sm">Name: {p.name}</span>
                <span className="text-sm">Disease: {p.disease}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

    </motion.div>
  );
};

export default Dashboard;









