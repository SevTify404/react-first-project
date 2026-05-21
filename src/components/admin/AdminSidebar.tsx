import * as React from "react"

import {AdminSidebarMain} from "@/components/admin/AdminSidebarMain.tsx"
import {AdminSidebarFoot} from "@/components/admin/AdminSidebarFoot.tsx"
import {AdminSideBarHead} from "@/components/admin/AdminSideBarHead.tsx"
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail,} from "@/components/ui/sidebar.tsx"
import {TooltipProvider} from "@/components/ui/tooltip.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {sidebarItems, userData} from "@/data/sidebar.tsx";

export function AdminSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <TooltipProvider>
            {/*Ou carrément on utilise collapsible="icon"*/}
            <Sidebar variant="floating" collapsible="icon" {...props}>
                <SidebarHeader>
                    <AdminSideBarHead/>
                </SidebarHeader>
                <Separator/>
                <SidebarContent className="mt-3">
                    <AdminSidebarMain items={sidebarItems}/>
                </SidebarContent>
                <SidebarFooter>
                    <AdminSidebarFoot user={userData}/>
                </SidebarFooter>
                <SidebarRail/>
            </Sidebar>
        </TooltipProvider>
    )
}
