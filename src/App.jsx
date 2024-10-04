import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import TherapistHelp from "./components/TherapistHelp";
import HeroSection from "./components/HeroSection";
import Chatroom from "./components/Chatroom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from './components/Login';
import Signup from "./components/SignUp";

function App() {
  const location = useLocation();  // Get the current route

  // List of routes where the Footer should be hidden
  const noFooterRoutes = ["/login", "/signup"]; 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/therapisthelp" element={<TherapistHelp />} />
        <Route path="/chatroom" element={<Chatroom />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
      {/* Only render Footer if the current route is NOT in the noFooterRoutes array */}
      {!noFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
