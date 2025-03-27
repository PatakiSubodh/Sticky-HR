import { useState } from "react";
import servicesData from "../../../src/data/servicesData.jsx";
import FadeInUp from "../FadeInUp";

function ServiceContent() {
    const [activeTab, setActiveTab] = useState("centralized-hrms");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const selectedService = servicesData.find((service) => service.id === activeTab) || servicesData[0];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (serviceId) => {
        setActiveTab(serviceId);
        setIsDropdownOpen(false);
    };

    return (
        <div>
            {/* Main Heading */}
            <FadeInUp delay={0.1}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center my-6 mx-4 sm:mx-8 lg:mx-16 pt-8 sm:pt-12 lg:pt-16">
                    Our Product & Services
                </h2>
            </FadeInUp>

            <div className="px-4 sm:px-8 lg:px-16 py-5 flex flex-col">
                {/* Custom Dropdown for 375px to xl */}
                <FadeInUp delay={0.1}>
                    <div className="2xl:hidden mb-4 relative">
                        <button
                            onClick={toggleDropdown}
                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-3 text-sm sm:text-base font-medium text-gray-800 bg-white border border-[#086165] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086165] flex justify-between items-center"
                        >
                            <span>{selectedService.title}</span>
                            <svg
                                className={`w-5 h-5 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute z-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                {servicesData.map((service) => (
                                    <div
                                        key={service.id}
                                        onClick={() => handleOptionClick(service.id)}
                                        className={`px-4 py-2 text-sm sm:text-base font-medium cursor-pointer ${
                                            activeTab === service.id
                                                ? "bg-[#086165] text-white"
                                                : "text-gray-800 hover:bg-gray-100"
                                        }`}
                                    >
                                        {service.title}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </FadeInUp>

                {/* Tabs Section for xl and above */}
                <FadeInUp delay={0.1}>
                    <div className="hidden 2xl:flex flex-wrap justify-between gap-2 sm:gap-4 overflow-x-auto scrollbar-hide mb-[-1px]">
                        {servicesData.map((service) => (
                            <div
                                key={service.id}
                                className={`relative flex items-center justify-center px-2 sm:px-4 pt-3 ${
                                    activeTab === service.id ? "bg-[#e4f0f1] rounded-t-xl pb-2" : ""
                                }`}
                            >
                                <button
                                    className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-medium transition duration-300 whitespace-nowrap ${
                                        activeTab === service.id
                                            ? "bg-[#086165] text-white rounded-lg"
                                            : "text-black"
                                    }`}
                                    onClick={() => setActiveTab(service.id)}
                                >
                                    {service.title}
                                </button>
                            </div>
                        ))}
                    </div>
                </FadeInUp>

                {/* Main Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center bg-[#e4f0f1] rounded-xl p-5 sm:p-7 pt-10 sm:pt-16 lg:pt-20 pb-10 sm:pb-16 lg:pb-20">
                    {/* Left Section (Text Content) */}
                    <FadeInUp key={activeTab + "-text"} duration={0.8} delay={0.2}>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                                {selectedService.heading}
                            </h2>
                            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                                {selectedService.bulletPoints.map((point, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <span className="text-yellow-500 text-lg sm:text-xl">
                                            {point.icon}
                                        </span>
                                        <div>
                                            <h4 className="text-base sm:text-lg text-gray-700 font-medium">
                                                {point.title}
                                            </h4>
                                            <p className="text-sm sm:text-base text-gray-600">
                                                {point.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeInUp>

                    {/* Right Section (Image) */}
                    <FadeInUp key={activeTab + "-image"} duration={0.8} delay={0.2}>
                        <div className="flex justify-center mt-6 md:mt-0">
                            <img
                                src={selectedService.image}
                                alt={selectedService.title}
                                className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] rounded-xl"
                                loading="lazy"
                            />
                        </div>
                    </FadeInUp>
                </div>
            </div>
        </div>
    );
}

export default ServiceContent;