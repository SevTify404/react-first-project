import { useState, useEffect } from "react";
import onlineshopping from "@/assets/images/bag.png";
import {SidebarMenu, SidebarMenuItem, useSidebar,} from "@/components/ui/sidebar.tsx"


export function AdminSideBarHead() {
    const {state, toggleSidebar} = useSidebar()
    const [isAnimating, setIsAnimating] = useState(state === "expanded")

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsAnimating(state === "expanded")
    }, [state])

    return (
        <SidebarMenu>
            <SidebarMenuItem
                className={`w-full h-full cursor-pointer ${state === "expanded" && "hover:bg-sidebar-accent transition-all ease-in duration-500 rounded-lg p-4"}`}
                onClick={toggleSidebar}>
                <div className="flex justify-items-center items-center ">
                    <img src={onlineshopping} alt="Online Shopping" width={70} height={70}/>
                    <span className="text-primary text-3xl ml-3 overflow-hidden font-bold">
                        Admin Panel
                    </span>
                </div>
                {isAnimating && (
                    <div className={`mt-2 ${state === "expanded" ? "animate-fade-in-slide-up" : "animate-fade-out-slide-down"}`}>
                        <span
                            className="text-accent-foreground font-medium">
                            MarketFlow Ops
                        </span>
                    </div>
                )}
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
