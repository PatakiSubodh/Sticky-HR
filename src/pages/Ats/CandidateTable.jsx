import React, { useState } from "react";
import usrDoc from "../../assets/images/usrMngt-img/usrDoc.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEye,
    faCheck,
    faTimes,
    faMagnifyingGlass,
    faFilter,
    faCaretLeft,
    faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

// Static sample data (used as fallback if no scan results are available)
const defaultCandidates = [
    { name: "Pravin Kumar", email: "pravin@gmail.com", jobRole: "Senior Frontend Developer", experience: "5 years", matchScore: 63, status: "Shortlisted" },
    { name: "John Doe", email: "john@gmail.com", jobRole: "UX Designer", experience: "1 year", matchScore: 56, status: "Pending" },
    { name: "Jane Smith", email: "jane@gmail.com", jobRole: "Testing", experience: "0 years", matchScore: 78, status: "Shortlisted" },
    { name: "Alice Johnson", email: "alice@gmail.com", jobRole: "Senior Frontend Developer", experience: "8 years", matchScore: 76, status: "Shortlisted" },
    { name: "Bob Brown", email: "bob@gmail.com", jobRole: "Developer", experience: "12 years", matchScore: 45, status: "Pending" },
    { name: "Charlie Davis", email: "charlie@gmail.com", jobRole: "Senior Frontend Developer", experience: "3 years", matchScore: 38, status: "Shortlisted" },
    { name: "Diana Evans", email: "diana@gmail.com", jobRole: "Backend Developer", experience: "7 years", matchScore: 82, status: "Pending" },
    { name: "Ethan Fox", email: "ethan@gmail.com", jobRole: "DevOps Engineer", experience: "4 years", matchScore: 67, status: "Shortlisted" },
    { name: "Fiona Green", email: "fiona@gmail.com", jobRole: "Product Manager", experience: "10 years", matchScore: 91, status: "Pending" },
    { name: "George Hill", email: "george@gmail.com", jobRole: "Frontend Developer", experience: "2 years", matchScore: 59, status: "Shortlisted" },
    { name: "Hannah Ivy", email: "hannah@gmail.com", jobRole: "QA Engineer", experience: "6 years", matchScore: 73, status: "Pending" },
    { name: "Ian James", email: "ian@gmail.com", jobRole: "Full Stack Developer", experience: "9 years", matchScore: 85, status: "Shortlisted" },
];

