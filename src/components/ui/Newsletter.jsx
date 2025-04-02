import { PlaceholdersAndVanishInput } from "./PlaceholdersAndVanishInput";

export function Newsletter() {
    const placeholders = [
        "Enter your email",
        "Subscribe to updates",
        "Join our newsletter",
        "Get the latest news",
    ];

    return (
        <div>
        <h2 className="text-2xl font-bold text-[#F5F5F5] mb-6">
            Subscribe to Our Newsletter
        </h2>
        <PlaceholdersAndVanishInput
            placeholders={placeholders}
        />
        </div>
    );
}