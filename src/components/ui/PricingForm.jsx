import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import '../ui/PricingForm.css'

import FadeInUp from '@/components/FadeInUp'

export default function PricingForm() {
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

    const [error, setError] = useState("");

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
        <div className="bg-[#E1EEF0] min-h-screen flex flex-col items-center justify-center py-16 px-6">
            {/* Heading */}
            <FadeInUp delay={0.1}>
            <h1 className="text-[1rem] font-bold text-center sm:text-[1.3rem] md:text-[1.6rem] lg:text-[1.9rem] xl:text-[2.2rem] 2xl:text-[2.5rem] md:px-[5rem] text-gray-900 lg:mb-10 ">
            Choose what your business needs and get
                a customized set of product features.
            </h1>
            </FadeInUp>

            {/* Layout Container */}
            <div className="max-w-6xl w-full flex flex-wrap lg:flex-nowrap justify-center items-start gap-5">

                {/* Left: Features List */}
                <div className="w-full lg:w-1/2 grid grid-cols-1 my-16 sm:ml-10 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6 xl:mt-5 lg:mt-[15%] items-center xl:p-20 gap-4"> 
                    {features.map((feature, index) => (
                        <FadeInUp key={index} delay={index * 0.1}>
                            <label className="flex items-center gap-3 xl:mb-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.selectedFeatures.includes(feature)}
                                    onChange={() => handleCheckboxChange(feature)}
                                    className="w-6 h-6 accent-[#027D74] rounded-md" // ✅ Removed `mt-1`
                                />
                                <span className="text-lg text-gray-700 leading-tight">{feature}</span>
                            </label>
                        </FadeInUp>
                    ))}
                </div>


                {/* Right: Form */}
                <div className="w-full lg:w-1/2 xl:ml-20">
                    <FadeInUp delay={0.2}>
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg">
                        <div className="space-y-4">
                            {/* Work Email */}
                            <div>
                                <label className="text-sm font-semibold">Work Email*</label>
                                <input
                                    type="email"
                                    placeholder="Enter the work email"
                                    className="w-full p-3 border rounded-md mt-1"
                                />
                            </div>

                            {/* First & Last Name */}
                            <div className="flex gap-4">
                                <div className="w-1/2">
                                    <label className="text-sm font-semibold">First Name*</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the first name"
                                        className="w-full p-3 border rounded-md mt-1"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="text-sm font-semibold">Last Name*</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the last name"
                                        className="w-full p-3 border rounded-md mt-1"
                                    />
                                </div>
                            </div>

                            {/* Contact Number */}
                            <div className="w-full">
                                <label className="text-sm font-semibold">Contact Number</label>
                                <div className="w-full">
                                    <PhoneInput
                                        country={"in"}
                                        value={formData.contactNumber}
                                        onChange={handlePhoneChange}
                                        inputClass="!w-full !h-[48px] !pl-[58px] !p-3 !border !rounded-md !mt-1"
                                        containerClass="w-full !h-[48px]"
                                        buttonClass="!h-[48px] !border-r !rounded-l-md"
                                        dropdownClass="!bg-white !border !shadow-md"
                                        enableSearch
                                        placeholder="+91"
                                    />
                                </div>
                            </div>

                            {/* Company Name */}
                            <div>
                                <label className="text-sm font-semibold">Company Name*</label>
                                <input
                                    type="text"
                                    placeholder="Enter the Company name"
                                    className="w-full p-3 border rounded-md mt-1"
                                />
                            </div>

                            {/* Number of Employees */}
                            <div>
                                <label className="text-sm font-semibold">Number Of Employees*</label>
                                <select className="w-full p-3 border rounded-md mt-1">
                                    <option>Select the number of employees</option>
                                    {employeeOptions.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Select Fields */}
                            <div className="flex gap-4">
                                <div className="w-1/2">
                                    <label className="text-sm font-semibold">Designation*</label>
                                    <select className="w-full p-3 border rounded-md mt-1">
                                        <option className="hover:bg-[#027D74] hover:text-white">Select the option</option>
                                        {seniorityOptions.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="w-1/2">
                                    <label className="text-sm font-semibold">Industry*</label>
                                    <select className="w-full p-3 border rounded-md mt-1">
                                        <option>Select the option</option>
                                        {functionalOptions.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* How did you hear about us */}
                            <div>
                                <label className="text-sm font-semibold">How did you know about us</label>
                                <select className="w-full p-3 border rounded-md mt-1">
                                    <option>Select the options</option>
                                    {knowUsOptions.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Submit Button */}
                            <button onClick={handleSubmit} className="w-full mt-4 p-3 text-white font-semibold bg-[#027D74] rounded-md hover:bg-[#02665F] active:scale-95 transition">
                                REQUEST FOR DEMO
                            </button>
                        </div>
                    </div>
                    </FadeInUp>
                    </div>

            </div>

            {/* 📌 Error Message Popup */}
            {error && (
                <div className="popup-overlay">
                    <div className="popup">
                        <p className="error-message" style={{ whiteSpace: "pre-line" }}>{error}</p>
                        <button onClick={() => setError("")} className="active:scale-95 transition">Close</button>
                    </div>
                </div>
            )}

        </div>
    );
}
