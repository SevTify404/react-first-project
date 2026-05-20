import type {ReactElement} from "react";
import * as React from "react"

import {AdminSidebarMain} from "@/components/admin/AdminSidebarMain.tsx"
import {AdminSidebarFoot} from "@/components/admin/AdminSidebarFoot.tsx"
import {AdminSideBarHead} from "@/components/admin/AdminSideBarHead.tsx"
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail,} from "@/components/ui/sidebar.tsx"
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
import { FULL_ADMIN_ROUTES_MAPPING } from "@/routing/paths-mapping.ts";

export interface Sidebaritem {
    icon: ReactElement,
    title: string,
    url: string,
}

const sidebarItems: Sidebaritem[] = [
    {
        title: "Dashboard",
        icon: <HugeiconsIcon icon={DashboardSquare03Icon} strokeWidth={2}/>,
        url: FULL_ADMIN_ROUTES_MAPPING.DASHBOARD
    },
    {
        title: "Produits",
        icon: <HugeiconsIcon icon={PackageIcon} strokeWidth={2}/>,
        url: FULL_ADMIN_ROUTES_MAPPING.PRODUCTS
    },
    {
        title: "Commandes",
        icon: <HugeiconsIcon icon={ShoppingBag02Icon} strokeWidth={2}/>,
        url: FULL_ADMIN_ROUTES_MAPPING.ORDERS
    },
    {
        title: "Clients",
        icon: <HugeiconsIcon icon={UserGroup03Icon} strokeWidth={2}/>,
        url: FULL_ADMIN_ROUTES_MAPPING.CUSTOMERS
    },
    {
        title: "Logs",
        icon: <HugeiconsIcon icon={TransactionHistoryIcon} strokeWidth={2}/>,
        url: FULL_ADMIN_ROUTES_MAPPING.LOGS
    },
]

const userData = {
    name: "BARRY Ali",
    email: "maaaaa@souffrance.com",
}

export function AdminSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <TooltipProvider>
            {/*Ou carrément on utilise collapsible="icon"*/}
            <Sidebar collapsible="icon" {...props}>
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