const CandidateTable = ({ scanResults = [] }) => {
    // State for filters, sorting, and pagination
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [experienceFilter, setExperienceFilter] = useState("All");
    const [matchScoreSort, setMatchScoreSort] = useState("None");
    const [statusFilter, setStatusFilter] = useState("All");
    const [tempExperienceFilter, setTempExperienceFilter] = useState("All");
    const [tempMatchScoreSort, setTempMatchScoreSort] = useState("None");
    const [tempStatusFilter, setTempStatusFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const candidatesPerPage = 5;

    // Options for experience and status filters
    const experienceLevels = [
        { label: "All", value: "All" },
        { label: "Fresher", value: "0 years" },
        { label: "Junior Level", value: "1-2 years" },
        { label: "Mid-Level", value: "3-5 years" },
        { label: "Senior Level", value: "6-10 years" },
        { label: "Expert / Leadership", value: "10+ years" },
    ];

    const statusOptions = ["All", "Shortlisted", "Pending"];

    // Function to view a file (for scanned reports)
    const viewFile = (file) => {
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL, "_blank");
        setTimeout(() => URL.revokeObjectURL(fileURL), 1000);
    };

    // Parse experience string to a number of years
    const getExperienceYears = (experience) => {
        const years = parseInt(experience.split(" ")[0], 10);
        return isNaN(years) ? 0 : years;
    };

    // Check if experience falls within the selected range
    const matchesExperienceRange = (experience, range) => {
        const years = getExperienceYears(experience);
        switch (range) {
            case "All":
                return true;
            case "0 years":
                return years === 0;
            case "1-2 years":
                return years >= 1 && years <= 2;
            case "3-5 years":
                return years >= 3 && years <= 5;
            case "6-10 years":
                return years >= 6 && years <= 10;
            case "10+ years":
                return years > 10;
            default:
                return false;
        }
    };

    // Use scanResults if available; otherwise, use defaultCandidates
    const data = scanResults.length > 0 ? scanResults : defaultCandidates;

    // Apply filters and sorting
    const filteredData = data
        .filter(
            (candidate) =>
                candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
                matchesExperienceRange(candidate.experience, experienceFilter) &&
                (statusFilter === "All" || candidate.status === statusFilter)
        )
        .sort((a, b) => {
            if (matchScoreSort === "Ascending") return a.matchScore - b.matchScore;
            if (matchScoreSort === "Descending") return b.matchScore - a.matchScore;
            return 0;
        });

    // Pagination calculations
    const totalPages = Math.ceil(filteredData.length / candidatesPerPage);
    const startIndex = (currentPage - 1) * candidatesPerPage;
    const endIndex = startIndex + candidatesPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);

    // Reset filters to default values
    const resetFilters = () => {
        setTempExperienceFilter("All");
        setTempMatchScoreSort("None");
        setTempStatusFilter("All");
        setExperienceFilter("All");
        setMatchScoreSort("None");
        setStatusFilter("All");
        setSearchQuery("");
        setCurrentPage(1);
        setIsFilterOpen(false);
    };

    // Apply temporary filter values
    const applyFilters = () => {
        setExperienceFilter(tempExperienceFilter);
        setMatchScoreSort(tempMatchScoreSort);
        setStatusFilter(tempStatusFilter);
        setCurrentPage(1);
        setIsFilterOpen(false);
    };

    // Handle page navigation
    const changePage = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="w-full h-full flex flex-col">
            <h1 className="text-xl font-normal">Candidates</h1>

            {/* Search and Filter Section */}
            <div className="flex justify-end items-center mb-4 top-0 z-10">
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by name"
                            className="border border-gray-300 rounded-md pl-8 pr-2 py-1 text-sm focus:outline-none"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-700" />
                        </span>
                    </div>
                    <div className="relative">
                        <button
                            className="border border-[#3B9B9F] bg-[#DEEEEF] rounded-md px-3 py-1 text-sm flex items-center transition-all duration-200 ease-in-out 
                                    hover:bg-[#3B9B9F] hover:shadow-md hover:text-white group"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                        >
                            <span className="ml-1 flex items-center space-x-1 text-[#086165] group-hover:text-white">
                                <FontAwesomeIcon icon={faFilter} className="group-hover:text-white" />
                                <span>Filters</span>
                            </span>
                        </button>
                        {isFilterOpen && (
                            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg p-4 z-20">
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Experience</label>
                                    <select
                                        value={tempExperienceFilter}
                                        onChange={(e) => setTempExperienceFilter(e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm"
                                    >
                                        {experienceLevels.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Match Score</label>
                                    <select
                                        value={tempMatchScoreSort}
                                        onChange={(e) => setTempMatchScoreSort(e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm"
                                    >
                                        <option value="None">None</option>
                                        <option value="Ascending">Ascending (0% to 100%)</option>
                                        <option value="Descending">Descending (100% to 0%)</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Status</label>
                                    <select
                                        value={tempStatusFilter}
                                        onChange={(e) => setTempStatusFilter(e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm"
                                    >
                                        {statusOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={applyFilters}
                                        className="w-full bg-[#086165] text-white rounded-md py-1 text-sm hover:bg-[#054d50]"
                                    >
                                        Apply Filters
                                    </button>
                                    <button
                                        onClick={resetFilters}
                                        className="w-full bg-gray-500 text-white rounded-md py-1 text-sm hover:bg-gray-600"
                                    >
                                        Clear Filters
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="flex-1">
                <table className="w-full text-sm text-left">
                    <thead>
                        <tr className="text-gray-500">
                            <th className="py-2">Candidate</th>
                            <th className="py-2">Job Role</th>
                            <th className="py-2">Experience</th>
                            <th className="py-2">Match Score</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.length > 0 ? (
                            currentData.map((candidate, index) => (
                                <tr key={index} className="border-t">
                                    <td className="py-3 flex items-center space-x-2">
                                        <div className="w-8 h-8 bg-gray-200 rounded-full">
                                            <img src={usrDoc} alt="user" className="rounded-full" />
                                        </div>
                                        <div>
                                            <p className="font-medium">{candidate.name}</p>
                                            <p className="text-gray-500 text-xs">{candidate.email}</p>
                                        </div>
                                    </td>
                                    <td className="py-3">{candidate.jobRole}</td>
                                    <td className="py-3">{candidate.experience}</td>
                                    <td className="py-3">
                                        <div className="flex items-center space-x-2">
                                            <span>{candidate.matchScore}%</span>
                                            <div className="w-24 h-2 bg-[#DEEEEF] rounded-full">
                                                <div
                                                    className="h-2 bg-[#086165] rounded-full"
                                                    style={{ width: `${candidate.matchScore}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs ${
                                                candidate.status === "Shortlisted"
                                                    ? "bg-[#DCFCE7] text-[#166534]"
                                                    : "bg-[#FEF9C3] text-[#854D0E]"
                                            }`}
                                        >
                                            {candidate.status}
                                        </span>
                                    </td>
                                    <td className="py-3 flex space-x-2">
                                        {candidate.file ? (
                                            <button
                                                className="text-gray-500 hover:text-gray-700"
                                                onClick={() => viewFile(candidate.file)}
                                            >
                                                <FontAwesomeIcon icon={faEye} />
                                            </button>
                                        ) : (
                                            <button className="text-gray-500 hover:text-gray-700">
                                                <FontAwesomeIcon icon={faEye} />
                                            </button>
                                        )}
                                        <button className="text-green-500 hover:text-green-700">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </button>
                                        <button className="text-red-500 hover:text-red-700">
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="py-3 text-center text-gray-500">
                                    No candidates found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Section */}
            <div className="flex justify-end items-center mt-4">
                <div className="flex space-x-2">
                    <button
                        onClick={() => changePage(Math.max(currentPage - 1, 1))}
                        disabled={currentPage === 1}
                        className={`w-8 h-8 flex items-center justify-center border border-[#A0BDBF] rounded ${
                            currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-[#FFC600]"
                        }`}
                    >
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => changePage(page)}
                            className={`w-8 h-8 flex items-center justify-center border border-[#A0BDBF] rounded ${
                                currentPage === page ? "bg-teal-500 text-white" : "text-gray-700"
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => changePage(Math.min(currentPage + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`w-8 h-8 flex items-center justify-center border border-[#A0BDBF] rounded ${
                            currentPage === totalPages ? "text-gray-300 cursor-not-allowed" : "text-[#FFC600]"
                        }`}
                    >
                        <FontAwesomeIcon icon={faCaretRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CandidateTable;