import CandidateTable from "./CandidateTable";

export default function Report() {
    return (
        <>
        <div className="bg-white p-6 rounded-2xl">
            <h1 className="text-2xl font-bold">Last Scanning Report</h1>
            <div className="h-[500px] overflow-auto">
                <CandidateTable />
            </div>
        </div>
        </>
    );
}