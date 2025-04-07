import React from "react";
import { ArrowUpRight } from "lucide-react";
import box1 from '../../assets/images/discovery-img/box1.png';
import box2 from '../../assets/images/discovery-img/box2.png';
import box3 from '../../assets/images/discovery-img/box3.png';
import box4 from '../../assets/images/discovery-img/box4.png';
import FadeInUp from "@/components/FadeInUp";
import { Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex w-full px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:my-10">
            {/* Parent Container */}
            <div className="flex flex-col xl:flex-row w-full h-full">
                {/* Left Section */}
                <div className="w-full 2xl:w-1/2 flex flex-col justify-center px-4 sm:pl-6 lg:pl-12 mb-8 2xl:mb-0 mt-6">
                    <FadeInUp delay={0.1}>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-inter text-gray-900">
                            Experience the Difference
                        </h1>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-900 mt-4">
                            Discover why StickyHR reigns the HR-Tech industry
                        </p>
                    </FadeInUp>
                    <FadeInUp delay={0.3}>
                        <Link to="/contact-us" className="inline-block">
                            <button className="mt-6 text-base sm:text-lg lg:text-xl bg-yellow-400 w-60 sm:w-64 lg:w-72 h-12 sm:h-14 lg:h-16 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg flex items-center justify-between hover:bg-yellow-500">
                                Talk to an Expert 
                                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                            </button>
                        </Link>
                    </FadeInUp>
                </div>

                {/* Right Section */}
                <div className="w-full 2xl:w-1/2 px-4 sm:pr-6 lg:pr-10 pt-6 sm:pt-8 pb-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative">
                    {/* Box 1 */}
                    <FadeInUp delay={0.2}>
                        <div className="bg-gray-100 shadow-lg p-4 sm:p-5 sm:pb-10 rounded-2xl shadow-gray-300 flex flex-col h-full hover:scale-105 transition sm:-mt-5">
                            <div className="flex items-center">
                                <span className="bg-[#335AFF] text-white p-2 rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none w-10 sm:w-12 flex justify-center">
                                    <img src={box1} alt="Centralized Platform" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </span>
                                <h3 className="font-bold text-base sm:text-lg lg:text-xl mt-2 ml-3">Centralized Platform</h3>
                            </div>
                            <p className="text-gray-600 mt-4 text-sm sm:text-base">
                                StickyHR HRMS provides an all-in-one solution with an interactive dashboard, employee database, and self-service features, helping businesses save costs.
                            </p>
                        </div>
                    </FadeInUp>

                    {/* Box 2 */}
                    <FadeInUp delay={0.3}>
                        <div className="bg-gray-100 shadow-lg p-4 sm:p-5 rounded-2xl shadow-gray-300 flex flex-col h-full hover:scale-105 transition sm:mt-5">
                            <div className="flex items-center">
                                <span className="bg-[#00CD37] text-white p-2 rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none w-10 sm:w-12 flex justify-center">
                                    <img src={box2} alt="User Experience" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </span>
                                <h3 className="font-bold text-base sm:text-lg lg:text-xl mt-2 ml-3">User Experience</h3>
                            </div>
                            <p className="text-gray-600 mt-4 text-sm sm:text-base">
                                Our HRMS is easy to use, allowing employees to navigate smoothly and complete HR tasks effortlessly.
                            </p>
                        </div>
                    </FadeInUp>

                    {/* Box 3 */}
                    <FadeInUp delay={0.4}>
                        <div className="bg-gray-100 shadow-lg p-4 sm:p-5 rounded-2xl shadow-gray-300 flex flex-col h-full hover:scale-105 transition sm:-mt-5">
                            <div className="flex items-center">
                                <span className="bg-[#F9C804] text-white p-2 rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none w-10 sm:w-12 flex justify-center">
                                    <img src={box3} alt="Data Security" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </span>
                                <h3 className="font-bold text-base sm:text-lg lg:text-xl mt-2 ml-3">Data Security</h3>
                            </div>
                            <p className="text-gray-600 mt-4 text-sm sm:text-base">
                                We comply with VAPT, ISO, and AICPA SOC standards, ensuring adherence to GDPR and HIPAA through regular audits.
                            </p>
                        </div>
                    </FadeInUp>

                    {/* Box 4 */}
                    <FadeInUp delay={0.5}>
                        <div className="bg-gray-100 shadow-lg p-4 sm:p-5 rounded-2xl shadow-gray-300 flex flex-col h-full hover:scale-105 transition sm:mt-5">
                            <div className="flex items-center">
                                <span className="bg-[#DD4F24] text-white p-2 rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none w-10 sm:w-12 flex justify-center">
                                    <img src={box4} alt="AI-Driven Technology" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </span>
                                <h3 className="font-bold text-base sm:text-lg lg:text-xl mt-2 ml-3">AI-Driven Technology</h3>
                            </div>
                            <p className="text-gray-600 mt-4 text-sm sm:text-base">
                                StickyHR HRMS automates tasks, improves processes, and provides workforce insights with AI.
                            </p>
                        </div>
                    </FadeInUp>
                </div>
            </div>
        </div>
    );
};

export default Layout;