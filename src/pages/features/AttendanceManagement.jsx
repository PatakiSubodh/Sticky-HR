import cir from '../../assets/images/usrMngt-img/cir.png'
import profileImg from '../../assets/images/usrMngt-img/profileImg.png'
import usrDoc from '../../assets/images/usrMngt-img/usrDoc.png'
import atdMngtImg from '../../assets/images/atdMngt-img/atdMngtImg.png'
import atdMngtUsr from '../../assets/images/atdMngt-img/atdMngtUsr.png'
import wrkFrmHm from '../../assets/images/atdMngt-img/wrkFrmHm.png'
import hourGlass from '../../assets/images/atdMngt-img/hrGlass.png'
import calender from '../../assets/images/atdMngt-img/calender.png'
import Barchart from '../../components/ui/Barchart.jsx';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Piechart from '../../components/ui/Piechart.jsx';
import FeaturesImplementationCard from './FeaturesImplementationCard';

import FadeInUp from "@/components/FadeInUp";

const attendanceData = [
    { category: "Payable Days", val: 0, type1: 5, type2: 7 },
    { category: "Paid Leave", val: 5, type1: 7, type2: 10 },
    { category: "Holidays", val: 10, type1: 12, type2: 15 },
    { category: "Weekends", val: 15, type1: 8, type2: 10 },
];

