import { Routes, Route } from "react-router-dom";
import CustomNavbar from './components/commonComponents/Navbar';
import HomePage from "./Pages/HomePage";
import ServiceDetailScreen from "./Pages/ServiceDetailsScreen";
import FloatingWhatsAppButton from "./components/commonComponents/floatingActionButton";
import React from "react";
import PortfolioSection from "./components/MainPageComponents/PorfolioSection";
import ServicesSection from "./components/MainPageComponents/ServicesSection";
import ContactSection from "./components/commonComponents/contactSection";
import AboutPage from "./components/MainPageComponents/About";
import './App.css';
import AboutUsDetailsScreen from "./Pages/AboutUsDetailsScreen";
import ProjectDetails from "./Pages/ProjectDetails";
import Footer from "./components/commonComponents/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopBar from "./components/commonComponents/TopBar";
function App() {
    AOS.init({ duration: 2700 });
  return (
    <>
          <TopBar/>
          <CustomNavbar />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactSection/>} />
              <Route path="/about" element={<AboutPage/>} />
              <Route path="/services" element={<ServicesSection />} />
              <Route path="/portfolio" element={<PortfolioSection />} />
              <Route path="/serviceDetails/:id" element={<ServiceDetailScreen />} />
              <Route path="/about-details" element={<AboutUsDetailsScreen />} />
               <Route path="/project-details/:id" element={<ProjectDetails />} />
          </Routes>
             <Footer/>
            <FloatingWhatsAppButton />
    </>
  );
}

export default App;
