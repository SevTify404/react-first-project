import {SidebarMenu, SidebarMenuButton, SidebarMenuItem} from "@/components/ui/sidebar.tsx"

import {NavLink, useLocation} from "react-router";
import type {Sidebaritem} from "@/types/sidebar.ts";
import AdminSidebarNavLinkContent from "@/components/admin/AdminSidebarNavLinkContent.tsx";
import {useMobileSidebar} from "@/hooks/useMobileSidebar.ts";


export function AdminSidebarMain({items}: Readonly<{ items: Sidebaritem[] }>) {
    const {pathname} = useLocation()
    const {collapseOnlyOnMobile} = useMobileSidebar()
    return (
        <SidebarMenu className={"space-y-1"}>
            {items.map((item) => (
                <SidebarMenuItem key={item.title} className="flex justify-center">
                    <SidebarMenuButton tooltip={item.title} isActive={pathname === item.url} asChild>
                        <NavLink to={item.url}
                                 onClick={collapseOnlyOnMobile}
                        >
                            {({isActive, isPending}) => (
                                <AdminSidebarNavLinkContent isActive={isActive} isPending={isPending} item={item}/>
                            )}
                        </NavLink>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    )
}
