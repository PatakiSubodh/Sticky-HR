import { useState, useEffect } from "react";
import TaskOne from "./TaskOne";
import TaskTwo from "./TaskTwo";
import TaskThree from "./TaskThree";
import TaskFour from "./TaskFour";

export default function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [files, setFiles] = useState([]);
    const [isScanComplete, setIsScanComplete] = useState(false); // Track scan completion
    const [scanResults, setScanResults] = useState([]); // Store scan results

    const steps = ["Upload Resume", "Job Description", "Scan Resume", "Scan Results"];

    useEffect(() => {
        const savedFiles = localStorage.getItem("uploadedFiles");
        if (savedFiles) {
            setFiles(JSON.parse(savedFiles));
        }
        // Reset scan completion status and scan results when the component mounts
        setIsScanComplete(false);
        setScanResults([]);
    }, []);

    const handleFileChange = (uploadedFiles) => {
        setFiles(uploadedFiles);
        localStorage.setItem("uploadedFiles", JSON.stringify(uploadedFiles));
    };

    const handleFileDelete = (fileToDelete) => {
        const updatedFiles = files.filter((file) => file.name !== fileToDelete.name);
        setFiles(updatedFiles);
        localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
    };

    const handleScanComplete = (success, results) => {
        setIsScanComplete(success); // Set scan completion status
        setScanResults(results); // Store scan results
    };

    const nextStep = () => {
        if (step === 1 && files.length === 0) {
            alert("Please upload at least one file before proceeding.");
            return;
        }
        if (step === 3 && !isScanComplete) {
            return; // Prevent proceeding if scan is not complete
        }
        if (step < steps.length) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
            // Reset scan completion status and scan results when going back from step 3
            if (step === 3) {
                setIsScanComplete(false);
                setScanResults([]);
            }
        }
    };

    const renderStepComponent = () => {
        switch (step) {
            case 1:
                return <TaskOne files={files} onFileChange={handleFileChange} onFileDelete={handleFileDelete} />;
            case 2:
                return <TaskTwo files={files} />;
            case 3:
                return <TaskThree files={files} onScanComplete={handleScanComplete} />;
            case 4:
                return <TaskFour files={files} scanResults={scanResults} />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-white rounded-xl w-full">
            <h1 className="text-start font-bold text-xl pl-5 pt-5">AI-Powered ATS</h1>
            <div className="flex flex-col items-center justify-center xl:px-60 md:px-40 sm:px-20">
                <div className="flex flex-col rounded-lg px-6 w-full">
                    <div className="flex items-center justify-between mb-8 relative">
                        <div className="absolute top-5 left-8 right-8 h-1 bg-gray-200"></div>
                        <div className="absolute top-5 left-8 right-8 h-1">
                            <div
                                className="h-full bg-[#086165] transition-all duration-500"
                                style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                            ></div>
                        </div>
                        {steps.map((task, i) => (
                            <div key={i} className="flex flex-col items-center z-10 relative">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                                        step > i + 1
                                            ? "border-[#086165] bg-[#086165] text-white"
                                            : step === i + 1
                                            ? "border-[#b3c8c9] bg-[#deeeef] text-[#2b2b2b] font-semibold"
                                            : "border-[#b3c8c9] bg-[#deeeef] text-[#2b2b2b]"
                                    }`}
                                >
                                    {step > i + 1 ? "✔" : i + 1}
                                </div>
                                <span className="lg:text-sm text-xs mt-2 text-[#2b2b2b] text-center font-semibold">{task}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {renderStepComponent()}

            <div className="flex justify-end p-6 mr-10 gap-x-3">
                {step > 1 && (
                    <button
                        type="button"
                        onClick={prevStep}
                        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                    >
                        Back
                    </button>
                )}
                {step < 4 && (
                    <button
                        type="button"
                        onClick={nextStep}
                        className={`px-4 py-2 rounded text-white ${
                            step === 3 && !isScanComplete
                                ? "bg-blue-300 cursor-not-allowed"
                                : "bg-blue-500 hover:bg-blue-600"
                        }`}
                        disabled={step === 3 && !isScanComplete}
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
}