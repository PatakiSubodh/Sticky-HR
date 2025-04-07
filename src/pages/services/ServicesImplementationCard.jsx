import girl from "../../assets/images/OurStory/girl.png"
import bg from "../../assets/images/OurStory/bg.png"
import { Link } from 'react-router-dom';

import FadeInUp from '@/components/FadeInUp'
export default function ServicesImplementation() {
    return (
        <div className="servicesImplementation-component">
            {/* bottom card */}
            <div className="h-[495px] relative overflow-hidden mb-20">
                <div className=" bg-white h-24 "></div>
                <div className="sm:grid sm:grid-cols-2 flex flex-col p-8 sm:pl-0 bg-[#086165] xl:h-[400px] sm:h-[400px] h-[400px] relative pb-10">
                    <div className="relative z-20">
                        <img src={girl} alt="girl" className="absolute 2xl:-bottom-10 xl:-bottom-10 lg:-bottom-10 sm:-bottom-10 bottom-40 "/>
                    </div>
                    <div className="flex flex-col space-y-6 sm:mt-16 mt-12 z-20">
                        <FadeInUp delay={0.1}>
                        <h1 className=" text-4xl font-semibold text-[#deeeef]">How about Implementation?</h1>
                        </FadeInUp>
                        <FadeInUp delay={0.2}>
                        <p className=" text-[#deeeef] text-xl right- bottom-80 pb-8">Our StickyHR Champions will take care of this...</p>
                        </FadeInUp>
                        <FadeInUp delay={0.3}>
                        <Link to="/implementation">
                        <button className="bg-[#ffc600] border-white border-2 hover:bg-yellow-600 w-64 h-16 rounded-xl text-2xl font-medium active:scale-95 transition">Request a Demo</button>
                        </Link>
                        </FadeInUp>
                    </div>
                </div>
                <div className="absolute bottom-20 z-10">
                    <img src={bg} alt="bg img" className="scale-90 animate-flicker"/>
                </div>
                <div className=" w-[26rem] h-[26rem] border-2 border-[#3e8488] rounded-full absolute -bottom-56 -right-56" ></div>
                <div className=" w-[22rem] h-[22rem] border-2 border-[#3e8488] rounded-full absolute -bottom-56 -right-56" ></div>
            </div>
        </div>
    );
}