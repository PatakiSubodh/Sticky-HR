import c1 from "../../assets/images/Ats-img/c1.png"
import c2 from "../../assets/images/Ats-img/c2.png"
import c3 from "../../assets/images/Ats-img/c3.png"
import c4 from "../../assets/images/Ats-img/c4.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Piechart from "../../components/ui/Piechart";

export default function Dashboard(){
    return(
        <>
            <div className="h-full bg-[#e1ebec] p-5">
                <h1 className="text-left text-xl pb-5 font-semibold">Dashboard</h1>
                <div className="grid grid-rows-1 grid-cols-4 gap-x-5">
                    <div className="grid bg-[#ffffff] rounded-xl p-5 ">
                        <div className="flex">
                            <img src={c1} alt="Card1-Img" className="w-[15%]"/>
                            <div className="pl-3 text-sm"><p>New</p><p className="text-xl font-semibold">25</p></div>
                        </div>
                        <p className="text-gray-500 xl:text-sm lg:text-xs sm:text-sm mt-2 text-xs flex items-center pt-3">
                            <span className="text-[#22c55e] font-medium flex items-center">
                                <FontAwesomeIcon icon={faArrowUp} className="mr-1" /> 12%
                            </span>
                            &nbsp;vs last month
                        </p>
                    </div>
                    <div className="grid bg-[#ffffff] rounded-xl p-5">
                        <div className="flex">
                            <img src={c2} alt="Card2-Img" className="w-[15%]"/>
                            <div className="pl-3 text-sm"><p>Resume Uploaded</p><p className="text-xl font-semibold">1,234</p></div>
                        </div>
                        <p className="text-gray-500 xl:text-sm lg:text-xs sm:text-sm mt-2 text-xs flex items-center pt-3">
                            <span className="text-[#22c55e] font-medium flex items-center">
                                <FontAwesomeIcon icon={faArrowUp} className="mr-1" /> 8%
                            </span>
                            &nbsp;vs last month
                        </p>
                    </div>
                    <div className="grid bg-[#ffffff] rounded-xl p-5">
                        <div className="flex">
                            <img src={c3} alt="Card3-Img" className="w-[15%]"/>
                            <div className="pl-3 text-sm"><p>Shortlisted</p><p className="text-xl font-semibold">56</p></div>
                        </div>
                        <p className="text-gray-500 xl:text-sm lg:text-xs sm:text-sm mt-2 text-xs flex items-center pt-3">
                            <span className="text-[#ef4444] font-medium flex items-center">
                                <FontAwesomeIcon icon={faArrowDown} className="mr-1" /> 3%
                            </span>
                            &nbsp;vs last month
                        </p>
                    </div>
                    <div className="grid bg-[#ffffff] rounded-xl p-5">
                        <div className="flex">
                            <img src={c4} alt="Card4-Img" className="w-[15%]"/>
                            <div className="pl-3 text-sm"><p>Rejected</p><p className="text-xl font-semibold">5</p></div>
                        </div>
                        <p className="text-gray-500 xl:text-sm lg:text-xs sm:text-sm mt-2 text-xs flex items-center pt-3">
                            <span className="text-[#22c55e] font-medium flex items-center">
                                <FontAwesomeIcon icon={faArrowUp} className="mr-1" /> 15%
                            </span>
                            &nbsp;vs last month
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 mt-5 gap-x-5 gap-y-5">
                    <div className="bg-[#fff] grid col-span-2 row-span-2 rounded-xl p-5">
                        <h1 className="text-xl font-normal">Candidates</h1>
                    </div>
                    <div className="bg-[#fff] grid rounded-xl p-5 ">
                        <h1 className="text-lg font-normal">Candidate Source</h1>
                        <div>
                            <Piechart 
                            title="Assets Status"
                            chartData={[
                                { name: "LinkedIn", value: 45, color: "#2EC4B6" },
                                { name: "Referrals", value: 30, color: "#0E7C7B" },
                                { name: "Jobs Page", value: 15, color: "#F46036" },
                                { name: "Others", value: 10, color: "#FFD166" }
                            ]} className="border-none bg-[#fff]"/>
                        </div>
                    </div> 
                    <div className="bg-[#fff] grid rounded-xl p-5">
                        <h1 className="text-lg font-normal">Job positions</h1>
                    </div>
                </div>
            </div>
        </>
    );
}