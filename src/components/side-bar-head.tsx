import onlineshopping from "@/assets/images/bag.png";
import {SidebarMenu, SidebarMenuItem, useSidebar,} from "@/components/ui/sidebar"


export function SideBarHead() {
    const {state} = useSidebar()
    return (
        <SidebarMenu className="my-2">
            <SidebarMenuItem>
                <div className="flex justify-items-center items-center ">
                    <img src={onlineshopping} alt="Online Shopping" width={70} height={70}/>
                    <span className="text-primary text-3xl ml-3 overflow-hidden font-bold">
                        Admin Panel
                    </span>
                </div>
                {state === "expanded" && (
                    <div className="mt-2 ">
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
