import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import Slider from "react-slick";
import { motion } from "framer-motion"; // ✅ Added for animations
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonialImg1 from "../../assets/images/testimonials-img/testimonialImg1.png";
import testimonialImg2 from "../../assets/images/testimonials-img/testimonialImg2.png";

import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const testimonials = [
    {
        name: "Aayushi Jani",
        feedback:
            "I always wanted something that works Not only is StickyHR visually appealing and simple to use but the addition of AI actually solves most of my everyday task. Our organization has tried a bunch of platforms earlier. We often felt they were not user-friendly and time-consuming. This is where StickyHR stood out.",
        image: testimonialImg1,
    },
    {
        name: "Nivetha Thomas",
        feedback:
            "Zero learning curve… Most interactive software. Headache of managing candidates… solved Timely, Responsive support",
        image: testimonialImg2,
    },
];

export default function Testimonials() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    let sliderRef = null;

    return (
        <div className="w-full bg-[#DEEEEF] flex flex-col items-center px-6 py-16 xl:py-0 text-center">
            {/* Parent Container */}
            <div className="w-full max-w-6xl flex xl:flex-row flex-col items-center justify-between">
                
                {/* Left Section with Animation */}
                <motion.div
                    className="text-left sm:w-1/3 flex flex-col justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="2xl:text-[3rem] xl:text-[2.5rem] lg:text-[2.3rem] text-[2rem] text-center xl:text-left font-bold text-[#035B5F]">
                        TESTIMONIALS
                    </h1>
                    <h2 className="2xl:text-[2.3rem] xl:text-[1.8rem] lg:text-[1.8rem] font-semibold mt-2 hidden xl:block text-left ">Our Clients</h2>
                    <p className="italic text-gray-600 mt-4 text-[1.5rem] xl:text-[1.3rem] hidden xl:block text-left">
                        "Sip the purity of nature in every cup, Discover wellness, one brew at a time."
                    </p>
                </motion.div>

                {/* Right Section with Animation */}
                <motion.div
                    className="w-2/3 relative flex justify-center items-center h-full"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                >
                    {/* Vertical Divider */}
                    <div className="bg-[#3B9B9F] w-5 h-full absolute left-1/4 hidden xl:block -translate-x-1/2"></div>
                    <div className="bg-[#FFC600] w-1 h-48 absolute 2xl:left-[7rem] bottom-52 xl:left-[8rem] hidden xl:block rotate-90"></div>

                    {/* Slider Content */}
                    <div className="min-w-[340px] sm:min-w-[550px] md:min-w-[650px] lg:min-w-[750px] 2xl:min-w-[750px] xl:min-w-[650px] z-10 2xl:ml-44 2xl:mb-20 xl:ml-40 xl:mb-16 ">
                        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
                            {testimonials.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center justify-center rounded-xl overflow-hidden"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                >
                                    {/* Image Positioned Above the Card */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="object-cover sm:w-[70%] sm:h-[70%] md:w-[50%] md:h-[50%] w-[70vw] h-[70vw] -mb-[10%] mx-auto"
                                    />
                                    {/* Bigger Card */}
                                    <Card className="bg-white 2xl:p-12 xl:p-8 max-w-[800px] min-h-64 flex flex-col items-center rounded-xl">
                                        <CardContent className="flex flex-col justify-center items-center rounded-xl xl:pt-10 pt-12 relative">
                                            <FontAwesomeIcon icon={faQuoteRight} className="sm:text-[3rem] lg:text-[4rem] text-[2rem] absolute top-[5%] right-[15%] opacity-45" />
                                            <h3 className="2xl:text-[2rem] sm:text-xl text-lg font-semibold">{item.name}</h3>
                                            <p className="italic text-gray-600 mt-4 2xl:text-[1.3rem] lg:text-[1.2rem] sm:text-[1rem] text-sm text-center sm:leading-normal">
                                                {item.feedback}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </Slider>

                        {/* Navigation Arrows - COMMENTED */}
                        <div className="flex justify-center items-center gap-4 mt-6 xl:hidden">
                            <button
                                className="bg-yellow-400 p-4 rounded-full shadow-lg hover:bg-yellow-500 transition"
                                onClick={() => sliderRef?.slickPrev()}
                            >
                                <FaChevronLeft className="text-white text-2xl" />
                            </button>
                            <button
                                className="bg-yellow-400 p-4 rounded-full shadow-lg hover:bg-yellow-500 transition"
                                onClick={() => sliderRef?.slickNext()}
                            >
                                <FaChevronRight className="text-white text-2xl" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
