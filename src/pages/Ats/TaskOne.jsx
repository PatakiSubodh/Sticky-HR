import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import upload from "../../assets/images/Ats-img/upload.png";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TaskOne({ files, onFileChange, onFileDelete }) {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const newFiles = Array.from(event.target.files);
        const totalFiles = files.length + newFiles.length;

        if (totalFiles > 10) {
            alert("You can upload a maximum of 10 files.");
            return;
        }

        const updatedFiles = [...files, ...newFiles];
        onFileChange(updatedFiles);
    };

    return (
        <div className="bg-[#f5f5f5] border-[#e0e0e0] border-2 w-auto h-full rounded-xl px-40 py-16 mx-12">
            <div className="bg-[#fff] h-full border-2 border-[#e0e0e0] rounded-[10px] sm:rounded-[15px] md:rounded-[24px] flex flex-col items-center justify-center sm:p-8 p-2">
                {/* Show upload section only if no files are uploaded */}
                {files.length === 0 ? (
                    <div className="flex flex-col items-center w-full">
                        <img src={upload} alt="Upload-Img" className="w-[7%]" />

                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                            multiple
                            onChange={handleFileChange}
                        />

                        <button
                            className="text-center font-semibold py-3 px-4 bg-[#FFC600] rounded-xl text-black shadow-md hover:bg-[#FFD700] active:scale-95 transition cursor-pointer"
                            onClick={handleButtonClick}
                        >
                            Upload Your Resume{files.length > 0 ? "s" : ""}
                        </button>

                        <p className="text-xs text-[#6f6f6f] text-center pt-5">
                            Drop your resumes here or choose files. <br />
                            PDF & DOCX only. Max 2MB file size per file. Max 10 files.
                        </p>
                    </div>
                ) : (
                    <div className="w-full">
                        <h3 className="text-sm font-semibold mb-2">Uploaded Files ({files.length}/10):</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white rounded-xl border-separate border-spacing-y-2">
                                <thead>
                                    <tr style={{ backgroundColor: "#3B9B9F" }} className="rounded-xl">
                                        <th className="py-2 px-4 text-left text-sm font-semibold text-white rounded-tl-xl rounded-bl-xl">Sl No</th>
                                        <th className="py-2 px-4 text-left text-sm font-semibold text-white">File Name</th>
                                        <th className="py-2 px-4 text-left text-sm font-semibold text-white rounded-tr-xl rounded-br-xl">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {files.map((file, index) => (
                                        <tr
                                            key={index}
                                            style={{ backgroundColor: "#DEEEEF" }}
                                            className="rounded-xl border border-[#e0e0e0]"
                                        >
                                            <td className="py-2 px-4 text-sm text-black rounded-l-xl">{index + 1}</td>
                                            <td className="py-2 px-4 text-sm text-black">{file.name}</td>
                                            <td className="py-2 px-4 rounded-r-xl">
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                    className="cursor-pointer"
                                                    onClick={() => onFileDelete(file)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}