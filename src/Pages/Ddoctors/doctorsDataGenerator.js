// Pages/Doctors/doctorsDataGenerator.js
export const generateDoctorList = () => {
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
