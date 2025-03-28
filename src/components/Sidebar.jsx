// components/Sidebar.jsx
import { AppSidebar } from "@/components/app-sidebar";
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
import { Link, useLocation, Outlet } from "react-router-dom"; // Add Outlet here

import admin from "../assets/images/Ats-img/admin.png";
import msg from "../assets/images/Ats-img/msg.png";
import bell from "../assets/images/Ats-img/bell.png";

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
                <BreadcrumbLink asChild>
                <Link to="/ats">ATS</Link>
                </BreadcrumbLink>
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
                <BreadcrumbLink asChild>
                <Link to="/ats">ATS</Link>
                </BreadcrumbLink>
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
                <BreadcrumbLink asChild>
                <Link to="/ats">ATS</Link>
                </BreadcrumbLink>
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
            <BreadcrumbLink asChild>
                <Link to="/ats">ATS</Link>
            </BreadcrumbLink>
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

            {/* Render nested route content here */}
            <main>
            <Outlet />
            </main>
        </SidebarInset>
        </>
    );
}