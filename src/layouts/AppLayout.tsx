import {Outlet} from "react-router";
import {AppSidebar} from "@/components/AppSidebar.tsx";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar.tsx";

function AppLayout() {
    return (
        <div>
            <SidebarProvider>
                <AppSidebar/>
                <SidebarInset>
                    <header className=" h-16 w-full border-b flex items-center justify-between">
                            <SidebarTrigger />
                    </header>
                    <Outlet/>
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}

export default AppLayout;