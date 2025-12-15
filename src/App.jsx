// import { BrowserRouter } from "react-router-dom";
// import AppRoutes from "./Pages/routes/AppRoutes";
// import React from "react";


// function App() {
//   return (
//     <BrowserRouter>
//       <AppRoutes />
//     </BrowserRouter>
//   );
// }

// export default App;









import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Pages/routes/AppRoutes";
import React, { useState } from "react";
import { generateDoctorList } from "./Pages/Ddoctors/doctorsDataGenerator"; 

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

function App() {
  const [patients, setPatients] = useState(initialPatients);

  // ✅ Use the new generator
  const allDoctors = generateDoctorList();

  // Mark first 14 as Available, rest as Absent
  allDoctors.forEach((doc, i) => {
    doc.status = i < 14 ? "Available" : "Absent";
  });

  const [doctors, setDoctors] = useState(allDoctors);

  return (
    <BrowserRouter>
      <AppRoutes
        patients={patients}
        setPatients={setPatients}
        doctors={doctors}
        setDoctors={setDoctors}
      />
    </BrowserRouter>
  );
}

export default App;
