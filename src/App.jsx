import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Pages/routes/AppRoutes";
import React from "react";


function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

