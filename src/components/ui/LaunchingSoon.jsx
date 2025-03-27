import LaunchingImgMobile from '../../assets/images/launching-img/launchingImgMobile.png';
import computer from '../../assets/images/launching-img/computer.png';

import lady from "../../assets/images/services-img/VHR/lady.png";
import grad from "../../assets/images/services-img/VHR/grad.png";
import board from "../../assets/images/services-img/VHR/board.png";
import FadeInUp from '../FadeInUp';

import { Link } from 'react-router-dom';

export default function LaunchingSoon() {
    return (
        <div className="launching-content w-full bg-[#DEEEEF] flex flex-col items-center px-6 py-10 text-center mt-10">

            <div className="w-full flex justify-start pl-6 mb-4 relative">
                <FadeInUp delay={0.1}>
                    {/* Monitor Container */}
                    <div className="relative inline-block">
                        {/* Monitor Image */}
                        <img 
                            src={computer} 
                            alt="Launching Soon" 
                            className="2xl:w-48 xl:w-44 md:w-40 sm:w-32 w-24 relative z-10" 
                        />
                        {/* Launching Soon Text (Centered on the Monitor) */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center animate-bounce">
                            <span className="block text-xs sm:text-base md:text-lg xl:text-xl italic">LAUNCHING</span>
                            <span className="block text-xs sm:text-lg md:text-xl xl:text-2xl font-bold">SOON</span>
                        </div>
                    </div>
                </FadeInUp>
            </div>

            <FadeInUp delay={0.1}>
                {/* Title */}
                <h1 className="text-2xl md:text-4xl font-bold text-[#035B5F]">
                    Smart Virtual HR - HR On Subscription
                </h1>
            </FadeInUp>

            <FadeInUp delay={0.3}>
                {/* Description */}
                <h3 className="text-lg md:text-xl text-gray-700 mt-2">
                    Introducing a new service - VIRTUAL HR - because every startup needs HR, not HR problems!
                </h3>
            </FadeInUp>

            {/* Main Image Section */}
            <div className="bg-[#086165] my-16 rounded-3xl xl:h-[650px] lg:h-[580px] md:h-[480px] sm:h-[380px] h-[250px] w-[90%] relative">

                {/* Lady Image */}
                <div className="absolute left-0 bottom-0">
                        <FadeInUp delay={0.2} duration={1}>
                            <img src={lady} alt="lady" className="rounded-bl-3xl 2xl:w-[40rem] xl:w-[35rem] lg:w-[28rem] md:w-[25rem] sm:w-[16rem] w-[13rem] relative z-10" loading="lazy" />
                        </FadeInUp>
                </div>

                {/* Grad Image */}
                <div className="absolute 2xl:left-[37.3rem] xl:left-[33.3rem] lg:left-[25.5rem] md:left-[23.3rem] sm:left-[14.9rem] left-[12.1rem] transition-all bottom-0 z-20">
                    <FadeInUp delay={0.3} duration={1}>
                        <img src={grad} alt="grad" className="2xl:w-[2.8rem] xl:w-[2.4rem] lg:w-[2.78rem] md:w-[1.8rem] sm:w-[1.2rem] w-[.9rem]" loading="lazy" />
                    </FadeInUp>
                </div>

                {/* Board Image */}
                <div className="absolute xl:right-[2rem] xl:top-[2rem] lg:bottom-[9rem] lg:right-[2.5rem] lg:top-[3rem] md:right-[1rem] md:bottom-[5rem] md:top-[1rem]  sm:right-[1.5rem] sm:bottom-[5rem] sm:top-[1.5rem] right-[.5rem] bottom-[3rem] top-[.5rem]">
                    <FadeInUp delay={0.4} duration={1}>
                        <img src={board} alt="board" className="xl:w-[55rem] lg:w-[40rem] md:w-[37rem] sm:w-[28rem] w-[20rem]" loading="lazy" />
                    </FadeInUp>
                </div>

                {/* Join Now Button */}
                <div className="absolute 2xl:bottom-[3rem] 2xl:right-[25rem] xl:right-[11.3rem] xl:bottom-[2.5rem] lg:right-[16.5rem] lg:bottom-[3rem] md:right-[14.5rem] md:bottom-[3rem] sm:right-[11rem] sm:bottom-[2rem] bottom-[3rem] right-[6.5rem] z-30 ">
                    <FadeInUp delay={0.7} duration={1}>
                        <Link to="/implementation">
                        <button className="bg-[#FFC107] xl:w-36 xl:h-10  lg:w-48 lg:h-16  md:w-40 md:h-12  sm:w-36 sm:h-10 w-32 h-8  xl:text-sm lg:text-2xl md:text-xl sm:text-md text-xs text-black font-semibold py-1 px-[2rem] xl:rounded-sm lg:rounded-xl md:rounded-lg sm:rounded-md rounded-md shadow-md hover:bg-[#e0a800] active:scale-95 transition border-2 border-black">
                            Join Now
                        </button>
                        </Link>
                    </FadeInUp>
                </div>

                {/* Mobile Chat Screen */}
                <div className="absolute lg:bottom-[3rem] md:bottom-[4rem] sm:bottom-[3rem] bottom-[1.5rem] xl:-right-[5rem] lg:-right-14 md:-right-12 sm:-right-10 -right-8">
                    <FadeInUp delay={0.6} duration={1}>
                        <img
                            src={LaunchingImgMobile}
                            alt="Chat on Mobile"
                            className=" md:w-[180px] xl:w-[240px] lg:w-[220px] sm:w-[140px] w-[100px]"
                            loading="lazy"
                        />
                    </FadeInUp>
                </div>
            </div>
        </div>
    );
}
