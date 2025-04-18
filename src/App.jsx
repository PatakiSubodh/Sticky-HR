// App.jsx
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import MainContent from "./components/MainContent.jsx";
import Pricing from "./pages/Pricing.jsx";
import AiPlatform from './pages/AiPlatform.jsx';
import Blog from "./pages/Blog.jsx";

// Product pages import
import UserManagement from './pages/features/UserManagement.jsx';
import ExpenseManagement from './pages/features/ExpenseManagement.jsx';
import AttendanceManagement from './pages/features/AttendanceManagement.jsx';
import AssetsManagement from './pages/features/AssetsManagement.jsx';
import LeaveManagement from './pages/features/LeaveManagement.jsx';
import DocumentManagement from './pages/features/DocumentManagement.jsx';
import PayrollManagement from './pages/features/PayrollManagement.jsx';

// Service pages import
import VirtualHRService from './pages/services/VirtualHRservices.jsx';
import HireService from './pages/services/HiringRecruitmentservices.jsx';
import BackgroundService from './pages/services/BackgroundVerifyservices.jsx';
import TrainingService from './pages/services/Trainingservices.jsx';
import OurStory from './pages/OurStory.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Careers from "./pages/careers/Careers.jsx";
import Customers from "./pages/Customers.jsx";
import ScrollToTop from './components/ScrollToTop.jsx';
import Implementation from './pages/Implementation.jsx';
import NotFound from "./pages/NotFound.jsx";

// ATS Components
import AtsLayout from './pages/Ats/AtsLayout.jsx';
import Dashboard from "@/pages/Ats/Dashboard";
import ResumeScanner from "@/pages/Ats/ResumeScanner";
import Report from "@/pages/Ats/Report";

import TermsOfService from '@/pages/policies/TermsOfService.jsx';
import PrivacyPolicy from '@/pages/policies/PrivacyPolicy.jsx';
import SecurityPolicy from '@/pages/policies/SecurityPolicy.jsx';


function App() {
  const location = useLocation();
  const isAtsRoute = location.pathname.startsWith('/ats');

  return (
    <>
      <ScrollToTop />
      {!isAtsRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/ai-platform" element={<AiPlatform />} />

        <Route path="/ats" element={<AtsLayout />}>
          <Route index element={<Dashboard />} /> {/* Default for "/ats" */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="resume-scanner" element={<ResumeScanner />} />
          <Route path="report" element={<Report />} />
        </Route>

        {/* Features dropdown routes */}
        <Route path="/features/user-management" element={<UserManagement />} />
        <Route path="/features/expense-management" element={<ExpenseManagement />} />
        <Route path="/features/attendance-management" element={<AttendanceManagement />} />
        <Route path="/features/assets-management" element={<AssetsManagement />} />
        <Route path="/features/leave-management" element={<LeaveManagement />} />
        <Route path="/features/document-management" element={<DocumentManagement />} />
        <Route path="/features/payroll-management" element={<PayrollManagement />} />

        {/* Services dropdown routes */}
        <Route path="/services/virtual-hr-service" element={<VirtualHRService />} />
        <Route path="/services/hiring-and-recruitment-service" element={<HireService />} />
        <Route path="/services/background-verification-service" element={<BackgroundService />} />
        <Route path="/services/training-service" element={<TrainingService />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/implementation" element={<Implementation />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/security-policy" element={<SecurityPolicy />} />
        

        {/* Fallback for unrecognized routes in default interface */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isAtsRoute && <Footer className="fixed w-screen bottom-0" />}
    </>
  );
}

export default App;