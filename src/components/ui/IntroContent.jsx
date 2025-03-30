import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import img1 from '../../assets/images/form-img/img1.png';
import img2 from '../../assets/images/form-img/img2.png';
import cir1 from '../../assets/images/form-img/cir1.png';
import cir2 from '../../assets/images/form-img/cir2.png';
import { Link } from 'react-router-dom';
import FadeInUp from "@/components/FadeInUp"; 
import { useState } from 'react';

export default function IntroContent() {
    const initialFormData = {
        name: '',
        email: '',
        phone: '',
        company: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        company: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;

        if (id === 'name') {
            if (/[^a-zA-Z\s]/.test(value)) {
                setErrors(prev => ({ ...prev, name: 'Only letters are allowed' }));
                return;
            }
        }
        
        if (id === 'phone') {
            if (/[^0-9]/.test(value) || value.length > 10) {
                setErrors(prev => ({ ...prev, phone: 'Only 10 digits allowed' }));
                return;
            }
        }

        setFormData(prev => ({ ...prev, [id]: value }));
        setErrors(prev => ({ ...prev, [id]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let newErrors = {};
        
        if (!formData.name) newErrors.name = 'Name is required';
        else if (/[^a-zA-Z\s]/.test(formData.name)) newErrors.name = 'Only letters are allowed';
        
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
        
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Must be 10 digits';
        
        if (!formData.company) newErrors.company = 'Company name is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData);
            // Add your form submission logic here (e.g., API call)
            
            // Reset form after successful submission
            setFormData(initialFormData);
            setErrors({});
        }
    };

    const isFormValid = formData.name && formData.email && formData.phone && formData.company;

    return (
        <div className="intro-content grid xl:grid-cols-2 grid-cols-1 2xl:gap-8 xl:gap-6 items-center h-full md:grid-cols-1">
            <FadeInUp>
                <div className="intro-left xl:ml-24 lg:ml-16 2xl:mx-30 md:mx-13 sm:mx-14 mx-4 space-y-3 xl:space-y-4">
                    <h4 className="2xl:text-[1.7rem] xl:text-[1.4rem] md:text-[1.3rem] text-[1.2rem] font-semibold text-[#FFC600] xl:pt-28 lg:pt-16 md:pt-14 pt-10">
                        Recruit - Onboard - Manage
                    </h4>
                    <h2 className="2xl:text-[2.8rem] xl:text-[2.3rem] lg:text-[2.3rem] md:text-[2.1rem] sm:text-[2rem] text-[1.8rem] font-bold text-gray-900 mt-3 -mr-28 2xl:leading-normal 2xl:w-full lg:w-[90%] xl:w-full md:max-w-[40rem] sm:max-w-[35rem] max-w-[20rem]">
                        Revolutionize Your HR Management With Virtual-Based Solutions
                    </h2>
                    <p className="2xl:text-[1.5rem] xl:text-[1.2rem] lg:text-[1.3rem] md:text-[1.2rem] sm:text-[1.2rem] text-[1.1rem] font-normal text-[#666666] 2xl:mt-5 xl:mt-3 2xl:leading-10 xl:leading-7">
                        The best HR software for StickyHR companies and startup to manage employee, payroll assistance, time off, attendance tracking with single software
                    </p>
                    <div className="intro-btns flex pb-14 gap-4">
                        <Link to="/contact-us">
                            <Button className="bg-[#086165] text-white rounded-3xl hover:bg-[#064d4b] transition flex items-center justify-center 2xl:text-[1.5rem] lg:text-[1.1rem] sm:text-[1rem] text-[0.9rem] 2xl:px-8 2xl:py-6 lg:px-5 lg:py-4 md:px-4 md:py-4 sm:px-4 sm:py-3 px-3 py-2">
                                Get Started
                            </Button>
                        </Link>
                        <Link to="/contact-us">
                            <Button className="border-2 border-[#086165] text-[#086165] bg-white rounded-3xl hover:bg-[#086165] hover:text-white flex items-center justify-center gap-2 2xl:text-[1.5rem] lg:text-[1.1rem] sm:text-[1rem] text-[0.9rem] 2xl:px-8 2xl:py-6 lg:px-5 lg:py-4 md:px-4 md:py-4 sm:px-4 sm:py-3 px-3 py-2">
                                <FontAwesomeIcon icon={faCirclePlay} />
                                How it works
                            </Button>
                        </Link>
                    </div>
                </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
                <div className="intro-right flex justify-center relative mt-6 sm:mt-8 lg:mt-0">
                    <img src={img1} alt="Icon 1" className="hidden sm:block absolute xl:top-[5%] xl:right-[5%] md:top-[10%] md:right-[13%] top-[15%] right-[5%] sm:w-16 sm:h-16 rotate-13 -z-10" loading="lazy"/>
                    <img src={img2} alt="Icon 2" className="hidden sm:block absolute xl:top-[30%] xl:left-[5%] md:top-[35%] md:left-[10%] top-[35%] left-[5%] sm:w-16 sm:h-16 -rotate-6 -z-10" loading="lazy"/>
                    <img src={cir1} alt="Circle 1" className="hidden sm:block absolute top-[5%] left-[10%] xl:top-[3%] xl:left-[5%] md:top-[5%] md:left-[10%] w-5 sm:w-6 h-5 sm:h-6 -z-10" loading="lazy"/>
                    <img src={cir2} alt="Circle 2" className="hidden sm:block absolute top-[20%] left-[20%] xl:top-[10%] xl:left-[15%] md:top-[20%] md:left-[20%] w-2 sm:w-3 h-2 sm:h-3 -z-10" loading="lazy"/>
                    
                    <div className="bg-gray-100 p-4 sm:p-6 lg:p-8 opacity-100 rounded-xl shadow-sm w-full max-w-[280px] sm:max-w-xs lg:max-w-sm xl:max-w-md shadow-gray-400">
                        <h2 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">
                            30-day <span className="font-extrabold">free trial.</span>
                        </h2>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 sm:mb-6 lg:mb-7">
                            No credit card required. Cancel anytime.
                        </p>
                        <form className="space-y-3 sm:space-y-4 lg:space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-xs sm:text-sm lg:text-base"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email ID</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email ID"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-xs sm:text-sm lg:text-base"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">Phone Number</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    maxLength={10}
                                    className="w-full p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-xs sm:text-sm lg:text-base"
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                            </div>
                            <div>
                                <label htmlFor="company" className="sr-only">Company Name</label>
                                <input
                                    id="company"
                                    type="text"
                                    placeholder="Company Name"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-xs sm:text-sm lg:text-base"
                                />
                                {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                            </div>
                            <button
                                type="submit"
                                disabled={!isFormValid}
                                className={`w-full bg-[#086165] text-sm sm:text-base lg:text-lg text-white font-bold p-2 sm:p-3 rounded-md transition active:scale-95 ${
                                    !isFormValid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#064d4b]'
                                }`}
                                aria-label="Sign up for free trial"
                            >
                                FREE SIGN UP
                            </button>
                        </form>
                    </div>
                </div>
            </FadeInUp>
        </div>
    );
}