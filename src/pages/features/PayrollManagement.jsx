import pyrlErr from '../../assets/images/pyrlMngt-img/pyrlErr.png';
import pyrlUsr from '../../assets/images/pyrlMngt-img/pyrlUsr.png';

import pricingCardImg from '../../assets/images/pricing-img/pricing-img.png'
import usrDoc from '../../assets/images/usrMngt-img/usrDoc.png'
import profileImg from '../../assets/images/usrMngt-img/profileImg.png'

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Piechart from '../../components/ui/Piechart';
import FeaturesImplementationCard from './FeaturesImplementationCard';
import FadeInUp from '../../components/FadeInUp';
import download from '../../assets/images/pyrlMngt-img/download.png';

export default function PayrollManagement() {
    return (
        <div className="usrMngt-component">
            <div className="px-1 sm:px-2 md:px-4 lg:px-6 xl:px-8">
            <FadeInUp delay={0.1}>
                <div className="usrMngt-card flex flex-col relative overflow-hidden m-5 sm:m-10 h-[350px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] 2xl:pl-16 bg-[#3B9B9F] rounded-3xl z-0">
                {/* shapes */}
                <div className="assets-card-polygons">
                    <div className="reactangles">
                        <div className="rect1 absolute rotate-45 2xl:-top-[22rem] 2xl:right-[25rem] xl:-top-[25rem] xl:right-[13rem] lg:-top-[25rem] lg:right-[10rem] md:-top-[27rem] md:right-[7rem] hidden md:block ">
                            <FadeInUp delay={0.1}>
                            <div className="outerRect bg-white w-[430px] h-[430px] flex justify-center items-center p-[18px] rounded-[33px]">
                                <div className="innerRect bg-[#3B9B9F] w-full h-full rounded-[18px]"></div>
                            </div>
                            </FadeInUp>
                        </div>
                        <div className="rect2 absolute rotate-12 2xl:-top-[9rem] 2xl:-right-[18rem] xl:-top-[10rem] xl:-right-[20rem] lg:-top-[10rem] lg:-right-[20rem] md:-top-[15rem] md:-right-[22rem] hidden md:block ">
                            <FadeInUp delay={0.2}>
                            <div className="outerRect bg-white w-[400px] h-[400px] flex justify-center items-center p-[18px] rounded-[33px]">
                                <div className="innerRect bg-[#3B9B9F] w-full h-full rounded-[18px]"></div>
                            </div>
                            </FadeInUp>
                        </div>
                    </div>

                    <div className='absolute -bottom-1 2xl:right-0 xl:right-0 lg:-right-[1.5rem] md:-right-[2.5rem] sm:-right-[2rem] -right-[2rem] z-10'>
                    <FadeInUp delay={0.2}>
                    <img
                        src={pricingCardImg}
                        alt="assets card image"
                        className="2xl:w-[45rem] xl:w-[40rem] lg:w-[35rem] md:w-[23rem] sm:w-[17rem] w-[15rem] aspect-[1.457]"
                    />
                    </FadeInUp>
                    </div>

                    <div className="circles absolute 2xl:-bottom-[17rem] 2xl:right-[2.5rem] xl:-bottom-[16rem] xl:right-[2rem] lg:-bottom-[16rem] lg:-right-[1rem] hidden md:flex justify-center items-center">
                        <FadeInUp delay={0.3}>
                        <div className="cirOtr 2xl:w-[38rem] 2xl:h-[38rem] xl:w-[34rem] xl:h-[34rem] lg:w-[31rem] lg:h-[31rem] bg-white bg-opacity-50 rounded-full flex justify-center items-center">
                            <div className="cirInr 2xl:w-[28rem] 2xl:h-[28rem] xl:w-[26rem] xl:h-[26rem] lg:w-[23rem] lg:h-[23rem] bg-white rounded-full opacity-100"></div>
                        </div>
                        </FadeInUp>
                    </div>
                </div>

                {/* content */}
                <div className="usrMngt-card-content flex flex-col justify-center align-middle space-y-3 sm:justify-start sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-7 w-[36rem] ml-[10%] mt-[10%] sm:ml-6 sm:mt-8 md:ml-10 md:mt-20 lg:ml-12 lg:mt-24 xl:ml-20 xl:mt-[7rem] 2xl:ml-12 2xl:mt-32">
                    <FadeInUp delay={0.2}>
                        <span className="bg-[#F3F9FF] rounded-3xl w-fit px-2 py-1 2xl:px-6 2xl:py-2 2xl:text-lg 2xl:font-medium xl:px-5 xl:py-2 xl:text-base lg:px-4 lg:py-1 lg:text-lg md:px-3 md:text-[0.8rem] sm:px-2 sm:py-1 sm:text-[0.7rem]">
                        Payroll Management
                        </span>
                    </FadeInUp>
                    <FadeInUp delay={0.3}>
                        <h3 className="text-base w-[50%] font-extrabold text-[#1E1E1E] leading-snug 2xl:w-[50rem] mr-2 sm:text-xl sm:w-fit md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl">
                        Accurate & Automated Salary Processing
                        </h3>
                    </FadeInUp>
                    <FadeInUp delay={0.4}>
                        <h4 className="text-sm font-normal pr-[50%] sm:text-[0.9rem] sm:pr-[25%] xl:pr-[5%] sm:leading-relaxed sm:font-medium md:text-[0.9rem] md:leading-7 md:font-normal lg:text-lg lg:font-normal xl:text-lg 2xl:text-xl 2xl:leading-10">
                        Payroll management handles salary calculations, tax deductions, and compliance. Our HRMS automates the process, reducing errors and saving time.
                        </h4>
                    </FadeInUp>
                    <FadeInUp delay={0.5}>
                        <div className="usrMngt-btns flex flex-col md:flex-row gap-2 cursor-pointer sm:gap-2 lg:gap-3 xl:gap-4 2xl:gap-6 2xl:mt-0 xl:mt-3">
                            <Link to="/contact-us">
                                <button className=" bg-[#FFC600] rounded-full text-black shadowtext-base hover:bg-[#e6b800] shadow-md hover:shadow-lg active:scale-95 px-2 py-1 2xl:px-5 2xl:py-3 2xl:text-base 2xl:font-semibold xl:px-4 xl:py-2 xl:text-base xl:font-bold lg:px-4 lg:py-2 lg:text-sm md:px-3 md:py-2 sm:px-2 sm:py-1 sm:text-sm sm:font-medium text-[0.8rem]">
                                    Book a Demo
                                </button>
                            </Link>
                            <Link to="/contact-us">
                                <button className=" bg-[#FFF8E0] border-2 border-[#F0C221] rounded-full text-[#F0C221] shadow-lg hover:bg-[#fce7a1] hover:text-black hover:shadow-lg active:scale-95 px-2 py-1 2xl:px-5 2xl:py-3 2xl:text-base 2xl:font-semibold xl:px-4 xl:py-2 xl:text-base xl:font-bold lg:px-4 lg:py-2 lg:text-sm md:px-3 md:py-2 sm:px-2 sm:py-1 sm:text-sm sm:font-medium text-[0.8rem]">
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
            <div className="expMngt-stats-mainContiner my-10">
                <div className="expMngt-text text-center m-5 font-semibold">
                    <FadeInUp delay={0.1}>
                    <h1 className="text-[1.5rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.3rem] xl:text-[2.6rem] 2xl:text-[3rem]">
                    Our Payroll Management System
                    </h1>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                    <p className="m-5 text-[0.9rem] sm:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[1.8rem] font-medium">
                    Simplify Payroll Processing with Compliance & Precision.
                    </p>
                    </FadeInUp>
                </div>
                
                {/* Statistics Grid */}
                <div className="expMngt-stats-grid grid gap-y-4 w-full px-4 sm:px-10 py-4 sm:gap-y-4 lg:gap-y-4 xl:gap-y-4">
                    {/* Upper Stats */}
                    <div className="expMngt-upper-stats grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 w-full max-w-[90%] mx-auto gap-4">
                        {/* Payroll  */}
                        <FadeInUp delay={0.2 * 1} duration={0.7}>
                            <div className="crd1 bg-[#DEEEEF] border-2 border-[#AED5D6] shadow-md rounded-3xl font-semibold text-xl p-6 w-full h-[300px] 2xl:h-[300px] ">
                                <h2 className="xl:mb-10 lg:mb-10 sm:mb-8 mb-8">Payroll</h2>
                                <div className="expDmg-crd bg-white shadow-lg rounded-2xl p-6 flex items-center justify-between w-[98%] h-[150px] mx-auto relative hover:shadow-[20px_20px_10px_#AED5D6] transition cursor-pointer">
                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-gray-500 xl:text-sm lg:text-xs font-medium mb-5 sm:text-sm text-sm">Payroll</h4>
                                        <p className="2xl:text-3xl font-bold text-black xl:text-2xl lg:text-xl text-base">550</p>
                                        <p className="text-gray-500 xl:text-sm lg:text-xs sm:text-sm mt-2 text-xs flex items-center">
                                            <span className="text-green-600 font-semibold flex items-center">
                                                <FontAwesomeIcon icon={faArrowUp} className="mr-1" /> 10%
                                            </span>
                                            &nbsp;compared last month
                                        </p>
                                    </div>
                                    <img src={pyrlUsr} alt="active user" className="bg-[#DEEEEF] p-2 rounded-xl 2xl:w-16 xl:w-14 lg:w-12 sm:w-11 sm:p-1 lg:p-2 absolute top-3 right-3 w-14" />
                                </div>
                            </div>
                        </FadeInUp>

                        {/* Payroll List */}
                        <FadeInUp delay={0.2 * 2} duration={0.7}>
                        <div className="crd2 bg-[#DEEEEF] border-2 border-[#AED5D6] shadow-md rounded-3xl font-semibold text-xl p-6 w-full h-[300px] 2xl:h-[300px]">
                            <h2 className="mb-[5%]">Payroll List</h2>
                            <div className="bg-white rounded-xl shadow-md overflow-hidden sm:w-[95%] md:text-sm text-xs mx-auto border-[1px] border-slate-300 flex justify-center align-middle items-center">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-100 text-gray-500 xl:text-sm lg:text-[0.6rem] sm:text-[0.8rem]">
                                        <tr className='text-center'>
                                            <th className="px-2 py-2 border-r">Emp ID</th>
                                            <th className="px-2 py-2 border-r">Name</th>
                                            <th className="px-2 py-2 border-r">Document</th>
                                            <th className="px-2 py-2">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700 xl:text-sm lg:text-[0.6rem] sm:text-[0.8rem] text-center">
                                        {[
                                            { id: "STK007", name: "Jane Doe", doc: "Relive letter", stus: "Pending" },
                                            { id: "STK767", name: "Jane Doe", doc: "Experience", stus: "Completed" },
                                            { id: "STK767", name: "Jane Doe", doc: "Education", stus: "Pending" },
                                        ].map((row, index) => (
                                            <tr key={index} className="border-t">
                                                <td className="px-2 py-2 border-r">{row.id}</td>
                                                <td className="px-2 py-2 flex items-center gap-2 border-r justify-center">
                                                    <img src={profileImg} alt="user" className="w-5 h-5 rounded-full lg:hidden xl:block" />
                                                    {row.name}
                                                </td>
                                                <td className="px-2 py-2 border-r">{row.doc}</td>
                                                <td className="px-2 py-2">{row.stus}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </FadeInUp>

                        {/* Payroll Downloads */}
                        <FadeInUp delay={0.2 * 3} duration={0.7}>
                        <div className="crd3 bg-[#DEEEEF] border-2 border-[#AED5D6] shadow-md rounded-3xl font-semibold text-xl p-6 w-full relative overflow-hidden h-[300px] 2xl:h-[300px] ">
                            <h2 className="mb-[4rem] xl:mb-[4rem]">Payroll Downloads</h2>

                            {/* Background Illustrations */}
                            <img src={download} alt="docs" className="absolute -top-[4rem] -right-[3rem] w-[12rem]" />
                            <img src={download} alt="docs" className="absolute -bottom-[2rem] -left-[2rem] -rotate-45 w-[7rem]" />

                            {/* assets available Card */}
                            <div className="usrDocs bg-white rounded-xl flex items-center p-4 gap-4 sm:w-[80%] lg:w-[90%] mx-auto relative shadow-[0_20px_0_#AED5D6] hover:shadow-[25px_25px_5px_#AED5D6] transition cursor-pointer overflow-hidden h-[6rem]">
                                
                                {/* User Image */}
                                <img src={usrDoc} alt="user" className="2xl:w-14 2xl:h-14 xl:w-10 xl:h-10 xl:block lg:hidden sm:block sm:w-10 sm:h-10 bg-[#F0F0F0] rounded-lg hidden" />

                                {/* User Info */}
                                <div className="flex flex-col h-[5rem] align-middle justify-center">
                                    <h4 className="text-black 2xl:text-lg xl:text-base lg:text-sm sm:text-sm font-semibold text-[1rem]">Pravin Kumar</h4>
                                    <h6 className="text-gray-500 2xl:text-sm xl:text-xs lg:text-xs sm:text-xs text-[0.8rem]">Design Team</h6>
                                </div>

                                {/* Role Badge */}
                                <span className="bg-yellow-400 text-black 2xl:text-sm lg:text-xs sm:text-sm font-normal px-2 py-1 absolute top-0 right-0 text-xs">
                                Avaiable
                                </span>

                                {/* Document Type */}
                                <p className="text-gray-600 2xl:text-sm lg:text-xs sm:text-xs absolute bottom-3 right-3 text-xs">07</p>
                            </div>
                        </div>
                        </FadeInUp>
                    </div>

                    {/* Lower Stats */}
                    <div className="expMngt-lower-stats grid sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 w-full max-w-[90%] mx-auto gap-4">
                        {/* Payroll Status */}
                        <FadeInUp delay={0.2 * 4} duration={0.7}>
                        <div className="crd4 bg-[#DEEEEF] border-2 border-[#AED5D6] shadow-md rounded-3xl font-semibold text-xl p-6 sm:h-[350px] flex flex-col justify-center">
                            <h2 className="mb-8 lg:text-left">Payroll Status</h2>
                            <Piechart 
                                title="Payroll Status"
                                chartData={[
                                    { name: "Marketing", value: 45, color: "#2EC4B6" },
                                    { name: "Product", value: 30, color: "#0E7C7B" },
                                    { name: "Developers", value: 15, color: "#F46036" },
                                    { name: "Design", value: 10, color: "#FFD166" }
                                ]}
                            />
                        </div>
                        </FadeInUp>
                        
                        {/* Payroll */}
                        <FadeInUp delay={0.2 * 5} duration={0.7}>
                        <div className="crd5 bg-[#DEEEEF] border-2 border-[#AED5D6] shadow-md rounded-3xl font-semibold text-xl p-6 w-full h-[300px] sm:h-[350px]">
                            <h2 className="2xl:mb-14 xl:mb-16 lg:mb-14 md:mb-14 sm:mb-14 mb-8">Payroll</h2>
                            <div className="expDmg-crd bg-white shadow-lg rounded-2xl p-6 flex items-center justify-between w-[98%] h-[150px] mx-auto relative hover:shadow-[20px_20px_10px_#AED5D6] transition cursor-pointer border-2 border-[#AED5D6]">
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-gray-500 xl:text-sm lg:text-xs font-medium mb-5 sm:text-sm text-sm">Overall Payroll</h4>
                                    <p className="2xl:text-3xl font-bold text-black xl:text-2xl lg:text-xl text-base">15</p>
                                    <p className="text-gray-500 xl:text-sm lg:text-xs sm:text-sm mt-2 text-xs flex items-center">
                                        <span className="text-green-600 font-semibold flex items-center">
                                            <FontAwesomeIcon icon={faArrowUp} className="mr-1" /> 10%
                                        </span>
                                        &nbsp;compared last month
                                    </p>
                                </div>
                                <img src={pyrlErr} alt="expense management chart" className="bg-[#DEEEEF] p-2 rounded-xl 2xl:w-16 xl:w-14 lg:w-12 sm:w-11 sm:p-1 lg:p-2 absolute top-3 right-3 w-14" />
                            </div>
                        </div>
                        </FadeInUp>
                    </div>
                </div>
            </div>
            
            <FadeInUp delay={0.2}>
            <FeaturesImplementationCard />
            </FadeInUp>
        </div>
    );
}