import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Pages/routes/AppRoutes";


function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
