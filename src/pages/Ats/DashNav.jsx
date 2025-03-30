import React, { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

import admin from "../../assets/images/Ats-img/admin.png";
import msg from "../../assets/images/Ats-img/msg.png";
import bell from "../../assets/images/Ats-img/bell.png";
import logo from "@/assets/images/cmpyLogo.png";

import dashboardImg from "../../assets/images/Ats-img/dashboard-img.png";
import resumeImg from "../../assets/images/Ats-img/resumeScanner-img.png";
import reportImg from "../../assets/images/Ats-img/report-img.png";

import { Command, Bot, SquareTerminal } from "lucide-react";
import { TeamSwitcher } from "../../components/ui/team-switcher";

export default function DashNav() {
    // Ensure sidebar is collapsed by default on small screens & open on large screens
    const [isOpen, setOpen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth >= 1024); // Open for lg screens, collapsed for smaller
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex h-screen w-full">
            {/* Sidebar */}
            <div
                className={`bg-[#EDF7F3] h-full fixed inset-y-0 left-0 ${isOpen ? "w-64" : "w-20"} p-5 shadow-xl transition-all duration-300 ease-in-out z-50`}
            >
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    {/* <Link to="/">
                        <img src={logo} alt="company logo" className="w-28 lg:w-40" />
                    </Link> */}
                    <TeamSwitcher />
                </div>

                {/* Sidebar Content */}
                <div className="mt-10 space-y-4">
                    <Link
                        to="/ats/dashboard"
                        className={`flex items-center gap-3 lg:px-3 px-3 py-2 rounded-lg ${
                            location.pathname === "/ats/dashboard"
                                ? "bg-[#086165] text-[#FFC600]"
                                : "text-black hover:border hover:border-[#086165]"
                        }`}
                    >
                        <Command className="w-5 h-5" />
                        {isOpen && "Dashboard"}
                    </Link>
                    <Link
                        to="/ats/resume-scanner"
                        className={`flex items-center gap-3 lg:px-3 px-3 py-2 rounded-lg ${
                            location.pathname === "/ats/resume-scanner"
                                ? "bg-[#086165] text-[#FFC600]"
                                : "text-black hover:border hover:border-[#086165]"
                        }`}
                    >
                        <Bot className="w-5 h-5" />
                        {isOpen && "ATS Resume"}
                    </Link>
                    <Link
                        to="/ats/report"
                        className={`flex items-center gap-3 lg:px-3 px-3 py-2 rounded-lg ${
                            location.pathname === "/ats/report"
                                ? "bg-[#086165] text-[#FFC600]"
                                : "text-black hover:border hover:border-[#086165]"
                        }`}
                    >
                        <SquareTerminal className="w-5 h-5" />
                        {isOpen && "Report"}
                    </Link>
                </div>
            </div>

            {/* Main Content Area */}
            <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "ml-64" : "ml-20"}`}>
                {/* Navbar */}
                <div className="bg-[#edf7f3] flex justify-between items-center px-6 py-4 shadow-md w-full">
                    {/* Hamburger Menu */}
                    <div>
                        <Hamburger toggled={!isOpen} toggle={() => setOpen(!isOpen)} size={28} color="#086165" />
                    </div>

                    {/* Profile Section */}
                    <div className="flex items-center gap-4">
                        <Link to="#"><img src={msg} alt="Message" className="rounded-full w-8 h-8" /></Link>
                        <Link to="#"><img src={bell} alt="Bell" className="rounded-full w-8 h-8" /></Link>
                        <Link to="#">
                            <div className="flex items-center gap-2">
                                <img src={admin} alt="Admin" className="rounded-full w-10 h-10" />
                                <div className="flex flex-col justify-center">
                                    <p className="text-lg font-semibold">Scott Martin</p>
                                    <p className="text-[#5f5f61] text-base">Administrator</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Outlet Content */}
                <main className="flex-1 p-5 bg-[#e1ebec] overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
