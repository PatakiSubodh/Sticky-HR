import lvMngtImg from '../../assets/images/lvMngt-img/lvMngtImg.png'
import lvDots from '../../assets/images/lvMngt-img/lvDots.png';
import lvCir from '../../assets/images/lvMngt-img/lvCir.png'
import ppl from '../../assets/images/usrMngt-img/ppl.png'
import actUsr from '../../assets/images/usrMngt-img/actUsr.png'
import profileImg from '../../assets/images/usrMngt-img/profileImg.png'
import usrDoc from '../../assets/images/usrMngt-img/usrDoc.png'
import lvPending from '../../assets/images/lvMngt-img/lvPending.png'
import lvCalen from '../../assets/images/lvMngt-img/lvCalen.png'

import { Link } from 'react-router-dom';

import Piechart from '../../components/ui/Piechart.jsx';
import FeaturesImplementationCard from './FeaturesImplementationCard';

import Barchart from '../../components/ui/Barchart.jsx';

import FadeInUp from "@/components/FadeInUp";

const weeklyData = [
    { day: "Sun", type1: 7, type2: 9 },
    { day: "Mon", type1: 9, type2: 15 },
    { day: "Tue", type1: 3, type2: 5 },
    { day: "Wed", type1: 8, type2: 11 },
    { day: "Thu", type1: 5, type2: 13 },
    { day: "Fri", type1: 4, type2: 10 },
    { day: "Sat", type1: 6, type2: 9 },
];

