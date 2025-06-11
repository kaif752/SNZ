import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import React, { useEffect } from 'react';


// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ItTrainings from './pages/ItTrainings';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

// IT Training Subpages
import WebDevelopment from './pages/it-trainings/WebDevelopment';
import CyberSecurity from './pages/it-trainings/CyberSecurity';
import DataScience from './pages/it-trainings/DataScience';
import HardwareNetworking from './pages/it-trainings/HardwareNetworking';
import AndroidAppDevelopment from './pages/it-trainings/AndroidAppDevelopment';
import AiMl from './pages/it-trainings/AiMl';
import CertificateValidation from './pages/it-trainings/CertificateValidation';

// Service Subpages
import CybersecurityServices from './pages/Services/CyberSecurityServices';
import NetworkServices from './pages/Services/NetworkServices';
import CloudServices from './pages/Services/CloudServices';
import GRCServices from './pages/Services/GRCServices';
import VAPTServices from './pages/Services/VaptServices';
import CyberAwarenessTrainings from './pages/Services/CyberSecurityAwarness';

// Cyber Security Inner Pages
import ITInfraSecurity from './pages/Services/ServicesPages/ITInfraSecurity';
import EmailSecurity from './pages/Services/ServicesPages/EmailSecurity';
import EndPointSecurity from './pages/Services/ServicesPages/EndPointSecurity';
import DigitalMarketingPage from './pages/it-trainings/DigitalMarketingPage';
import DevOpsServicesPage from './pages/it-trainings/DevOps';

const App = () => {

  useEffect(() => {
  const isDark = localStorage.getItem('theme') === 'dark';
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="className=min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/it-trainings" element={<ItTrainings />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />

          {/* IT Trainings */}
          <Route path="/it-trainings/web-development" element={<WebDevelopment />} />
          <Route path="/it-trainings/cyber-security" element={<CyberSecurity />} />
          <Route path="/it-trainings/data-science" element={<DataScience />} />
          <Route path="/it-trainings/hardware-networking" element={<HardwareNetworking />} />
          <Route path="/it-trainings/android-app-development" element={<AndroidAppDevelopment />} />
          <Route path="/it-trainings/aiml" element={<AiMl />} />
          <Route path="/it-trainings/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/it-trainings/devops" element={<DevOpsServicesPage />} />
          <Route path="/it-trainings/certificate" element={<CertificateValidation />} />

          {/* Services */}
          <Route path="/services/cyber-security-services" element={<CybersecurityServices />} />
          <Route path="/services/cyber-security-services/it-infra" element={<ITInfraSecurity />} />
          <Route path="/services/cyber-security-services/email-security" element={<EmailSecurity />} />
          <Route path="/services/cyber-security-services/end-point-security" element={<EndPointSecurity />} />
          <Route path="/services/network-services" element={<NetworkServices />} />
          <Route path="/services/cloud-services" element={<CloudServices />} />
          <Route path="/services/cyber-security-awarness-training" element={<CyberAwarenessTrainings />} />
          <Route path="/services/vulnerability-assessment-and-penetration-testing" element={<VAPTServices />} />
          <Route path="/services/governance-risk-counsalting" element={<GRCServices />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
