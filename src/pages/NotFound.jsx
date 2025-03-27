// pages/NotFound.jsx
import React from "react";
import plugImageLeft from "../assets/images/not-found/plug-left.png"; // Replace with your image path
import plugImageRight from "../assets/images/not-found/plug-right.png"; // Replace with your image path

export default function NotFound() {
    return (
        <div className=" flex flex-col items-center justify-center mx-auto bg-gray-100 w-[95vw] rounded-lg my-10">
            <div className="text-center pt-10">
                {/* 404 Heading */}
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                {/* Subheading */}
                <p className="text-2xl font-medium text-gray-600 mt-4">Page not found</p>
                
                {/* Optional: Back to Home Button */}
                <a
                href="/"
                className="mt-8 inline-block px-6 py-3 bg-[#FFC600] text-black font-semibold rounded-xl hover:bg-[#FFD700] transition"
                >
                Back to Home
                </a>
            </div>
            {/* Images of characters with plugs */}
            <div className="flex justify-center items-center -mt-52 space-x-8 overflow-hidden">
                {/* Left Character */}
                <img
                    src={plugImageLeft}
                    alt="Character with plug left"
                    className="relative -left-[10%] bottom-0 w-[40%] object-contain"
                />
                {/* Right Character */}
                <img
                    src={plugImageRight}
                    alt="Character with plug right"
                    className="relative -right-[10%] bottom-0 w-[40%] object-contain"
                />
            </div>
        </div>
    );
}