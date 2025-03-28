import React, { useState } from 'react';
import usrDoc from '../../assets/images/usrMngt-img/usrDoc.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCheck, faTimes, faMagnifyingGlass, faFilter, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const candidates = [
    { name: 'Pravin Kumar', email: 'pravin@gmail.com', jobRole: 'Senior Frontend Developer', experience: '5 years', matchScore: 63, status: 'Shortlisted' },
    { name: 'John Doe', email: 'john@gmail.com', jobRole: 'UX Designer', experience: '1 year', matchScore: 56, status: 'Pending' },
    { name: 'Jane Smith', email: 'jane@gmail.com', jobRole: 'Testing', experience: '0 years', matchScore: 78, status: 'Shortlisted' },
    { name: 'Alice Johnson', email: 'alice@gmail.com', jobRole: 'Senior Frontend Developer', experience: '8 years', matchScore: 76, status: 'Shortlisted' },
    { name: 'Bob Brown', email: 'bob@gmail.com', jobRole: 'Developer', experience: '12 years', matchScore: 45, status: 'Pending' },
    { name: 'Charlie Davis', email: 'charlie@gmail.com', jobRole: 'Senior Frontend Developer', experience: '3 years', matchScore: 38, status: 'Shortlisted' },
    { name: 'Diana Evans', email: 'diana@gmail.com', jobRole: 'Backend Developer', experience: '7 years', matchScore: 82, status: 'Pending' },
    { name: 'Ethan Fox', email: 'ethan@gmail.com', jobRole: 'DevOps Engineer', experience: '4 years', matchScore: 67, status: 'Shortlisted' },
    { name: 'Fiona Green', email: 'fiona@gmail.com', jobRole: 'Product Manager', experience: '10 years', matchScore: 91, status: 'Pending' },
    { name: 'George Hill', email: 'george@gmail.com', jobRole: 'Frontend Developer', experience: '2 years', matchScore: 59, status: 'Shortlisted' },
    { name: 'Hannah Ivy', email: 'hannah@gmail.com', jobRole: 'QA Engineer', experience: '6 years', matchScore: 73, status: 'Pending' },
    { name: 'Ian James', email: 'ian@gmail.com', jobRole: 'Full Stack Developer', experience: '9 years', matchScore: 85, status: 'Shortlisted' },
];

