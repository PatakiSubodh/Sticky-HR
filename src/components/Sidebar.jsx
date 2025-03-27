// components/Sidebar.jsx
import { AppSidebar } from "@/components/app-sidebar"; // Adjust path if needed
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarFooter } from "@/components/ui/sidebar";
import { NavUser } from "@/components/nav-user";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

import Dashboard from "../pages/Ats/Dashboard";

import { Link, useLocation, Routes, Route } from "react-router-dom"; // Add Routes and Route
import admin from "../assets/images/Ats-img/admin.png";
import msg from "../assets/images/Ats-img/msg.png";
import bell from "../assets/images/Ats-img/bell.png";

// Placeholder components for ATS Resume and Report
const ATSResume = () => (
    <div className="h-full bg-[#e1ebec] p-5">
        <h1 className="text-left text-xl pb-5 font-semibold">Resume Scanner</h1>
        <p>This is a placeholder for the ATS Resume Scanner page.</p>
    </div>
);

const Report = () => (
    <div className="h-full bg-[#e1ebec] p-5">
        <h1 className="text-left text-xl pb-5 font-semibold">Report</h1>
        <p>This is a placeholder for the Report page.</p>
    </div>
);

const data = {
    user: {
        name: "shadcn",
        email: "sample@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
};

export default function Sidebar() {
    const location = useLocation();

    // Dynamically update the breadcrumb based on the current route
    const getBreadcrumb = () => {
        const path = location.pathname;
        if (path === "/ats/dashboard") {
        return (
            <>
            <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/ats">ATS</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
            </>
        );
        } else if (path === "/ats/resume-scanner") {
        return (
            <>
            <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/ats">ATS</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
                <BreadcrumbPage>Resume Scanner</BreadcrumbPage>
            </BreadcrumbItem>
            </>
        );
        } else if (path === "/ats/report") {
        return (
            <>
            <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/ats">ATS</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
                <BreadcrumbPage>Report</BreadcrumbPage>
            </BreadcrumbItem>
            </>
        );
        }
        return (
        <>
            <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="/ats">ATS</BreadcrumbLink>
            </BreadcrumbItem>
        </>
        );
    };

    return (
        <>
        <AppSidebar />
        <SidebarInset className="bg-[#e1ebec]">
            <header className="flex h-16 shrink-0 items-center bg-[#edf7f3] justify-between">
            <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                <BreadcrumbList>{getBreadcrumb()}</BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="flex">
                <Link to="#">
                <img src={msg} alt="Message-Image" className="rounded-full scale-50" />
                </Link>
                <Link to="#">
                <img src={bell} alt="Bell-Image" className="rounded-full scale-50" />
                </Link>
                <Link to="#">
                <div className="flex scale-75">
                    <img src={admin} alt="Admin-Img" className="rounded-full scale-75" />
                    <div className="flex flex-col justify-center">
                    <p className="text-lg font-semibold">Scott Martin</p>
                    <p className="text-[#5f5f61] text-base">Administrator</p>
                    </div>
                </div>
                </Link>
                <SidebarFooter>
                <NavUser user={data.user} />
                </SidebarFooter>
            </div>
            </header>

            {/* Conditionally render content based on the route */}
            <Routes>
            <Route path="/ats/dashboard" element={<Dashboard />} />
            <Route path="/ats/resume-scanner" element={<ATSResume />} />
            <Route path="/ats/report" element={<Report />} />
            </Routes>
        </SidebarInset>
        </>
    );
}