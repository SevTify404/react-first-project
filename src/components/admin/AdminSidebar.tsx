import * as React from "react"

import {AdminSidebarMain} from "@/components/admin/AdminSidebarMain.tsx"
import {AdminSidebarFoot} from "@/components/admin/AdminSidebarFoot.tsx"
import {AdminSideBarHead} from "@/components/admin/AdminSideBarHead.tsx"
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail,} from "@/components/ui/sidebar.tsx"
import {Separator} from "@/components/ui/separator.tsx";
import {sidebarItems} from "@/data/sidebar.tsx";

export function AdminSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
            <Sidebar variant="floating" collapsible="icon" {...props}>
                <SidebarHeader>
                    <AdminSideBarHead/>
                </SidebarHeader>
                <Separator/>
                <SidebarContent className="mt-3">
                    <AdminSidebarMain items={sidebarItems}/>
                </SidebarContent>
                <SidebarFooter>
                    <AdminSidebarFoot />
                </SidebarFooter>
                <SidebarRail/>
            </Sidebar>
    )
}
