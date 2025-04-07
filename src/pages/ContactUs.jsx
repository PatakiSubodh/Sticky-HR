import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import contactCardImg from '../assets/images/contactus-img/cont-crd-img.png';
import cir from '../assets/images/contactus-img/cont-cir.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ServicesImplementationCard from "../pages/services/ServicesImplementationCard";
import FadeInUp from '@/components/FadeInUp';

export default function ContactUs() {
    const initialFormData = {
        email: "",
        firstName: "",
        lastName: "",
        contactNumber: "",
        companyName: "",
        employees: "",
        source: "",
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});

    const employeeOptions = [
        "0 - 200",
        "201 - 500",
        "501 - 1000",
        "1001 - 2500",
        "2501 - 5000",
        "5001 - 10000",
        "10001+",
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
        if (!formData.source) newErrors.source = 'This field is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
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
        formData.source;

    return (
        <div className="contactus-component">
            <div className='md:px-6 sm:px-4'>
                <div className="contactus-card sm:py-10 sm:px-8 md:p-8 md:mx-8 md:my-10 lg:m-12 sm:m-4 py-4 px-6 m-4 bg-[#DEEEEF] rounded-xl sm:rounded-3xl overflow-hidden relative z-0 flex lg:flex-row flex-col justify-center align-middle gap-5">
                    {/* contact us left: polygons */}
                    <div className="contactus-card-polygons gap-0 hidden lg:block">
                        <div className="absolute xl:-bottom-1 2xl:-left-[1rem] xl:left-[2rem] lg:left-[1rem] lg:bottom-0">
                            <FadeInUp delay={0.4}>
                                <img src={contactCardImg} alt="contactus card image" className="2xl:w-[33rem] xl:w-[29rem] lg:w-[23rem] aspect-[1.457]"/>
                            </FadeInUp>
                        </div>
                        <img src={cir} alt="contact us circle1" className="xl:w-[3rem] lg:w-[2.5rem] absolute 2xl:bottom-[15rem] 2xl:left-[28rem] xl:bottom-[17rem] xl:left-[20rem] lg:left-[15rem] lg:bottom-[15rem]"/>
                        <img src={cir} alt="contact us circle2" className="xl:w-[1rem] lg:w-[0.8rem] absolute 2xl:bottom-[22rem] 2xl:left-[35rem] xl:bottom-[23rem] xl:left-[27rem] lg:left-[20rem] lg:bottom-[20rem]"/>
                        <div className="circles absolute 2xl:-bottom-[20rem] 2xl:-left-[7rem] xl:-bottom-[17rem] xl:-left-[5rem] lg:-bottom-[18rem] lg:-left-[7rem] flex justify-center items-center -z-10">
                            <FadeInUp delay={0.5}>
                                <div className="cirOtr 2xl:w-[35rem] 2xl:h-[35rem] xl:w-[32rem] xl:h-[32rem] lg:w-[30rem] lg:h-[30rem] bg-[#086165] rounded-full flex justify-center items-center -z-30"></div>
                            </FadeInUp>
                        </div>
                    </div>

                    {/* contact us left: description */}
                    <div className="contactus-card-content lg:w-2/5 lg:space-y-3 space-y-4 flex flex-col 2xl:ml-6 2xl:mt-[5rem] xl:mt-[6rem] lg:mt-[12%] relative z-10">
                        <FadeInUp delay={0.1}>
                            <span className="2xl:text-[1.7rem] xl:text-[1.3rem] lg:text-[1.2rem] md:text-[1.1rem] sm:text-[1rem] font-medium rounded-3xl text-[#34898D] w-fit">
                                Do you have questions?
                            </span>
                        </FadeInUp>
                        <FadeInUp delay={0.2}>
                            <h3 className="2xl:text-[3.1rem] xl:text-[2.9rem] lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] lg:leading-normal font-semibold text-[#086165] leading-none">
                                Get In Touch With Us
                            </h3>
                        </FadeInUp>
                        <FadeInUp delay={0.3}>
                            <h4 className="2xl:text-[1.4rem] xl:text-[1rem] lg:text-[0.9rem] md:text-[1rem] sm:text-[0.9rem] font-medium text-[#595858]">
                                Fill out this form and let us know how we can help. We’re here to assist you with anything.
                            </h4>
                        </FadeInUp>
                    </div>

                    {/* contact us right: form */}
                    <div className="contactus-crd-right lg:w-3/5">
                        <FadeInUp delay={0.3}>
                            <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-8 h-[90%] rounded-lg shadow-md">
                                <div className="space-y-4">
                                    <h3 className="text-[0.8rem] sm:text-[1rem] lg:text-[1.2rem] font-medium">Choose what your business needs and get a customized set of product features.</h3>

                                    <div className="flex gap-4">
                                        <div className="w-1/2">
                                            <label className="text-[0.8rem] sm:text-[1rem] font-semibold">First Name*</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="Enter the first name"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full p-2 text-xs sm:p-3 sm:text-[1rem] border rounded-md mt-1"
                                            />
                                            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                                        </div>
                                        <div className="w-1/2">
                                            <label className="text-[0.8rem] sm:text-[1rem] font-semibold">Last Name*</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Enter the last name"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full p-2 text-xs sm:p-3 sm:text-[1rem] border rounded-md mt-1"
                                            />
                                            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[0.8rem] sm:text-[1rem] font-semibold">Contact Number</label>
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
                                        {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
                                    </div>

                                    <div>
                                        <label className="text-[0.8rem] sm:text-[1rem] font-semibold">Work Email*</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter the work email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full p-2 text-xs sm:p-3 sm:text-[1rem] border rounded-md mt-1"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <label className="text-[0.8rem] sm:text-[1rem] font-semibold">Company Name*</label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            placeholder="Enter the Company name"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            className="w-full p-2 text-xs sm:p-3 sm:text-[1rem] border rounded-md mt-1"
                                        />
                                        {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                                    </div>

                                    <div>
                                        <label className="text-[0.8rem] sm:text-[1rem] font-semibold">Number Of Employees*</label>
                                        <select
                                            name="employees"
                                            value={formData.employees}
                                            onChange={handleChange}
                                            className="w-full p-2 text-xs sm:p-3 sm:text-[1rem] border rounded-md mt-1"
                                        >
                                            <option value="">Select the number of employees</option>
                                            {employeeOptions.map((option, index) => (
                                                <option key={index} value={option}>{option}</option>
                                            ))}
                                        </select>
                                        {errors.employees && <p className="text-red-500 text-xs mt-1">{errors.employees}</p>}
                                    </div>

                                    <div>
                                        <label className="text-[0.8rem] sm:text-[1rem] font-semibold">How did you know about us</label>
                                        <select
                                            name="source"
                                            value={formData.source}
                                            onChange={handleChange}
                                            className="w-full p-2 text-xs sm:p-3 sm:text-[1rem] border rounded-md mt-1"
                                        >
                                            <option value="">Select the options</option>
                                            {knowUsOptions.map((option, index) => (
                                                <option key={index} value={option}>{option}</option>
                                            ))}
                                        </select>
                                        {errors.source && <p className="text-red-500 text-xs mt-1">{errors.source}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={!isFormValid}
                                        className={`w-full mt-4 p-2 text-[0.8rem] sm:text-base sm:p-3 text-white font-semibold bg-[#027D74] rounded-md transition active:scale-95 ${
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

            <div className="md:mx-16 md:my-16 sm:mx-8 sm:my-12 my-10">
                <div className="cmpy-loc flex flex-col justify-center items-center space-y-12 px-4 md:px-0">
                    <FadeInUp delay={0.1}>
                        <h2 className="xl:text-[2.5rem] lg:text-3xl md:text-2xl sm:text-2xl text-lg font-bold text-[#065e63] text-center">Our Company Location</h2>
                    </FadeInUp>

                    <div className="loc-crd bg-[#DEEEEF] w-full p-8 xl:p-12 rounded-2xl hover:shadow-lg transition border border-[#086165] flex flex-col lg:flex-row gap-6 xl:gap-8">
                        <div className="cmpy-text md:basis-2/5 flex flex-col justify-between space-y-8">
                            <div className="space-y-4">
                                <FadeInUp delay={0.2}>
                                    <h3 className="2xl:text-[2rem] sm:text-base text-[0.9rem] font-semibold text-black">Contact Us</h3>
                                </FadeInUp>
                                <div className="contact space-y-4">
                                    <FadeInUp delay={0.3}>
                                        <div className="flex flex-col">
                                            <p className="2xl:text-[1.6rem] font-medium text-gray-700">Phone number:</p>
                                            <a href="tel:+919033244538" className="2xl:text-[1.3rem] text-[#065e63] font-semibold hover:underline">
                                                +91 90332 44538
                                            </a>
                                        </div>
                                    </FadeInUp>
                                    <FadeInUp delay={0.4}>
                                        <div className="flex flex-col">
                                            <p className="2xl:text-[1.6rem] font-medium text-gray-700">Email:</p>
                                            <a href="mailto:shakti@stickyhr.com" className="2xl:text-[1.3rem] text-[#065e63] font-semibold hover:underline break-words">
                                                shakti@stickyhr.com
                                            </a>
                                        </div>
                                    </FadeInUp>
                                </div>
                            </div>
                            <FadeInUp delay={0.5}>
                                <div className="space-y-4">
                                    <p className="2xl:text-[1.6rem] leading-relaxed text-gray-800">
                                        Garuda Bhive Workspace, Kuvempu Bus Station, BTM Layout, Bengaluru, Karnataka-560068
                                    </p>
                                    <a href="https://maps.google.com/?q=Garuda+Bhive+workspace,+Kuvempu+Bus+Station,+BTM+Layout,+Bengaluru,+Karnataka-560068" target="_blank" rel="noopener noreferrer" className="2xl:text-[1.3rem] text-[#065e63] hover:underline">
                                        View on Google Maps
                                    </a>
                                </div>
                            </FadeInUp>
                            <FadeInUp delay={0.6}>
                                <div className="border-t border-[#086165] pt-4">
                                    <h4 className="2xl:text-[1.6rem] font-semibold text-[#065e63] flex items-center gap-2">
                                        <FontAwesomeIcon icon={faLocationDot} className="2xl:text-[1.6rem]"/>
                                        India
                                    </h4>
                                    <p className="2xl:text-[1.3rem] font-medium text-black">Stickyhr Solution Pvt. Ltd</p>
                                </div>
                            </FadeInUp>
                        </div>

                        <div className="cmpy-maps md:basis-3/5 w-full h-60 md:h-[380px]">
                            <FadeInUp delay={0.6}>
                                <div className="w-full h-full">
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
            <ServicesImplementationCard/>
        </div>
    );
}