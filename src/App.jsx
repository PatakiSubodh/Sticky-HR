import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserManagement from "./pages/features/UserManagement";
import ExpenseManagement from "./pages/features/ExpenseManagement";
import AttendanceManagement from "./pages/features/AttendanceManagement";
import AssetsManagement from "./pages/features/AssetsManagement";
import LeaveManagement from "./pages/features/LeaveManagement";
import DocumentManagement from "./pages/features/DocumentManagement";
import PayrollManagement from "./pages/features/PayrollManagement";
import VirtualHRService from "./pages/services/VirtualHRService";
import HiringRecruitment from "./pages/services/HiringRecruitment";
import BackgroundVerification from "./pages/services/BackgroundVerification";
import Training from "./pages/services/Training";
import AIPlatform from "./pages/AIPlatform";
import Pricing from "./pages/Pricing";
import OurStory from "./pages/OurStory";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Features */}
        <Route path="/features/user-management" element={<UserManagement />} />
        <Route path="/features/expense-management" element={<ExpenseManagement />} />
        <Route path="/features/attendance-management" element={<AttendanceManagement />} />
        <Route path="/features/assets-management" element={<AssetsManagement />} />
        <Route path="/features/leave-management" element={<LeaveManagement />} />
        <Route path="/features/document-management" element={<DocumentManagement />} />
        <Route path="/features/payroll-management" element={<PayrollManagement />} />
        {/* Services */}
        <Route path="/services/virtual-hr-service" element={<VirtualHRService />} />
        <Route path="/services/hiring-and-recruitment-service" element={<HiringRecruitment />} />
        <Route path="/services/background-verification-service" element={<BackgroundVerification />} />
        <Route path="/services/training-service" element={<Training />} />
        {/* Static Pages */}
        <Route path="/ai-platform" element={<AIPlatform />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* Optional: Catch-all for 404 */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;