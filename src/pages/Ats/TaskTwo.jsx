import genbtn from "../../assets/images/Ats-img/genbtn.png";

export default function TaskTwo() {
    return (
        <>
            <div className="px-10">
                <div className="bg-[#f5f5f5] w-full min-h-[18rem] rounded-xl border-[#e7edef] p-2">
                    <div className="grid grid-cols-2 grid-rows-2">
                        <div className="p-3">
                            <h1 className="text-sm font-semibold mb-3">Enter Job Role</h1>
                            <textarea
                                placeholder="Enter the job role"
                                className="rounded-xl p-2 w-full h-32 resize-none overflow-y-auto"
                            />
                        </div>
                        <div className="relative p-3 row-span-2">
                            <h1 className="text-sm font-semibold">Enter Job Description</h1>
                            <div className="relative rounded-xl bg-[#fff] mt-3">
                                <textarea
                                    placeholder="Enter the job description"
                                    className="p-2 rounded-xl h-72 w-full resize-none overflow-y-auto pr-16" // Added pr-16 to make space for the button
                                />
                                <div className="absolute bottom-3 left-3 right-3 flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Generated a job description"
                                        className="bg-[#faf9f9] rounded-xl py-2 px-3 w-full"
                                    />
                                    <img
                                        src={genbtn}
                                        alt="Gen-Btn"
                                        className="border-[#e7edef] absolute right-2 w-[7%] h-auto hover:cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="p-3 pt-5">
                            <h1 className="text-sm font-semibold mb-3">Enter Job Skills</h1>
                            <textarea
                                placeholder="Enter the job skills"
                                className="p-2 rounded-xl h-32 w-full resize-none overflow-y-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}