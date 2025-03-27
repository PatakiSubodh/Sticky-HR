import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import steps from "../assets/images/services-img/VHR/steps.png"
import hiw from "../assets/images/services-img/VHR/hiw.png"

import girl from "../assets/images/OurStory/girl.png"

import prcImg1 from '../assets/images/implementation-img/prcImg1.png';
import prcImg2 from '../assets/images/implementation-img/prcImg2.png';
import prcImg3 from '../assets/images/implementation-img/prcImg3.png';
import prcImg4 from '../assets/images/implementation-img/prcImg4.png';

import FadeInUp from '@/components/FadeInUp'

export default function Implementation() {
    const [phone, setPhone] = useState("");

    const processes = [
        {
            title: "Fast & Efficient Setup",
            icon: prcImg1,
        },
        {
            title: "Seamless Data Migration",
            icon: prcImg2,
        },
        {
            title: "Custom Configurations",
            icon: prcImg3,
        },
        {
            title: "24/7 Dedicated Support",
            icon: prcImg4,
        },
    ];

    return (
        <div className="contactus-component">
            {/* contact us card */}
            <div className='pl-8 pr-8'>
                <div className="contactus-card m-10 h-[700px] bg-[#3B9B9F] rounded-3xl overflow-hidden relative pl-16 flex gap-2 z-0">
                    {/* card: left */}
                    <div className="contactus-crd-left">
                        {/* content */}
                        <div className="contactus-card-content space-y-4 flex flex-col justify-start w-[40rem] ml-10 mt-24">
                            {/* Heading */}
                            <FadeInUp delay={0.1}>
                            <h3 className="text-[2.5rem] font-semibold text-white leading-none">
                            Seamless HRMS <span className="text-[#FFC600]">Implementation</span> –<br /> Get Started Effortlessly
                            </h3>
                            </FadeInUp>

                            {/* Subheading */}
                            <FadeInUp delay={0.2}>
                            <h4 className="text-lg font-medium text-white">
                            Transition smoothly with our structured onboarding process, expert guidance, and dedicated support.
                            </h4>
                            </FadeInUp>
                        </div>
                        
                        {/* image */}
                        <div className="contactus-card-img absolute -bottom-1 left-[6rem]">
                            <FadeInUp delay={0.3}>
                            <img
                                src={girl}
                                alt="contactus card image"
                                className="w-[620px] aspect-[1.457]"
                            />
                            </FadeInUp>
                        </div>
                    </div>

                    {/* card: right */}
                    <div className="contactus-crd-right w-full flex justify-center items-center">
                        <FadeInUp delay={0.4}>
                        <form className="bg-white w-[90%] max-w-[500px] rounded-2xl p-6 shadow-lg space-y-4">
                            {/* Heading */}
                            <h2 className="text-2xl font-bold text-center text-[#086165]">Contact Us</h2>

                            {/* First Name & Last Name */}
                            <div className="flex gap-3">
                            <div className="w-1/2">
                                <label className="block text-sm font-medium mb-1">First Name*</label>
                                <input
                                type="text"
                                placeholder="Enter the first name"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-sm font-medium mb-1">Last Name*</label>
                                <input
                                type="text"
                                placeholder="Enter the last name"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
                                />
                            </div>
                            </div>

                            {/* Contact Number */}
                            <div>
                            <label className="block text-sm font-medium mb-1">Contact Number</label>
                            <PhoneInput
                                country={"in"}
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                                enableSearch
                                placeholder="+91"
                                inputStyle={{
                                width: "100%",
                                height: "40px",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                }}
                            />
                            </div>

                            {/* Work Email */}
                            <div>
                            <label className="block text-sm font-medium mb-1">Work Email*</label>
                            <input
                                type="email"
                                placeholder="Enter the work email"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
                            />
                            </div>

                            {/* Additional Information */}
                            <div>
                            <label className="block text-sm font-medium mb-1">Additional Information</label>
                            <textarea
                                placeholder="Additional information"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
                                rows="4"
                            ></textarea>
                            </div>

                            {/* Button */}
                            <button
                            type="submit"
                            className="w-full bg-[#FFC727] text-black font-semibold py-2 rounded-lg hover:bg-[#e6b31f] active:scale-95 transition"
                            >
                            Schedule a Demo
                            </button>
                        </form>
                        </FadeInUp>
                    </div>
                </div>
            </div>
            
            {/* why choose us */}
            <div className="mx-16 my-16 py-12 md:mx-20">
                <FadeInUp delay={0.1}>
                <h2 className="text-4xl font-semibold text-center text-[#086165] mb-10">
                    Why Choose Our Implementation Process
                </h2>
                </FadeInUp>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {processes.map((process, index) => (
                    <FadeInUp delay={0.2 * index} duration={0.7}>
                    <div
                        key={index}
                        className="flex flex-col justify-center items-center p-6 bg-white rounded-xl border-2 border-[#3b9b9f] shadow-[4px_4px_0_#3b9b9f] transition min-h-[250px] hover:scale-105 cursor-pointer" // Added min-h-[250px] here
                    >
                        <img
                        src={process.icon}
                        alt={process.title}
                        className="h-20 w-20 object-contain mb-6"
                        />
                        <p className="text-center text-gray-700 font-medium text-lg">
                        {process.title}
                        </p>
                    </div>
                    </FadeInUp>
                    ))}
                </div>
            </div>

            {/* how to do it */}
            <div className="bg-[#deeeef] h-full mt-20 mb-10">
                <div className="text-center ">
                    <FadeInUp delay={0.1}>
                    <h1 className="text-5xl font-semibold pt-10">How it work</h1>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                    <p className="text-xl font-normal mt-5">Comprehensive Solutions for Efficient Workforce Management</p>
                    </FadeInUp>
                </div>
                <div className="grid grid-cols-2 ml-20 mr-20 pt-10 pb-10">
                    <FadeInUp delay={0.3}>
                    <img src={steps} alt="steps-img" className="w-[85%] "/>
                    </FadeInUp>
                    <FadeInUp delay={0.4}>
                    <img src={hiw} alt="hiw-img" className="w-[85%] m-auto"/>
                    </FadeInUp>
                </div>
            </div>
        </div>
    );
}