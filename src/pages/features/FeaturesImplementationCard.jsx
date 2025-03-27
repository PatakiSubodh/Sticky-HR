// implementation
import cross from '../../assets/images/usrMngt-img/cross.png';
import lines from '../../assets/images/usrMngt-img/lines.png';
import img1 from '../../assets/images/form-img/img1.png';
import img2 from '../../assets/images/form-img/img2.png';
import implementImg from '../../assets/images/usrMngt-img/implementImg.png';

import FadeInUp from '../../components/FadeInUp'

import { Link } from 'react-router-dom';

export default function Implementation() {
    return (
        <div className="implement-card bg-[#DEEEEF] flex items-center justify-between sm:px-8 sm:py-4 sm:mt-0 px-6 py-10 overflow-hidden relative">
            {/* Left Content Section */}
            <div className="implement-card-content 2xl:space-y-6">
                {/* Heading */}
                <FadeInUp delay={0.2}>
                <h2 className="2xl:text-[3rem] xl:text-[2.7rem] lg:text-[2.4rem] md:text-[2.3rem] sm:text-[1.7rem] text-[1.5rem] font-bold text-gray-900 2xl:leading-normal">
                How about <span className="text-black sm:block">Implementation?</span>
                </h2>
                </FadeInUp>
                {/* Subheading */}
                <FadeInUp delay={0.3}>
                <h4 className="2xl:text-[1.5rem] xl:text-[1.3rem] lg:text-[1.25rem] md:text-[1.2rem] sm:text-[1rem] text-[0.9rem] text-gray-600 my-3">
                Our StickyHR Champions will take care of this...
                </h4>
                </FadeInUp>

                {/* Join Now Button */}
                <Link to="/implementation">
                <FadeInUp delay={0.4}>
                <button className="bg-[#FFC107] text-black font-semibold 2xl:text-[1.2rem] 2xl:px-[1.3rem] 2xl:py-[0.7rem] xl:text-[1.2rem] xl:px-[1.1rem] xl:py-[0.6rem] lg:text-[1rem] lg:px-[1rem] lg:py-[0.5rem] md:text-[0.8rem] md:px-[0.8rem] md:py-[0.5rem] sm:px-[0.8rem] sm:py-[0.4rem] text-[0.7rem] px-[0.5rem] py-[0.3rem] rounded-sm shadow-md hover:bg-[#e0a800] active:scale-95 transition lg:mt-4">
                Get Started Today
                </button>
                </FadeInUp>
                </Link>
            </div>

            
            {/* Decorative Elements */}
            <div className="implement-card-polygons 2xl:h-[30rem] xl:h-[25rem] lg:h-[20rem] md:h-[17rem] sm:h-[15rem] ">
                {/* Floating Icons */}
                <div className="floating-icons">
                    <img src={img1} alt="Icon 1" className="absolute 2xl:top-[3rem] 2xl:right-[15rem] 2xl:w-[5.5rem] 2xl:h-[5.5rem] xl:top-[3rem] xl:right-[10rem] xl:w-[4.5rem] xl:h-[4.5rem] -rotate-6 z-50 cursor-pointer hover:rotate-12 transition hidden xl:block" />
                    <img src={img2} alt="Icon 2" className="absolute 2xl:top-[10rem] 2xl:right-[50rem] 2xl:w-[5.5rem] 2xl:h-[5.5rem] xl:top-[10rem] xl:right-[40rem] xl:w-[4.5rem] xl:h-[4.5rem] -rotate-6 z-50 cursor-pointer hover:rotate-12 transition hidden xl:block" />
                    <img src={cross} alt="cross" className="absolute 2xl:top-[3rem] 2xl:right-[40rem] 2xl:w-[2rem] 2xl:h-[2rem] xl:top-[3rem] xl:right-[35rem] xl:w-[1.5rem] xl:h-[1.5rem] -rotate-12 z-50 cursor-pointer hover:rotate-12 transition hidden xl:block" />
                    <img src={cross} alt="cross" className="absolute 2xl:bottom-[7rem] 2xl:left-[25rem] 2xl:w-[2rem] 2xl:h-[2rem] xl:bottom-[5rem] xl:left-[25rem] xl:w-[1.5rem] xl:h-[1.5rem] cursor-pointer hover:rotate-12 transition hidden xl:block" />
                    <img src={lines} alt="lines" className="rotate-100 absolute 2xl:-top-[5rem] 2xl:-right-[5rem] hidden xl:block" />
                    <img src={lines} alt="lines" className="rotate-180 absolute 2xl:-bottom-[5rem] 2xl:-left-[5rem] hidden xl:block" />
                </div>

                {/* Implementation Image */}
                <img src={implementImg} alt="Implement" className="absolute z-40 2xl:w-[43rem] 2xl:h-[28rem] xl:w-[37rem] xl:h-[25rem] lg:w-[30rem] lg:h-[20rem] md:w-[21rem] md:h-[13rem] sm:w-[19rem] sm:h-[12rem] sm:bottom-0 2xl:right-[8rem] xl:right-[6rem] lg:right-[3rem] md:-right-[0.5rem] sm:right-0 hidden sm:block" />

                {/* Background Circular Design */}
                <div className="circles absolute 2xl:-bottom-[27rem] 2xl:right-[5rem] xl:-bottom-[23rem] xl:right-[3rem] lg:-bottom-[19rem] lg:right-[2rem] md:hidden ">
                    <div className="cirOtr 2xl:w-[45rem] 2xl:h-[45rem] xl:w-[40rem] xl:h-[40rem] lg:w-[32rem] lg:h-[32rem] md:w-[24rem] md:h-[24rem] bg-[#086165] bg-opacity-50 rounded-full flex justify-center items-center">
                        <div className="cirInr 2xl:w-[30rem] 2xl:h-[30rem] xl:w-[27rem] xl:h-[27rem] lg:w-[21.5rem] lg:h-[21.5rem] md:w-[16rem] md:h-[16rem] bg-[#086165] rounded-full opacity-90"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}