import expnMngtImg from "../../assets/images/expMngt-img/expMngtImg.png";
import expMngtChrt from '../../assets/images/expMngt-img/expMngtChrt.png';

import profileImg from '../../assets/images/usrMngt-img/profileImg.png'
import usrDoc from '../../assets/images/usrMngt-img/usrDoc.png'
import expPen2 from '../../assets/images/expMngt-img/expPen2.png'
import expPen from '../../assets/images/expMngt-img/expPen.png'
import expOvr from '../../assets/images/expMngt-img/expOvr.png'

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Piechart from '../../components/ui/Piechart';
import FeaturesImplementationCard from './FeaturesImplementationCard';
import FadeInUp from "../../components/FadeInUp";

export default function ExpenseManagement() {
    return (
            <div className="usrMngt-component">
                <div className="px-1 sm:px-2 md:px-4 lg:px-6 xl:px-8">
                <FadeInUp delay={0.1}>
                    <div className="usrMngt-card flex flex-col relative overflow-hidden m-5 sm:m-10 h-[350px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] 2xl:pl-16 bg-[#FEEAD0] rounded-3xl z-0">
                        {/* shapes */}
                        <div className="expenses-card-polygons">
                            <div className="absolute 2xl:-top-[25rem] 2xl:right-[10rem] xl:-top-[17rem] xl:right-[10rem] lg:-top-[14rem] lg:right-[7rem] lg:block hidden ">
                                <FadeInUp delay={0.2}>
                                <img src={expMngtChrt} alt="expense management image1" className="2xl:w-[35rem] xl:w-[25rem] lg:w-[20rem] opacity-70 -rotate-12" />
                                </FadeInUp>
                            </div>
                            <div className="absolute 2xl:top-[7rem] 2xl:right-[5rem] xl:top-[7rem] xl:right-[4rem] lg:top-[6rem] lg:right-[3rem] lg:block hidden ">
                                <FadeInUp delay={0.3}>
                                <img src={expMngtChrt} alt="expense management image2" className="2xl:w-[7rem] xl:w-[6rem] lg:w-[5rem]" />
                                </FadeInUp>
                            </div>
                            
                            <div className="absolute -bottom-1 2xl:-right-[4.5rem] xl:-right-[4rem] lg:-right-[2.8rem] md:-right-[4rem] sm:-right-[3rem] -right-[2rem] z-10">
                            <FadeInUp delay={0.4}>
                            <img
                                src={expnMngtImg}
                                alt="expenses card image"
                                className="2xl:w-[50rem] xl:w-[43rem] lg:w-[35rem] md:w-[27rem] sm:w-[20rem] w-[15rem] aspect-[1.8]"
                            />
                            </FadeInUp>
                            </div>
        
                            <div className="circles absolute 2xl:-bottom-[17rem] 2xl:right-[2.5rem] xl:-bottom-[15rem] xl:right-[2rem] lg:-bottom-[13rem] lg:right-[1.5rem] hidden xl:flex justify-center items-center">
                                <FadeInUp delay={0.4}>
                                <div className="cirOtr 2xl:w-[36rem] 2xl:h-[36rem] xl:w-[32rem] xl:h-[32rem] lg:w-[28rem] lg:h-[28rem] bg-white bg-opacity-50 rounded-full flex justify-center items-center">
                                    <div className="cirInr 2xl:w-[26rem] 2xl:h-[26rem] xl:w-[23rem] xl:h-[23rem] lg:w-[21rem] lg:h-[21rem] bg-white rounded-full opacity-100"></div>
                                </div>
                                </FadeInUp>
                            </div>
                        </div>

                        {/* content */}
                        <div className="usrMngt-card-content flex flex-col justify-center align-middle space-y-3 sm:justify-start sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-7 w-[36rem] ml-4 mt-[10%] sm:ml-6 sm:mt-8 md:ml-10 md:mt-16 lg:ml-16 lg:mt-20 xl:ml-14 xl:mt-28 2xl:mt-24">
                            <FadeInUp delay={0.2}>
                                <span className="bg-[#99784E] rounded-3xl w-fit px-2 py-1 2xl:px-6 2xl:py-2 2xl:text-lg 2xl:font-medium xl:px-5 xl:py-2 xl:text-base lg:px-4 lg:py-1 lg:text-lg md:px-3 md:text-[0.8rem] sm:px-2 sm:py-1 sm:text-[0.7rem]">
                                Expense Management
                                </span>
                            </FadeInUp>
                            <FadeInUp delay={0.3}>
                                <h3 className="text-lg font-extrabold text-[#1E1E1E] leading-snug w-[17rem] mr-2 sm:text-xl sm:w-fit md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl">
                                Simplify Business Expense Tracking
                                </h3>
                            </FadeInUp>
                            <FadeInUp delay={0.4}>
                                <h4 className="text-sm font-light pr-[50%] sm:text-[0.9rem] sm:pr-[34%] md:pr-[25%] lg:pr-[10%] xl:pr-[5%] sm:leading-relaxed sm:font-normal md:text-[0.9rem] md:leading-7 md:font-normal lg:text-lg lg:font-normal xl:text-lg 2xl:text-xl 2xl:leading-10">
                                Expense management tracks and controls employee spending. Our HRMS automates the process, ensuring accuracy and faster reimbursements.
                                </h4>
                            </FadeInUp>
                            <FadeInUp delay={0.5}>
                                <div className="usrMngt-btns flex flex-col md:flex-row gap-2 cursor-pointer sm:gap-2 lg:gap-3 xl:gap-4 2xl:gap-6 2xl:mt-0 xl:mt-3">
                                    <Link to="/contact-us">
                                        <button className="bg-[#99784E] transition duration-300 hover:bg-[#B8976B] rounded-full text-white shadow-md hover:shadow-lg hover:text-black active:scale-95 px-2 py-1 2xl:px-5 2xl:py-3 2xl:text-base 2xl:font-semibold xl:px-4 xl:py-2 xl:text-base xl:font-bold lg:px-4 lg:py-2 lg:text-sm md:px-2 md:py-1 sm:px-2 sm:py-[0.15rem] sm:text-sm sm:font-medium text-[0.8rem]">
                                            Book a Demo
                                        </button>
                                    </Link>
                                    <Link to="/contact-us">
                                        <button className="bg-[#FFF8E0] border-[#99784E] text-[#99784E] transition duration-300 hover:bg-[#E8D4B5] border-2 rounded-full shadow-md hover:text-black hover:shadow-lg active:scale-95 px-2 py-1 2xl:px-5 2xl:py-3 2xl:text-base 2xl:font-semibold xl:px-4 xl:py-2 xl:text-base xl:font-bold lg:px-4 lg:py-2 lg:text-sm md:px-2 md:py-1 sm:px-2 sm:py-[0.15rem] sm:text-sm sm:font-medium text-[0.8rem]">
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
                        Our HRMS for Expense Management
                    </h1>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                    <p className="m-5 text-[0.9rem] sm:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[1.8rem] font-medium">
                        Automate Expense Reporting, Approvals, and Reimbursements with Ease.
                    </p>
                    </FadeInUp>
                </div>
                
                {/* Statistics Grid */}
                <div className="expMngt-stats-grid grid gap-y-4 w-full px-4 sm:px-10 py-4 sm:gap-y-4 lg:gap-y-4 xl:gap-y-4">
                    {/* Upper Stats */}
                    <div className="expMngt-upper-stats grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 w-full max-w-[90%] mx-auto gap-4">
                        {/* Expense Overview  */}
                        <FadeInUp delay={0.2 * 1} duration={0.7}>
                            <div className="crd1 bg-[#FEF6EC] border-2 border-[#FEEAD0] shadow-md rounded-3xl font-semibold text-xl p-6 w-full h-[300px] 2xl:h-[300px] lg:h-[330px]">
                                <h2 className="xl:mb-10 lg:mb-10 sm:mb-8 mb-8">Expense Overview</h2>
                                <div className="expDmg-crd bg-white shadow-lg rounded-2xl p-6 flex items-center justify-between w-[98%] h-[150px] mx-auto relative hover:shadow-[20px_20px_10px_#E4D3BD] transition cursor-pointer">
                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-gray-500 xl:text-sm lg:text-xs font-medium mb-5 sm:text-sm text-sm">Expense</h4>
                                        <p className="2xl:text-3xl font-bold text-black xl:text-2xl lg:text-xl text-base">550</p>
                                        <p className="text-gray-500 xl:text-sm lg:text-xs sm:text-sm mt-2 text-xs flex items-center">
                                            <span className="text-green-600 font-semibold flex items-center">
                                                <FontAwesomeIcon icon={faArrowUp} className="mr-1" /> 10%
                                            </span>
                                            &nbsp;compared last month
                                        </p>
                                    </div>
                                    <img src={expOvr} alt="active user" className="bg-[#FEF6EC] p-2 rounded-xl 2xl:w-16 xl:w-14 lg:w-12 sm:w-11 sm:p-1 lg:p-2 absolute top-3 right-3 w-14" />
                                </div>
                            </div>
                        </FadeInUp>

                        {/* Claims Request */}
                        <FadeInUp delay={0.2 * 2} duration={0.7}>
                        <div className="crd2 bg-[#FEF6EC] border-2 border-[#FEEAD0] shadow-md rounded-3xl font-semibold text-xl p-6 w-full h-[300px] 2xl:h-[300px] lg:h-[330px]">
                            <h2 className="mb-[5%]">Claims Request</h2>
                            <div className="bg-white rounded-xl shadow-md overflow-hidden sm:w-[95%] md:text-sm text-xs mx-auto border-[1px] border-slate-300 flex justify-center align-middle items-center">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-100 text-gray-500 xl:text-sm lg:text-[0.6rem] sm:text-[0.8rem]">
                                        <tr className='text-center'>
                                            <th className="px-2 py-2 border-r">Emp ID</th>
                                            <th className="px-2 py-2 border-r">Name</th>
                                            <th className="px-2 py-2 border-r">Claims</th>
                                            <th className="px-2 py-2">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700 xl:text-sm lg:text-[0.6rem] sm:text-[0.8rem] text-center">
                                        {[
                                            { id: "STK767", name: "Jane Doe", clm: "Team Out", stus: "Pending" },
                                            { id: "STK767", name: "Jane Doe", clm: "Others", stus: "Completed" },
                                            { id: "STK767", name: "Jane Doe", clm: "Travel", stus: "Pending" },
                                        ].map((row, index) => (
                                            <tr key={index} className="border-t">
                                                <td className="px-2 py-2 border-r">{row.id}</td>
                                                <td className="px-2 py-2 flex items-center gap-2 border-r justify-center">
                                                    <img src={profileImg} alt="user" className="w-5 h-5 rounded-full lg:hidden xl:block" />
                                                    {row.name}
                                                </td>
                                                <td className="px-2 py-2 border-r">{row.clm}</td>
                                                <td className="px-2 py-2">{row.stus}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </FadeInUp>

                        {/* Pending Amount */}
                        <FadeInUp delay={0.2 * 3} duration={0.7}>
                        <div className="crd3 bg-[#FEF6EC] border-2 border-[#FEEAD0] shadow-md rounded-3xl font-semibold text-xl p-6 w-full relative overflow-hidden h-[300px] 2xl:h-[300px] lg:h-[330px]">
                            <h2 className="mb-[4rem] xl:mb-[4rem]">Pending Amount</h2>

                            {/* Background Illustrations */}
                            <img src={expPen2} alt="assets available" className="sm:w-[4rem] md:w-[5rem] lg:w-[4rem] xl:w-[7rem] w-[3.5rem] absolute -top-[1rem] -right-[0.5rem]" />
                            <img src={expPen} alt="assets hand" className="sm:w-[4rem] md:w-[5rem] lg:w-[4rem] xl:w-[5.5rem] w-[3.5rem] absolute bottom-0 left-0" />

                            {/* assets available Card */}
                            <div className="usrDocs bg-white rounded-xl flex items-center p-4 gap-4 sm:w-[80%] lg:w-[90%] mx-auto relative shadow-[0_20px_0_#E4D3BD] hover:shadow-[25px_25px_5px_#E4D3BD] transition cursor-pointer overflow-hidden h-[6rem]">
                                
                                {/* User Image */}
                                <img src={usrDoc} alt="user" className="2xl:w-14 2xl:h-14 xl:w-10 xl:h-10 xl:block lg:hidden sm:block sm:w-10 sm:h-10 bg-[#F0F0F0] rounded-lg hidden" />

                                {/* User Info */}
                                <div className="flex flex-col h-[5rem] align-middle justify-center">
                                    <h4 className="text-black 2xl:text-lg xl:text-base lg:text-sm sm:text-sm font-semibold text-[1rem]">John Appleased</h4>
                                    <h6 className="text-gray-500 2xl:text-sm xl:text-xs lg:text-xs sm:text-xs text-[0.8rem]">22/09/2024</h6>
                                </div>

                                {/* Role Badge */}
                                <span className="bg-yellow-400 text-black 2xl:text-sm lg:text-xs sm:text-sm font-normal px-2 py-1 absolute top-0 right-0 text-xs">
                                    Amount
                                </span>

                                {/* Document Type */}
                                <p className="text-gray-600 2xl:text-sm lg:text-xs sm:text-xs absolute bottom-3 right-3 text-xs">2500</p>
                            </div>
                        </div>
                        </FadeInUp>
                    </div>

                    {/* Lower Stats */}
                    <div className="expMngt-lower-stats grid sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 w-full max-w-[90%] mx-auto gap-4">
                        {/* Expense Status */}
                        <FadeInUp delay={0.2 * 4} duration={0.7}>
                        <div className="crd4 bg-[#FEF6EC] border-2 border-[#FEEAD0] shadow-md rounded-3xl font-semibold text-xl p-6 sm:h-[350px] flex flex-col justify-center">
                            <h2 className="mb-8 lg:text-left">Expense Status</h2>
                            <Piechart 
                                title="Assets Status"
                                chartData={[
                                    { name: "Travel", value: 50, color: "#2EC4B6" },
                                    { name: "Reimbursement", value: 18, color: "#0E7C7B" },
                                    { name: "Others", value: 15, color: "#F46036" },
                                    { name: "Purchase", value: 9, color: "#FFD166" }
                                ]}
                            />
                        </div>
                        </FadeInUp>
                        
                        {/* Total Amount Paid */}
                        <FadeInUp delay={0.2 * 5} duration={0.7}>
                        <div className="crd5 bg-[#FEF6EC] border-2 border-[#FEEAD0] shadow-md rounded-3xl font-semibold text-xl p-6 w-full h-[300px] sm:h-[350px]">
                            <h2 className="2xl:mb-14 xl:mb-16 lg:mb-14 md:mb-14 sm:mb-14 mb-8">Total Amount Paid</h2>
                            <div className="expDmg-crd bg-white shadow-lg rounded-2xl p-6 flex items-center justify-between w-[98%] h-[150px] mx-auto relative hover:shadow-[20px_20px_10px_#E4D3BD] transition cursor-pointer border-2 border-[#E6D8C6]">
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-gray-500 xl:text-sm lg:text-xs font-medium mb-5 sm:text-sm text-sm">Total Amount Paid</h4>
                                    <p className="2xl:text-3xl font-bold text-black xl:text-2xl lg:text-xl text-base">50,0000</p>
                                    <p className="text-gray-500 xl:text-sm lg:text-xs sm:text-sm mt-2 text-xs flex items-center">
                                        <span className="text-green-600 font-semibold flex items-center">
                                            <FontAwesomeIcon icon={faArrowUp} className="mr-1" /> 10%
                                        </span>
                                        &nbsp;compared last month
                                    </p>
                                </div>
                                <img src={expMngtChrt} alt="expense management chart" className="bg-[#FEF6EC] p-2 rounded-xl 2xl:w-16 xl:w-14 lg:w-12 sm:w-11 sm:p-1 lg:p-2 absolute top-3 right-3 w-14" />
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