import hrAutomationImg from "../assets/images/services-img/hr-automation.png";
import virtualOnboardingImg from "../assets/images/services-img/virtual-onboarding.png";
import centralizedHrmsImg from "../assets/images/services-img/centralized-hrms.png";
import complianceMonitoringImg from "../assets/images/services-img/compliance-monitoring.png";
import reimbursementImg from "../assets/images/services-img/reimbursement.png";

const servicesData = [
    {
        id: "hr-automation",
        title: "HR Automation",
        heading: "Empower your HR team with intelligent automation",
        bulletPoints: [
            { icon: "📌", title: "Attendance & Leave Management", subtitle: "Smart tracking with real-time insights." },
            { icon: "📌", title: "Payroll Processing", subtitle: "Auto-generate payslips and ensure compliance." },
            { icon: "📌", title: "Recruitment Workflow", subtitle: "AI-driven candidate shortlisting & interview scheduling." },
            { icon: "📌", title: "Document Management", subtitle: "Secure cloud-based HR file storage with automated access." },
        ],
        image: hrAutomationImg,
    },
    {
        id: "virtual-onboarding",
        title: "Virtual Employee Onboarding",
        heading: "Seamlessly onboard employees with a virtual experience",
        bulletPoints: [
            { icon: "📌", title: "Automatic Salary Calculations", subtitle: "Process Salaries Based On Working Hours, Deductions, And Benefits." },
            { icon: "📌", title: "Tax & Compliance Management", subtitle: "Auto-Calculate Taxes, Deductions, And Contributions As Per Government Regulations" },
            { icon: "📌", title: "Payslip Generation", subtitle: "Generate Detailed, Downloadable Payslips With Salary Breakdowns." },
            { icon: "📌", title: "Bank Transfer Integration", subtitle: "Direct Deposit Options For Seamless Salary Payments." },
        ],
        image: virtualOnboardingImg,
    },
    {
        id: "centralized-hrms",
        title: "Centralized HRMS",
        heading: "One platform for all HR operations",
        bulletPoints: [
            { icon: "📌", title: "All-ln-One HR Solution", subtitle: "Manage Employee Data, Payroll, Attendance, Performance, And More In One Place." },
            { icon: "📌", title: "User-Friendly Dashboard", subtitle: "A Simple, Intuitive Interface For HR Teams And Employees." },
            { icon: "📌", title: "Role-Based Access Control", subtitle: "Ensure Secure And Controlled Access To Sensitive HR Data." },
            { icon: "📌", title: "Enhanced Employee Experience", subtitle: "Self-Service Portals For Employees To Access Documents, Payslips, And Leave Requests" },
        ],
        image: centralizedHrmsImg,
    },
    {
        id: "compliance-monitoring",
        title: "Compliance Monitoring",
        heading: "Ensure regulatory compliance with real-time tracking",
        bulletPoints: [
            { icon: "📌", title: "Employee Policy Management", subtitle: "Ensure Employees Adhere To Company Policies And Guidelines." },
            { icon: "📌", title: "User-Friendly Interface", subtitle: "Simplified Dashboards For Easy Tracking And Management." },
            { icon: "📌", title: "Audit-Ready Reports", subtitle: "Generate Real-Time Compliance Reports For Audits And Inspections." },
            { icon: "📌", title: "Seamless Integration", subtitle: "Connect Compliance Monitoring With Payroll, HR Policies, And Reporting." },
        ],
        image: complianceMonitoringImg,
    },
    {
        id: "reimbursement",
        title: "Reimbursement",
        heading: "Hassle-free employee reimbursement management",
        bulletPoints: [
            { icon: "📌", title: "Real-Time Tracking & Reports", subtitle: "Employees And Managers Can Monitor Expense Claims And Approvals." },
            { icon: "📌", title: "Faster Payouts", subtitle: "Process Reimbursements Quickly With Integrated Payroll." },
            { icon: "📌", title: "Policy Compliance & Fraud Prevention", subtitle: "Prevent Over-Claimed Or Unauthorized Expenses." },
            { icon: "📌", title: "Mobile-Friendly Access", subtitle: "Employees Can Submit Claims Anytime, Anywhere." },
        ],
        image: reimbursementImg,
    },
];

export default servicesData;
