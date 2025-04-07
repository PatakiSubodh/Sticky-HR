import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function TaskFour({ files, scanResults }) {
    const navigate = useNavigate();

    const handleViewFile = (file) => {
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL, "_blank");
        setTimeout(() => URL.revokeObjectURL(fileURL), 1000);
    };

    const goToReport = () => {
        // Pass scanResults as navigation state
        navigate("/ats/report", { state: { scanResults } });
    };

    return (
        <div className="bg-[#f5f5f5] border-[#e0e0e0] border-2 w-auto h-full rounded-xl px-40 py-16 mx-12">
            <div className="bg-[#fff] h-full border-2 border-[#e0e0e0] rounded-[10px] sm:rounded-[15px] md:rounded-[24px] sm:p-8 p-2">
                <h1 className="text-base text-start font-semibold w-full">Scan Results</h1>
                <p className="text-sm text-[#6f6f6f] text-start pt-2 w-full">
                    Below are the results of the resume scan based on the job description.
                </p>

                {/* Table for displaying files */}
                {files.length === 0 ? (
                    <p className="text-sm text-[#6f6f6f] text-center mt-8">No files uploaded.</p>
                ) : (
                    <div className="mt-6 w-full">
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white rounded-xl border-separate border-spacing-y-3">
                                <thead>
                                    <tr style={{ backgroundColor: "#3B9B9F" }} className="rounded-xl">
                                        <th className="py-2 px-4 text-left text-sm font-semibold text-white rounded-l-xl">S.No</th>
                                        <th className="py-2 px-4 text-left text-sm font-semibold text-white">Upload Resume</th>
                                        <th className="py-2 px-4 text-left text-sm font-semibold text-white">Similarity Score</th>
                                        <th className="py-2 px-4 text-left text-sm font-semibold text-white rounded-r-xl">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {files.map((file, index) => {
                                        // Find the corresponding scan result for this file
                                        const scanResult = scanResults.find((result) => result.file === file);
                                        return (
                                            <tr
                                                key={index}
                                                style={{ backgroundColor: "#DEEEEF" }}
                                                className="rounded-xl border border-[#e0e0e0]"
                                            >
                                                <td className="py-2 px-4 text-sm text-black rounded-l-xl">{index + 1}</td>
                                                <td className="py-2 px-4 text-sm text-black">{file.name}</td>
                                                <td className="py-2 px-4 text-sm text-black">
                                                    {scanResult ? `${scanResult.matchScore}%` : "N/A"}
                                                </td>
                                                <td className="py-2 px-4 rounded-r-xl">
                                                    <FontAwesomeIcon
                                                        icon={faEye}
                                                        className="text-blue-500 cursor-pointer"
                                                        onClick={() => handleViewFile(file)}
                                                    />
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* View Report Button */}
                {files.length > 0 && (
                    <div className="flex justify-end mt-6">
                        <button
                            onClick={goToReport}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            View Report
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}