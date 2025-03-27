import JobOpenings from "./JobOpenings";

export default function JobPage(){
    return(
        <>
            <div className="h-screen">
                <h1 className="flex justify-center align-middle">This is Job Description</h1>
            </div>
            <JobOpenings/>
        </>
    );
}