import testimonialImg1 from "../assets/images/testimonials-img/testimonialImg1.png";
import testimonialImg4 from "../assets/images/testimonials-img/testimonialImg4.png";
import testimonialImg3 from "../assets/images/testimonials-img/testimonialImg3.png";
import pricingCardImg from '../assets/images/pricing-img/pricing-img.png';
import FadeInUp from "../components/FadeInUp";

import { Link } from 'react-router-dom'

export default function Customers() {
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
                            Customers
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

            <div className="customer-grid-content my-10 sm:my-14 lg:my-20">
                {/* Heading and Subtitle */}
                <div className="customer-grid-text">
                    <FadeInUp delay={0.1}>
                        <h1 className="text-center font-semibold text-3xl sm:text-4xl lg:text-5xl text-gray-900">
                            Customer Stories
                        </h1>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                        <p className="text-center mx-4 sm:mx-6 lg:mx-8 mt-4 sm:mt-5 font-normal text-base sm:text-lg lg:text-xl">
                            Simplify Payroll Processing with Compliance & Precision.
                        </p>
                    </FadeInUp>
                </div>

                {/* Grid Layout */}
                <div className="customer-grid grid grid-rows-3 gap-6 sm:gap-8 w-full my-14">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-8">
                        {/* Row 1, Col 1 (Image) */}
                        <div className="flex justify-center items-center">
                            <FadeInUp delay={0.1}>
                                <img
                                    src={testimonialImg1}
                                    alt="Lady-1"
                                    className="2xl:w-[700px] xl:w-[650px] lg:w-[600px] md:w-[500px] sm:w-[450px] w-[300px] object-contain"
                                />
                            </FadeInUp>
                        </div>

                        {/* Row 1, Col 2 (Text) */}
                        <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                            <FadeInUp delay={0.2}>
                                <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-5xl">
                                    Aayushi Jani
                                </h1>
                            </FadeInUp>
                            <FadeInUp delay={0.3}>
                                <p className="font-normal text-gray-500 text-sm sm:text-lg lg:text-2xl text-center mt-4 sm:mt-6 lg:mt-10">
                                    I always wanted something that works. Not only is StickyHR visually appealing and simple to use, but the addition of AI actually solves most of my everyday tasks.
                                    <br />
                                    Our organization has tried a bunch of platforms earlier. We often felt they were not user-friendly and time-consuming. This is where StickyHR stood out.
                                </p>
                            </FadeInUp>
                        </div>
                    </div>

                    {/* Row 2 with Background */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-8 bg-[#DEEEEF] w-full h-full p-4 sm:p-6 lg:p-8">
                        {/* Row 2, Col 1 (Text) */}
                        <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                            <FadeInUp delay={0.1}>
                                <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-5xl">
                                    Nivetha Thomas
                                </h1>
                            </FadeInUp>
                            <FadeInUp delay={0.2}>
                                <p className="font-normal text-gray-500 text-sm sm:text-lg lg:text-2xl text-center mt-4 sm:mt-6 lg:mt-10">
                                    Zero learning curve… <br />
                                    Most interactive software <br />
                                    Headache of managing candidates… solved <br />
                                    Timely, Responsive support
                                </p>
                            </FadeInUp>
                        </div>

                        {/* Row 2, Col 2 (Image) */}
                        <div className="flex justify-center items-center">
                            <FadeInUp delay={0.3}>
                                <img
                                    src={testimonialImg4}
                                    alt="Lady-2"
                                    className="2xl:w-[700px] xl:w-[650px] lg:w-[600px] md:w-[500px] sm:w-[450px] w-[300px] object-contain"
                                />
                            </FadeInUp>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-8">
                        {/* Row 3, Col 1 (Image) */}
                        <div className="flex justify-center items-center">
                            <FadeInUp delay={0.1}>
                                <img
                                    src={testimonialImg3}
                                    alt="Lady-3"
                                    className="2xl:w-[700px] xl:w-[650px] lg:w-[600px] md:w-[500px] sm:w-[450px] w-[300px] object-contain"
                                />
                            </FadeInUp>
                        </div>

                        {/* Row 3, Col 2 (Text) */}
                        <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                            <FadeInUp delay={0.2}>
                                <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-5xl">
                                    Aayushi Jani
                                </h1>
                            </FadeInUp>
                            <FadeInUp delay={0.3}>
                                <p className="font-normal text-gray-500 text-sm sm:text-lg lg:text-2xl text-center mt-4 sm:mt-6 lg:mt-10">
                                    I always wanted something that works. Not only is StickyHR visually appealing and simple to use, but the addition of AI actually solves most of my everyday tasks.
                                    <br />
                                    Our organization has tried a bunch of platforms earlier. We often felt they were not user-friendly and time-consuming. This is where StickyHR stood out.
                                </p>
                            </FadeInUp>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}