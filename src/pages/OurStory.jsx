import team from "../assets/images/OurStory/team.png"
import grad from "../assets/images/OurStory/grading.png"
import ServicesImplementationCard from "../pages/services/ServicesImplementationCard";

import FadeInUp from '@/components/FadeInUp'

export default function OurStory() {
    return (
        <>
            {/* team pic */}
            <div className="story-component md:pl-8  md:pr-8">
                <div className="md:m-10 m-6 relative ">
                    <FadeInUp delay={0.1}>
                    <img src={team} alt="Team Picture" className="rounded-3xl h-full" />
                    </FadeInUp>
                    <div className="absolute bottom-0 w-full">
                    <FadeInUp delay={0.2}>
                    <img src={grad} alt="Grading" className="align-bottom rounded-3xl"/>
                    </FadeInUp>
                    </div>
                    <div className="absolute 2xl:left-[25%] xl:left-[25%] lg:left-[25%] md:left-[25%] sm:left-[25%] left-[18%] bottom-[5%] transition-all">
                        <FadeInUp delay={0.3}>
                        <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-lg font-bold text-white">StickyHR Team Members</h1>
                        </FadeInUp>
                    </div>
                </div>
            </div>
            {/* vision and mission */}
            <div className="h-full md:m-10 m-6 md:pt-10">
                <div className="grid grid-rows-2 md:pl-8 md:pr-8 gap-y-10">
                    <FadeInUp delay={0.1}>
                    <div className="grid border-2 bg-[#f5f5f5] rounded-3xl md:p-10 sm:p-8 p-3  hover:scale-105 transition hover:border-black hover:shadow-md">
                        <FadeInUp delay={0.2}>
                        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold text-[#ffc600] md:pt-5 md:pb-5 py-2 ">Our Vision</h1>
                        </FadeInUp>
                        <FadeInUp delay={0.3}>
                        <p className="font-medium lg:text-2xl md:text-xl sm:text-lg text-sm text-[#666666] leading-loose text-left">At <b className="font-semibold lg:text-3xl md:text-2xl sm:text-xl text-md text-[#086165]">StickyHR</b> , we’re redefining HR management with a smarter, faster, and more efficient solution. Our platform automates tasks, boosts productivity, and empowers teams—whether startups or enterprises.</p>
                        </FadeInUp>
                    </div>
                    </FadeInUp>
                    <FadeInUp delay={0.4}>
                    <div className="grid border-2 bg-[#f5f5f5] rounded-3xl md:p-10 sm:p-8 p-3  hover:scale-105 transition hover:border-black border-opacity-20 hover:shadow-md">
                        <FadeInUp delay={0.5}>
                        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold text-[#ffc600] md:pt-5 md:pb-5 py-2">Our Mission</h1>
                        </FadeInUp>
                        <FadeInUp delay={0.6}>
                        <p className="font-medium lg:text-2xl md:text-xl sm:text-lg text-sm text-[#666666] leading-loose text-left">Most HR platforms are broken, with complex tools and poor user experiences. <b className="font-semibold lg:text-3xl md:text-2xl sm:text-xl text-md text-[#086165]">StickyHR</b> simplifies HR management with AI-powered automation, keeping employees informed, engaged, and motivated.</p>
                        </FadeInUp>
                    </div>
                    </FadeInUp>
                </div>
            </div>

            {/* core values - r */}
            {/* <div className="grid grid-rows-3 h-screen m-10 pl-8 pr-8 gap-y-5">
                <div className="grid grid-cols-3 gap-x-6 h-[175px] relative">
                    <div className="rounded-3xl flex justify-center items-center border-[#3b9b9f] border-2 shadow-[-4px_4px_0_#3b9b9f] hover:scale-105 transition">
                        <p className="text-[#086165] text-4xl font-semibold">Service First</p>
                    </div>
                    <div className="rounded-3xl flex justify-center items-center border-[#3b9b9f] border-2 shadow-[-4px_4px_0_#3b9b9f] hover:scale-105 transition">
                        <p className="text-[#086165] text-4xl font-semibold text-center leading-snug">Love Your <br /> People/Client</p>
                    </div>
                    <div className="rounded-3xl flex justify-center items-center border-[#3b9b9f] border-2 shadow-[-4px_4px_0_#3b9b9f] hover:scale-105 transition ">
                        <p className="text-[#086165] text-4xl font-semibold text-center leading-snug">Work Hard but <br /> Also Smart</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-x-6 h-[330px] relative -top-14">
                    <div className="rounded-3xl flex justify-center items-center border-[#3b9b9f] border-2 shadow-[-4px_4px_0_#3b9b9f] w-[300px] hover:scale-105 transition">
                        <p className="text-[#086165] text-4xl font-semibold text-center leading-snug">Always <br /> Upgrade <br /> Yourself </p>
                    </div>
                    <div className="rounded-3xl flex justify-center items-center border-[#3b9b9f] border-2 shadow-[-4px_4px_0_#3b9b9f] w-[700px] relative -left-32 hover:scale-105 transition">
                        <p className="text-[#ffc600] text-7xl font-semibold">CORE VALUES</p>
                    </div>
                    <div className="rounded-3xl flex justify-center items-center border-[#3b9b9f] border-2 shadow-[-4px_4px_0_#3b9b9f] w-[300px] relative -right-36 hover:scale-105 transition">
                        <p className="text-[#086165] text-4xl font-semibold text-center leading-snug">Good <br /> Decisions <br /> Come <br /> First</p>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-x-6 h-[175px] relative top-11">
                    <div className="rounded-3xl flex justify-center items-center border-[#3b9b9f] border-2 shadow-[-4px_4px_0_#3b9b9f] hover:scale-105 transition">
                        <p className="text-[#086165] text-4xl font-semibold">Kindness First</p>
                    </div>
                    <div className="rounded-3xl flex justify-center items-center border-[#3b9b9f] border-2 shadow-[-4px_4px_0_#3b9b9f] hover:scale-105 transition">
                        <p className="text-[#086165] text-4xl font-semibold leading-snug">Respect <br /> Everyone</p>
                    </div>
                    <div className="rounded-3xl flex justify-center items-center border-[#3b9b9f] border-2 shadow-[-4px_4px_0_#3b9b9f] hover:scale-105 transition">
                        <p className="text-[#086165] text-4xl font-semibold">Be Confident</p>
                    </div>
                    <div className="rounded-3xl flex justify-center items-center border-[#3b9b9f] border-2 shadow-[-4px_4px_0_#3b9b9f] hover:scale-105 transition">
                        <p className="text-[#086165] text-4xl font-semibold">Be Disciplined</p>
                    </div>
                </div>
            </div> */}

            {/* core values - s */}
            <div className="lg:grid lg:grid-flow-row lg:h-screen lg:mx-12 grid grid-flow-row sm:gap-y-5 gap-y-2">
                {/* Top Row */}
                <div className="lg:p-4 md:px-20 sm:px-6 sm:pl-6 pl-2 sm:pr-6 pr-2 grid grid-cols-3 sm:gap-5 gap-2 auto-rows-fr pt-10">
                    <FadeInUp delay={0.2 * 1} duration={0.7}>
                    <div className="border-2 border-[#3b9b9f] sm:shadow-[-4px_4px_0_#3b9b9f] shadow-[-2px_2px_0_#3b9b9f] rounded-3xl p-3 text-center flex justify-center items-center cursor-pointer hover:scale-105 transition text-[#086165] lg:text-4xl md:text-2xl text-sm font-semibold h-full">
                    Service First
                    </div>
                    </FadeInUp>
                    <FadeInUp delay={0.2 * 2} duration={0.7}>
                    <div className="border-2 border-[#3b9b9f] sm:shadow-[-4px_4px_0_#3b9b9f] shadow-[-2px_2px_0_#3b9b9f] rounded-3xl p-3 text-center flex justify-center items-center cursor-pointer hover:scale-105 transition text-[#086165] lg:text-4xl md:text-2xl text-sm font-semibold h-full">
                        Love Your People/Client
                    </div>
                    </FadeInUp>
                    <FadeInUp delay={0.2 * 3} duration={0.7}>
                    <div className="border-2 border-[#3b9b9f] sm:shadow-[-4px_4px_0_#3b9b9f] shadow-[-2px_2px_0_#3b9b9f] rounded-3xl p-3 text-center flex justify-center items-center cursor-pointer hover:scale-105 transition text-[#086165] lg:text-4xl md:text-2xl text-sm font-semibold h-full">
                        Work Hard but Also Smart
                    </div>
                    </FadeInUp>
                </div>


                {/* Middle row */}
                <div className="lg:p-4 md:px-20 sm:px-6 sm:pl-6 pl-2 sm:pr-6 pr-2 grid grid-cols-[1fr_2fr_1fr] sm:gap-5 gap-2 auto-rows-fr">
                    <FadeInUp delay={0.2 * 4} duration={0.7}>
                    <div className="border-2 border-[#3b9b9f] sm:shadow-[-4px_4px_0_#3b9b9f] shadow-[-2px_2px_0_#3b9b9f] rounded-3xl p-4 text-center flex justify-center items-center cursor-pointer hover:scale-105 transition text-[#086165] lg:text-4xl md:text-2xl text-sm font-semibold h-full">
                        Always Upgrade Yourself
                    </div>
                    </FadeInUp>
                    <FadeInUp delay={0.2 * 5} duration={0.7}>
                    <div className="border-2 border-[#3b9b9f] sm:shadow-[-4px_4px_0_#3b9b9f] shadow-[-2px_2px_0_#3b9b9f] rounded-3xl p-8 text-center flex justify-center items-center cursor-pointer hover:scale-105 transition text-[#ffc600] lg:text-7xl md:text-5xl text-lg font-semibold h-full">
                        CORE VALUES
                    </div>
                    </FadeInUp>
                    <FadeInUp delay={0.2 * 6} duration={0.7}>
                    <div className="border-2 border-[#3b9b9f] sm:shadow-[-4px_4px_0_#3b9b9f] shadow-[-2px_2px_0_#3b9b9f] rounded-3xl p-4 text-center flex justify-center items-center cursor-pointer hover:scale-105 transition text-[#086165] lg:text-4xl md:text-2xl text-sm font-semibold h-full">
                        Good Decisions Come First
                    </div>
                    </FadeInUp>
                </div>


                {/* Bottom Row */}
                <div className="lg:p-4 md:px-20 sm:px-6 sm:pl-6 pl-2 sm:pr-6 pr-2 grid grid-cols-4 sm:gap-5 gap-2 auto-rows-fr pb-2">
                    <FadeInUp delay={0.2 * 6} duration={0.7}>
                    <div className="border-2 border-[#3b9b9f] sm:shadow-[-4px_4px_0_#3b9b9f] shadow-[-2px_2px_0_#3b9b9f] rounded-3xl p-4 text-center flex justify-center items-center cursor-pointer hover:scale-105 transition text-[#086165] lg:text-4xl md:text-2xl text-sm font-semibold h-full">
                        Kindness First
                    </div>
                    </FadeInUp>
                    <FadeInUp delay={0.2 * 7} duration={0.7}>
                    <div className="border-2 border-[#3b9b9f] sm:shadow-[-4px_4px_0_#3b9b9f] shadow-[-2px_2px_0_#3b9b9f] rounded-3xl p-4 text-center flex justify-center items-center cursor-pointer hover:scale-105 transition text-[#086165] lg:text-4xl md:text-2xl text-sm font-semibold h-full">
                        Respect Everyone
                    </div>
                    </FadeInUp>
                    <FadeInUp delay={0.2 * 8} duration={0.7}>
                    <div className="border-2 border-[#3b9b9f] sm:shadow-[-4px_4px_0_#3b9b9f] shadow-[-2px_2px_0_#3b9b9f] rounded-3xl p-4 text-center flex justify-center items-center cursor-pointer hover:scale-105 transition text-[#086165] lg:text-4xl md:text-2xl text-sm font-semibold h-full">
                        Be Confident
                    </div>
                    </FadeInUp>
                    <FadeInUp delay={0.2 * 9} duration={0.7}>
                    <div className="border-2 border-[#3b9b9f] sm:shadow-[-4px_4px_0_#3b9b9f] shadow-[-2px_2px_0_#3b9b9f] rounded-3xl p-4 text-center flex justify-center items-center cursor-pointer hover:scale-105 transition text-[#086165] lg:text-4xl md:text-2xl text-sm font-semibold h-full">
                        Be Disciplined
                    </div>
                    </FadeInUp>
                </div>
            </div>
            
            <FadeInUp delay={0.2}>
            <ServicesImplementationCard />
            </FadeInUp>
        </>
    );
}