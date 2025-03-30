import hc from "../assets/images/aiproducts-img/hc.png";
import steps from "../assets/images/aiproducts-img/steps.png";
import book from "../assets/images/aiproducts-img/book.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import React, { useRef } from "react";

import FadeInUp from "../components/FadeInUp";
import { Link, useNavigate} from 'react-router-dom';

export default function AiPlatform({ onSwitchToNewInterface }){
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/ats/dashboard"); 
    };

    return(
        <div className="aiplatform-component">
            {/* ats card */}
            <div className="px-8">
                {/* card */}
                <div className="aiplatform-card lg:m-10 md:m-6 2xl:h-[600px] xl:h-[550px] lg:h-[480px] bg-[#086165] lg:rounded-3xl md:rounded-2xl sm:rounded-xl rounded-lg overflow-hidden relative flex flex-col lg:flex-row md:px-10 md:py-8 md:pt-10 sm:px-8 sm:py-10 px-6 py-6 lg:px-6">
                    <div className="aiplatform-card-content 2xl:space-y-7 xl:space-y-6 lg:space-y-5 md:space-y-4 sm:space-y-4 space-y-4 flex flex-col lg:w-1/2 2xl:mt-[5rem] 2xl:ml-[3rem] xl:mt-[3rem] xl:ml-[3rem] lg:mt-[3rem] lg:ml-[1rem]  ">
                        {/* aiplatform Badge */}
                        <FadeInUp delay={0.1}>
                        <span className="2xl:text-[1.2rem] xl:text-[1rem] lg:text-[1rem] sm:text-[1rem] text-[0.8rem] font-medium bg-[#DEEEEF] rounded-3xl 2xl:px-6 2xl:py-2 xl:px-5 xl:py-1 lg:px-4 md:px-3 sm:px-2 px-2 py-1 text-[#2A4D50] w-fit">
                            AI-Powered ATS
                        </span>
                        </FadeInUp>

                        {/* Heading */}
                        <FadeInUp delay={0.2}>
                        <h3 className="2xl:text-[3rem] xl:text-[2.7rem] lg:text-[2.4rem] md:text-[2.1rem] sm:text-[1.9rem] text-[1.4rem] font-extrabold text-white leading-tight">
                            Transform Your Hiring Process with <span className="text-[#FFC600]">AI-Platform</span>
                        </h3>
                        </FadeInUp>

                        {/* Subheading */}
                        <FadeInUp delay={0.3}>
                        <h4 className="2xl:text-[1.5rem] xl:text-[1.3rem] sm:text-[1.1rem] text-[0.8rem] font-medium text-[#DEEEEF]">
                            Our AI-powered ATS streamlines recruitment from job posting to onboarding, automating candidate screening and enhancing collaboration and hiring decisions.
                        </h4>
                        </FadeInUp>
                    </div>

                    <div className="aiplatform-card-polygons lg:w-1/2 flex flex-col justify-center md:mt-10 sm:mt-8 mt-6 md:space-y-6 lg:mt-0 lg:space-y-10 sm:space-y-8 space-y-6 2xl:px-16 xl:px-12 lg:px-8  ">
                        {/* Progress Bar */}
                        <div className="upload-progress flex justify-center items-center">
                            <div className="flex items-center sm:gap-2 gap-1">
                                {/* Step 1 - Active */}
                                <FadeInUp delay={0.15 * 1} duration={0.7}>
                                <div className="sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-[#086165] font-bold text-sm sm:text-lg">
                                    1
                                </div>
                                </FadeInUp>

                                {/* Completed Line */}
                                <FadeInUp delay={0.15 * 2} duration={0.7}>
                                <div className="sm:w-16 w-8 h-1 bg-yellow-400"></div>
                                </FadeInUp>

                                {/* Step 2 - Active */}
                                <FadeInUp delay={0.15 * 1} duration={0.7}>
                                <div className="sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-[#086165] font-bold text-sm sm:text-lg">
                                    2
                                </div>
                                </FadeInUp>

                                {/* Pending Line - Fix applied */}
                                <FadeInUp delay={0.15 * 2} duration={0.7}>
                                <div className="sm:w-16 w-8 h-1 bg-[#FDFDF5]"></div>
                                </FadeInUp>

                                {/* Step 3 */}
                                <FadeInUp delay={0.15 * 1} duration={0.7}>
                                <div className="sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#FDFDF5] text-[#086165] font-bold  text-smtsm:ext-lg">
                                    3
                                </div>
                                </FadeInUp>

                                <FadeInUp delay={0.15 * 2} duration={0.7}>
                                <div className="sm:w-16 w-8 h-1 bg-[#FDFDF5]"></div>
                                </FadeInUp>

                                {/* Step 4 */}
                                <FadeInUp delay={0.15 * 1} duration={0.7}>
                                <div className="sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#FDFDF5] text-[#086165] font-bold  text-smtsm:ext-lg">
                                    4
                                </div>
                                </FadeInUp>
                            </div>
                        </div>

                        {/* Upload Resume Card */}
                        <FadeInUp delay={0.1}>
                        <div className="bg-[#FFFFFF] bg-opacity-15 w-full min-h-[15rem] border-2 border-[#DEEEEF] rounded-[10px] sm:rounded-[15px] md:rounded-[24px] flex flex-col items-center justify-center sm:p-4 p-5">
                            {/* Updated Icon Color */}
                            <FadeInUp delay={0.2}>
                            <FontAwesomeIcon icon={faUpload} className="text-5xl text-[#E6F0F2] mb-3" />
                            </FadeInUp>

                            {/* Upload feature */}
                            <div className="flex flex-col items-center">
                                {/* Hidden File Input */}
                                <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept=".pdf,.doc,.docx"
                                />

                                {/* Upload Button */}
                                <FadeInUp delay={0.3}>
                                <button
                                    className="text-base font-semibold py-3 px-4 bg-[#FFC600] rounded-xl text-black shadow-md hover:bg-[#FFD700] active:scale-95 transition cursor-pointer"
                                    onClick={handleButtonClick}
                                >
                                    Upload Your Resume
                                </button>
                                </FadeInUp>
                            </div>
                        </div>
                        </FadeInUp>
                    </div>
                </div>
            </div>

            {/* Rest of your component remains the same */}
            {/* ATS grids */}
            <div className="ats-grids">
                    {/* ats grid text */}
                    <div className="text-center p-10">
                        <FadeInUp delay={0.1}>
                        <h1 className="xl:text-[3rem] lg:text-[2.6rem] md:text-[2rem] sm:text-[1.9rem] text-[1.7rem] font-semibold">Our AI Platform Features</h1>
                        </FadeInUp>
                        <FadeInUp delay={0.2}>
                        <p className="font-normal xl:text-[1.6rem] lg:text-[1.3rem] md:text-[1.1rem] sm:text-[1rem] text-[0.9rem] mt-4">Filter candidates quickly with smart resume parsing.</p>
                        </FadeInUp>
                    </div>
                    
                    {/* Grids */}
                    <div className="bg-[#deeeef] grid 2xl:grid-cols-3 md:grid-cols-2 gap-6 sm:px-16 px-10 pt-10 pb-10">
                        {/* Card 1 */}
                        <FadeInUp delay={0.2 * 1} duration={0.7}>
                            <div className="p-5 bg-[#ffffff] shadow-md shadow-gray-300 rounded-xl text-xl font-semibold overflow-hidden relative group cursor-pointer">
                            <div className="circles absolute flex justify-center items-center lg:-bottom-[4rem] lg:-right-[9.5rem] md:-bottom-[3rem] md:-right-[8rem] sm:-bottom-[2rem] sm:-right-[6rem] -bottom-[0.3rem] -right-[6rem] group-hover:-right-[4rem] md:group-hover:-right-[9rem] transition-all group-hover:scale-105">
                                <div className="cirInr lg:w-[17rem] lg:h-[17rem] md:w-[14rem] md:h-[14rem] sm:w-[12rem] sm:h-[12rem] w-[10rem] h-[10rem] bg-[#88c9cc] rounded-full opacity-90">
                                <img src={book} alt="book" className="lg:w-[50px] md:w-[40px] w-[30px] lg:bottom-[7.2rem] md:bottom-[6rem] sm:bottom-[5rem] bottom-[4rem] lg:left-9 md:left-7 sm:left-5 left-4 absolute group-hover:scale-125 transition" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p>AI-Powered ATS</p>
                                <p className="font-medium text-sm 2xl:w-[18rem] xl:w-full lg:w-[18rem] md:w-[15rem] pb-1">Speed Up Recruitment with Automated Workflows</p>
                                <div>
                                <Link to="/contact-us">
                                    <button className="bg-[#ffc600] rounded-full font-semibold 2xl:px-5 2xl:py-2 xl:px-4 lg:px-3 md:px-3 px-2 py-1 text-sm hover:bg-yellow-500 active:scale-95 transition">Get start</button>
                                </Link>
                                </div>
                            </div>
                            </div>
                        </FadeInUp>

                        {/* Card 2 */}
                        <FadeInUp delay={0.2 * 2} duration={0.7}>
                            <div className="p-5 bg-[#ffffff] shadow-md shadow-gray-300 rounded-xl text-xl font-semibold overflow-hidden relative group cursor-pointer">
                            <div className="circles absolute flex justify-center items-center lg:-bottom-[4rem] lg:-right-[9.5rem] md:-bottom-[3rem] md:-right-[8rem] sm:-bottom-[2rem] sm:-right-[6rem] -bottom-[0.3rem] -right-[6rem] group-hover:-right-[4rem] md:group-hover:-right-[9rem] transition-all group-hover:scale-105">
                                <div className="cirInr lg:w-[17rem] lg:h-[17rem] md:w-[14rem] md:h-[14rem] sm:w-[12rem] sm:h-[12rem] w-[10rem] h-[10rem] bg-[#88c9cc] rounded-full opacity-90">
                                <img src={book} alt="book" className="lg:w-[50px] md:w-[40px] w-[30px] lg:bottom-[7.2rem] md:bottom-[6rem] sm:bottom-[5rem] bottom-[4rem] lg:left-9 md:left-7 sm:left-5 left-4 absolute group-hover:scale-125 transition" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p>AI-Powered ATS</p>
                                <p className="font-medium text-sm 2xl:w-[18rem] xl:w-full lg:w-[18rem] md:w-[15rem] pb-1">Speed Up Recruitment with Automated Workflows</p>
                                <div>
                                <Link to="/contact-us">
                                    <button className="bg-[#ffc600] rounded-full font-semibold 2xl:px-5 2xl:py-2 xl:px-4 lg:px-3 md:px-3 px-2 py-1 text-sm hover:bg-yellow-500 active:scale-95 transition">Get start</button>
                                </Link>
                                </div>
                            </div>
                            </div>
                        </FadeInUp>

                        {/* Card 3 */}
                        <FadeInUp delay={0.2 * 3} duration={0.7}>
                            <div className="p-5 bg-[#ffffff] shadow-md shadow-gray-300 rounded-xl text-xl font-semibold overflow-hidden relative group cursor-pointer">
                            <div className="circles absolute flex justify-center items-center lg:-bottom-[4rem] lg:-right-[9.5rem] md:-bottom-[3rem] md:-right-[8rem] sm:-bottom-[2rem] sm:-right-[6rem] -bottom-[0.3rem] -right-[6rem] group-hover:-right-[4rem] md:group-hover:-right-[9rem] transition-all group-hover:scale-105">
                                <div className="cirInr lg:w-[17rem] lg:h-[17rem] md:w-[14rem] md:h-[14rem] sm:w-[12rem] sm:h-[12rem] w-[10rem] h-[10rem] bg-[#88c9cc] rounded-full opacity-90">
                                <img src={book} alt="book" className="lg:w-[50px] md:w-[40px] w-[30px] lg:bottom-[7.2rem] md:bottom-[6rem] sm:bottom-[5rem] bottom-[4rem] lg:left-9 md:left-7 sm:left-5 left-4 absolute group-hover:scale-125 transition" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p>AI-Powered ATS</p>
                                <p className="font-medium text-sm 2xl:w-[18rem] xl:w-full lg:w-[18rem] md:w-[15rem] pb-1">Speed Up Recruitment with Automated Workflows</p>
                                <div>
                                <Link to="/contact-us">
                                    <button className="bg-[#ffc600] rounded-full font-semibold 2xl:px-5 2xl:py-2 xl:px-4 lg:px-3 md:px-3 px-2 py-1 text-sm hover:bg-yellow-500 active:scale-95 transition">Get start</button>
                                </Link>
                                </div>
                            </div>
                            </div>
                        </FadeInUp>

                        {/* Card 4 */}
                        <FadeInUp delay={0.2 * 4} duration={0.7}>
                            <div className="p-5 bg-[#ffffff] shadow-md shadow-gray-300 rounded-xl text-xl font-semibold overflow-hidden relative group cursor-pointer">
                            <div className="circles absolute flex justify-center items-center lg:-bottom-[4rem] lg:-right-[9.5rem] md:-bottom-[3rem] md:-right-[8rem] sm:-bottom-[2rem] sm:-right-[6rem] -bottom-[0.3rem] -right-[6rem] group-hover:-right-[4rem] md:group-hover:-right-[9rem] transition-all group-hover:scale-105">
                                <div className="cirInr lg:w-[17rem] lg:h-[17rem] md:w-[14rem] md:h-[14rem] sm:w-[12rem] sm:h-[12rem] w-[10rem] h-[10rem] bg-[#88c9cc] rounded-full opacity-90">
                                <img src={book} alt="book" className="lg:w-[50px] md:w-[40px] w-[30px] lg:bottom-[7.2rem] md:bottom-[6rem] sm:bottom-[5rem] bottom-[4rem] lg:left-9 md:left-7 sm:left-5 left-4 absolute group-hover:scale-125 transition" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p>AI-Powered ATS</p>
                                <p className="font-medium text-sm 2xl:w-[18rem] xl:w-full lg:w-[18rem] md:w-[15rem] pb-1">Speed Up Recruitment with Automated Workflows</p>
                                <div>
                                <Link to="/contact-us">
                                    <button className="bg-[#ffc600] rounded-full font-semibold 2xl:px-5 2xl:py-2 xl:px-4 lg:px-3 md:px-3 px-2 py-1 text-sm hover:bg-yellow-500 active:scale-95 transition">Get start</button>
                                </Link>
                                </div>
                            </div>
                            </div>
                        </FadeInUp>

                        {/* Card 5 */}
                        <FadeInUp delay={0.2 * 5} duration={0.7}>
                            <div className="p-5 bg-[#ffffff] shadow-md shadow-gray-300 rounded-xl text-xl font-semibold overflow-hidden relative group cursor-pointer">
                            <div className="circles absolute flex justify-center items-center lg:-bottom-[4rem] lg:-right-[9.5rem] md:-bottom-[3rem] md:-right-[8rem] sm:-bottom-[2rem] sm:-right-[6rem] -bottom-[0.3rem] -right-[6rem] group-hover:-right-[4rem] md:group-hover:-right-[9rem] transition-all group-hover:scale-105">
                                <div className="cirInr lg:w-[17rem] lg:h-[17rem] md:w-[14rem] md:h-[14rem] sm:w-[12rem] sm:h-[12rem] w-[10rem] h-[10rem] bg-[#88c9cc] rounded-full opacity-90">
                                <img src={book} alt="book" className="lg:w-[50px] md:w-[40px] w-[30px] lg:bottom-[7.2rem] md:bottom-[6rem] sm:bottom-[5rem] bottom-[4rem] lg:left-9 md:left-7 sm:left-5 left-4 absolute group-hover:scale-125 transition" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p>AI-Powered ATS</p>
                                <p className="font-medium text-sm 2xl:w-[18rem] xl:w-full lg:w-[18rem] md:w-[15rem] pb-1">Speed Up Recruitment with Automated Workflows</p>
                                <div>
                                <Link to="/contact-us">
                                    <button className="bg-[#ffc600] rounded-full font-semibold 2xl:px-5 2xl:py-2 xl:px-4 lg:px-3 md:px-3 px-2 py-1 text-sm hover:bg-yellow-500 active:scale-95 transition">Get start</button>
                                </Link>
                                </div>
                            </div>
                            </div>
                        </FadeInUp>

                        {/* Card 6 */}
                        <FadeInUp delay={0.2 * 6} duration={0.7}>
                            <div className="p-5 bg-[#ffffff] shadow-md shadow-gray-300 rounded-xl text-xl font-semibold overflow-hidden relative group cursor-pointer">
                            <div className="circles absolute flex justify-center items-center lg:-bottom-[4rem] lg:-right-[9.5rem] md:-bottom-[3rem] md:-right-[8rem] sm:-bottom-[2rem] sm:-right-[6rem] -bottom-[0.3rem] -right-[6rem] group-hover:-right-[4rem] md:group-hover:-right-[9rem] transition-all group-hover:scale-105">
                                <div className="cirInr lg:w-[17rem] lg:h-[17rem] md:w-[14rem] md:h-[14rem] sm:w-[12rem] sm:h-[12rem] w-[10rem] h-[10rem] bg-[#88c9cc] rounded-full opacity-90">
                                <img src={book} alt="book" className="lg:w-[50px] md:w-[40px] w-[30px] lg:bottom-[7.2rem] md:bottom-[6rem] sm:bottom-[5rem] bottom-[4rem] lg:left-9 md:left-7 sm:left-5 left-4 absolute group-hover:scale-125 transition" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p>AI-Powered ATS</p>
                                <p className="font-medium text-sm 2xl:w-[18rem] xl:w-full lg:w-[18rem] md:w-[15rem] pb-1">Speed Up Recruitment with Automated Workflows</p>
                                <div>
                                <Link to="/contact-us">
                                    <button className="bg-[#ffc600] rounded-full font-semibold 2xl:px-5 2xl:py-2 xl:px-4 lg:px-3 md:px-3 px-2 py-1 text-sm hover:bg-yellow-500 active:scale-95 transition">Get start</button>
                                </Link>
                                </div>
                            </div>
                            </div>
                        </FadeInUp>
                    </div>
            </div>

            {/* how it works */}
            <div className="ats-works">
                    {/* ats works text */}
                    <div className="text-center p-10">
                        <FadeInUp delay={0.1}>
                        <h1 className="text-5xl font-semibold pt-10">How it work</h1>
                        </FadeInUp>
                        <FadeInUp delay={0.2}>
                        <p className="font-medium text-xl mt-4">ATS adapts to your unique hiring needs—saving time, reducing costs, and boosting productivity.</p>
                        </FadeInUp>
                    </div>
                    {/* image section */}
                    <div className="md:grid md:grid-cols-2 flex flex-col pl-16 pr-16 md:pb-0 pb-10 h-full">
                        <FadeInUp delay={0.3}>
                        <img src={steps} alt="Steps" className="h-[90%]"/>
                        </FadeInUp>
                        <FadeInUp delay={0.4}>
                        <img src={hc} alt="Hiring Concept" className="h-[90%] "/>
                        </FadeInUp>
                    </div>
            </div>
        </div>
    );
}