import JobOpenings from "./JobOpenings"
import c1 from "../../assets/images/Careers/c1.png"
import c2 from "../../assets/images/Careers/c2.png"
import c3 from "../../assets/images/Careers/c3.png"
import c4 from "../../assets/images/Careers/c4.png"
import c5 from "../../assets/images/Careers/c5.png"
import  m from "../../assets/images/Careers/minute.png"
import card from "../../assets/images/Careers/card.png"
import cbox from "../../assets/images/Careers/cbox.png"

export default function Careers(){
    return(
        <>
            <div className="pl-8 pr-8">
                <div className="bg-[#ffd543] rounded-3xl lg:h-[600px] h-full 2xl:m-10 xl:m-9 lg:m-8 2xl:pl-16 xl:pl-8 sm:grid sm:grid-cols-2 flex flex-col relative overflow-hidden">
                    <div className="2xl:m-8 xl:m-8 lg:m-8 md:m-6 sm:m-6 m-6">
                        <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold text-black 2xl:pt-8 xl:pt-5 2xl:leading-normal md:leading-tight relative 2xl:w-[40rem] xl:w-[38rem] lg:w-[30rem] md:w-[20rem] sm:w-[16rem] w-[95%] ">Your Next Big Opportunity Starts Here!</h1>
                        <p className="xl:text-xl lg:text-lg sm:text-md text-sm font-normal text-[#000000] pt-5 2xl:leading-loose xl:leading-relaxed md:leading-normal leading-tight text-left">We empower businesses with innovative HR solutions that streamline processes and enhance employee experiences. Join our team and help shape the future of HR technology!</p>
                        <button className="xl:text-2xl lg:text-xl md:text-lg sm:text-md text-xs font-normal bg-[#086165] rounded-full xl:w-56 lg:w-48 md:w-40 sm:w-32 w-28 xl:h-14 lg:h-14 md:h-12 sm:h-10 h-8 2xl:mt-8 xl:mt-5 lg:mt-4 md:mt-3 sm:mt-3 mt-3 mb-2 text-[#deeeef] active:scale-95">Apply Now</button>
                    </div>
                    <div className="relative">
                        <img src={card} alt="Card-Img" className="absolute sm:rounded-br-3xl 2xl:h-[85%] lg:h-[75%] md:h-[85%] sm:h-[55%] h-24 bottom-0 right-[5%]"/>
                        <img src={cbox} alt="Grad-Img" className="absolute -bottom-8 -left-[45rem] h-[150px]" />
                        <img src={cbox} alt="Grad-Img" className="absolute -top-8 right-0 h-[150px]  hidden lg:block" />
                    </div>
                </div>
            </div>
            <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-semibold m-16">Why Work With Us?</h1>
            <div className="h-min-screen pb-16">
                <div className="sm:grid sm:grid-row-2 flex flex-col 2xl:px-32 md:px-20 sm:px-16 px-6 sm:gap-y-8 gap-y-5">
                    <div className="sm:grid sm:grid-cols-3 flex flex-col sm:gap-x-7 gap-y-5">
                        <div className="flex flex-col justify-between items-start rounded-3xl p-5 bg-[#fdffff] border-[#deeeef] shadow-lg border-2 hover:scale-105 transition">
                            <h3 className="lg:text-xl sm:text-md font-semibold">Impactful Work</h3>
                            <div className="flex flex-row justify-center"><img src={c1} alt="Card1-Img" className="h-auto scale-110" /></div>
                        </div>
                        <div className="flex flex-col justify-between items-start rounded-3xl p-5 bg-[#fdffff] border-[#deeeef] shadow-lg border-2 hover:scale-105 transition">
                            <h3 className="lg:text-xl sm:text-md font-semibold">Growth Opportunities</h3>
                            <div className="flex flex-row justify-center"><img src={c2} alt="Card2-Img" className="h-auto w-[75%]" /></div>
                        </div>
                        <div className="flex flex-col justify-between items-start rounded-3xl p-5 bg-[#fdffff] border-[#deeeef] shadow-lg border-2 hover:scale-105 transition">
                            <h3 className="lg:text-xl sm:text-md font-semibold">Collaborative Culture</h3>
                            <div className="flex flex-row justify-center relative">
                                <img src={c3} alt="Card3-Img" className="h-auto w-[65%]" />
                                <img src={m} alt="Card3ch-Img" className="absolute -top-7"/>
                            </div>
                        </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-2 flex flex-col gap-x-7 gap-y-5">
                        <div className="flex flex-col justify-between items-start rounded-3xl p-5 bg-[#fdffff] border-[#deeeef] shadow-lg border-2 hover:scale-105 transition">
                            <h3 className="lg:text-xl sm:text-md font-semibold">Work-Life Balance</h3>
                            <div className="flex flex-row justify-center relative">
                                <img src={c4} alt="Card4-Img" className="h-auto w-[80%]" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-start rounded-3xl p-5 bg-[#fdffff] border-[#deeeef] shadow-lg border-2 hover:scale-105 transition">
                            <h3 className="lg:text-xl sm:text-md font-semibold">Innovative Environment</h3>
                            <div className="flex flex-row justify-center"><img src={c5} alt="Card5-Img" className="h-auto w-[60%]" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <JobOpenings />
        </>
    );
}