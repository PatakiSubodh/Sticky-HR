// app-sidebar.jsx
import * as React from "react";
import {
  GalleryVerticalEnd,
  Frame,
  PieChart,
  Map,
} from "lucide-react";

import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import cmpyLogoSm from "../assets/images/cmpyLogoSm.png"; // Adjust the path to your image

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "sample@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "StickyHR ATS",
      logo: GalleryVerticalEnd, // Still using a Lucide icon
    },
    {
      name: "StickyHR Home Page",
      logo: cmpyLogoSm, // Using the custom image
      isImage: true, // Add a flag to indicate this is an image
    },
  ],
  projects: [
    {
      name: "Dashboard",
      url: "/ats/dashboard", // Update to proper route
      icon: Frame,
    },
    {
      name: "ATS Resume Scanner",
      url: "/ats/resume-scanner", // Update to proper route
      icon: PieChart,
    },
    {
      name: "Report",
      url: "/ats/report", // Update to proper route
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" className="[&_.bg-sidebar]:!bg-[#EDF7F3]" {...props}>
      <SidebarHeader className='!bg-transparent' >
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}