const CandidateTable = () => {
    const [filterOpen, setFilterOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [appliedExperienceFilter, setAppliedExperienceFilter] = useState('All');
    const [appliedMatchScoreSort, setAppliedMatchScoreSort] = useState('None');
    const [appliedStatusFilter, setAppliedStatusFilter] = useState('All');
    const [tempExperienceFilter, setTempExperienceFilter] = useState('All');
    const [tempMatchScoreSort, setTempMatchScoreSort] = useState('None');
    const [tempStatusFilter, setTempStatusFilter] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of candidates per page

    const experienceOptions = [
        { label: 'All', value: 'All' },
        { label: 'Fresher', value: '0 years' },
        { label: 'Junior Level', value: '1-2 years' },
        { label: 'Mid-Level', value: '3-5 years' },
        { label: 'Senior Level', value: '6-10 years' },
        { label: 'Expert / Leadership', value: '10+ years' },
    ];

    const statusOptions = ['All', 'Shortlisted', 'Pending'];

    const parseExperience = (exp) => {
        const years = parseInt(exp.split(' ')[0], 10);
        return isNaN(years) ? 0 : years;
    };

    const isInExperienceRange = (exp, range) => {
        const years = parseExperience(exp);
        if (range === 'All') return true;
        if (range === '0 years') return years === 0;
        if (range === '1-2 years') return years >= 1 && years <= 2;
        if (range === '3-5 years') return years >= 3 && years <= 5;
        if (range === '6-10 years') return years >= 6 && years <= 10;
        if (range === '10+ years') return years > 10;
        return false;
    };

    const filteredCandidates = candidates
        .filter(candidate => 
            candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            isInExperienceRange(candidate.experience, appliedExperienceFilter) &&
            (appliedStatusFilter === 'All' || candidate.status === appliedStatusFilter)
        )
        .sort((a, b) => {
            if (appliedMatchScoreSort === 'Ascending') return a.matchScore - b.matchScore;
            if (appliedMatchScoreSort === 'Descending') return b.matchScore - a.matchScore;
            return 0;
        });

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCandidates = filteredCandidates.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredCandidates.length / itemsPerPage);

    const clearFilters = () => {
        setTempExperienceFilter('All');
        setTempMatchScoreSort('None');
        setTempStatusFilter('All');
        setAppliedExperienceFilter('All');
        setAppliedMatchScoreSort('None');
        setAppliedStatusFilter('All');
        setSearchTerm('');
        setCurrentPage(1); // Reset to first page
        setFilterOpen(false);
    };

    const applyFilters = () => {
        setAppliedExperienceFilter(tempExperienceFilter);
        setAppliedMatchScoreSort(tempMatchScoreSort);
        setAppliedStatusFilter(tempStatusFilter);
        setCurrentPage(1); // Reset to first page when applying filters
        setFilterOpen(false);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="w-full h-full flex flex-col">
            <h1 className="text-xl font-normal">Candidates</h1>
            {/* Header with Search and Filters */}
            <div className="flex justify-end items-center mb-4 sticky top-0 z-10 bg-white">
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by name"
                            className="border border-gray-300 rounded-md pl-8 pr-2 py-1 text-sm focus:outline-none"
                            value={searchTerm}
                            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }} // Reset to page 1 on search
                        />
                        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-700" />
                        </span>
                    </div>
                    <div className="relative">
                        <button 
                            className="border border-[#3B9B9F] bg-[#DEEEEF] rounded-md px-3 py-1 text-sm flex items-center transition-all duration-200 ease-in-out 
                                    hover:bg-[#3B9B9F] hover:shadow-md hover:text-white group"
                            onClick={() => setFilterOpen(!filterOpen)}
                        >
                            <span className="ml-1 flex items-center space-x-1 text-[#086165] group-hover:text-white">
                                <FontAwesomeIcon icon={faFilter} className="group-hover:text-white" />
                                <span>Filters</span>
                            </span>
                        </button>
                        {filterOpen && (
                            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg p-4 z-20">
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Experience</label>
                                    <select
                                        value={tempExperienceFilter}
                                        onChange={(e) => setTempExperienceFilter(e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm"
                                    >
                                        {experienceOptions.map(option => (
                                            <option key={option.value} value={option.value}>{option.label}</option>
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
                                        {statusOptions.map(option => (
                                            <option key={option} value={option}>{option}</option>
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
                                        onClick={clearFilters}
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

            {/* Table Container */}
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
                        {currentCandidates.length > 0 ? (
                            currentCandidates.map((candidate, index) => (
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
                                                candidate.status === 'Shortlisted'
                                                    ? 'bg-[#DCFCE7] text-[#166534]'
                                                    : 'bg-[#FEF9C3] text-[#854D0E]'
                                            }`}
                                        >
                                            {candidate.status}
                                        </span>
                                    </td>
                                    <td className="py-3 flex space-x-2">
                                        <button className="text-gray-500 hover:text-gray-700">
                                            <FontAwesomeIcon icon={faEye} />
                                        </button>
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

            {/* Pagination */}
            <div className="flex justify-end items-center mt-4">
                <div className="flex space-x-2">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`w-8 h-8 flex items-center justify-center border border-[#A0BDBF] rounded ${
                            currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-[#FFC600]'
                        }`}
                    >
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-8 h-8 flex items-center justify-center border border-[#A0BDBF] rounded ${
                                currentPage === page ? 'bg-teal-500 text-white' : 'text-gray-700'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`w-8 h-8 flex items-center justify-center border border-[#A0BDBF] rounded ${
                            currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-[#FFC600]'
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