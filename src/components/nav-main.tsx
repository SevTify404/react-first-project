import {SidebarMenu, SidebarMenuButton, SidebarMenuItem,} from "@/components/ui/sidebar"

import type {Sidebaritem} from "@/components/AppSidebar.tsx";
import {CircleArrowRight} from "lucide-react";
import {NavLink, useLocation} from "react-router";


export function NavMain({items}: Readonly<{ items: Sidebaritem[] }>) {
    const { pathname } = useLocation()
    return (
        <SidebarMenu className={"space-y-1"}>
            {items.map((item) => (
                <SidebarMenuItem key={item.title} className="flex justify-center">
                    <SidebarMenuButton tooltip={item.title} isActive={pathname===item.url} asChild>
                        <NavLink to={item.url} className="w-full">
                            <div className="flex w-full ">
                                {item.icon}
                                <span className="ml-2">{item.title}</span>
                                <CircleArrowRight strokeWidth={2} className="ml-auto"/>
                            </div>
                        </NavLink>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    )
}