export default function AttendanceManagement() {
    return (
        <div className="usrMngt-component">
            <div className="px-1 sm:px-2 md:px-4 lg:px-6 xl:px-8">
            <FadeInUp delay={0.1}>
                <div className="usrMngt-card flex flex-col relative overflow-hidden m-5 sm:m-10 h-[350px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] 2xl:pl-16 bg-[#FFC600] rounded-3xl z-0">
                    {/* shapes */}
                    <div className="atdMngt-card-polygons">
                        <div className='absolute -bottom-1 2xl:right-[5rem] xl:right-[4rem] lg:right-[2rem] md:-right-[1rem] sm:-right-[1rem] -right-[0.5rem] z-10'>
                            <FadeInUp delay={0.2}>
                            <img
                                src={atdMngtImg}
                                alt="pricing card image"
                                className="2xl:w-[44rem] xl:w-[35rem] lg:w-[30rem] md:w-[25rem] sm:w-[20rem] w-[15rem] aspect-[1.457]"
                            />
                            </FadeInUp>
                        </div>
                        <img src={cir} alt="circle1" className='xl:w-6 lg:w-5 hidden lg:block absolute 2xl:top-[5rem] 2xl:right-[7rem] xl:top-[3rem] xl:right-[5rem] lg:top-[2rem] lg:right-[2rem] ' />
                        <img src={cir} alt="circle2" className='xl:w-3 lg:w-2 hidden lg:block absolute 2xl:top-[11rem] 2xl:right-[15rem] xl:top-[12rem] xl:right-[20rem] lg:top-[14rem] lg:right-[20rem] ' />
                        <img src={cir} alt="circle3" className='xl:w-6 lg:w-5 hidden lg:block absolute 2xl:top-[20rem] 2xl:right-[32rem] z-10 xl:top-[25rem] xl:right-[37rem] lg:top-[23rem] lg:right-[30rem] ' />

                        <div className='absolute 2xl:top-[8rem] 2xl:right-[7rem] xl:top-[7rem] xl:right-[6rem] lg:top-[5rem] lg:right-[5rem] hidden lg:block '>
                            <FadeInUp delay={0.2}>
                            <img src={calender} alt="hour glass" className='2xl:w-[4.5rem] xl:w-[4rem] lg:w-[3.5rem] ' />
                            </FadeInUp>
                        </div>
                        <div className='absolute 2xl:top-[10rem] 2xl:right-[33rem] xl:top-[12rem] xl:right-[24rem] lg:top-[10rem] lg:right-[20rem] hidden lg:block '>
                            <FadeInUp delay={0.3}>
                            <img src={hourGlass} alt="hour glass" className='2xl:w-[4.5rem] xl:w-[4rem] lg:w-[3.5rem] ' />
                            </FadeInUp>
                        </div>
                        <div className="circles absolute 2xl:-bottom-[20rem] 2xl:right-[1rem] xl:-bottom-[15rem] xl:right-[1rem] lg:-bottom-[12rem] lg:right-[1rem] hidden lg:flex justify-center items-center">
                            <FadeInUp delay={0.4}>
                            <div className="cirOtr 2xl:w-[38rem] 2xl:h-[38rem] xl:w-[30rem] xl:h-[30rem] lg:w-[25rem] lg:h-[25rem] bg-[#08616587] bg-opacity-35 rounded-full flex justify-center items-center ">
                                <div className="cirInr 2xl:w-[28rem] 2xl:h-[28rem] xl:w-[22rem] xl:h-[22rem] lg:w-[18rem] lg:h-[18rem] bg-[#08616587] rounded-full opacity-55"></div>
                            </div>
                            </FadeInUp>
                        </div>
                    </div>

                    {/* content */}
                    <div className="usrMngt-card-content flex flex-col justify-center align-middle space-y-3 sm:justify-start sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-7 w-[36rem] ml-8 mt-[10%] sm:ml-6 sm:mt-8 md:ml-10 md:mt-20 lg:ml-16 lg:mt-20 xl:ml-14 xl:mt-28 2xl:mt-28">
                        <FadeInUp delay={0.2}>
                            <span className="bg-[#FFF6D8] rounded-3xl w-fit px-2 py-1 2xl:px-6 2xl:py-2 2xl:text-lg 2xl:font-medium xl:px-5 xl:py-2 xl:text-base lg:px-4 lg:py-1 lg:text-lg md:px-3 md:text-[0.8rem] sm:px-2 sm:py-1 sm:text-[0.7rem]">
                            Attendance Management
                            </span>
                        </FadeInUp>
                        <FadeInUp delay={0.3}>
                            <h3 className="text-lg font-extrabold text-[#1E1E1E] leading-snug w-[17rem] mr-2 sm:text-xl sm:w-fit md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl">
                            Smart Attendance in to StickyHR
                            </h3>
                        </FadeInUp>
                        <FadeInUp delay={0.4}>
                            <h4 className="text-sm font-normal pr-[50%] sm:text-[0.9rem] sm:pr-[25%] xl:pr-[5%] sm:leading-relaxed sm:font-medium md:text-[0.9rem] md:leading-7 md:font-normal lg:text-lg lg:font-normal xl:text-lg 2xl:text-xl 2xl:leading-10">
                            Our HRMS automates attendance tracking, ensuring accuracy, compliance, and efficiency.
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
            <div className="atdMngt-stats-mainContiner my-10">
                <div className="atdMngt-text text-center m-5 font-semibold">
                    <FadeInUp delay={0.1}>
                    <h1 className="text-[1.5rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.3rem] xl:text-[2.6rem] 2xl:text-[3rem]">
                        Accurate, compliant, and efficient attendance tracking.
                    </h1>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                    <p className="m-5 text-[0.9rem] sm:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[1.8rem] font-medium">
                        Our HRMS automates attendance for accuracy and compliance.
                    </p>
                    </FadeInUp>
                </div>
                
                <div className="astMngt-stats-grid grid gap-y-4 w-full px-4 sm:px-10 py-4 sm:gap-y-4 lg:gap-y-4 xl:gap-y-4">
                    {/* Upper Stats */}
                    <div className="astMngt-upper-stats grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 w-full max-w-[90%] mx-auto gap-4">
                        {/* Present Count */}
                        <FadeInUp  delay={0.2 * 1} duration={0.7}>
                            <div className="crd1 bg-[#EEF9F2] border-2 border-[#89A995] shadow-md rounded-3xl font-semibold text-xl p-6 w-full h-[300px] 2xl:h-[300px] lg:h-[330px]">
                                <h2 className="xl:mb-10 lg:mb-10 sm:mb-8 mb-8">Present Count</h2>
                                <div className="expDmg-crd bg-white shadow-lg rounded-2xl p-6 flex items-center justify-between w-[98%] h-[150px] mx-auto relative hover:shadow-[20px_20px_10px_#89A995] transition cursor-pointer">
                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-gray-500 xl:text-sm lg:text-xs font-medium mb-5 sm:text-sm text-sm">Present Count</h4>
                                        <p className="2xl:text-3xl font-bold text-black xl:text-2xl lg:text-xl text-base">250</p>
                                        <p className="text-gray-500 xl:text-sm lg:text-xs sm:text-sm mt-2 text-xs flex items-center">
                                            <span className="text-green-600 font-semibold flex items-center">
                                                <FontAwesomeIcon icon={faArrowUp} className="mr-1" /> 10%
                                            </span>
                                            &nbsp;compared last month
                                        </p>
                                    </div>
                                    <img src={atdMngtUsr} alt="active user" className="bg-[#EEF9F2] p-2 rounded-xl 2xl:w-16 xl:w-14 lg:w-12 sm:w-11 sm:p-1 lg:p-2 absolute top-3 right-3 w-14" />
                                </div>
                            </div>
                        </FadeInUp>

                        {/* Late Login */}
                        <FadeInUp delay={0.2 * 2} duration={0.7}>
                        <div className="crd2 bg-[#EEF9F2] border-2 border-[#89A995] shadow-md rounded-3xl font-semibold text-xl p-6 w-full h-[300px] 2xl:h-[300px] lg:h-[330px]">
                            <h2 className="2xl:mb-[10%] xl:mb-6 lg:mb-[7%] sm:mb-[7%] mb-[5%]">Late Login</h2>
                            <div className="bg-white rounded-xl shadow-md overflow-hidden sm:w-[95%] md:text-sm text-xs mx-auto border-[1px] border-slate-300 flex justify-center align-middle items-center">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-100 text-gray-500 xl:text-sm lg:text-[0.6rem] sm:text-[0.8rem]">
                                        <tr className='text-center'>
                                            <th className="px-2 py-2 border-r">Emp ID</th>
                                            <th className="px-2 py-2 border-r">Name</th>
                                            <th className="px-2 py-2 border-r">Punch In</th>
                                            <th className="px-2 py-2">Punch Out</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700 xl:text-sm lg:text-[0.6rem] sm:text-[0.8rem] text-center">
                                        {[
                                            { id: "STK007", name: "Jane Doe", in: "10:40 AM", out: "10:40 PM" },
                                            { id: "STK767", name: "Jane Doe", in: "09:30 AM", out: "06:30 PM" },
                                            { id: "STK767", name: "Jane Doe", in: "09:30 AM", out: "06:30 PM" },
                                        ].map((row, index) => (
                                            <tr key={index} className="border-t">
                                                <td className="px-2 py-2 border-r">{row.id}</td>
                                                <td className="px-1 py-2 flex items-center gap-2 border-r justify-center">
                                                    <img src={profileImg} alt="user" className="w-5 h-5 rounded-full lg:hidden xl:block" />
                                                    {row.name}
                                                </td>
                                                <td className="px-2 py-2 border-r">{row.in}</td>
                                                <td className="px-2 py-2">{row.out}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </FadeInUp>

                        {/* Work From Home */}
                        <FadeInUp delay={0.2 * 3} duration={0.7}>
                        <div className="crd3 bg-[#EEF9F2] border-2 border-[#89A995] shadow-md rounded-3xl font-semibold text-xl p-6 w-full relative overflow-hidden h-[300px] 2xl:h-[300px] lg:h-[330px]">
                            <h2 className="mb-[4rem] xl:mb-[4rem]">Work From Home</h2>

                            {/* Background Illustrations */}
                            <img src={wrkFrmHm} alt="assets available" className="sm:w-[4rem] md:w-[5rem] lg:w-[4rem] xl:w-[7rem] w-[3.5rem] absolute -top-[1rem] -right-[0.5rem]" />
                            <img src={wrkFrmHm} alt="assets hand" className="sm:w-[4rem] md:w-[5rem] lg:w-[4rem] xl:w-[5.5rem] w-[3.5rem] absolute bottom-0 left-0" />

                            {/* assets available Card */}
                            <div className="usrDocs bg-white rounded-xl flex items-center p-4 gap-4 sm:w-[80%] lg:w-[90%] mx-auto relative shadow-[0_20px_0_#89A995] hover:shadow-[25px_25px_5px_#89A995] transition cursor-pointer overflow-hidden h-[6rem]">
                                
                                {/* User Image */}
                                <img src={usrDoc} alt="user" className="2xl:w-14 2xl:h-14 xl:w-10 xl:h-10 xl:block lg:hidden sm:block sm:w-10 sm:h-10 bg-[#F0F0F0] rounded-lg hidden" />

                                {/* User Info */}
                                <div className="flex flex-col h-[5rem] align-middle justify-center">
                                    <h4 className="text-black 2xl:text-lg xl:text-base lg:text-sm sm:text-sm font-semibold text-[1rem]">Work From Home</h4>
                                    <h6 className="text-gray-500 2xl:text-sm xl:text-xs lg:text-xs sm:text-xs text-[0.8rem]">22/09/2024</h6>
                                </div>

                                {/* Role Badge */}
                                <span className="bg-yellow-400 text-black 2xl:text-sm lg:text-xs sm:text-sm font-normal px-2 py-1 absolute top-0 right-0 text-xs">
                                Employees
                                </span>

                                {/* Document Type */}
                                <p className="text-gray-600 2xl:text-sm lg:text-xs sm:text-xs absolute bottom-3 right-3 text-xs">09</p>
                            </div>
                        </div>
                        </FadeInUp>
                    </div>

                    {/* Lower Stats */}
                    <div className="astMngt-lower-stats grid sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 w-full max-w-[90%] mx-auto gap-4">
                        {/* Barchart Status */}
                        <FadeInUp delay={0.2 * 4} duration={0.7}>
                        <div className="crd4 bg-[#EEF9F2] border-2 border-[#89A995] shadow-md rounded-3xl font-semibold text-xl p-6 h-[350px] flex flex-col">
                            <h2 className="mb-4">Attendance Overview</h2>
                            <div className=''>
                                <Barchart
                                    title="Attendance Overview"
                                    data={attendanceData}
                                    xKey="category"
                                    yKeys={["type1", "type2"]}
                                    colors={["#FEC600", "#16C7BE"]}
                                    yDomain={[0, 15]}
                                    yTicks={[0, 5, 10, 15]}
                                    bgColor="#fff"
                                />
                            </div>
                        </div>
                        </FadeInUp>
                        
                        {/* Login Status */}
                        <FadeInUp delay={0.2 * 4} duration={0.7}>
                        <div className="crd4 bg-[#EEF9F2] border-2 border-[#89A995] shadow-md rounded-3xl font-semibold text-xl p-6 sm:h-[350px] flex flex-col justify-center">
                            <h2 className="mb-8 lg:text-left">Expense Status</h2>
                            <Piechart 
                                title="Login Status"
                                chartData={[
                                    { name: "Logged In", value: 58, color: "#2EC4B6" },
                                    { name: "On Leave", value: 18, color: "#0E7C7B" },
                                    { name: "Late Login", value: 15, color: "#F46036" },
                                    { name: "Not Logged In", value: 9, color: "#FFD166" }
                                ]}
                            />
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