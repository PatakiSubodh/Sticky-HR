import c1 from "../../assets/images/Ats-img/c1.png"
import c2 from "../../assets/images/Ats-img/c2.png"
import c3 from "../../assets/images/Ats-img/c3.png"
import c4 from "../../assets/images/Ats-img/c4.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Piechart from "../../components/ui/Piechart";

import Barchart from '../../components/ui/Barchart.jsx';
import CandidateTable from "./CandidateTable.jsx";
import ResumeScanner from "@/pages/Ats/ResumeScanner"

const yearlyData = [
    { day: "Jan", type1: 56 },
    { day: "Feb", type1: 42 },
    { day: "Mar", type1: 25 },
    { day: "Apr", type1: 50 },
    { day: "May", type1: 98 },
    { day: "Jun", type1: 25 },
    { day: "Aug", type1: 62 },
    { day: "Sep", type1: 75 },
    { day: "Oct", type1: 86 },
    { day: "Nov", type1: 45 },
    { day: "Dec", type1: 32 },
];

export default function Dashboard(){
    return(
        <>
            <div className="h-full bg-[#e1ebec] p-5">
                {/* <h1 className="text-left text-xl pb-5 font-semibold">Dashboard</h1> */}
                <div className="grid gap-3">
                    <div className="grid grid-rows-1 grid-cols-4 gap-x-3">
                        <div className="flex flex-col bg-[#ffffff] rounded-xl p-5 ">
                            <div className="flex">
                                <img src={c1} alt="Card1-Img" className="w-[20%]"/>
                                <div className="pl-3 text-sm"><p>New</p><p className="text-xl font-semibold">25</p></div>
                            </div>
                            <p className="text-gray-500 xl:text-sm lg:text-xs sm:text-sm mt-2 text-xs flex items-center pt-3">
                                <span className="text-[#22c55e] font-medium flex items-center">
                                    <FontAwesomeIcon icon={faArrowUp} className="mr-1" /> 12%
                                </span>
                                &nbsp;vs last month
                            </p>
                        </div>
                        <div className="flex flex-col bg-[#ffffff] rounded-xl p-5">
                            <div className="flex">
                                <img src={c2} alt="Card2-Img" className="w-[20%]"/>
                                <div className="pl-3 text-sm"><p>Resume Uploaded</p><p className="text-xl font-semibold">1,234</p></div>
                            </div>
                            <p className="text-gray-500 xl:text-sm lg:text-xs sm:text-sm mt-2 text-xs flex items-center pt-3">
                                <span className="text-[#22c55e] font-medium flex items-center">
                                    <FontAwesomeIcon icon={faArrowUp} className="mr-1" /> 8%
                                </span>
                                &nbsp;vs last month
                            </p>
                        </div>
                        <div className="flex flex-col bg-[#ffffff] rounded-xl p-5">
                            <div className="flex">
                                <img src={c3} alt="Card3-Img" className="w-[20%]"/>
                                <div className="pl-3 text-sm"><p>Shortlisted</p><p className="text-xl font-semibold">56</p></div>
                            </div>
                            <p className="text-gray-500 xl:text-sm lg:text-xs sm:text-sm mt-2 text-xs flex items-center pt-3">
                                <span className="text-[#ef4444] font-medium flex items-center">
                                    <FontAwesomeIcon icon={faArrowDown} className="mr-1" /> 3%
                                </span>
                                &nbsp;vs last month
                            </p>
                        </div>
                        <div className="flex flex-col bg-[#ffffff] rounded-xl p-5">
                            <div className="flex">
                                <img src={c4} alt="Card4-Img" className="w-[20%]"/>
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
                    <div className="grid grid-cols-3 grid-rows-2 gap-x-3 gap-y-3">
                        <div className="bg-[#fff] grid col-span-2 row-span-2 rounded-xl p-5">
                            <CandidateTable />
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
                                ]} className="!border-none !shadow-none"/>
                            </div>
                        </div> 
                        <div className="bg-[#fff] grid rounded-xl p-5">
                            <h1 className="text-lg font-normal">Job positions</h1>
                            <Barchart
                                title="Weekly Data"
                                data={yearlyData}
                                xKey="day"
                                yKeys={["type1", "type2"]}
                                colors={["#FEC600", "#16C7BE"]}
                                yDomain={[0, 15]}
                                yTicks={[0, 25, 50, 75, 100]}
                            />
                        </div>
                    </div>
                </div>

            </div>
            {/* <ResumeScanner /> */}
        </>
    );
}