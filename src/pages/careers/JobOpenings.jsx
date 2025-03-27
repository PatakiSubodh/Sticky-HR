import JobPage from "./JobPage";

export default function JobOpenings(){
    return(
        <>
            <div className="bg-[#deeeef] min-h-screen">
                {/* Text */}
                <div className="text-center p-10">
                    <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold">Job Openings</h1>
                    <p className="font-normal xl:text-xl lg:text-lg sm:text-md text-sm mt-4">We’re hiring! Explore our current opportunities and find the role that’s right for you.</p>
                </div>
                {/* Main Container */}
                <div className="sm:grid sm:grid-row-4 flex flex-col gap-x-6 gap-y-6 xl:px-48 lg:32 md:px-20 sm:px-10 px-6 transition">
                    {/* 1st Row */}
                    <div className="sm:grid sm:grid-cols-2 flex flex-col gap-x-6 gap-y-6 ">
                        {/* top-left element */}
                        <div className="border-2 hover:border-[#086165] rounded-2xl p-6 bg-[#fff] cursor-default hover:shadow-lg shadow-black">
                            <div className="flex justify-between items-center pb-2">
                                <p className="lg:text-xl md:text-lg sm:text-base font-semibold text-[#2b2b2b]">Software Engineer</p>
                                <button className="rounded-lg bg-[#086165] lg:w-36 md:w-28 w-24 lg:h-11 md:h-9 h-7 text-[#deeeef] lg:text-xl md:text-base sm:text-sm font-medium">Apply Now</button>
                            </div>
                            <div className="grid grid-cols-3 gap-x-5 font-medium">
                                <div className="flex justify-between">
                                    <div className="text-[#2b2b2b] lg:text-base sm:text-sm leading-relaxed">
                                        <p>Location</p>
                                        <p className="leading-loose">Description</p>
                                    </div>
                                    <div className="text-[#2b2b2b] lg:leading-relaxed sm:leading-4">
                                        <p>:</p>
                                        <p className="leading-loose">:</p>
                                    </div>
                                </div>
                                <div className="text-[#666666] lg:text-base md:text-sm sm:text-xs col-span-2">
                                    <p className="lg:pb-2 md:pb-1">Bangalore / Hybrid</p>
                                    <p>Design and develop scalable HRMS solutions. Requires 3+ years of experience in [specific tech stack, e.g., Python, React]</p>
                                </div>
                            </div>
                        </div>
                        {/* top-right element */}
                        <div className="border-2 hover:border-[#086165] rounded-2xl p-6 bg-[#fff] cursor-default hover:shadow-lg shadow-black">
                            <div className="flex justify-between items-center pb-2">
                                <p className="lg:text-xl md:text-lg sm:text-base font-semibold text-[#2b2b2b]">Product Manager</p>
                                <button className="rounded-lg bg-[#086165] lg:w-36 md:w-28 w-24 lg:h-11 md:h-9 h-7 text-[#deeeef] lg:text-xl md:text-base sm:text-sm font-medium">Apply Now</button>
                            </div>
                            <div className="grid grid-cols-3 gap-x-5 font-medium">
                                <div className="flex justify-between">
                                    <div className="text-[#2b2b2b] lg:text-base sm:text-sm leading-relaxed">
                                        <p>Location</p>
                                        <p className="leading-loose">Description</p>
                                    </div>
                                    <div className="text-[#2b2b2b] lg:leading-relaxed sm:leading-4">
                                        <p>:</p>
                                        <p className="leading-loose">:</p>
                                    </div>
                                </div>
                                <div className="text-[#666666] lg:text-base md:text-sm sm:text-xs col-span-2">
                                    <p className="lg:pb-2 md:pb-1 "> Bangalore / Remote</p>
                                    <p>Shape the future of our HRMS platform by defining product roadmaps and collaborating with cross-functional teams.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-2 flex flex-col gap-x-6 gap-y-6 ">
                        {/* top-left element */}
                        <div className="border-2 hover:border-[#086165] rounded-2xl p-6 bg-[#fff] cursor-default hover:shadow-lg shadow-black">
                            <div className="flex justify-between items-center pb-2">
                                <p className="lg:text-xl md:text-lg sm:text-base font-semibold text-[#2b2b2b]">Customer Success Specialist</p>
                                <button className="rounded-lg bg-[#086165] lg:w-36 md:w-36 w-32 lg:h-11 md:h-9 h-7 text-[#deeeef] lg:text-xl md:text-base sm:text-sm font-medium">Apply Now</button>
                            </div>
                            <div className="grid grid-cols-3 gap-x-5 font-medium">
                                <div className="flex justify-between">
                                    <div className="text-[#2b2b2b] lg:text-base sm:text-sm leading-relaxed">
                                        <p>Location</p>
                                        <p className="leading-loose">Description</p>
                                    </div>
                                    <div className="text-[#2b2b2b] lg:leading-relaxed sm:leading-4">
                                        <p>:</p>
                                        <p className="leading-loose">:</p>
                                    </div>
                                </div>
                                <div className="text-[#666666] lg:text-base md:text-sm sm:text-xs col-span-2">
                                    <p className="pb-2">Remote</p>
                                    <p>Support our clients in maximizing the value of our HRMS tools. Strong communication skills required</p>
                                </div>
                            </div>
                        </div>
                        {/* top-right element */}
                        <div className="border-2 hover:border-[#086165] rounded-2xl p-6 bg-[#fff] cursor-default hover:shadow-lg shadow-black">
                            <div className="flex justify-between items-center pb-2">
                                <p className="lg:text-xl md:text-lg sm:text-base font-semibold text-[#2b2b2b]">UI/UX Designer </p>
                                <button className="rounded-lg bg-[#086165] lg:w-36 md:w-28 w-24 lg:h-11 md:h-9 h-7 text-[#deeeef] lg:text-xl md:text-base sm:text-sm font-medium">Apply Now</button>
                            </div>
                            <div className="grid grid-cols-3 gap-x-5 font-medium">
                                <div className="flex justify-between">
                                    <div className="text-[#2b2b2b] lg:text-base sm:text-sm leading-relaxed">
                                        <p>Location</p>
                                        <p className="leading-loose">Description</p>
                                    </div>
                                    <div className="text-[#2b2b2b] lg:leading-relaxed sm:leading-4">
                                        <p>:</p>
                                        <p className="leading-loose">:</p>
                                    </div>
                                </div>
                                <div className="text-[#666666] lg:text-base md:text-sm sm:text-xs col-span-2">
                                    <p className="pb-2"> Bangalore / Hybrid</p>
                                    <p>Shape the future of our HRMS platform by defining product roadmaps and collaborating with cross-functional teams.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-2 flex flex-col gap-x-6 gap-y-6">
                        {/* top-left element */}
                        <div className="border-2 hover:border-[#086165] rounded-2xl p-6 bg-[#fff] cursor-default hover:shadow-lg shadow-black">
                            <div className="flex justify-between items-center pb-2">
                                <p className="lg:text-xl md:text-lg sm:text-base font-semibold text-[#2b2b2b]">Customer Success Specialist</p>
                                <button className="rounded-lg bg-[#086165] lg:w-36 md:w-36 w-32 lg:h-11 md:h-9 h-7 text-[#deeeef] lg:text-xl md:text-base sm:text-sm font-medium">Apply Now</button>
                            </div>
                            <div className="grid grid-cols-3 gap-x-5 font-medium">
                                <div className="flex justify-between">
                                    <div className="text-[#2b2b2b] lg:text-base sm:text-sm leading-relaxed">
                                        <p>Location</p>
                                        <p className="leading-loose">Description</p>
                                    </div>
                                    <div className="text-[#2b2b2b] lg:leading-relaxed sm:leading-4">
                                        <p>:</p>
                                        <p className="leading-loose">:</p>
                                    </div>
                                </div>
                                <div className="text-[#666666] lg:text-base md:text-sm sm:text-xs col-span-2">
                                    <p className="pb-2">Remote</p>
                                    <p>Support our clients in maximizing the value of our HRMS tools. Strong communication skills required</p>
                                </div>
                            </div>
                        </div>
                        {/* top-right element */}
                        <div className="border-2 hover:border-[#086165] rounded-2xl p-6 bg-[#fff] cursor-default hover:shadow-lg shadow-black">
                            <div className="flex justify-between items-center pb-2">
                                <p className="lg:text-xl md:text-lg sm:text-base font-semibold text-[#2b2b2b]">UI/UX Designer </p>
                                <button className="rounded-lg bg-[#086165] lg:w-36 md:w-28 w-24 lg:h-11 md:h-9 h-7 text-[#deeeef] lg:text-xl md:text-base sm:text-sm font-medium">Apply Now</button>
                            </div>
                            <div className="grid grid-cols-3 gap-x-5 font-medium">
                                <div className="flex justify-between">
                                    <div className="text-[#2b2b2b] lg:text-base sm:text-sm leading-relaxed">
                                        <p>Location</p>
                                        <p className="leading-loose">Description</p>
                                    </div>
                                    <div className="text-[#2b2b2b] lg:leading-relaxed sm:leading-4">
                                        <p>:</p>
                                        <p className="leading-loose">:</p>
                                    </div>
                                </div>
                                <div className="text-[#666666] lg:text-base md:text-sm sm:text-xs col-span-2">
                                    <p className="pb-2"> Bangalore / Hybrid</p>
                                    <p>Shape the future of our HRMS platform by defining product roadmaps and collaborating with cross-functional teams.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-2 flex flex-col gap-x-6 gap-y-6 pb-10">
                        {/* top-left element */}
                        <div className="border-2 hover:border-[#086165] rounded-2xl p-6 bg-[#fff] cursor-default hover:shadow-lg shadow-black">
                            <div className="flex justify-between items-center pb-2">
                                <p className="lg:text-xl md:text-lg sm:text-base font-semibold text-[#2b2b2b]">Software Engineer</p>
                                <button className="rounded-lg bg-[#086165] lg:w-36 md:w-28 w-24 lg:h-11 md:h-9 h-7 text-[#deeeef] lg:text-xl md:text-base sm:text-sm font-medium">Apply Now</button>
                            </div>
                            <div className="grid grid-cols-3 gap-x-5 font-medium">
                                <div className="flex justify-between">
                                    <div className="text-[#2b2b2b] lg:text-base sm:text-sm leading-relaxed">
                                        <p>Location</p>
                                        <p className="leading-loose">Description</p>
                                    </div>
                                    <div className="text-[#2b2b2b] lg:leading-relaxed sm:leading-4">
                                        <p>:</p>
                                        <p className="leading-loose">:</p>
                                    </div>
                                </div>
                                <div className="text-[#666666] lg:text-base md:text-sm sm:text-xs col-span-2">
                                    <p className="lg:pb-2 md:pb-1">Bangalore / Hybrid</p>
                                    <p>Design and develop scalable HRMS solutions. Requires 3+ years of experience in [specific tech stack, e.g., Python, React]</p>
                                </div>
                            </div>
                        </div>
                        {/* top-right element */}
                        <div className="border-2 hover:border-[#086165] rounded-2xl p-6 bg-[#fff] cursor-default hover:shadow-lg shadow-black">
                            <div className="flex justify-between items-center pb-2">
                                <p className="lg:text-xl md:text-lg sm:text-base font-semibold text-[#2b2b2b]">Product Manager</p>
                                <button className="rounded-lg bg-[#086165] lg:w-36 md:w-28 w-24 lg:h-11 md:h-9 h-7 text-[#deeeef] lg:text-xl md:text-base sm:text-sm font-medium">Apply Now</button>
                            </div>
                            <div className="grid grid-cols-3 gap-x-5 font-medium">
                                <div className="flex justify-between">
                                    <div className="text-[#2b2b2b] lg:text-base sm:text-sm leading-relaxed">
                                        <p>Location</p>
                                        <p className="leading-loose">Description</p>
                                    </div>
                                    <div className="text-[#2b2b2b] lg:leading-relaxed sm:leading-4">
                                        <p>:</p>
                                        <p className="leading-loose">:</p>
                                    </div>
                                </div>
                                <div className="text-[#666666] lg:text-base md:text-sm sm:text-xs col-span-2">
                                    <p className="lg:pb-2 md:pb-1 "> Bangalore / Remote</p>
                                    <p>Shape the future of our HRMS platform by defining product roadmaps and collaborating with cross-functional teams.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* button */}
                <div className="pb-10 xl:pl-48 lg:pl-32 md:pl-28 sm:pl-20 pl-10">
                    <button className="rounded-lg text-[#086165] border-[#086165] border-2 lg:text-xl md:text-lg sm:text-base text-sm font-medium active:scale-90 lg:w-64 md:w-56 sm:w-48 w-40 lg:h-16 md:h-12 sm:h-10 h-8 bg-[#fff] hover:text-[#fff] hover:bg-[#086165] hover:border-[#fff] ">View all job openings</button>
                </div>
            </div>
            <div className="pb-16"></div>
        </>
    );
}