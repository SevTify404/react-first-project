import {Avatar, AvatarFallback,} from "@/components/ui/avatar.tsx"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx"
import {SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,} from "@/components/ui/sidebar.tsx"
import {HugeiconsIcon} from "@hugeicons/react"
import {
    ArrowRight01Icon,
    CheckmarkBadgeIcon,
    CreditCardIcon,
    NotificationIcon,
    SparklesIcon,
    UnfoldMoreIcon
} from "@hugeicons/core-free-icons"
import {Separator} from "@/components/ui/separator.tsx";
import {Settings} from "lucide-react";
import {extractUserInitials} from "@/routing/utils/extractor";
import {NavLink, useLocation} from "react-router";
import {FULL_ADMIN_ROUTES_MAPPING} from "@/routing/paths-mapping.ts";
import {useMobileSidebar} from "@/hooks/useMobileSidebar.ts";
import {useUserAccount} from "@/hooks/react-queries-hooks/useUserAccount.ts";
import DisconnectAlertDialog from "@/components/shared/DisconnectAlertDialog.tsx";

export function AdminSidebarFoot() {
    const {isMobile} = useSidebar()
    const {pathname} = useLocation()
    const {collapseOnlyOnMobile} = useMobileSidebar()
    const {user} = useUserAccount()

    const userFullname = `${user?.firstName} ${user?.lastName}`;

    const userInitials = extractUserInitials(userFullname);

    return (
        <SidebarMenu>
            <SidebarMenuItem className="flex justify-center">
                <SidebarMenuButton
                    tooltip="Paramètres" isActive={pathname === FULL_ADMIN_ROUTES_MAPPING.SETTINGS} asChild>
                    <NavLink
                        to={FULL_ADMIN_ROUTES_MAPPING.SETTINGS}
                        className="w-full"
                        onClick={collapseOnlyOnMobile}
                    >
                        <div className="flex w-full ">
                            <Settings/>
                            <span className="ml-2">Paramètres</span>
                            <HugeiconsIcon
                                icon={ArrowRight01Icon}
                                strokeWidth={2}
                                className="ml-auto"/></div>
                    </NavLink>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <Separator/>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarFallback className="rounded-lg">{userInitials}</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">{userFullname}</span>
                                <span className="truncate text-xs">{user?.email}</span>
                            </div>
                            <HugeiconsIcon icon={UnfoldMoreIcon} strokeWidth={2} className="ml-auto size-4"/>
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarFallback
                                        className="rounded-lg">{userInitials}</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">{user?.firstName}</span>
                                    <span className="truncate text-xs">{user?.email}</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <HugeiconsIcon icon={SparklesIcon} strokeWidth={2}/>
                                Upgrade to Pro
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator/>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <HugeiconsIcon icon={CheckmarkBadgeIcon} strokeWidth={2}/>
                                Account
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <HugeiconsIcon icon={CreditCardIcon} strokeWidth={2}/>
                                Billing
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <HugeiconsIcon icon={NotificationIcon} strokeWidth={2}/>
                                Notifications
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator/>
                        <DisconnectAlertDialog buttonFullWidth/>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
