import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Aos from "aos";
import HowtoStart from "./pages/HowtoStart";
import Services from "./pages/Services";
import Technologies from "./pages/Technologies";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howtostart" element={<HowtoStart />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/carees" element={<Careers />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
