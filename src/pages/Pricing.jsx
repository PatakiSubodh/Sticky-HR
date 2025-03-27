import pricingCardImg from '../assets/images/pricing-img/pricing-img.png'
import PricingForm from '../components/ui/PricingForm.jsx';

import FadeInUp from '@/components/FadeInUp'

import { Link } from 'react-router-dom';

export default function Pricing() {
    return (
        
        <div className="usrMngt-component">
            <div className="px-1 sm:px-2 md:px-4 lg:px-6 xl:px-8">
            <FadeInUp delay={0.1}>
                <div className="usrMngt-card flex flex-col relative overflow-hidden m-5 sm:m-10 h-[300px] sm:h-[280px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] 2xl:pl-16 bg-[#3B9B9F] rounded-3xl z-0">
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
                <div className="usrMngt-card-content flex flex-col justify-center align-middle space-y-3 sm:justify-start sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-10 w-[36rem] ml-[10%] mt-[10%] sm:ml-10 sm:mt-10 md:ml-14 md:mt-24 lg:ml-14 lg:mt-24 xl:ml-24 xl:mt-[8rem] 2xl:ml-12 2xl:mt-32">
                    <FadeInUp delay={0.2}>
                        <span className="bg-[#F3F9FF] rounded-3xl w-fit text-[0.7rem] px-2 py-1 2xl:px-6 2xl:py-2 2xl:text-lg 2xl:font-medium xl:px-5 xl:py-2 xl:text-base lg:px-4 lg:py-1 lg:text-lg md:px-3 md:text-[0.8rem] sm:px-3 sm:py-1 sm:text-[0.7rem]">
                        Pricing
                        </span>
                    </FadeInUp>
                    <FadeInUp delay={0.3}>
                        <h3 className="text-[1.2rem] w-[50%] font-extrabold text-[#1E1E1E] leading-snug 2xl:w-[50rem] mr-2 sm:text-xl sm:w-fit md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl">
                        Flexible Pricing for Every Business
                        </h3>
                    </FadeInUp>
                    <FadeInUp delay={0.4}>
                        <h4 className="text-sm font-normal pr-[50%] sm:text-[0.9rem] sm:pr-[25%] xl:pr-[5%] sm:leading-relaxed sm:font-medium md:text-[0.9rem] md:leading-7 md:font-normal lg:text-lg lg:font-normal xl:text-lg 2xl:text-xl 2xl:leading-10">
                        Get the Features You Need, Without the Extra Costs.
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

            <PricingForm />
        </div>
    );
}