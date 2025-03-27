import usrMngtImg from '../../assets/images/usrMngt-img/usrMngtImg.png';
import dots from '../../assets/images/usrMngt-img/dots.png';
import cir from '../../assets/images/usrMngt-img/cir.png';
import ppl from '../../assets/images/usrMngt-img/ppl.png';
import actUsr from '../../assets/images/usrMngt-img/actUsr.png';
import profileImg from '../../assets/images/usrMngt-img/profileImg.png';
import usrDoc from '../../assets/images/usrMngt-img/usrDoc.png';
import usrDocImg from '../../assets/images/usrMngt-img/usrDocImg.png';
import bell from '../../assets/images/usrMngt-img/bell.png';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Piechart from '../../components/ui/Piechart.jsx';
import FeaturesImplementationCard from './FeaturesImplementationCard';

import FadeInUp from '@/components/FadeInUp';

export default function UserManagement() {
    return (
        <div className="usrMngt-component">
            <div className="px-1 sm:px-2 md:px-4 lg:px-6 xl:px-8">
                <FadeInUp delay={0.1}>
                    <div className="usrMngt-card flex flex-col relative overflow-hidden m-5 sm:m-10 h-[350px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] 2xl:pl-16 bg-[#FFC600] rounded-3xl z-0">
                        {/* shapes */}
                        <div className="usrMngt-card-polygons">
                            <div className="absolute bottom-0 -right-[1.5rem] sm:-right-[3.5rem] md:-right-[4rem] lg:-right-[3rem] xl:right-0 2xl:-bottom-1 2xl:right-0 -z-10">
                                <FadeInUp delay={0.2}>
                                    <img
                                        src={usrMngtImg}
                                        alt="pricing card image"
                                        className="relative w-[200px] sm:w-[300px] md:w-[400px] lg:w-[480px] xl:w-[550px] 2xl:w-[700px] aspect-auto sm:block"
                                    />
                                </FadeInUp>
                            </div>

                            <img src={cir} alt="circle1" className="absolute top-[3rem] w-6 lg:right-[3rem] lg:block xl:right-[5rem] xl:w-5 2xl:right-[9rem] md:hidden sm:hidden hidden" />
                            <img src={cir} alt="circle2" className="absolute w-3 lg:top-[8rem] lg:right-[7rem] lg:block xl:top-[7rem] xl:right-[10rem] xl:w-3 2xl:top-[9rem] 2xl:right-[15rem] sm:hidden hidden" />
                            <img src={cir} alt="circle3" className="absolute w-6 lg:top-[17rem] lg:right-[20rem] lg:block xl:top-[17rem] xl:right-[28rem] xl:w-5 2xl:top-[20rem] 2xl:right-[30rem] sm:hidden hidden" />
                            <img src={dots} alt="dots1" className="absolute w-36 lg:top-[13rem] lg:right-[2rem] lg:w-32 xl:top-[10rem] xl:right-[5rem] 2xl:top-[16rem] 2xl:right-[6rem] xl:block sm:hidden hidden" />
                            <img src={dots} alt="dots2" className="absolute w-36 mt-10 lg:top-[18rem] lg:right-[17rem] lg:w-32 md:w-28 md:bottom-0 md:right-[12rem] xl:top-[20rem] xl:right-[20rem] 2xl:top-[24rem] 2xl:right-[27rem] xl:block sm:hidden hidden" />

                            <div className="usrMngt-smCrd md:block hidden">
                                <FadeInUp delay={0.3}>
                                    <div className="usrMngt-smCrd1 flex flex-col justify-center absolute bg-white rounded-xl shadow-lg p-2 2xl:top-[6rem] 2xl:right-[29rem] 2xl:w-24 2xl:h-20 xl:top-[5rem] xl:right-[25rem] xl:text-[0.8rem] lg:top-[4rem] lg:right-[18rem] lg:w-20 lg:font-medium md:top-[2rem] md:right-[7rem] md:text-[0.8rem]">
                                        <p className="2xl:text-center 2xl:font-semibold 2xl:mr-12 lg:mr-9">+ 7</p>
                                        <span className="text-gray-500">Services</span>
                                    </div>
                                </FadeInUp>
                                <div className="absolute bottom-8 right-20 lg:bottom-6 lg:right-16 md:bottom-3 md:right-3 md:block sm:hidden">
                                    <FadeInUp delay={0.4}>
                                        <div className="usrMngt-smCrd2 flex gap-3 place-items-start bg-white rounded-xl shadow-lg p-2 2xl:w-[250px] xl:w-[230px] xl:gap-2 lg:w-[180px] md:w-[200px] -z-20">
                                            <img src={ppl} alt="people" className="w-8 h-8 bg-[#DEEEEF] rounded-lg p-1 lg:w-6 lg:h-6" />
                                            <div>
                                                <span className="text-lg font-semibold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-[0.8rem] sm:text-sm">+300</span>
                                                <p className="text-gray-500 text-sm 2xl:leading-tight lg:text-xs md:text-[0.8rem]">
                                                    People have manage with organize
                                                </p>
                                            </div>
                                        </div>
                                    </FadeInUp>
                                </div>
                            </div>
                        </div>

                        {/* content */}
                        <div className="usrMngt-card-content flex flex-col justify-center align-middle space-y-3 sm:justify-start sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-7 w-[36rem] ml-4 mt-[10%] sm:ml-6 sm:mt-8 md:ml-10 md:mt-20 lg:ml-16 lg:mt-20 xl:ml-14 xl:mt-28 2xl:mt-24">
                            <FadeInUp delay={0.2}>
                                <span className="bg-[#FFF6D8] rounded-3xl w-fit px-2 py-1 2xl:px-6 2xl:py-2 2xl:text-lg 2xl:font-medium xl:px-5 xl:py-2 xl:text-base lg:px-4 lg:py-1 lg:text-lg md:px-3 md:text-[0.8rem] sm:px-2 sm:py-1 sm:text-[0.7rem]">
                                    User Management
                                </span>
                            </FadeInUp>
                            <FadeInUp delay={0.3}>
                                <h3 className="text-lg font-extrabold text-[#1E1E1E] leading-snug w-[17rem] mr-2 sm:text-xl sm:w-fit md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl">
                                    Manage User Access on StickyHR
                                </h3>
                            </FadeInUp>
                            <FadeInUp delay={0.4}>
                                <h4 className="text-sm font-medium pr-[50%] sm:text-[0.9rem] sm:pr-[25%] xl:pr-[5%] sm:leading-relaxed sm:font-normal md:text-[0.9rem] md:leading-7 md:font-normal lg:text-lg lg:font-normal xl:text-lg 2xl:text-xl 2xl:leading-10">
                                    User management controls employee access to information while keeping data secure. Our HRMS centralizes roles, permissions, and authentication.
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

            <div className="usrMngt-stats-mainContiner my-10">
                <div className="usrMngt-text text-center m-5 font-semibold">
                    <FadeInUp delay={0.1}>
                        <h1 className="text-[1.5rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.3rem] xl:text-[2.6rem] 2xl:text-[3rem]">
                            Easily control employee roles, permissions.
                        </h1>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                        <p className="m-5 text-[0.9rem] sm:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[1.8rem] font-medium">
                            Our HRMS securely manages employee access, roles, and permissions in one place.
                        </p>
                    </FadeInUp>
                </div>

                {/* Statistics Grid */}
                <div className="usrMngt-stats-grid grid gap-y-4 w-full px-4 sm:px-10 py-4 sm:gap-y-4 lg:gap-y-4 xl:gap-y-4">
                    {/* Upper Stats */}
                    <div className="usrMngt-upper-stats grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 w-full max-w-[90%] mx-auto gap-4">
                        {/* Active Users */}
                        <FadeInUp delay={0.2 * 1} duration={0.7}>
                            <div className="crd1 bg-[#F3F9FF] border-2 border-[#CCE7FF] shadow-md rounded-3xl font-semibold text-xl p-6 w-full h-[300px] 2xl:h-[330px] lg:h-[330px]">
                                <h2 className="xl:mb-10 lg:mb-10 sm:mb-8 mb-8">Active Users</h2>
                                <div className="actUsr-crd bg-white shadow-lg rounded-2xl p-6 flex items-center justify-between w-[98%] h-[150px] mx-auto relative hover:shadow-[20px_20px_10px_#CCE7FF] transition cursor-pointer">
                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-gray-500 xl:text-sm lg:text-xs font-medium mb-5 sm:text-sm text-sm">Active Users</h4>
                                        <p className="2xl:text-3xl font-bold text-black xl:text-2xl lg:text-xl text-base">550</p>
                                        <p className="text-gray-500 xl:text-sm lg:text-xs sm:text-sm mt-2 text-xs flex items-center">
                                            <span className="text-green-600 font-semibold flex items-center">
                                                <FontAwesomeIcon icon={faArrowUp} className="mr-1" /> 10%
                                            </span>
                                            &nbsp;compared last month
                                        </p>
                                    </div>
                                    <img src={actUsr} alt="active user" className="bg-[#F3F9FF] p-2 rounded-xl 2xl:w-16 xl:w-14 lg:w-12 sm:w-11 sm:p-1 lg:p-2 absolute top-3 right-3 w-14 " />
                                </div>
                            </div>
                        </FadeInUp>

                        {/* Punch-In Status */}
                        <FadeInUp delay={0.2 * 2} duration={0.7}>
                            <div className="crd2 bg-[#F3F9FF] border-2 border-[#CCE7FF] shadow-md rounded-3xl font-semibold text-xl p-6 w-full h-[300px] 2xl:h-[330px] lg:h-[330px]">
                                <h2 className="2xl:mb-[7%] xl:mb-[7%] lg:mb-[7%] sm:mb-[7%] mb-[5%]">Punch-In Status</h2>
                                <div className="bg-white rounded-xl shadow-md overflow-hidden sm:w-[95%] xl:w-[95%] md:text-sm text-xs mx-auto border-[1px] border-slate-300 flex justify-center align-middle items-center">
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-gray-100 text-gray-500 xl:text-sm lg:text-[0.7rem] sm:text-[0.8rem]">
                                            <tr className="text-center">
                                                <th className="px-2 py-2 border-r">Emp ID</th>
                                                <th className="px-2 py-2 border-r">Name</th>
                                                <th className="px-2 py-2 border-r">Punch In</th>
                                                <th className="px-2 py-2">Punch Out</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700 xl:text-sm lg:text-[0.7rem] sm:text-[0.8rem] text-center">
                                            {[
                                                { id: "STK567", name: "Jane Doe", in: "10:30 AM", out: "07:30 PM" },
                                                { id: "STK007", name: "Jane Doe", in: "10:40 AM", out: "10:40 PM" },
                                                { id: "STK767", name: "Jane Doe", in: "09:30 AM", out: "06:30 PM" },
                                            ].map((row, index) => (
                                                <tr key={index} className="border-t">
                                                    <td className="px-2 py-2 border-r">{row.id}</td>
                                                    <td className="px-2 py-2 flex items-center gap-2 border-r justify-center">
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

                        {/* Pending Documents */}
                        <FadeInUp delay={0.2 * 3} duration={0.7}>
                            <div className="crd3 bg-[#F3F9FF] border-2 border-[#CCE7FF] shadow-md rounded-3xl font-semibold text-xl p-6 w-full relative overflow-hidden h-[300px] 2xl:h-[330px] lg:h-[330px]">
                                <h2 className="mb-[4rem] xl:mb-[4rem]">Pending Documents</h2>

                                {/* Background Illustrations */}
                                <img src={usrDocImg} alt="docs" className="absolute -top-[8rem] -right-[7rem] w-[12rem] opacity-50" />
                                <img src={usrDocImg} alt="docs" className="absolute -bottom-[7rem] -left-[3rem] w-[10rem] opacity-50" />
                                
                                {/* pending docs Card */}
                                <div className="usrDocs bg-white rounded-xl flex items-center p-4 gap-4 sm:w-[80%] lg:w-[90%] mx-auto relative shadow-[0_20px_0_#CCE7FF] hover:shadow-[25px_25px_5px_#CCE7FF] transition cursor-pointer overflow-hidden h-[6rem]">

                                    {/* User Image */}
                                    <img src={usrDoc} alt="user" className="2xl:w-14 2xl:h-14 xl:w-10 xl:h-10 xl:block lg:hidden sm:block sm:w-10 sm:h-10 bg-[#F0F0F0] rounded-lg hidden" />

                                    {/* User Info */}
                                    <div className="flex flex-col h-[5rem] align-middle justify-center">
                                        <h4 className="text-black 2xl:text-lg xl:text-base lg:text-sm sm:text-sm font-semibold text-[1rem]">John Appleseed</h4>
                                        <h6 className="text-gray-500 2xl:text-sm xl:text-xs lg:text-xs sm:text-xs text-[0.8rem]">22/09/2024</h6>
                                    </div>

                                    {/* Role Badge */}
                                    <span className="bg-yellow-400 text-black 2xl:text-sm lg:text-xs sm:text-sm font-normal px-2 py-1 absolute top-0 right-0 text-xs">
                                        Designer
                                    </span>

                                    {/* Document Type */}
                                    <p className="text-gray-600 2xl:text-sm lg:text-xs sm:text-xs absolute bottom-3 right-3 text-xs">Offer Letter</p>
                                </div>
                            </div>
                        </FadeInUp>
                    </div>

                    {/* Lower Stats */}
                    <div className="usrMngt-lower-stats grid sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 w-full max-w-[90%] mx-auto gap-4">
                        {/* New Joiners Reports */}
                        <FadeInUp delay={0.2 * 4} duration={0.7}>
                            <div className="crd4 bg-[#F3F9FF] border-2 border-[#CCE7FF] shadow-md rounded-3xl font-semibold text-xl p-6 sm:h-[350px] flex flex-col justify-center">
                                <h2 className="mb-8 lg:text-left">New Joiners Reports</h2>
                                <Piechart
                                    title="New Joiners Reports"
                                    chartData={[
                                        { name: "Onboarding", value: 58, color: "#2EC4B6" },
                                        { name: "Training", value: 18, color: "#0E7C7B" },
                                        { name: "Team Allocation", value: 15, color: "#F46036" },
                                        { name: "Assets Allocation", value: 9, color: "#FFD166" }
                                    ]}
                                />
                            </div>
                        </FadeInUp>

                        {/* Upcoming Birthdays */}
                        <FadeInUp delay={0.2 * 5} duration={0.7}>
                            <div className="crd5 bg-[#F3F9FF] border-2 border-[#CCE7FF] shadow-md rounded-3xl font-semibold text-xl p-6 relative h-[350px]">
                                <h2 className="mb-6">Upcoming Birthdays</h2>
                                <img src={bell} alt="notification img" className="bg-[#DEEEEF] w-11 border-2 border-[#3B9B9F] rounded-full absolute top-[1.5rem] right-[1.5rem] sm:block hidden" />
                                <div className="w-2 h-2 bg-[#FFC600] rounded-full absolute top-8 right-[2.75rem] sm:block hidden"></div>
                                <div className="crds relative space-y-2">
                                    <div className="usrCrd1 bg-white rounded-xl flex items-center p-6 sm:w-[70%] xl:w-[80%] mx-auto hover:border-2 hover:border-[#CCE7FF] shadow-md cursor-pointer h-[5rem]">
                                        <img src={usrDoc} alt="user" className="2xl:w-12 2xl:h-12 xl:w-10 xl:h-10 md:w-10 md:h-10 sm:hidden md:block bg-[#F0F0F0] rounded-lg hidden" />
                                        <div className="flex flex-col justify-center ml-3">
                                            <h4 className="text-black 2xl:text-base xl:text-lg 2xl:font-semibold lg:text-sm md:text-[1rem] sm:text-[0.9rem] pb-1 text-[0.9rem]">John Appleseed</h4>
                                            <h6 className="text-gray-500 text-xs sm:text-[0.7rem]">22/09/2024</h6>
                                        </div>
                                        <span className="text-black text-xs font-normal ml-auto px-2 py-1">2 days</span>
                                    </div>
                                    <div className="usrCrd2 bg-white rounded-xl flex items-center p-6 sm:w-[70%] xl:w-[80%] mx-auto hover:border-2 hover:border-[#CCE7FF] shadow-md cursor-pointer h-[5rem]">
                                        <img src={usrDoc} alt="user" className="2xl:w-12 2xl:h-12 xl:w-10 xl:h-10 md:w-10 md:h-10 sm:hidden md:block bg-[#F0F0F0] rounded-lg hidden" />
                                        <div className="flex flex-col justify-center ml-3">
                                            <h4 className="text-black 2xl:text-base xl:text-lg 2xl:font-semibold lg:text-sm md:text-[1rem] sm:text-[0.9rem] pb-1 text-[0.9rem]">Praveen Kumar</h4>
                                            <h6 className="text-gray-500 text-xs sm:text-[0.7rem]">22/09/2024</h6>
                                        </div>
                                        <span className="text-black text-xs font-normal ml-auto px-2 py-1">3 days</span>
                                    </div>
                                    <div className="usrCrd3 bg-white rounded-xl flex items-center p-6 sm:w-[70%] xl:w-[80%] mx-auto hover:border-2 hover:border-[#CCE7FF] shadow-md cursor-pointer h-[5rem]">
                                        <img src={usrDoc} alt="user" className="2xl:w-12 2xl:h-12 xl:w-10 xl:h-10 md:w-10 md:h-10 sm:hidden md:block bg-[#F0F0F0] rounded-lg hidden" />
                                        <div className="flex flex-col justify-center ml-3">
                                            <h4 className="text-black 2xl:text-base xl:text-lg 2xl:font-semibold lg:text-sm md:text-[1rem] sm:text-[0.9rem] pb-1 text-[0.9rem]">Yuvaganesh B</h4>
                                            <h6 className="text-gray-500 text-xs sm:text-[0.7rem]">22/09/2024</h6>
                                        </div>
                                        <span className="text-black text-xs font-normal ml-auto px-2 py-1">7 days</span>
                                    </div>
                                </div>
                            </div>
                        </FadeInUp>
                    </div>
                </div>
            </div>

            {/* Implementation Section */}
            <FadeInUp delay={0.2}>
                <FeaturesImplementationCard />
            </FadeInUp>
        </div>
    );
}