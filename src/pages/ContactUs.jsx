import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import contactCardImg from '../assets/images/contactus-img/cont-crd-img.png'
import cir from '../assets/images/contactus-img/cont-cir.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ServicesImplementationCard from "../pages/services/ServicesImplementationCard";

import FadeInUp from '@/components/FadeInUp'

export default function ContactUs() {
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        contactNumber: "",
        companyName: "",
        employees: "",
        seniority: "",
        functionalArea: "",
        source: "",
        selectedFeatures: [],
    });

    const features = [
        "Virtual HR Management",
        "Core HR",
        "Talent Acquisition",
        "Performance Management",
        "Time & Attendance Management",
        "Talent Management",
        "Payroll",
        "Employee Helpdesk",
        "Expense Management",
        "Assets Management",
    ];

    const employeeOptions = [
        "0 - 200",
        "201 - 500",
        "501 - 1000",
        "1001 - 2500",
        "2501 - 5000",
        "5001 - 10000",
        "10001+",
    ];

    const seniorityOptions = [
        "Director",
        "Head",
        "Owner",
        "Manager",
        "Senior",
        "Partner",
        "Entry",
    ];

    const functionalOptions = [
        "CEO",
        "HR",
        "IT",
        "Finance",
        "Academia",
        "Procurement",
        "Other",
    ];

    const knowUsOptions = [
        "LinkedIn Ad",
        "Facebook",
        "Email",
        "Referral",
        "Friend",
        "Event or Webinar",
        "Found an Ad on Google",
        "YouTube",
        "Others",
    ];

    const handleCheckboxChange = (feature) => {
        setFormData((prev) => ({
            ...prev,
            selectedFeatures: prev.selectedFeatures.includes(feature)
                ? prev.selectedFeatures.filter((f) => f !== feature)
                : [...prev.selectedFeatures, feature],
        }));
    };

    const handlePhoneChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            contactNumber: value,
        }));
    };

    const handleSubmit = () => {
        const missingFields = [];
    
        if (!formData.email) missingFields.push("Work Email");
        if (!formData.firstName) missingFields.push("First Name");
        if (!formData.lastName) missingFields.push("Last Name");
        if (!formData.companyName) missingFields.push("Company Name");
        if (!formData.employees) missingFields.push("Number of Employees");
        if (!formData.seniority) missingFields.push("Seniority");
        if (!formData.functionalArea) missingFields.push("Functional Area");
    
        if (missingFields.length > 0) {
            setError(`Please fill in the following fields:\n• ${missingFields.join("\n• ")}`);
        } else {
            setError(""); // No errors, proceed with submission
            console.log("Form Submitted:", formData);
        }
    };

    return (
        <div className="contactus-component">
            <div className='md:px-6 sm:px-4'>
                
                <div className="contactus-card sm:py-10 sm:px-8 md:p-8 md:mx-8 md:my-10 lg:m-12 sm:m-4 py-4 px-6 m-4 bg-[#DEEEEF] rounded-xl sm:rounded-3xl overflow-hidden relative z-0 flex lg:flex-row flex-col justify-center align-middle gap-5 ">
                    {/* contact us left: polygons */}
                    <div className="contactus-card-polygons gap-0 hidden lg:block">
                        <div className="absolute xl:-bottom-1 2xl:-left-[1rem] xl:left-[2rem] lg:left-[1rem] lg:bottom-0 ">
                            <FadeInUp delay={0.4}>
                            <img
                                src={contactCardImg}
                                alt="contactus card image"
                                className="2xl:w-[33rem] xl:w-[29rem] lg:w-[23rem] aspect-[1.457]"
                            />
                            </FadeInUp>
                        </div>

                        <img src={cir} alt="contact us circle1" className="xl:w-[3rem] lg:w-[2.5rem] absolute 2xl:bottom-[15rem] 2xl:left-[28rem] xl:bottom-[17rem] xl:left-[20rem] lg:left-[15rem] lg:bottom-[15rem] " />
                        <img src={cir} alt="contact us circle2" className="xl:w-[1rem] lg:w-[0.8rem] absolute 2xl:bottom-[22rem] 2xl:left-[35rem] xl:bottom-[23rem] xl:left-[27rem] lg:left-[20rem] lg:bottom-[20rem] " />

                        <div className="circles absolute 2xl:-bottom-[20rem] 2xl:-left-[7rem] xl:-bottom-[17rem] xl:-left-[5rem] lg:-bottom-[18rem] lg:-left-[7rem] flex justify-center items-center -z-10">
                            <FadeInUp delay={0.5}>
                            <div className="cirOtr 2xl:w-[35rem] 2xl:h-[35rem] xl:w-[32rem] xl:h-[32rem] lg:w-[30rem] lg:h-[30rem] bg-[#086165] rounded-full flex justify-center items-center -z-30"></div>
                            </FadeInUp>
                        </div>
                    </div>

                    {/* contact us left: description */}
                    <div className="contactus-card-content lg:w-2/5 lg:space-y-3 space-y-4 flex flex-col 2xl:ml-6 2xl:mt-[5rem] xl:mt-[6rem] lg:mt-[12%] relative z-10">
                            {/* Pricing Badge */}
                            <FadeInUp delay={0.1}>
                            <span className="2xl:text-[1.7rem] xl:text-[1.3rem] lg:text-[1.2rem] md:text-[1.1rem] sm:text-[1rem] font-medium rounded-3xl text-[#34898D] w-fit">
                                Do you have questions?
                            </span>
                            </FadeInUp>

                            {/* Heading */}
                            <FadeInUp delay={0.2}>
                            <h3 className="2xl:text-[3.1rem] xl:text-[2.9rem] lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] lg:leading-normal font-semibold text-[#086165] leading-none">
                                Get In Touch With Us
                            </h3>

                            </FadeInUp>
                            {/* Subheading */}
                            <FadeInUp delay={0.3}>
                            <h4 className="2xl:text-[1.4rem] xl:text-[1rem] lg:text-[0.9rem] md:text-[1rem] sm:text-[0.9rem] font-medium text-[#595858]">
                                Fill out this form and let us know how we can help. We’re here to assist you with anything.
                            </h4>
                            </FadeInUp>
                    </div>

                    {/* contact us right: form */}
                    <div className="contactus-crd-right lg:w-3/5">
                        <FadeInUp delay={0.3}>
                        <div className="bg-white p-4 sm:p-8 h-[90%] rounded-lg shadow-md">
                            <div className="space-y-4">
                                <h3 className="text-[0.8rem] sm:text-[1rem] lg:text-[1.2rem] font-medium">Choose what your business needs and get a customized set of product features.</h3>

                                {/* First & Last Name */}
                                <div className="flex gap-4">
                                <div className="w-1/2">
                                    <label className="text-[0.8rem] sm:text-[1rem] font-semibold">First Name*</label>
                                    <input type="text" placeholder="Enter the first name" className="w-full p-2 text-xs sm:p-3 sm:text-[1rem] border rounded-md mt-1" />
                                </div>
                                <div className="w-1/2">
                                    <label className="text-[0.8rem] sm:text-[1rem] font-semibold">Last Name*</label>
                                    <input type="text" placeholder="Enter the last name" className="w-full p-2 text-xs sm:p-3 sm:text-[1rem] border rounded-md mt-1" />
                                </div>
                                </div>

                                {/* Contact Number */}
                                <div className="w-full">
                                <label className="text-[0.8rem] sm:text-[1rem] font-semibold">Contact Number</label>
                                <div className="w-full">
                                    <PhoneInput
                                    country={"in"}
                                    value={formData.contactNumber}
                                    onChange={handlePhoneChange}
                                    inputClass="!w-full !h-[35px] sm:!h-[48px] md:!h-[53px] !pl-[50px] sm:!pl-[58px] !p-2 sm:!p-3 !border !rounded-md !mt-1"
                                    containerClass="w-full !h-[35px] sm:!h-[48px] md:!h-[53px]"
                                    buttonClass="!h-[35px] sm:!h-[48px] md:!h-[53px] !border-r !rounded-l-md"
                                    dropdownClass="!bg-white !border !shadow-md"
                                    enableSearch
                                    placeholder="+91"
                                    />
                                </div>
                                </div>

                                {/* Work Email */}
                                <div>
                                <label className="text-[0.8rem] sm:text-[1rem] font-semibold">Work Email*</label>
                                <input type="email" placeholder="Enter the work email" className="w-full p-2 text-xs sm:p-3 sm:text-[1rem] border rounded-md mt-1" />
                                </div>

                                {/* Company Name */}
                                <div>
                                <label className="text-[0.8rem] sm:text-[1rem] font-semibold">Company Name*</label>
                                <input type="text" placeholder="Enter the Company name" className="w-full p-2 text-xs sm:p-3 sm:text-[1rem] border rounded-md mt-1" />
                                </div>

                                {/* Number of Employees */}
                                <div>
                                <label className="text-[0.8rem] sm:text-[1rem] font-semibold">Number Of Employees*</label>
                                <select className="w-full p-2 text-xs sm:p-3 sm:text-[1rem] border rounded-md mt-1">
                                    <option>Select the number of employees</option>
                                    {employeeOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </select>
                                </div>

                                {/* How did you hear about us */}
                                <div>
                                <label className="text-[0.8rem] sm:text-[1rem] font-semibold">How did you know about us</label>
                                <select className="w-full p-2 text-xs sm:p-3 sm:text-[1rem] border rounded-md mt-1">
                                    <option>Select the options</option>
                                    {knowUsOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </select>
                                </div>

                                {/* Submit Button */}
                                <button
                                onClick={handleSubmit}
                                className="w-full mt-4 p-2 text-[0.8rem] sm:text-base sm:p-3 text-white font-semibold bg-[#027D74] rounded-md hover:bg-[#02665F] active:scale-95 transition"
                                >
                                REQUEST FOR DEMO
                                </button>
                            </div>
                        </div>
                        </FadeInUp>
                    </div>
                </div>

            </div>
            
            <div className="md:mx-16 md:my-16 sm:mx-8 sm:my-12 my-10 ">
                <div className="cmpy-loc flex flex-col justify-center items-center space-y-12 px-4 md:px-0">
                    {/* Heading */}
                    <FadeInUp delay={0.1}>
                    <h2 className="xl:text-[2.5rem] lg:text-3xl md:text-2xl sm:text-2xl text-lg font-bold text-[#065e63] text-center">Our Company Location</h2>
                    </FadeInUp>

                    {/* Card */}
                    <div className="loc-crd bg-[#DEEEEF] w-full p-8 xl:p-12 rounded-2xl hover:shadow-lg transition border border-[#086165] flex flex-col lg:flex-row gap-6 xl:gap-8">
                        
                        {/* Left side - Company Text */}
                        <div className="cmpy-text md:basis-2/5 flex flex-col justify-between space-y-8">
                        
                            {/* Contact Section */}
                            <div className="space-y-4">
                                <FadeInUp delay={0.2}>
                                <h3 className="2xl:text-[2rem] sm:text-base text-[0.9rem] font-semibold text-black">Contact Us</h3>
                                </FadeInUp>

                                <div className="contact space-y-4">
                                {/* Phone */}
                                <FadeInUp delay={0.3}>
                                <div className="flex flex-col">
                                    <p className="2xl:text-[1.6rem] font-medium text-gray-700">Phone number:</p>
                                    <a href="tel:+919033244538" className="2xl:text-[1.3rem] text-[#065e63] font-semibold hover:underline">
                                    +91 90332 44538
                                    </a>
                                </div>
                                </FadeInUp>

                                {/* Email */}
                                <FadeInUp delay={0.4}>
                                <div className="flex flex-col">
                                    <p className="2xl:text-[1.6rem] font-medium text-gray-700">Email:</p>
                                    <a
                                    href="mailto:shakti@stickyhr.com"
                                    className="2xl:text-[1.3rem] text-[#065e63] font-semibold hover:underline break-words"
                                    >
                                    shakti@stickyhr.com
                                    </a>
                                </div>
                                </FadeInUp>
                                </div>
                            </div>

                            {/* Address Section */}
                            <FadeInUp delay={0.5}>
                            <div className="space-y-4">
                                <p className="2xl:text-[1.6rem] leading-relaxed text-gray-800">
                                Garuda Bhive Workspace, Kuvempu Bus Station, BTM Layout, Bengaluru, Karnataka-560068
                                </p>

                                {/* Clickable map link */}
                                <a
                                href="https://maps.google.com/?q=Garuda+Bhive+workspace,+Kuvempu+Bus+Station,+BTM+Layout,+Bengaluru,+Karnataka-560068"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="2xl:text-[1.3rem] text-[#065e63] hover:underline"
                                >
                                View on Google Maps
                                </a>
                            </div>
                            </FadeInUp>

                            {/* Divider */}
                            <FadeInUp delay={0.6}>
                            <div className="border-t border-[#086165] pt-4">
                                <h4 className="2xl:text-[1.6rem] font-semibold text-[#065e63] flex items-center gap-2">
                                <FontAwesomeIcon icon={faLocationDot} className="2xl:text-[1.6rem]" />
                                India
                                </h4>
                                <p className="2xl:text-[1.3rem] font-medium text-black">Stickyhr Solution Pvt. Ltd</p>
                            </div>
                            </FadeInUp>
                        </div>

                        {/* Right side - Google Map */}
                        <div className="cmpy-maps md:basis-3/5 w-full h-60 md:h-[380px]">
                            <FadeInUp delay={0.6}>
                                <div className="w-full h-full"> {/* This is key for both width and height */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8711748616297!2d77.6133328750755!3d12.916000387394257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae153359368a11%3A0x9e90b641d18c84ae!2sGaruda%20BHIVE%20Workspace%20BTM%20Layout%20Campus!5e0!3m2!1sen!2sin!4v1741520009426!5m2!1sen!2sin"
                                    className="border-0 rounded-xl shadow-md w-full h-60 md:h-[400px] 2xl:h-[520px]"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                                </div>
                            </FadeInUp>
                        </div>


                    </div>
                </div>
            </div>
            
            <ServicesImplementationCard />
        </div>
    );
}