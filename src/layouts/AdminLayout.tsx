import {Outlet} from "react-router";
import {AdminSidebar} from "@/components/admin/AdminSidebar.tsx";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar.tsx";
import LayoutWrapper from "@/layouts/LayoutWrapper.tsx";

function AdminLayout() {
    return (
        <LayoutWrapper>
            <SidebarProvider>
                <AdminSidebar/>
                <SidebarInset>
                    <header className=" h-16 w-full border-b flex items-center justify-between">
                        <SidebarTrigger/>
                    </header>
                    <Outlet/>
                </SidebarInset>
            </SidebarProvider>
        </LayoutWrapper>
    )
}

export default AdminLayout;