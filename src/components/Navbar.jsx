import React, { useState } from "react";
import logo from '../assets/images/cmpyLogo.png';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from 'react-router-dom';
import { Sling as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import FadeInUp from './FadeInUp';

// Features dropdown icons
import img1 from '../assets/icons/features-dropdown-icons/img1.png';
import img2 from '../assets/icons/features-dropdown-icons/img2.png';
import img3 from '../assets/icons/features-dropdown-icons/img3.png';
import img4 from '../assets/icons/features-dropdown-icons/img4.png';
import img5 from '../assets/icons/features-dropdown-icons/img5.png';
import img6 from '../assets/icons/features-dropdown-icons/img6.png';
import img7 from '../assets/icons/features-dropdown-icons/img7.png';

// Services dropdown icons
import serImg1 from '../assets/icons/services-dropdown-icons/serImg1.png';
import serImg2 from '../assets/icons/services-dropdown-icons/serImg2.png';
import serImg3 from '../assets/icons/services-dropdown-icons/serImg3.png';
import serImg4 from '../assets/icons/services-dropdown-icons/serImg4.png';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Features data 
const features = [
    { 
        title: "User Management", 
        href: "/features/user-management", 
        bgHover: "hover:bg-[#F1F8FF]", 
        img: img1 
    },
    { 
        title: "Expense Management", 
        href: "/features/expense-management", 
        bgHover: "hover:bg-[#F4FEFF]", 
        img: img2 
    },
    { 
        title: "Attendance Management", 
        href: "/features/attendance-management", 
        bgHover: "hover:bg-[#FFF3EF]", 
        img: img3 
    },
    { 
        title: "Assets Management", 
        href: "/features/assets-management", 
        bgHover: "hover:bg-[#EFFFF5]", 
        img: img4 
    },
    { 
        title: "Leave Management", 
        href: "/features/leave-management", 
        bgHover: "hover:bg-[#F7F4FF]", 
        img: img5 
    },
    { 
        title: "Document Management", 
        href: "/features/document-management", 
        bgHover: "hover:bg-[#EBF8FF]", 
        img: img6 
    },
    { 
        title: "Payroll Management", 
        href: "/features/payroll-management", 
        bgHover: "hover:bg-[#FFFCF2]", 
        img: img7 
    },
];

// Services data 
const services = [
    { 
        title: "Virtual HR Services", 
        href: "/services/virtual-hr-service", 
        bgHover: "hover:bg-[#F1F8FF]", 
        img: serImg1 
    },
    { 
        title: "Hiring & Recruitment", 
        href: "/services/hiring-and-recruitment-service", 
        bgHover: "hover:bg-[#CCE7FF]", 
        img: serImg2 
    },
    { 
        title: "Background Verification", 
        href: "/services/background-verification-service", 
        bgHover: "hover:bg-[#DEEEEF]", 
        img: serImg3 
    },
    { 
        title: "Training", 
        href: "/services/training-service", 
        bgHover: "hover:bg-[#F7F4FF]", 
        img: serImg4 
    },
];

// Static navigation Data
const staticNavItems = [
    { 
        title: "AI Platform", 
        href: "/ai-platform" 
    },
    { 
        title: "Pricing", 
        href: "/pricing" 
    },
    { 
        title: "Our Story", 
        href: "/our-story" 
    },
];

function Navbar() {
    const location = useLocation();
    const isFeaturesActive = location.pathname.startsWith("/features/");
    const isServicesActive = location.pathname.startsWith("/services/");
    const [isOpen, setOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    return (
        <div className="main-nav flex mx-4 md:mx-8 lg:mx-16 my-5 justify-between align-middle">
            {/* LOGO and Hamburger */}
            <div className="flex justify-between items-center w-full lg:w-auto ml-4">
                <FadeInUp delay={0.1}>
                    <Link to="/"><img src={logo} alt="company logo" className="2xl:w-52 xl:w-48 lg:w-40 md:w-44 sm:w-36 w-28" /></Link>
                </FadeInUp>
                <div className="lg:hidden">
                    <Hamburger toggled={isOpen} toggle={setOpen} size={28} color="#086165" />
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
                <FadeInUp delay={0.2}>
                    <NavigationMenu>
                        <NavigationMenuList className="text-[1.1rem]"> 
                            {/* Home */}
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link to="/">
                                        <Button
                                            variant="link"
                                            className={`2xl:text-[1.1rem] xl:text-[1rem] lg:text-[0.8rem] font-medium hover:no-underline ${location.pathname === "/" ? "bg-[#086165] text-white lg:px-4 lg:py- xl:px-4 xl:py-3 2xl:px-4 2xl:py-5 rounded-3xl" : ""}`}
                                        >
                                            Home
                                        </Button>
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* Features */}
                            <NavigationMenuItem>
                                <Link to="/features/user-management">
                                    <NavigationMenuTrigger
                                        className={cn(
                                            isFeaturesActive ? "bg-[#086165] text-white lg:px-4 lg:py- xl:px-4 xl:py-3 2xl:px-4 2xl:py-5 rounded-3xl" : "text-black",
                                            "hover:text-black aria-expanded:text-black 2xl:text-[1.1rem] xl:text-[1rem] lg:text-[0.8rem] font-medium"
                                        )}
                                    >
                                        Features
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[450px] gap-3 p-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {features.map((feature) => (
                                                <ListItem
                                                    key={feature.title}
                                                    title={feature.title}
                                                    href={feature.href}
                                                    img={feature.img}
                                                    className={feature.bgHover}
                                                />
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </Link>
                            </NavigationMenuItem>

                            {/* Services */}
                            <NavigationMenuItem>
                                <Link to="/services/virtual-hr-service">
                                    <NavigationMenuTrigger
                                        className={cn(
                                            isServicesActive ? "bg-[#086165] text-white lg:px-4 lg:py- xl:px-4 xl:py-3 2xl:px-4 2xl:py-5 rounded-3xl" : "text-black",
                                            "hover:text-black aria-expanded:text-black 2xl:text-[1.1rem] xl:text-[1rem] lg:text-[0.8rem] font-medium"
                                        )}
                                    >
                                        Services
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {services.map((service) => (
                                                <ListItem
                                                    key={service.title}
                                                    title={service.title}
                                                    href={service.href}
                                                    img={service.img}
                                                    className={service.bgHover}
                                                />
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </Link>
                            </NavigationMenuItem>

                            {/* Static Pages */}
                            {staticNavItems.map((item) => (
                                <NavigationMenuItem key={item.href}>
                                    <NavigationMenuLink asChild>
                                        <Link to={item.href}>
                                            <Button
                                                variant="link"
                                                className={`2xl:text-[1.1rem] xl:text-[1rem] lg:text-[0.8rem] font-medium hover:no-underline ${
                                                    location.pathname === item.href ? "bg-[#086165] text-white lg:px-4 lg:py- xl:px-4 xl:py-3 2xl:px-4 2xl:py-5 rounded-3xl" : ""
                                                }`}
                                            >
                                                {item.title}
                                            </Button>
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </FadeInUp>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
                <FadeInUp delay={0.3}>
                    <Link to="/contact-us">
                        <Button className="bg-yellow-400 text-black rounded-3xl font-semibold 2xl:text-[1.1rem] xl:text-[1rem] lg:text-[0.8rem] hover:text-white lg:px-4 lg:py- xl:px-4 xl:py-3 2xl:px-4 2xl:py-5 active:scale-95 transition">
                            Contact Us
                        </Button>
                    </Link>
                </FadeInUp>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed inset-y-0 right-0 w-[80%] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="pt-[5rem] p-4">
                    <motion.button
                        onClick={() => setOpen(false)}
                        className="absolute top-8 right-8 text-black focus:outline-none"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </motion.button>

                    <div className="mt-[5%] space-y-4 overflow-y-auto max-h-[calc(100vh-10rem)]">
                        {/* Home */}
                        <Link
                            to="/"
                            className={`block text-base font-medium px-4 py-2 rounded-lg ${
                                location.pathname === "/" ? "bg-[#086165] text-white" : "text-black hover:bg-gray-100"
                            }`}
                            onClick={() => {
                                setOpen(false);
                                setActiveDropdown(null);
                            }}
                        >
                            Home
                        </Link>

                        {/* Features */}
                        <div>
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === "features" ? null : "features")}
                                className={`flex items-center justify-between w-full text-base font-medium px-4 py-2 rounded-lg ${
                                    location.pathname.startsWith("/features")
                                        ? "bg-[#086165] text-white"
                                        : "text-black hover:bg-gray-100"
                                }`}
                            >
                                Features
                                <svg
                                    className={`w-4 h-4 ml-2 transition-transform ${
                                        activeDropdown === "features" ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>
                            {activeDropdown === "features" && (
                                <ul className="pl-4 mt-2 space-y-2">
                                    {features.map((feature) => (
                                        <li key={feature.title}>
                                            <Link
                                                to={feature.href}
                                                className={`block text-base font-medium px-4 py-2 rounded-lg ${
                                                    location.pathname === feature.href
                                                        ? "bg-[#FFC600] text-black"
                                                        : "text-black hover:bg-gray-100"
                                                }`}
                                                onClick={() => setOpen(false)}
                                            >
                                                {feature.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Services */}
                        <div>
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
                                className={`flex items-center justify-between w-full text-base font-medium px-4 py-2 rounded-lg ${
                                    location.pathname.startsWith("/services")
                                        ? "bg-[#086165] text-white"
                                        : "text-black hover:bg-gray-100"
                                }`}
                            >
                                Services
                                <svg
                                    className={`w-4 h-4 ml-2 transition-transform ${
                                        activeDropdown === "services" ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>
                            {activeDropdown === "services" && (
                                <ul className="pl-4 mt-2 space-y-2">
                                    {services.map((service) => (
                                        <li key={service.title}>
                                            <Link
                                                to={service.href}
                                                className={`block text-base font-medium px-4 py-2 rounded-lg ${
                                                    location.pathname === service.href
                                                        ? "bg-[#FFC600] text-black"
                                                        : "text-black hover:bg-gray-100"
                                                }`}
                                                onClick={() => setOpen(false)}
                                            >
                                                {service.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Static Pages */}
                        {staticNavItems.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className={`block text-base font-medium px-4 py-2 rounded-lg ${
                                    location.pathname === item.href ? "bg-[#086165] text-white" : "text-black hover:bg-gray-100"
                                }`}
                                onClick={() => {
                                    setOpen(false);
                                    setActiveDropdown(null);
                                }}
                            >
                                {item.title}
                            </Link>
                        ))}
                        {/* Contact Us in Mobile */}
                        <Link
                            to="/contact-us"
                            className={`block text-base font-medium px-4 py-2 rounded-lg ${
                                location.pathname === "/contact-us" ? "bg-[#086165] text-white" : "text-black hover:bg-gray-100"
                            }`}
                            onClick={() => {
                                setOpen(false);
                                setActiveDropdown(null);
                            }}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

const ListItem = React.forwardRef(({ className, title, children, href, img, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    to={href}
                    ref={ref}
                    className={cn(
                        "flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="w-8 h-8">
                        <img src={img} alt={`${title} icon`} className="w-full h-full object-contain" />
                    </div>
                    <div>
                        <div className="text-md font-medium">{title}</div>
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                            {children}
                        </p>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});

ListItem.displayName = "ListItem";