export default function LeaveManagement() {
    return (
            <div className="usrMngt-component">
                <div className="px-1 sm:px-2 md:px-4 lg:px-6 xl:px-8">
                    <FadeInUp delay={0.1}>
                    <div className="usrMngt-card flex flex-col relative overflow-hidden m-5 sm:m-10 h-[350px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] 2xl:pl-16 bg-[#FFC7CC] rounded-3xl z-0">
                            {/* shapes */}
                            <div className="usrMngt-card-polygons">
                            <div className="absolute bottom-0 -right-[1.5rem] sm:-right-[2rem] md:-right-[3rem] lg:-right-[3rem] xl:right-0 2xl:-bottom-1 2xl:right-0 -z-10">
                                    <FadeInUp delay={0.2}>
                                        <img
                                            src={lvMngtImg}
                                            alt="pricing card image"
                                            className="relative w-[230px] sm:w-[300px] md:w-[400px] lg:w-[480px] xl:w-[550px] 2xl:w-[700px] aspect-auto sm:block"
                                        />
                                    </FadeInUp>
                                </div>

                                <img src={lvCir} alt="leave Circle1" className='xl:w-6 w-5 absolute 2xl:top-[3rem] 2xl:right-[9rem] xl:top-[3rem] xl:right-[5rem] lg:top-[4rem] lg:right-[5rem] hidden lg:block ' />
                                <img src={lvCir} alt="leave Circle2" className='xl:w-3 w-2 absolute 2xl:top-[9rem] 2xl:right-[15rem] xl:top-[7rem] xl:right-[10rem] lg:top-[13rem] lg:right-[15rem] hidden lg:block ' />
                                <img src={lvCir} alt="leave Circle3" className='xl:w-6 w-5 absolute 2xl:top-[20rem] 2xl:right-[30rem] xl:bottom-[13rem] xl:right-[25rem] lg:bottom-[10rem] lg:right-[20rem] hidden lg:block ' />
                                <img src={lvDots} alt="leave Dots1" className='xl:w-44 md:w-40 w-36 absolute 2xl:top-[16rem] 2xl:right-[2rem] xl:top-[13rem] xl:right-[2rem] lg:top-[10rem] lg:right-0 md:top-[7rem] md:right-0 sm:top-[3rem] sm:right-0 hidden sm:block -z-20'/>
                                <img src={lvDots} alt="leave Dots2" className='mt-10 xl:w-44 md:w-40 w-36 absolute 2xl:-bottom-[1rem] 2xl:right-[25rem] md:bottom-0 xl:right-[19rem] lg:right-[13rem] md:right-[6rem] sm:-bottom-[2rem] sm:right-[3rem] hidden sm:block -z-20'/>

                                <div className="usrMngt-smCrd md:block hidden">
                                    <FadeInUp delay={0.3}>
                                        <div className="usrMngt-smCrd1 flex flex-col justify-center absolute bg-white rounded-xl shadow-lg p-2 2xl:top-[6rem] 2xl:right-[29rem] 2xl:w-24 2xl:h-20 xl:top-[5rem] xl:right-[25rem] xl:text-[0.8rem] lg:top-[4rem] lg:right-[18rem] lg:w-20 lg:font-medium md:top-[2rem] md:right-[7rem] md:text-[0.8rem] md:w-20 ">
                                            <p className="font-semibold">583</p>
                                            <span className="text-gray-500 mr-12">Working</span>
                                        </div>
                                    </FadeInUp>
                                    <div className="absolute bottom-8 right-20 lg:bottom-6 lg:right-10 md:bottom-3 md:right-3 md:block sm:hidden">
                                        <FadeInUp delay={0.4}>
                                            <div className="usrMngt-smCrd2 flex gap-3 place-items-start bg-white rounded-xl shadow-lg p-2 2xl:w-[250px] xl:w-[230px] xl:gap-2 lg:w-[220px] md:w-[200px] -z-20">
                                                <img src={ppl} alt="people" className="w-8 h-8 bg-[#DEEEEF] rounded-lg p-1 lg:w-6 lg:h-6" />
                                                <div>
                                                    <span className="text-lg font-semibold 2xl:text-lg xl:text-xl lg:text-xl md:text-[0.8rem] sm:text-sm">Leave Request</span>
                                                    <p className="text-gray-500 text-sm 2xl:leading-tight lg:text-base md:text-[0.8rem]">
                                                    12
                                                    </p>
                                                </div>
                                            </div>
                                        </FadeInUp>
                                    </div>
                                </div>
                            </div>
    
                            {/* content */}
                            <div className="usrMngt-card-content flex flex-col justify-center align-middle space-y-3 sm:justify-start sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-7 w-[36rem] ml-4 mt-10 sm:ml-6 sm:mt-8 md:ml-10 md:mt-20 lg:ml-16 lg:mt-20 xl:ml-14 xl:mt-28 2xl:mt-24">
                                <FadeInUp delay={0.2}>
                                    <span className="bg-[#FCEEEF] rounded-3xl w-fit px-2 py-1 2xl:px-6 2xl:py-2 2xl:text-lg 2xl:font-medium xl:px-5 xl:py-2 xl:text-base lg:px-4 lg:py-1 lg:text-lg md:px-3 md:text-[0.8rem] sm:px-2 sm:py-1 sm:text-[0.7rem]">
                                    Leave Management
                                    </span>
                                </FadeInUp>
                                <FadeInUp delay={0.3}>
                                    <h3 className="text-lg font-extrabold text-[#1E1E1E] leading-snug w-[17rem] mr-2 sm:text-xl sm:w-fit md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl">
                                    Leave Management it to StickyHR
                                    </h3>
                                </FadeInUp>
                                <FadeInUp delay={0.4}>
                                    <h4 className="text-sm font-normal pr-[44%] sm:text-[0.9rem] sm:pr-[25%] xl:pr-[5%] sm:leading-relaxed sm:font-normal md:text-[0.9rem] md:leading-7 md:font-normal lg:text-lg lg:font-normal xl:text-lg 2xl:text-xl 2xl:leading-10">
                                    Leave tracks, approves, and manages employee time-off efficiently. Our HRMS automates the process, reducing manual work and ensuring compliance.
                                    </h4>
                                </FadeInUp>
                                <FadeInUp delay={0.5}>
                                    <div className="usrMngt-btns flex flex-col md:flex-row gap-2 cursor-pointer sm:gap-2 lg:gap-3 xl:gap-4 2xl:gap-6 2xl:mt-0 xl:mt-3">
                                        <Link to="/contact-us">
                                            <button className="bg-[#086165] rounded-full text-white shadow-md hover:bg-[#05494A] hover:shadow-lg active:scale-95 px-2 py-1 2xl:px-5 2xl:py-3 2xl:text-base 2xl:font-semibold xl:px-4 xl:py-2 xl:text-base xl:font-bold lg:px-4 lg:py-2 lg:text-sm md:px-3 md:py-2 sm:px-2 sm:py-1 sm:text-sm sm:font-medium text-[0.8rem]">
                                                Book a Demo
                                            </button>
                                        </Link>
                                        <Link to="/contact-us">
                                            <button className="bg-[#DEEEEF] border-2 border-[#3B9B9F] rounded-full text-[#086165] shadow-md hover:bg-[#3B9B9F] hover:text-white hover:shadow-lg active:scale-95 px-2 py-1 2xl:px-5 2xl:py-3 2xl:text-base 2xl:font-semibold xl:px-4 xl:py-2 xl:text-base xl:font-bold lg:px-4 lg:py-2 lg:text-sm md:px-3 md:py-2 sm:px-2 sm:py-1 sm:text-sm sm:font-medium text-[0.8rem]">
                                                Get Started for Free
                                            </button>
                                        </Link>
                                    </div>
                                </FadeInUp>
                            </div>
                        </div>
                    </FadeInUp>
                </div>

            {/* Statistics */}
            <div className="astMngt-stats-mainContiner my-10">
                <div className="astMngt-text text-center m-5 font-semibold">
                    <FadeInUp delay={0.1}>
                    <h1 className="text-[1.5rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.3rem] xl:text-[2.6rem] 2xl:text-[3rem]">
                    Easy Leave Requests & Approvals
                    </h1>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                    <p className="m-5 text-[0.9rem] sm:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[1.8rem] font-medium">
                    Our HRMS automates leave tracking, approvals, and compliance efficiently.
                    </p>
                    </FadeInUp>
                </div>
                
                {/* Statistics Grid */}
                <div className="usrMngt-stats-grid grid gap-y-4 w-full px-4 sm:px-10 py-4 sm:gap-y-4 lg:gap-y-4 xl:gap-y-4">
                    {/* Upper Stats */}
                    <div className="usrMngt-upper-stats grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 w-full max-w-[90%] mx-auto gap-4">
                        {/* Leave Management */}
                        <FadeInUp delay={0.2 * 1} duration={0.7}>
                            <div className="crd2 bg-[#FCEEEF] border-2 border-[#FFD7DA] shadow-md rounded-3xl font-semibold text-xl p-6 w-full h-[330px] 2xl:h-[330px] lg:h-[330px]">
                                <h2 className="mb-5">Leave Management</h2>
                                <Barchart
                                    title="Weekly Data"
                                    data={weeklyData}
                                    xKey="day"
                                    yKeys={["type1", "type2"]}
                                    colors={["#FEC600", "#16C7BE"]}
                                    yDomain={[0, 15]}
                                    yTicks={[0, 5, 10, 15]}
                                    bgColor="#fff" // Light pinkish background color
                                />
                            </div>
                        </FadeInUp>

                        {/* Leave Status */}
                        <FadeInUp delay={0.2 * 2} duration={0.7}>
                            <div className="crd2 bg-[#FCEEEF] border-2 border-[#FFD7DA] shadow-md rounded-3xl font-semibold text-xl p-6 w-full h-[300px] 2xl:h-[330px] lg:h-[330px]">
                                <h2 className="mb-[6%] xl:mb-[10%]">Leave Status</h2>
                                <div className="bg-white rounded-xl shadow-md overflow-hidden sm:w-full md:text-sm text-xs mx-auto border-[1px] border-slate-300 flex justify-center align-middle items-center">
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-gray-100 text-gray-500 xl:text-sm lg:text-[0.7rem] sm:text-[0.8rem]">
                                            <tr className="text-center">
                                                <th className="px-2 py-2 border-r">Emp ID</th>
                                                <th className="px-2 py-2 border-r">Name</th>
                                                <th className="px-2 py-2 border-r">Date</th>
                                                <th className="px-2 py-2">Reason</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700 xl:text-sm lg:text-[0.7rem] sm:text-[0.8rem] text-center">
                                            {[
                                                { id: "STK007", name: "Jane Doe", dt: "02/11/24", rsn: "LOP" },
                                                { id: "STK767", name: "Jane Doe", dt: "02/11/24", rsn: "SL" },
                                                { id: "STK767", name: "Jane Doe", dt: "02/11/24", rsn: "CL" },
                                            ].map((row, index) => (
                                                <tr key={index} className="border-t">
                                                    <td className="px-2 py-2 border-r">{row.id}</td>
                                                    <td className="px-2 py-2 flex items-center gap-2 border-r justify-center">
                                                        <img src={profileImg} alt="user" className="w-5 h-5 rounded-full lg:hidden xl:block" />
                                                        {row.name}
                                                    </td>
                                                    <td className="px-2 py-2 border-r">{row.dt}</td>
                                                    <td className="px-2 py-2">{row.rsn}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </FadeInUp>

                        {/* Pending Request */}
                        <FadeInUp delay={0.2 * 3} duration={0.7}>
                            <div className="crd3 bg-[#FCEEEF] border-2 border-[#FFD7DA] shadow-md rounded-3xl font-semibold text-xl p-6 w-full relative overflow-hidden h-[300px] 2xl:h-[330px] lg:h-[330px]">
                                <h2 className="mb-[4rem] xl:mb-[4rem]">Pending Request</h2>

                                {/* Background Illustrations */}
                                <img src={lvPending} alt="docs" className="absolute -top-[3rem] -right-[3rem] w-[10rem]" />
                                <img src={lvCalen} alt="docs" className="absolute -bottom-[0] -left-[0rem] w-[6rem]" />
                                
                                {/* pending docs Card */}
                                <div className="usrDocs bg-white rounded-xl flex items-center p-4 gap-4 sm:w-[80%] lg:w-[90%] mx-auto relative shadow-[0_20px_0_#FFDADD] hover:shadow-[25px_25px_5px_#FFDADD] transition cursor-pointer overflow-hidden h-[6rem]">

                                    {/* User Image */}
                                    <img src={usrDoc} alt="user" className="2xl:w-14 2xl:h-14 xl:w-10 xl:h-10 xl:block lg:hidden sm:block sm:w-10 sm:h-10 bg-[#F0F0F0] rounded-lg hidden" />

                                    {/* User Info */}
                                    <div className="flex flex-col h-[5rem] align-middle justify-center">
                                        <h4 className="text-black 2xl:text-lg xl:text-base lg:text-sm sm:text-sm font-semibold text-[1rem]">John Appleased</h4>
                                        <h6 className="text-gray-500 2xl:text-sm xl:text-xs lg:text-xs sm:text-xs text-[0.8rem]">22/09/2024</h6>
                                    </div>

                                    {/* Role Badge */}
                                    <span className="bg-yellow-400 text-black 2xl:text-sm lg:text-xs sm:text-sm font-normal px-2 py-1 absolute top-0 right-0 text-xs">
                                    Employees
                                    </span>

                                    {/* Document Type */}
                                    <p className="text-gray-600 2xl:text-sm lg:text-xs sm:text-xs absolute bottom-3 right-3 text-xs">05</p>
                                </div>
                            </div>
                        </FadeInUp>
                    </div>

                    {/* Lower Stats */}
                    <div className="usrMngt-lower-stats grid sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 w-full max-w-[90%] mx-auto gap-4">
                        {/* Over All Status */}
                        <FadeInUp delay={0.2 * 4} duration={0.7}>
                            <div className="crd4 bg-[#FCEEEF] border-2 border-[#FFD7DA] shadow-md rounded-3xl font-semibold text-xl p-6 sm:h-[350px] flex flex-col justify-center">
                                <h2 className="mb-8 lg:text-left">Over All Status</h2>
                                <Piechart 
                                    title="Over All Status"
                                    chartData={[
                                        { name: "Work from Office", value: 58, color: "#2EC4B6" },
                                        { name: "Work from Home", value: 18, color: "#0E7C7B" },
                                        { name: "Half Day", value: 15, color: "#F46036" },
                                        { name: "Leave", value: 9, color: "#FFD166" }
                                    ]}
                                />
                            </div>
                        </FadeInUp>
    
                        {/* Leave Request */}
                        <FadeInUp delay={0.2 * 5} duration={0.7}>
                            <div className="crd5 bg-[#FCEEEF] border-2 border-[#FFD7DA] shadow-md rounded-3xl font-semibold text-xl p-6 relative h-[350px]">
                                <h2 className="mb-6">Leave Request</h2>
                                <div className="crds relative space-y-2">
                                    <div className="usrCrd1 bg-white rounded-xl flex items-center p-2 lg:p-6 sm:w-[70%] xl:w-[80%] mx-auto hover:border-2 hover:border-[#FFD7DA] shadow-md cursor-pointer h-[5rem]">
                                        <img src={usrDoc} alt="user" className="2xl:w-12 2xl:h-12 xl:w-10 xl:h-10 md:w-10 md:h-10 sm:hidden md:block bg-[#F0F0F0] rounded-lg hidden" />
                                        <div className="flex w-full  justify-between ml-3">
                                            <div className="flex flex-col justify-center ml-3">
                                                <h4 className="text-black text-base font-semibold pb-1">John Applesed</h4>
                                                <h6 className="text-gray-500 text-xs">22/09/2024</h6>
                                            </div>
                                            <div className="flex flex-col justify-center ml-3">
                                                <h4 className="text-gray-500 text-base font-normal pb-1">Type of Leave</h4>
                                                <h6 className="text-gray-500 text-xs">SL</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="usrCrd2 bg-white rounded-xl flex items-center p-2 lg:p-6 sm:w-[70%] xl:w-[80%] mx-auto hover:border-2 hover:border-[#FFD7DA] shadow-md cursor-pointer h-[5rem]">
                                        <img src={usrDoc} alt="user" className="2xl:w-12 2xl:h-12 xl:w-10 xl:h-10 md:w-10 md:h-10 sm:hidden md:block bg-[#F0F0F0] rounded-lg hidden" />
                                        <div className="flex w-full  justify-between ml-3">
                                            <div className="flex flex-col justify-center ml-3">
                                                <h4 className="text-black text-base font-semibold pb-1">Yuvaganesh</h4>
                                                <h6 className="text-gray-500 text-xs">22/09/2024</h6>
                                            </div>
                                            <div className="flex flex-col justify-center ml-3">
                                                <h4 className="text-gray-500 text-base font-normal pb-1">Type of Leave</h4>
                                                <h6 className="text-gray-500 text-xs">CL</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="usrCrd3 bg-white rounded-xl flex items-center p-2 lg:p-6 sm:w-[70%] xl:w-[80%] mx-auto hover:border-2 hover:border-[#FFD7DA] shadow-md cursor-pointer h-[5rem]">
                                        <img src={usrDoc} alt="user" className="2xl:w-12 2xl:h-12 xl:w-10 xl:h-10 md:w-10 md:h-10 sm:hidden md:block bg-[#F0F0F0] rounded-lg hidden" />
                                        <div className="flex w-full  justify-between ml-3">
                                            <div className="flex flex-col justify-center ml-3">
                                                <h4 className="text-black text-base font-semibold pb-1">Praveen Kumar</h4>
                                                <h6 className="text-gray-500 text-xs">22/09/2024</h6>
                                            </div>
                                            <div className="flex flex-col justify-center ml-3">
                                                <h4 className="text-gray-500 text-base font-normal pb-1">Type of Leave</h4>
                                                <h6 className="text-gray-500 text-xs">SL</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInUp>
                    </div>
                </div>

            </div>

            {/* Implementation */}
            <FadeInUp delay={0.2}>
            <FeaturesImplementationCard />
            </FadeInUp>

        </div>
    );
}