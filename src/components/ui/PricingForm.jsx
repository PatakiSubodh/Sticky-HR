import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import '../ui/PricingForm.css';
import FadeInUp from '@/components/FadeInUp';

export default function PricingForm() {
    const initialFormData = {
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
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});

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

    const handleChange = (e) => {
        const { name, value } = e.target;

        if ((name === 'firstName' || name === 'lastName' || name === 'companyName') && /[^a-zA-Z\s]/.test(value)) {
            setErrors(prev => ({ ...prev, [name]: 'Only letters are allowed' }));
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleCheckboxChange = (feature) => {
        setFormData((prev) => ({
            ...prev,
            selectedFeatures: prev.selectedFeatures.includes(feature)
                ? prev.selectedFeatures.filter((f) => f !== feature)
                : [...prev.selectedFeatures, feature],
        }));
    };

    const handlePhoneChange = (value) => {
        if (/[^0-9+]/.test(value)) {
            setErrors(prev => ({ ...prev, contactNumber: 'Only numbers are allowed' }));
            return;
        }
        setFormData((prev) => ({ ...prev, contactNumber: value }));
        setErrors(prev => ({ ...prev, contactNumber: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';

        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        else if (/[^a-zA-Z\s]/.test(formData.firstName)) newErrors.firstName = 'Only letters are allowed';

        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        else if (/[^a-zA-Z\s]/.test(formData.lastName)) newErrors.lastName = 'Only letters are allowed';

        if (!formData.contactNumber) newErrors.contactNumber = 'Contact Number is required';
        else if (/[^0-9+]/.test(formData.contactNumber)) newErrors.contactNumber = 'Only numbers are allowed';

        if (!formData.companyName) newErrors.companyName = 'Company Name is required';
        else if (/[^a-zA-Z\s]/.test(formData.companyName)) newErrors.companyName = 'Only letters are allowed';

        if (!formData.employees) newErrors.employees = 'Number of Employees is required';
        if (!formData.seniority) newErrors.seniority = 'Designation is required';
        if (!formData.functionalArea) newErrors.functionalArea = 'Industry is required';
        if (!formData.source) newErrors.source = 'This field is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form Submitted:", formData);
            // Add your form submission logic here (e.g., API call)
            
            // Reset form after successful submission
            setFormData(initialFormData);
            setErrors({});
        }
    };

    const isFormValid = 
        formData.email &&
        formData.firstName &&
        formData.lastName &&
        formData.contactNumber &&
        formData.companyName &&
        formData.employees &&
        formData.seniority &&
        formData.functionalArea &&
        formData.source;

    return (
        <div className="bg-[#E1EEF0] min-h-screen flex flex-col items-center justify-center py-16 px-6">
            <FadeInUp delay={0.1}>
                <h1 className="text-[1rem] font-bold text-center sm:text-[1.3rem] md:text-[1.6rem] lg:text-[1.9rem] xl:text-[2.2rem] 2xl:text-[2.5rem] md:px-[5rem] text-gray-900 lg:mb-10">
                    Choose what your business needs and get a customized set of product features.
                </h1>
            </FadeInUp>

            <div className="max-w-6xl w-full flex flex-wrap lg:flex-nowrap justify-center items-start gap-5">
                <div className="w-full lg:w-1/2 grid grid-cols-1 my-16 sm:ml-10 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6 xl:mt-5 lg:mt-[15%] items-center xl:p-20 gap-4">
                    {features.map((feature, index) => (
                        <FadeInUp key={index} delay={index * 0.1}>
                            <label className="flex items-center gap-3 xl:mb-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.selectedFeatures.includes(feature)}
                                    onChange={() => handleCheckboxChange(feature)}
                                    className="w-6 h-6 accent-[#027D74] rounded-md"
                                />
                                <span className="text-lg text-gray-700 leading-tight">{feature}</span>
                            </label>
                        </FadeInUp>
                    ))}
                </div>

                <div className="w-full lg:w-1/2 xl:ml-20">
                    <FadeInUp delay={0.2}>
                        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-semibold">Work Email*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter the work email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-md mt-1"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-1/2">
                                        <label className="text-sm font-semibold">First Name*</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="Enter the first name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full p-3 border rounded-md mt-1"
                                        />
                                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                                    </div>
                                    <div className="w-1/2">
                                        <label className="text-sm font-semibold">Last Name*</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Enter the last name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full p-3 border rounded-md mt-1"
                                        />
                                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-semibold">Contact Number</label>
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
                                    {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
                                </div>

                                <div>
                                    <label className="text-sm font-semibold">Company Name*</label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        placeholder="Enter the Company name"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-md mt-1"
                                    />
                                    {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                                </div>

                                <div>
                                    <label className="text-sm font-semibold">Number Of Employees*</label>
                                    <select
                                        name="employees"
                                        value={formData.employees}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-md mt-1"
                                    >
                                        <option value="">Select the number of employees</option>
                                        {employeeOptions.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.employees && <p className="text-red-500 text-xs mt-1">{errors.employees}</p>}
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-1/2">
                                        <label className="text-sm font-semibold">Designation*</label>
                                        <select
                                            name="seniority"
                                            value={formData.seniority}
                                            onChange={handleChange}
                                            className="w-full p-3 border rounded-md mt-1"
                                        >
                                            <option value="">Select the option</option>
                                            {seniorityOptions.map((option, index) => (
                                                <option key={index} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.seniority && <p className="text-red-500 text-xs mt-1">{errors.seniority}</p>}
                                    </div>
                                    <div className="w-1/2">
                                        <label className="text-sm font-semibold">Industry*</label>
                                        <select
                                            name="functionalArea"
                                            value={formData.functionalArea}
                                            onChange={handleChange}
                                            className="w-full p-3 border rounded-md mt-1"
                                        >
                                            <option value="">Select the option</option>
                                            {functionalOptions.map((option, index) => (
                                                <option key={index} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.functionalArea && <p className="text-red-500 text-xs mt-1">{errors.functionalArea}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-semibold">How did you know about us</label>
                                    <select
                                        name="source"
                                        value={formData.source}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-md mt-1"
                                    >
                                        <option value="">Select the options</option>
                                        {knowUsOptions.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.source && <p className="text-red-500 text-xs mt-1">{errors.source}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={!isFormValid}
                                    className={`w-full mt-4 p-3 text-white font-semibold bg-[#027D74] rounded-md transition active:scale-95 ${
                                        !isFormValid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#02665F]'
                                    }`}
                                >
                                    REQUEST FOR DEMO
                                </button>
                            </div>
                        </form>
                    </FadeInUp>
                </div>
            </div>
        </div>
    );
}