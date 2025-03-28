import React from 'react';
import usrDoc from '../../assets/images/usrMngt-img/usrDoc.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCheck, faTimes, faMagnifyingGlass, faFilter, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

// Sample data based on the image
const candidates = [
    { name: 'Pravin Kumar', email: 'pravin@gmail.com', jobRole: 'Senior Frontend Developer', experience: '5 years', matchScore: 63, status: 'Shortlisted' },
    { name: 'Pravin Kumar', email: 'pravin@gmail.com', jobRole: 'UX Designer', experience: '5 years', matchScore: 56, status: 'Pending' },
    { name: 'Pravin Kumar', email: 'pravin@gmail.com', jobRole: 'Testing', experience: '5 years', matchScore: 78, status: 'Shortlisted' },
    { name: 'Pravin Kumar', email: 'pravin@gmail.com', jobRole: 'Senior Frontend Developer', experience: '5 years', matchScore: 76, status: 'Shortlisted' },
    { name: 'Pravin Kumar', email: 'pravin@gmail.com', jobRole: 'Senior Frontend Developer', experience: '5 years', matchScore: 45, status: 'Shortlisted' },
    { name: 'Pravin Kumar', email: 'pravin@gmail.com', jobRole: 'Senior Frontend Developer', experience: '5 years', matchScore: 38, status: 'Shortlisted' },
];

const CandidateTable = () => {
    return (
        <div className="w-full flex flex-col justify-center align-middle">
            {/* Header with Search and Filters */}
            <div className="flex justify-end items-center mb-4">
                {/* <h1 className="text-xl font-normal">Candidates</h1> */}
                <div className="flex items-center space-x-2">
                <div className="relative">
                    <input
                    type="text"
                    placeholder="Search report"
                    className="border border-gray-300 rounded-md pl-8 pr-2 py-1 text-sm focus:outline-none"
                    />
                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-gray-700' />
                    </span>
                </div>
                <button className="border border-[#3B9B9F] bg-[#DEEEEF] rounded-md px-3 py-1 text-sm flex items-center">
                    <span className="ml-1 text-[#086165]">
                        <FontAwesomeIcon icon={faFilter}  />&nbsp; Filters 
                    </span>
                </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
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
                    {candidates.map((candidate, index) => (
                    <tr key={index} className="border-t">
                        <td className="py-3 flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full">
                            <img src={usrDoc} alt="user" className='rounded-full'/>
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
                    ))}
                </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-end items-center mt-4 space-x-2">
                <button className="w-8 h-8 flex items-center justify-center border border-[#A0BDBF] rounded text-gray-400">
                <FontAwesomeIcon icon={faCaretLeft} className="text-[#FFC600]" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-[#A0BDBF] rounded bg-teal-500 text-white">
                1
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-[#A0BDBF] rounded text-gray-700">
                2
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-[#A0BDBF] rounded text-gray-700">
                3
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-[#A0BDBF] rounded text-gray-700">
                4
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-[#A0BDBF] rounded text-gray-700">
                5
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-[#A0BDBF] rounded text-gray-700">
                6
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-[#A0BDBF] rounded text-gray-400">
                <FontAwesomeIcon icon={faCaretRight} className="text-[#FFC600]" />
                </button>
            </div>
        </div>
    );
};

export default CandidateTable;