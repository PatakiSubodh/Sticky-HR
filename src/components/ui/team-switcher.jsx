import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { GalleryVerticalEnd, AudioWaveform } from "lucide-react";
import cmpyLogoSm from "@/assets/images/cmpyLogoSm.png";

export function TeamSwitcher() {
    const navigate = useNavigate();

    const data = {
        teams: [
            {
                name: "StickyHR ATS",
                logo: GalleryVerticalEnd,
                plan: "Enterprise",
            },
            {
                name: "StickyHR Home Page",
                logo: cmpyLogoSm,
                isImage: true,
                plan: "Startup",
            },
        ],
    };

    const [activeTeam, setActiveTeam] = React.useState(data.teams[0]); // Default team

    const handleTeamSelect = (team) => {
        setActiveTeam(team);
        if (team.name === "StickyHR Home Page") {
            navigate("/");
        } else if (team.name === "StickyHR ATS") {
            navigate("/ats/resume-scanner");
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-3 p-2 text-black w-full">
                    <div className="w-8 h-8 bg-[#FFC600] text-[#005151] p-1 rounded-sm flex items-center justify-center">
                        {activeTeam.isImage ? (
                            <img src={activeTeam.logo} alt={activeTeam.name} className="w-full h-full object-contain" />
                        ) : (
                            <activeTeam.logo className="w-5 h-5" />
                        )}
                    </div>
                    <span className="truncate">{activeTeam.name}</span>
                    <ChevronsUpDown className="ml-auto" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
                <DropdownMenuLabel className="text-xs text-muted-foreground">Navigate to</DropdownMenuLabel>
                {data.teams.map((team) => (
                    <DropdownMenuItem key={team.name} onClick={() => handleTeamSelect(team)} className="flex items-center gap-3 p-2">
                        <div className="w-7 h-7 flex items-center justify-center">
                            {team.isImage ? (
                                <img src={team.logo} alt={team.name} className="w-full h-full object-contain" />
                            ) : (
                                <team.logo className="w-5 h-5" />
                            )}
                        </div>
                        {team.name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
