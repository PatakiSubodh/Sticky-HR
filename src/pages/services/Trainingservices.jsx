import { Link } from 'react-router-dom';

import card from "../../assets/images/services-img/Training/card.png"
import c1 from "../../assets/images/services-img/Training/c1.png"
import c2 from "../../assets/images/services-img/Training/c2.png"
import c3 from "../../assets/images/services-img/Training/c3.png"
import c4 from "../../assets/images/services-img/Training/c4.png"
import c5 from "../../assets/images/services-img/Training/c5.png"

import bc1 from "../../assets/images/services-img/Training/bc1.png"
import bc2 from "../../assets/images/services-img/Training/bc2.png"
import bc3 from "../../assets/images/services-img/Training/bc3.png"
import bc4 from "../../assets/images/services-img/Training/bc4.png"
import steps from "../../assets/images/services-img/HRS/steps.png"

import ServicesImplementationCard from "../../pages/services/ServicesImplementationCard"

import lady from "../../assets/images/services-img/VHR/lady.png";
import grad from "../../assets/images/services-img/VHR/grad.png";
import board from "../../assets/images/services-img/VHR/board.png";
import FadeInUp from "../../components/FadeInUp";

export default function Trainingservices() {
    return (
        <>
            {/* card */}
            <div className="virSer-component pl-8 pr-8">
                <div className="bg-[#d9e8ef] rounded-3xl border border-[#316287] 2xl:h-[600px] 2xl:m-10 xl:m-9 lg:m-8 2xl:pl-16 xl:pl-8 grid grid-cols-2 relative transition-all">
                        <div className="2xl:m-8 xl:m-8 lg:m-8 md:m-6 sm:m-6 m-6">
                            <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold text-[#021314] 2xl:pt-8 xl:pt-5 2xl:leading-normal md:leading-tight relative 2xl:w-[40rem] xl:w-[32rem] lg:w-[26.5rem] md:w-[20rem] sm:w-[16rem] w-[175%] ">Empower Your Workforce with Expert Training</h1>
                            <p className="xl:text-xl lg:text-lg sm:text-md text-sm font-normal text-[#83778d] 2xl:pt-5 xl:pt-3 lg:pt-3 pt-2 2xl:leading-loose xl:leading-relaxed md:leading-normal leading-tight text-left lg:w-[26rem] md:w-[20rem] sm:w-[16rem] w-[160%]">Transform your organization with our comprehensive training programs designed to enhance skills, boost productivity, and create a thriving work culture.</p>
                            <Link to="/contact-us">
                            <button className="xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm font-normal bg-[#859ec0] text-white rounded-full xl:w-48 lg:w-36 md:w-32 sm:w-28 w-24 xl:h-14 lg:h-12 md:h-10 sm:h-8 h-6 2xl:mt-8 xl:mt-5 lg:mt-4 md:mt-3 sm:mt-3 mt-3 mb-2 hover:bg-[#637a9f] active:scale-95">Get started</button>
                            </Link> 
                        </div>
                        <div className="hidden sm:block">
                            <img src={card} alt="Card-Img" className="rounded-br-3xl rounded-tr-3xl h-full "/>
                        </div>
                </div>
            </div>
            {/* text */}
            <div className="text-center mt-10 mx-10">
                <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold">Our Training HRMS System</h1>
                <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-normal mt-5">Seamless Virtual HR Services to Support Your Workforce</p>
            </div>
            {/*join now card */}
            <div className="lg:pl-8 lg:pr-8 mx-10 xl:mt-10 ">
                <div className="xl:flex xl:justify-center grid grid-flow-col grid-rows-2">
                    <div className="bg-[#086165] my-14 rounded-3xl w-[100%] relative overflow-hidden">

                        {/* Lady Image */}
                        <div className="absolute left-0 bottom-0">
                                <FadeInUp delay={0.2} duration={1}>
                                    <img src={lady} alt="lady" className="2xl:w-[25rem] xl:w-[20rem] lg:w-[33rem] md:w-[25rem] sm:w-[16rem] w-[13rem] relative z-10" loading="lazy" />
                                </FadeInUp>
                        </div>

                        {/* Grad Image */}
                        <div className="absolute 2xl:left-[23.1rem] xl:left-[18.5rem] lg:left-[30.2rem] md:left-[23.3rem] sm:left-[14.9rem] left-[12.1rem] transition-all bottom-0 z-20">
                            <FadeInUp delay={0.3} duration={1}>
                                <img src={grad} alt="grad" className="2xl:w-[2rem] xl:w-[1.6rem] lg:w-[2.78rem] md:w-[1.8rem] sm:w-[1.1rem] w-[.9rem]" loading="lazy" />
                            </FadeInUp>
                        </div>

                        {/* Board Image */}
                        <div className="absolute xl:right-[2rem] xl:top-[2rem] lg:bottom-[9rem] lg:right-[2.5rem] lg:top-[3rem] md:right-[1rem] md:bottom-[5rem] md:top-[1rem]  sm:right-[1.5rem] sm:bottom-[5rem] sm:top-[1.5rem] right-[.5rem] bottom-[3rem] top-[.5rem]">
                            <FadeInUp delay={0.4} duration={1}>
                                <img src={board} alt="board" className="xl:w-[27rem] lg:w-[50rem] md:w-[37rem] sm:w-[28rem] w-[20rem]" loading="lazy" />
                            </FadeInUp>
                        </div>

                        {/* Join Now Button */}
                        <div className="absolute 2xl:bottom-[3rem] 2xl:right-[11.2rem] xl:right-[11.3rem] xl:bottom-[2.5rem] lg:right-[21rem] lg:bottom-[3rem] md:right-[14.5rem] md:bottom-[3rem] sm:right-[11rem] sm:bottom-[2rem] right-[4rem] bottom-[1rem] z-30 ">
                            <FadeInUp delay={0.7} duration={1}>
                                <Link to="/implementation">
                                <button className="bg-[#FFC107] xl:w-36 xl:h-10  lg:w-48 lg:h-16  md:w-40 md:h-12  sm:w-36 sm:h-10  w-32 h-8  xl:text-sm lg:text-2xl md:text-xl sm:text-md text-xs text-black font-semibold py-1 px-[2rem] xl:rounded-sm lg:rounded-xl md:rounded-lg sm:rounded-md rounded-md shadow-md hover:bg-[#e0a800] active:scale-95 transition border-2 border-black">
                                    Join Now
                                </button>
                                </Link>
                            </FadeInUp>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold">How it work</h1>
                        <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-normal py-5">Comprehensive Solutions for Efficient Workforce Management</p>
                        <img src={steps} alt="Steps-Img" className="w-[50%]"/>
                    </div>
                </div>
                
            </div>
            
            {/* HR Challenges */}
            <div className="text-center">
                <p className="font-medium xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs mt-10 xl:mb-10 mb-5">
                    Our Programs
                </p>
                <h1 className="font-semibold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl pb-4">Comprehensive Training Solutions</h1>
                <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs text-center pb-6">Choose from our wide range of expert-led training programs designed to meet your organization’s needs.</p>
            </div>
            <div className="pb-10 lg:pl-16  lg:pr-16 m-10 mb-0 grid grid-rows-4 ">
                <div className="grid sm:grid-cols-2 sm:grid-rows-none grid-rows-2">
                    <div className="sm:place-items-start place-items-center ">
                        <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold ">POSH Training</h1>
                        <h5 className="lg:text-lg md:text-md sm:text-sm text-xs my-5 text-[#6b7280]">Create a Safe & Respectful Workplace</h5>
                        <p className="lg:text-xl md:text-lg sm:text-md text-sm leading-loose font-medium text-justify">Preventing sexual harassment at work is essential for a positive environment. Our HRMS provides POSH (Prevention of Sexual Harassment) training, ensuring awareness, compliance, and a safe workplace for all employees.</p>
                    </div>
                    <div className="sm:place-items-end place-items-center place-content-center sm:mr-10">
                        <img src={c1} alt="Card1-Image" className="w-[70%] opacity-90 sm:grayscale hover:grayscale-0 transition-all duration-200 hover:scale-110 cursor-pointer" />
                    </div><hr className="sm:hidden"/>
                </div>
                <div className="grid sm:grid-cols-2 sm:grid-rows-none grid-rows-2 pb-10">
                    <div className="sm:place-items-start place-items-center place-content-center mt-5">
                        <img src={c2} alt="Card2-Image" className="w-[60%] opacity-90 sm:grayscale hover:grayscale-0 transition-all duration-200 hover:scale-110 cursor-pointer" />
                    </div>
                    <div className="sm:place-items-start place-items-center mt-10">
                        <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold ">Team Management</h1>
                        <h5 className="lg:text-lg md:text-md sm:text-sm text-xs my-5 text-[#6b7280]">Streamline Collaboration & Productivity</h5>
                        <p className="lg:text-xl md:text-lg sm:text-md text-sm leading-loose font-medium text-justify">Effectively manage teams with centralized communication, task assignments, and performance tracking. Our HRMS helps leaders organize workflows, boost engagement, and drive team success.</p>
                    </div><hr className="sm:hidden mt-10"/>
                </div>
                <div className="grid sm:grid-cols-2 sm:grid-rows-none grid-rows-2 pb-10">
                    <div className="sm:place-items-start place-items-center place-content-center">
                        <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold ">Product Training</h1>
                        <h5 className="lg:text-lg md:text-md sm:text-sm text-xs my-5 text-[#6b7280]">Empower Teams with Knowledge</h5>
                        <p className="lg:text-xl md:text-lg sm:text-md text-sm leading-loose font-medium text-justify">Ensure employees understand and utilize our HRMS effectively. Our product training offers step-by-step guidance, interactive tutorials, and hands-on support for seamless adoption.</p>
                    </div>
                    <div className="sm:place-items-end place-items-center place-content-center sm:mr-10 mt-5">
                        <img src={c3} alt="Card3-Image" className="w-[70%] opacity-90 sm:grayscale hover:grayscale-0 transition-all duration-200 hover:scale-110 cursor-pointer" />
                    </div><hr className="sm:hidden"/>
                </div>
                <div className="grid sm:grid-cols-2 sm:grid-rows-none grid-rows-2 pb-10">
                    <div className="sm:place-items-start place-items-center place-content-center">
                        <img src={c4} alt="Card4-Image" className="w-[60%] opacity-90 sm:grayscale hover:grayscale-0 transition-all duration-200 hover:scale-110 cursor-pointer" />
                    </div>
                    <div className="sm:place-items-start place-items-center mt-10 ">
                        <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold ">Leadership Training</h1>
                        <h5 className="lg:text-lg md:text-md sm:text-sm text-xs my-5 text-[#6b7280]">Develop Strong & Effective Leaders</h5>
                        <p className="lg:text-xl md:text-lg sm:text-md text-sm leading-loose font-medium text-justify">Equip managers with the skills to inspire, guide, and drive teams to success. Our HRMS offers leadership training programs focused on communication, decision-making, and team management.</p>
                    </div><hr className="sm:hidden mt-10"/>
                </div>
                <div className="grid sm:grid-cols-2 sm:grid-rows-none grid-rows-2 pb-10">
                    <div className="sm:place-items-start place-items-center place-content-center">
                        <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold ">Business & Sales</h1>
                        <h5 className="lg:text-lg md:text-md sm:text-sm text-xs my-5 text-[#6b7280]">Drive Growth with Smart Strategies</h5>
                        <p className="lg:text-xl md:text-lg sm:text-md text-sm leading-loose font-medium text-justify">Enhance sales performance and business development with data-driven insights. Our HRMS supports sales teams with training, goal tracking, and performance analytics for better results.</p>
                    </div>
                    <div className="sm:place-items-end place-items-center place-content-center sm:mr-10 mt-5">
                        <img src={c5} alt="Card5-Image" className="w-[70%] opacity-90 sm:grayscale hover:grayscale-0 transition-all duration-200 hover:scale-110 cursor-pointer" />
                    </div><hr className="sm:hidden mt-10"/>
                </div>
            </div>
            
            <div className="text-center">
                <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-semibold pb-3">Why Choose Us</p>
                <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold pb-4">Training Excellence</h1>
                <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-normal pb-10">Our commitment to quality and innovation sets us apart in corporate training.</p>
            </div>

            <div className="pb-10 lg:pl-16 lg:pr-8 m-10 lg:grid lg:grid-rows-1 lg:grid-cols-4 flex flex-col gap-6">
                <div className="gap-x-6 place-items-center rounded-3xl overflow-hidden border border-[#086165] p-6 hover:scale-105 transition flex flex-col justify-center align-middle space-y-5 cursor-pointer">
                    <img src={bc1} alt="BC1-Img" className="w-[20%]" />
                    <div className='flex flex-col justify-center align-middle text-center gap-1'>
                        <h1 className="text-xl font-medium">Expert-led Sessions</h1>
                        <p className="text-md text-[#6B7280]">Learn from industry professionals with years of experience</p>
                    </div>
                </div>
                <div className="gap-x-6 place-items-center rounded-3xl overflow-hidden border border-[#086165] p-6 hover:scale-105 transition flex flex-col justify-center align-middle space-y-5 cursor-pointer">
                    <img src={bc2} alt="BC2-Img" className="w-[20%]" />
                    <div className='flex flex-col justify-center align-middle text-center gap-1'>
                        <h1 className="text-xl font-medium">AI-driven Modules</h1>
                        <p className="text-md text-[#6B7280]">Personalized learning paths powered by artificial intelligence</p>
                    </div>
                </div>
                <div className=" gap-x-6 place-items-center rounded-3xl overflow-hidden border border-[#086165] p-6 hover:scale-105 transition flex flex-col justify-center align-middle space-y-5 cursor-pointer">
                    <img src={bc3} alt="BC3-Img" className="w-[20%]" />
                    <div className='flex flex-col justify-center align-middle text-center gap-1'>
                        <h1 className="text-xl font-medium">Customized Programs</h1>
                        <p className="text-md text-[#6B7280]">Tailored solutions to meet your specific business needs</p>
                    </div>
                </div>
                <div className=" gap-x-6 place-items-center rounded-3xl overflow-hidden border border-[#086165] p-6 hover:scale-105 transition flex flex-col justify-center align-middle space-y-5 cursor-pointer">
                    <img src={bc4} alt="BC4-Img" className="w-[20%]" />
                    <div className='flex flex-col justify-center align-middle text-center gap-1'>
                        <h1 className="text-xl font-medium">Practical Insights</h1>
                        <p className="text-md text-[#6B7280]">Real-world applications for immediate impact</p>
                    </div>
                </div>
            </div>

            <ServicesImplementationCard />
        </>
    );
}