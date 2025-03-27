import React from "react";
import card1 from "../assets/images/Blog-img/card1.png"
import star from "../assets/images/Blog-img/star.png"
import shadow from "../assets/images/Blog-img/shadow.png"
import mcard from "../assets/images/Blog-img/mcard.png"

import FadeInUp from '@/components/FadeInUp'

import { Link } from 'react-router-dom';

export default function Blog(){
    return(
        <>
            {/* Top-Card */}
            <div className="virSer-component pl-8 pr-8">
                <div className="bg-[#eabde6] rounded-3xl lg:h-[600px] h-full 2xl:m-10 xl:m-9 lg:m-8 2xl:pl-16 xl:pl-8 grid grid-cols-2 relative transition-all">
                    <div className="2xl:m-8 xl:m-8 lg:m-8 md:m-6 sm:m-6 m-6">
                        <FadeInUp delay={0.1}>
                        <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold text-[#4b164c] 2xl:pt-8 xl:pt-5 2xl:leading-normal md:leading-tight relative 2xl:w-[40rem] xl:w-[38rem] lg:w-[30rem] md:w-[20rem] sm:w-[16rem] w-[175%]">EmpowerYour Workforce with the Latest HR Insights</h1>
                        </FadeInUp>
                        <FadeInUp delay={0.2}>
                        <p className="xl:text-xl lg:text-lg sm:text-md text-sm font-normal text-[#4b164c] pt-5 2xl:leading-loose xl:leading-relaxed md:leading-normal leading-tight text-left">Stay ahead withexpert tips, industry trends, and HR technology updates</p>
                        </FadeInUp>
                        <FadeInUp delay={0.3}>
                        <Link to="/contact-us">
                        <button className="xl:text-2xl lg:text-xl md:text-lg sm:text-md text-xs text-[#fff] font-normal bg-[#4b164c] rounded-full xl:w-56 lg:w-48 md:w-40 sm:w-32 w-28 xl:h-14 lg:h-14 md:h-12 sm:h-10 h-8 2xl:mt-8 xl:mt-5 lg:mt-4 md:mt-3 sm:mt-3 mt-3 mb-2 hover:bg-[#722174] active:scale-95">Explore Articles</button>
                        </Link>
                        </FadeInUp>
                    </div>
                    <div className="relative ">
                        <div className="absolute 2xl:bottom-12 xl:bottom-10 lg:bottom-24 md:bottom-10 sm:bottom-10 bottom-40 lg:right-10 right-0">
                        <FadeInUp delay={0.4}>
                        <img src={card1} alt="Card1-Img" className="2xl:w-full xl:w-[100%] lg:w-[95%] md:w-[70%] sm:w-[70%] w-[100%]"/>
                        </FadeInUp>
                        </div>
                        <img src={shadow} alt="Shadow-Img" className="absolute 2xl:bottom-12 xl:bottom-10 lg:bottom-24 md:bottom-10 sm:bottom-10 bottom-40 xl:right-40 lg:right-32 md:right-44 sm:right-32 lg:w-[65%] md:w-[50%] sm:w-[50%]"/>
                        <img src={star} alt="Star-Img" className="absolute lg:top-[4.2rem] top-[3rem]  lg:scale-50 lg:h-auto h-[28px] lg:right-32 xl:right-40 right-40 sm:block hidden"/>
                        <img src={star} alt="Star-Img" className="absolute xl:top-[18rem] lg:top-[25rem] top-[13rem] h-[20px] lg:right-[38rem] right-[30rem] sm:block hidden"/>
                        <img src={star} alt="Star-Img" className="absolute lg:top-[13rem]  top-[7rem] h-[20px] lg:right-20 xl:right-32 right-28 sm:block hidden"/>
                    </div>
                </div>
            </div>

            {/* trending crd */}
            <div className="trending">
                {/* Text */}
                <FadeInUp delay={0.1} className="">
                <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-semibold m-14">Trending Now</h1>
                </FadeInUp>
                {/* Middle-Card */}
                <div className="pl-8 pr-8 ">
                    <FadeInUp delay={0.1}>
                    <div className="h-fit bg-[#f8e7f6] sm:grid sm:grid-cols-2 flex flex-col rounded-3xl lg:m-10 hover:border-[#eabde6] border-2">
                        <div className="m-10 z-30">
                            <FadeInUp delay={0.2}>
                            <h1 className="font-semibold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:w-[45rem] md:w-[30rem]">The Future of HR: <b className="text-[#4b164c]
                            hover:text-[#722174] cursor-pointer">AI-Powered</b> Hiring & Payroll</h1>
                            </FadeInUp>
                            <FadeInUp delay={0.3}>
                            <p className="xl:text-xl lg:text-lg sm:text-md text-sm font-medium text-[#4b164c] pt-5 leading-loose text-left">AI is transforming HR by automating hiring, payroll, and compliance, making processes faster and more accurate. From AI-driven resume screening to smart payroll management, businesses can now streamline operations and enhance workforce efficiency.</p>
                            </FadeInUp>
                        </div>
                        <div className="rounded-3xl z-10">
                            <img src={mcard} alt="AI-Img" className="h-[100%] sm:rounded-3xl rounded-b-3xl"/>
                        </div>
                    </div>
                    </FadeInUp>
                </div>
            </div>

            {/* Bottom-grids */}
            <div className="sm:grid sm:grid-cols-3 flex flex-col gap-y-5 h-full gap-x-8 p-8 lg:m-10 sm:mt-10 ">
                {[
                    {
                    title: "5 Employee Engagement Strategies That Actually Work",
                    content:
                        "Boost employee engagement with proven strategies like recognition programs, open communication, and career growth opportunities. Creating a positive work culture and fostering team collaboration leads to higher productivity and job satisfaction.",
                    },
                    {
                    title: "Why Remote Work is Reshaping HR Policies in 2025",
                    content:
                        "Remote work is driving HR to adopt flexible policies, focusing on virtual hiring, digital collaboration, and performance tracking. In 2025, companies are redefining workplace culture to enhance productivity, engagement, and work-life balance.",
                    },
                    {
                    title: "How to Automate Payroll & Compliance with HRMS",
                    content:
                        "Automating payroll and compliance with HRMS ensures accurate salary processing, tax deductions, and legal adherence. With AI-driven tools, businesses can reduce errors, save time, and stay compliant effortlessly.",
                    },
                ].map((item, index) => (
                    <FadeInUp key={index} delay={0.2 * index} duration={0.7}>
                    <div className="text-left rounded-2xl bg-[#fff3fe] border-[#eabde6] border-2 hover:scale-105 transition w-full h-full flex flex-col">
                        <h1 className="pt-3 lg:text-2xl sm:text-xl text-sm m-5 font-semibold leading-normal">{item.title}</h1>
                        <p className="m-5 lg:text-xl sm:text-lg text-xs text-[#393939] overflow-auto">{item.content}</p>
                    </div>
                    </FadeInUp>
                ))}
            </div>

        </>
    );
}