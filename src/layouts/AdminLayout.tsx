import {Outlet} from "react-router";
import {AdminSidebar} from "@/components/admin/AdminSidebar.tsx";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar.tsx";

function AdminLayout() {
    return (
            <SidebarProvider>
                <AdminSidebar/>
                <SidebarInset>
                    <header className=" h-16 w-full border-b flex items-center justify-between">
                            <SidebarTrigger />
                    </header>
                    <Outlet/>
                </SidebarInset>
            </SidebarProvider>
    )
}

export default AdminLayout;