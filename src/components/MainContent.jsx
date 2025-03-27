import IntroContent from "./ui/IntroContent.jsx";
import LaunchingSoon from "./ui/LaunchingSoon.jsx";
import ServiceContent from "./ui/ServiceContent.jsx";
import Testimonials from "./ui/Testimonials.jsx";
import Features from "./ui/Features.jsx"
import Discovery from "./ui/Discovery.jsx"

export default function MainContent() {
    return (
        <div className="main-content relative w-full">
            <IntroContent />
            <LaunchingSoon />
            <ServiceContent />
            <Features />
            <Testimonials />
            <Discovery />
        </div>
    );
}

