// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AppointmentPage from "./pages/AppointmentPage/AppointmentPage"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import StaffPage from "./pages/StaffPage/StaffPage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/bookappointment" element={<PrivateRoute><AppointmentPage /></PrivateRoute>}/>
        <Route path='/staffpage' element={<StaffPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
