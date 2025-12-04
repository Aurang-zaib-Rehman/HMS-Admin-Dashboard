import React from "react";
import { motion } from "framer-motion";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Doughnut } from "react-chartjs-2";
import { FaUserInjured, FaUserMd, FaCalendarAlt, FaDollarSign } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 },
  };

  const chartVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  // Base chart options
  const baseChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 10,
          padding: 8,
          font: { size: 11 },
          usePointStyle: true,
        },
      },
      tooltip: { mode: "index", intersect: false },
    },
    layout: {
      padding: { top: 8, right: 10, left: 10, bottom: 40 },
    },
  };

  const barChartOptions = {
    ...baseChartOptions,
    scales: {
      x: {
        ticks: { autoSkip: false, maxRotation: 45, font: { size: 11 } },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        ticks: { font: { size: 11 } },
        grid: { drawBorder: false },
      },
    },
  };

  const doughnutOptions = {
    ...baseChartOptions,
    plugins: {
      ...baseChartOptions.plugins,
      legend: {
        ...baseChartOptions.plugins.legend,
        labels: {
          ...baseChartOptions.plugins.legend.labels,
          font: { size: 11 },
          boxWidth: 10,
        },
      },
    },
  };

  const departments = [
    "Surgery", "Cardiology", "ENT", "Dermatology", "Neurology",
    "Pediatrics", "Orthopedics", "Gynecology", "Oncology", "Urology"
  ];

  const departmentColors = [
    "#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6",
    "#06B6D4", "#F97316", "#E879F9", "#22D3EE", "#A3E635"
  ];

  const barData = {
    labels: departments,
    datasets: [
      {
        label: "Appointments",
        data: [30, 28, 25, 22, 20, 35, 24, 26, 18, 22],
        backgroundColor: departmentColors,
        borderRadius: 10,
      },
    ],
  };

  const doctorsData = {
    labels: departments,
    datasets: [
      { data: [5, 4, 3, 3, 4, 5, 3, 2, 3, 3], backgroundColor: departmentColors },
    ],
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const currentMonthIndex = new Date().getMonth();
  const revenueData = [800, 1200, 950, 1100, 1500, 1700, 2000, 1800, 1600, 2100, 1900, 2200];

  const revenueBarColors = revenueData.map((_, i) =>
    i === currentMonthIndex ? "#F59E0B" : "#3B82F6"
  );

  const revenueChartData = {
    labels: months,
    datasets: [
      {
        type: "bar",
        label: "Monthly Revenue",
        data: revenueData,
        backgroundColor: revenueBarColors,
        borderRadius: 6,
      },
      {
        type: "line",
        label: "Revenue Trend",
        data: revenueData,
        borderColor: "#10B981",
        borderWidth: 3,
        fill: false,
        tension: 0.3,
      },
    ],
  };

  const totalPatients = barData.datasets[0].data.reduce((a, b) => a + b, 0);
  const totalDoctors = doctorsData.datasets[0].data.reduce((a, b) => a + b, 0);
  const totalAppointmentsToday = 75;
  const totalRevenue = `$${revenueData.reduce((a, b) => a + b, 0)}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 p-4 w-full overflow-x-hidden"
    >

      {/* TOP CARDS WITH STAGGER ANIMATION */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { title: "Total Patients", value: totalPatients, icon: <FaUserInjured size={36} color="#3B82F6" /> },
          { title: "Total Doctors", value: totalDoctors, icon: <FaUserMd size={36} color="#8B5CF6" /> },
          { title: "Appointments Today", value: totalAppointmentsToday, icon: <FaCalendarAlt size={36} color="#10B981" /> },
          { title: "Revenue", value: totalRevenue, icon: <FaDollarSign size={36} color="#F59E0B" /> },
        ].map((card, i) => (
          <motion.div
            variants={cardVariants}
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 flex items-center gap-4 border border-gray-100"
          >
            <div>{card.icon}</div>
            <div>
              <h2 className="text-gray-500 font-semibold text-sm">{card.title}</h2>
              <p className="text-gray-900 font-bold text-2xl mt-1">{card.value}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">

        {/* Appointments Bar Chart */}
        <motion.div
          variants={chartVariants}
          initial="hidden"
          animate="show"
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full overflow-hidden h-[420px] md:h-[480px]"
        >
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Appointments Per Department</h2>
          <Bar data={barData} options={barChartOptions} />
        </motion.div>

        {/* Doctors Doughnut Chart */}
        <motion.div
          variants={chartVariants}
          initial="hidden"
          animate="show"
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full overflow-hidden h-[420px] md:h-[480px]"
        >
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Doctors by Department</h2>
          <Doughnut data={doctorsData} options={doughnutOptions} />
        </motion.div>

        {/* Monthly Revenue Chart */}
        <motion.div
          variants={chartVariants}
          initial="hidden"
          animate="show"
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 lg:col-span-2 w-full overflow-hidden h-[520px] md:h-[600px]"
        >
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Monthly Revenue</h2>
          <Bar data={revenueChartData} options={barChartOptions} />
        </motion.div>

      </div>

    </motion.div>
  );
};

export default Dashboard;

