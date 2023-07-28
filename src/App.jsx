import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/service" Component={Service} />
        <Route path="/contact" Component={Contact} />
        <Route path="*" element={<NotFoundWithRedirect />} />
      </Routes>
      <Footer />
    </>
  );
};
const NotFoundWithRedirect = () => {
  const navigate = useNavigate();

  // Perform the redirect to the home page
  React.useEffect(() => {
    navigate("/");
  }, [navigate]);

  // Return null to prevent rendering anything on the screen
  return null;
};

export default App;
