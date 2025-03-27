import pricingCardImg from '../../assets/images/pricing-img/pricing-img.png'
import Barchart from '../../components/ui/Barchart';
import profileImg from '../../assets/images/usrMngt-img/profileImg.png'
import usrDoc from '../../assets/images/usrMngt-img/usrDoc.png'
import astAvl from '../../assets/images/AstMngt-img/astAvl.png'
import astHnd from '../../assets/images/AstMngt-img/astHnd.png'
import astDmgImg from '../../assets/images/AstMngt-img/astDmgImg.png'

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Piechart from '../../components/ui/Piechart';
import FeaturesImplementationCard from './FeaturesImplementationCard';
import FadeInUp from '../../components/FadeInUp';

const assetsData = [
    { category: "Excellent", val: 0, type1: 10, type2: 13 },
    { category: "Good", val: 5, type1: 3, type2: 7 },
    { category: "Bad", val: 10, type1: 7, type2: 11 },
    { category: "Damage", val: 15, type1: 6, type2: 9 },
];

export default function AssetManagement() {
    return (
            <div className="usrMngt-component">
                <div className="px-1 sm:px-2 md:px-4 lg:px-6 xl:px-8">
                <FadeInUp delay={0.1}>
                    <div className="usrMngt-card flex flex-col relative overflow-hidden m-5 sm:m-10 h-[350px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] 2xl:pl-16 bg-[#CCE7FF] rounded-3xl z-0">
                    {/* shapes */}
                    <div className="assets-card-polygons">
                        <div className="reactangles">
                            <div className="rect1 absolute rotate-45 2xl:-top-[22rem] 2xl:right-[25rem] xl:-top-[25rem] xl:right-[13rem] lg:-top-[25rem] lg:right-[10rem] md:-top-[27rem] md:right-[7rem] hidden md:block ">
                                <FadeInUp delay={0.1}>
                                <div className="outerRect bg-white w-[430px] h-[430px] flex justify-center items-center p-[18px] rounded-[33px]">
                                    <div className="innerRect bg-[#CCE7FF] w-full h-full rounded-[18px]"></div>
                                </div>
                                </FadeInUp>
                            </div>
                            <div className="rect2 absolute rotate-12 2xl:-top-[9rem] 2xl:-right-[18rem] xl:-top-[10rem] xl:-right-[20rem] lg:-top-[10rem] lg:-right-[20rem] md:-top-[15rem] md:-right-[22rem] hidden md:block ">
                                <FadeInUp delay={0.2}>
                                <div className="outerRect bg-white w-[400px] h-[400px] flex justify-center items-center p-[18px] rounded-[33px]">
                                    <div className="innerRect bg-[#CCE7FF] w-full h-full rounded-[18px]"></div>
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
                    <div className="usrMngt-card-content flex flex-col justify-center align-middle space-y-3 sm:justify-start sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-8 2xl:space-y-7 w-[36rem] ml-8 mt-[10%] sm:ml-6 sm:mt-8 md:ml-10 md:mt-20 lg:ml-8 lg:mt-24 xl:ml-10 xl:mt-[6rem] 2xl:mt-32">
                        <FadeInUp delay={0.2}>
                            <span className="bg-[#F3F9FF] rounded-3xl w-fit px-2 py-1 2xl:px-6 2xl:py-2 2xl:text-lg 2xl:font-medium xl:px-5 xl:py-2 xl:text-base lg:px-4 lg:py-1 lg:text-lg md:px-3 md:text-[0.8rem] sm:px-2 sm:py-1 sm:text-[0.7rem]">
                            Assets Management
                            </span>
                        </FadeInUp>
                        <FadeInUp delay={0.3}>
                            <h3 className="text-base w-[60%] font-extrabold text-[#1E1E1E] leading-snug 2xl:w-[50rem] mr-2 sm:text-xl sm:w-fit md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl">
                            Track & Manage Company Assets Efficiently
                            </h3>
                        </FadeInUp>
                        <FadeInUp delay={0.4}>
                            <h4 className="text-sm font-normal pr-[50%] sm:text-[0.9rem] sm:pr-[25%] xl:pr-[5%] sm:leading-relaxed sm:font-medium md:text-[0.9rem] md:leading-7 md:font-normal lg:text-lg lg:font-normal xl:text-lg 2xl:text-xl 2xl:leading-10">
                            Our HRMS automates asset tracking, ensuring accountability and efficient resource management.
                            </h4>
                        </FadeInUp>
                        <FadeInUp delay={0.5}>
                            <div className="usrMngt-btns flex flex-col md:flex-row gap-2 cursor-pointer sm:gap-2 lg:gap-3 xl:gap-4 2xl:gap-6 2xl:mt-0 xl:mt-3">
                                <Link to="/contact-us">
                                    <button className=" rounded-full bg-[#FFC600] hover:bg-[#e6b800] text-black shadow-md hover:shadow-lg active:scale-95 px-2 py-1 2xl:px-5 2xl:py-3 2xl:text-base 2xl:font-semibold xl:px-4 xl:py-2 xl:text-base xl:font-bold lg:px-4 lg:py-2 lg:text-sm md:px-3 md:py-2 sm:px-2 sm:py-1 sm:text-sm sm:font-medium text-[0.8rem]">
                                        Book a Demo
                                    </button>
                                </Link>
                                <Link to="/contact-us">
                                    <button className="bg-[#FFF8E0] border-2 border-[#F0C221] hover:bg-[#fce7a1] hover:text-black text-[#F0C221] rounded-full shadow-md hover:shadow-lg active:scale-95 px-2 py-1 2xl:px-5 2xl:py-3 2xl:text-base 2xl:font-semibold xl:px-4 xl:py-2 xl:text-base xl:font-bold lg:px-4 lg:py-2 lg:text-sm md:px-3 md:py-2 sm:px-2 sm:py-1 sm:text-sm sm:font-medium text-[0.8rem]">
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
                        Store and access all asset details in one place
                    </h1>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                    <p className="m-5 text-[0.9rem] sm:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[1.8rem] font-medium">
                        Monitor, Assign, and Maintain Business Assets with Ease.
                    </p>
                    </FadeInUp>
                </div>
                
                {/* Statistics Grid */}
                <div className="usrMngt-stats-grid grid gap-y-4 w-full px-4 sm:px-10 py-4 sm:gap-y-4 lg:gap-y-4 xl:gap-y-4">
                    {/* Upper Stats */}
                    <div className="usrMngt-upper-stats grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 w-full max-w-[90%] mx-auto gap-4">
                        {/* Assets Conductions */}
                        <FadeInUp delay={0.2 * 1} duration={0.7}>
                            <div className="crd2 bg-[#F3F9FF] border-2 border-[#CCE7FF] shadow-md rounded-3xl font-semibold text-xl p-6 w-full h-[330px] 2xl:h-[330px] lg:h-[330px]">
                                <h2 className="mb-5">Assets Conductions</h2>
                                <Barchart
                                    title="Assets Conditions"
                                    data={assetsData}
                                    xKey="category"
                                    yKeys={["type1", "type2"]}
                                    colors={["#FEC600", "#16C7BE"]}
                                    yDomain={[0, 15]}
                                    yTicks={[0, 5, 10, 15]}
                                    bgColor="#fff"
                                />
                            </div>
                        </FadeInUp>

                        {/* Assets Tickets */}
                        <FadeInUp delay={0.2 * 2} duration={0.7}>
                            <div className="crd2 bg-[#F3F9FF] border-2 border-[#CCE7FF] shadow-md rounded-3xl font-semibold text-xl p-6 w-full h-[300px] 2xl:h-[330px] lg:h-[330px]">
                                <h2 className="2xl:mb-[7%] xl:mb-[7%] lg:mb-[7%] sm:mb-[7%] mb-[5%]">Assets Tickets</h2>
                                <div className="bg-white rounded-xl shadow-md overflow-hidden sm:w-[95%] xl:w-[95%] md:text-sm text-xs mx-auto border-[1px] border-slate-300 flex justify-center align-middle items-center">
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-gray-100 text-gray-500 xl:text-sm lg:text-[0.7rem] sm:text-[0.8rem]">
                                            <tr className="text-center">
                                                <th className="px-2 py-2 border-r">Emp ID</th>
                                                <th className="px-2 py-2 border-r">Name</th>
                                                <th className="px-2 py-2 border-r">Issues</th>
                                                <th className="px-2 py-2">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700 xl:text-sm lg:text-[0.7rem] sm:text-[0.8rem] text-center">
                                            {[
                                                { id: "STK567", name: "Jane Doe", isu: "Not Working", stus: "Completed" },
                                                { id: "STK007", name: "Jane Doe", isu: "Damage", stus: "Pending" },
                                                { id: "STK767", name: "Jane Doe", isu: "Slow", stus: "Completed" },
                                            ].map((row, index) => (
                                                <tr key={index} className="border-t">
                                                    <td className="px-2 py-2 border-r">{row.id}</td>
                                                    <td className="px-2 py-2 flex items-center gap-2 border-r justify-center">
                                                        <img src={profileImg} alt="user" className="w-5 h-5 rounded-full lg:hidden xl:block" />
                                                        {row.name}
                                                    </td>
                                                    <td className="px-2 py-2 border-r">{row.isu}</td>
                                                    <td className="px-2 py-2">{row.stus}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </FadeInUp>

                        {/* Assets Available */}
                        <FadeInUp delay={0.2 * 3} duration={0.7}>
                            <div className="crd3 bg-[#F3F9FF] border-2 border-[#CCE7FF] shadow-md rounded-3xl font-semibold text-xl p-6 w-full relative overflow-hidden h-[300px] 2xl:h-[330px] lg:h-[330px]">
                                <h2 className="mb-[4rem] xl:mb-[4rem]">Assets Available</h2>

                                {/* Background Illustrations */}
                                <img src={astAvl} alt="docs" className="absolute -top-[3rem] -right-[3rem] w-[10rem]" />
                                <img src={astHnd} alt="docs" className="absolute -bottom-[0] -left-[0rem] w-[6rem]" />
                                
                                {/* pending docs Card */}
                                <div className="usrDocs bg-white rounded-xl flex items-center p-4 gap-4 sm:w-[80%] lg:w-[90%] mx-auto relative shadow-[0_20px_0_#CCE7FF] hover:shadow-[25px_25px_5px_#CCE7FF] transition cursor-pointer overflow-hidden h-[6rem]">

                                    {/* User Image */}
                                    <img src={usrDoc} alt="user" className="2xl:w-14 2xl:h-14 xl:w-10 xl:h-10 xl:block lg:hidden sm:block sm:w-10 sm:h-10 bg-[#F0F0F0] rounded-lg hidden" />

                                    {/* User Info */}
                                    <div className="flex flex-col h-[5rem] align-middle justify-center">
                                        <h4 className="text-black 2xl:text-lg xl:text-base lg:text-sm sm:text-sm font-semibold text-[1rem]">Laptop</h4>
                                        <h6 className="text-gray-500 2xl:text-sm xl:text-xs lg:text-xs sm:text-xs text-[0.8rem]">Design Team</h6>
                                    </div>

                                    {/* Role Badge */}
                                    <span className="bg-yellow-400 text-black 2xl:text-sm lg:text-xs sm:text-sm font-normal px-2 py-1 absolute top-0 right-0 text-xs">
                                    Avaiable
                                    </span>

                                    {/* Document Type */}
                                    <p className="text-gray-600 2xl:text-sm lg:text-xs sm:text-xs absolute bottom-3 right-3 text-xs">12</p>
                                </div>
                            </div>
                        </FadeInUp>
                    </div>

                    {/* Lower Stats */}
                    <div className="usrMngt-lower-stats grid sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 w-full max-w-[90%] mx-auto gap-4">
                        {/* Assets Status */}
                        <FadeInUp delay={0.2 * 4} duration={0.7}>
                            <div className="crd4 bg-[#F3F9FF] border-2 border-[#CCE7FF] shadow-md rounded-3xl font-semibold text-xl p-6 sm:h-[350px] flex flex-col justify-center">
                                <h2 className="mb-8 lg:text-left">Assets Status</h2>
                                <Piechart
                                    title="Assets Status"
                                    chartData={[
                                        { name: "Assets Available", value: 45, color: "#2EC4B6" },
                                        { name: "Assets Allocated", value: 30, color: "#0E7C7B" },
                                        { name: "Assets Damage", value: 15, color: "#F46036" },
                                        { name: "Assets Tickets", value: 10, color: "#FFD166" }
                                    ]}
                                />
                            </div>
                        </FadeInUp>
                        
                        {/* Assets Damage */}
                        <FadeInUp delay={0.2 * 5} duration={0.7}>
                        <div className="crd5 bg-[#F3F9FF] border-2 border-[#CCE7FF] shadow-md rounded-3xl font-semibold text-xl p-6 sm:h-[350px] flex flex-col">
                            <h2 className="mb-[7%]">Assets Damage</h2>
                            <div className="actUsr-crd bg-white shadow-lg rounded-2xl p-6 flex items-center justify-between w-[98%] h-[150px] mx-auto relative hover:shadow-[20px_20px_10px_#CCE7FF] transition cursor-pointer">
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-gray-500 xl:text-sm lg:text-xs font-medium mb-5 sm:text-sm text-sm">Assets Damage</h4>
                                    <p className="2xl:text-3xl font-bold text-black xl:text-2xl lg:text-xl text-base">15</p>
                                    <p className="text-gray-500 xl:text-sm lg:text-xs sm:text-sm mt-2 text-xs flex items-center">
                                        <span className="text-green-600 font-semibold flex items-center">
                                            <FontAwesomeIcon icon={faArrowUp} className="mr-1" /> 10%
                                        </span>
                                        &nbsp;compared last month
                                    </p>
                                </div>
                                <img src={astDmgImg} alt="active user" className="bg-[#F3F9FF] p-2 rounded-xl 2xl:w-16 xl:w-14 lg:w-12 sm:w-11 sm:p-1 lg:p-2 absolute top-3 right-3 w-14 " />
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