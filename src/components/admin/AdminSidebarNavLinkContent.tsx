import {Spinner} from "@/components/ui/spinner.tsx";
import {CircleArrowRight} from "lucide-react";
import type {Sidebaritem} from "@/types/sidebar.ts";
import {useSidebar} from "@/components/ui/sidebar.tsx";

function AdminSidebarNavLinkContent({item, isActive, isPending}: Readonly<{
    item: Sidebaritem;
    isActive: boolean;
    isPending: boolean
}>) {
    const {state} = useSidebar()
    return (
        <div className="flex w-full ">
            {state == "collapsed" && isPending ? <Spinner/> : item.icon}
            <span className="ml-2">{item.title}</span>
            {
                isPending ? <Spinner className="ml-auto"/> :
                    !isActive && <CircleArrowRight strokeWidth={2} className="ml-auto"/>
            }
        </div>
    )

}

export default AdminSidebarNavLinkContent;