import type {ReactElement} from "react";
import * as React from "react"

import {NavMain} from "@/components/nav-main"
import {NavUser} from "@/components/nav-user"
import {SideBarHead} from "@/components/side-bar-head.tsx"
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail,} from "@/components/ui/sidebar"
import {HugeiconsIcon} from "@hugeicons/react"
import {
    DashboardSquare03Icon,
    PackageIcon,
    ShoppingBag02Icon,
    TransactionHistoryIcon,
    UserGroup03Icon
} from "@hugeicons/core-free-icons"
import {TooltipProvider} from "@/components/ui/tooltip.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {SidebarScopes} from "@/types/SidebarScopes.tsx";

export interface Sidebaritem {
    icon: ReactElement,
    title: string,
    scope: string,
    url: string,
}

const sidebarItems: Sidebaritem[] = [
    {
        title: "Dashboard",
        icon: <HugeiconsIcon icon={DashboardSquare03Icon} strokeWidth={2}/>,
        scope: SidebarScopes.ALL,
        url: '/admin/dashboard'
    },
    {
        title: "Produits",
        icon: <HugeiconsIcon icon={PackageIcon} strokeWidth={2}/>,
        scope: SidebarScopes.ALL,
        url: '/admin/produits'
    },
    {
        title: "Commandes",
        icon: <HugeiconsIcon icon={ShoppingBag02Icon} strokeWidth={2}/>,
        scope: SidebarScopes.ALL,
        url: '/admin/commandes'
    },
    {
        title: "Clients",
        icon: <HugeiconsIcon icon={UserGroup03Icon} strokeWidth={2}/>,
        scope: SidebarScopes.ALL,
        url: '/admin/clients'
    },
    {
        title: "Logs",
        icon: <HugeiconsIcon icon={TransactionHistoryIcon} strokeWidth={2}/>,
        scope: SidebarScopes.ADMIN_ONLY,
        url: '/admin/logs'
    },
]

const userData = {
    name: "BARRY Ali",
    email: "maaaaa@souffrance.com",
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <TooltipProvider>
            <Sidebar collapsible="icon" {...props}>
                <SidebarHeader>
                    <SideBarHead/>
                </SidebarHeader>
                <Separator/>
                <SidebarContent className="mt-3">
                    <NavMain items={sidebarItems}/>
                </SidebarContent>
                <SidebarFooter>
                    <NavUser user={userData}/>
                </SidebarFooter>
                <SidebarRail/>
            </Sidebar>
        </TooltipProvider>
    )
}
