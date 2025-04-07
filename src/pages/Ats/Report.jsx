import { useLocation } from "react-router-dom";
import CandidateTable from "./CandidateTable";

export default function Report() {
    const location = useLocation();
    const scanResults = location.state?.scanResults || []; // Get scanResults from navigation state

    return (
        <>
            <div className="bg-white p-6 rounded-2xl">
                <h1 className="text-2xl font-bold">Last Scanning Report</h1>
                <div className="h-[500px] overflow-auto">
                    <CandidateTable scanResults={scanResults} />
                </div>
            </div>
        </>
    );
}