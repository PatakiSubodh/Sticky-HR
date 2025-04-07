import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function TaskThree({ files, onScanComplete }) {
    const [status, setStatus] = useState("idle"); // idle, loading, success

    // Reset status to "idle" when the component mounts (e.g., when navigating back)
    useEffect(() => {
        setStatus("idle");
    }, []);

    const handleScanResume = async () => {
        setStatus("loading"); // Start loading animation

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2-second delay

            // Simulate scan results for each file
            const scanResults = files.map((file, index) => ({
                name: file.name.split(".")[0], // Use file name (without extension) as candidate name
                email: `candidate${index + 1}@example.com`, // Simulated email
                jobRole: "Developer", // Simulated job role (could be extracted from TaskTwo if available)
                experience: `${Math.floor(Math.random() * 10) + 1} years`, // Simulated experience (1-10 years)
                matchScore: Math.floor(Math.random() * 41) + 50, // Simulated match score (50-90%)
                status: Math.random() > 0.5 ? "Shortlisted" : "Pending", // Simulated status
                file: file, // Store the file object for viewing
            }));

            setStatus("success"); // Show success animation after processing
            onScanComplete(true, scanResults); // Pass scan results to parent
        } catch (error) {
            console.error("Error scanning resume:", error);
            setStatus("idle"); // Reset to idle on error
            onScanComplete(false, []); // Pass empty results on failure
        }
    };

    return (
        <>
            <div className="bg-[#f5f5f5] border-[#e0e0e0] border-2 w-auto h-full rounded-xl px-40 py-16 mx-12">
                <div className="bg-[#fff] h-full border-2 border-[#e0e0e0] rounded-[10px] sm:rounded-[15px] md:rounded-[24px] sm:p-8 p-2 flex flex-col items-center justify-center">
                    {/* Show heading and description only when idle */}
                    {status === "idle" && (
                        <>
                            <h1 className="text-base text-start font-semibold w-full">Processing Job</h1>
                            <p className="text-sm text-[#6f6f6f] text-start pt-5 w-full">
                                Click the button below to scan uploaded resume and match them with the job description
                            </p>
                        </>
                    )}

                    {/* Animation/button container */}
                    <div className="flex flex-col items-center p-8">
                        {status === "idle" ? (
                            <button
                                className="text-center font-semibold mt-5 py-2 px-4 bg-[#FFC600] rounded-xl text-black shadow-md hover:bg-[#FFD700] active:scale-95 transition cursor-pointer"
                                onClick={handleScanResume}
                            >
                                Scan Resume
                            </button>
                        ) : (
                            <div className="flex flex-col items-center justify-center">
                                <AnimatePresence mode="wait">
                                    {status === "loading" ? (
                                        <motion.div
                                            key="loading"
                                            className="flex flex-col items-center justify-center"
                                            exit={{
                                                opacity: 0,
                                                scale: 0.8,
                                                transition: { duration: 0.3 },
                                            }}
                                        >
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{
                                                    duration: 1,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    ease: "linear",
                                                }}
                                            >
                                                <Loader2 className="w-16 h-16 text-blue-500" strokeWidth={2} />
                                            </motion.div>
                                            <motion.p
                                                className="mt-4 text-xl font-medium text-gray-700"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                Processing...
                                            </motion.p>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="success"
                                            className="flex flex-col pt-5 items-center justify-center"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {/* Success icon container */}
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 200,
                                                    damping: 10,
                                                    delay: 0.1,
                                                }}
                                                className="relative"
                                            >
                                                {/* First outer ring */}
                                                <motion.div
                                                    className="absolute bg-green-200 rounded-full"
                                                    style={{
                                                        width: "120px",
                                                        height: "120px",
                                                        top: "-12px",
                                                        left: "-12px",
                                                        right: "-12px",
                                                        bottom: "-12px",
                                                    }}
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{
                                                        scale: [0, 1.2, 1.2, 0],
                                                        opacity: [0, 0.5, 0.5, 0],
                                                    }}
                                                    transition={{
                                                        duration: 2.4,
                                                        times: [0, 0.2, 0.8, 1],
                                                        delay: 0.3,
                                                        ease: "easeInOut",
                                                    }}
                                                />
                                                {/* Second outer ring */}
                                                <motion.div
                                                    className="absolute bg-green-200 rounded-full"
                                                    style={{
                                                        width: "120px",
                                                        height: "120px",
                                                        top: "-12px",
                                                        left: "-12px",
                                                        right: "-12px",
                                                        bottom: "-12px",
                                                    }}
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{
                                                        scale: [0, 1.2, 1.2, 0],
                                                        opacity: [0, 0.5, 0.5, 0],
                                                    }}
                                                    transition={{
                                                        duration: 2.4,
                                                        times: [0, 0.2, 0.8, 1],
                                                        delay: 0.6,
                                                        ease: "easeInOut",
                                                    }}
                                                />
                                                {/* Third outer ring */}
                                                <motion.div
                                                    className="absolute bg-green-200 rounded-full"
                                                    style={{
                                                        width: "120px",
                                                        height: "120px",
                                                        top: "-12px",
                                                        left: "-12px",
                                                        right: "-12px",
                                                        bottom: "-12px",
                                                    }}
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{
                                                        scale: [0, 1.2, 1.2, 0],
                                                        opacity: [0, 0.5, 0.5, 0],
                                                    }}
                                                    transition={{
                                                        duration: 2.4,
                                                        times: [0, 0.2, 0.8, 1],
                                                        delay: 0.9,
                                                        ease: "easeInOut",
                                                    }}
                                                />
                                                {/* Fourth outer ring */}
                                                <motion.div
                                                    className="absolute bg-green-200 rounded-full"
                                                    style={{
                                                        width: "120px",
                                                        height: "120px",
                                                        top: "-12px",
                                                        left: "-12px",
                                                        right: "-12px",
                                                        bottom: "-12px",
                                                    }}
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{
                                                        scale: [0, 1.2, 1.2, 0],
                                                        opacity: [0, 0.5, 0.5, 0],
                                                    }}
                                                    transition={{
                                                        duration: 2.4,
                                                        times: [0, 0.2, 0.8, 1],
                                                        delay: 1.2,
                                                        ease: "easeInOut",
                                                    }}
                                                />

                                                {/* Green circle */}
                                                <motion.div
                                                    className="flex items-center justify-center w-24 h-24 bg-green-500 rounded-full"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.3, delay: 0.2 }}
                                                >
                                                    {/* Checkmark */}
                                                    <svg width="60" height="60" viewBox="0 0 60 60">
                                                        <motion.path
                                                            d="M17 30 L27 40 L43 24"
                                                            fill="transparent"
                                                            stroke="white"
                                                            strokeWidth="4"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            initial={{ pathLength: 0, opacity: 0 }}
                                                            animate={{ pathLength: 1, opacity: 1 }}
                                                            transition={{
                                                                delay: 0.5,
                                                                duration: 0.8,
                                                                ease: "easeOut",
                                                            }}
                                                        />
                                                    </svg>
                                                </motion.div>
                                            </motion.div>

                                            {/* Success text */}
                                            <motion.h2
                                                className="mt-6 text-2xl font-bold text-gray-800"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 1.5, duration: 0.5 }}
                                            >
                                                Success!
                                            </motion.h2>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}