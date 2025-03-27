import React from "react"
import { Link, useLocation } from 'react-router-dom';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


export default function CareersNav(){
    const location = useLocation();
    return(
        <div className="main-nav flex mx-16 my-5 justify-between pt-5">
            {/* nav-logo */}
            <Link to="/"><img src={logo} alt="company logo" className="w-52"/></Link>

            {/* nav-options */}
            <NavigationMenu>
                <NavigationMenuList className="text-base"> 
                    
                    <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link to="/">
                        <Button
                            variant="link"
                            className={`text-base font-medium hover:no-underline ${
                            location.pathname === "/" ? "bg-[#086165] text-white px-4 py-2 rounded-3xl" : ""
                            }`}
                        >
                            Home
                        </Button>
                        </Link>
                    </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link to="/">
                        <Button
                            variant="link"
                            className={`text-base font-medium hover:no-underline ${
                            location.pathname === "/careers" ? "bg-[#086165] text-white px-4 py-2 rounded-3xl" : ""
                            }`}
                        >
                            Careers
                        </Button>
                        </Link>
                    </NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
            
            {/* nav-contact-us-button */}
            <Button className="bg-yellow-400 text-black rounded-3xl font-semibold text-md hover:text-white px-7 py-6">
            Sign In
            </Button>  
        </div>
    );
}