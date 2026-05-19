import {Button} from "@/components/ui/button.tsx";
import {useSidebar} from "@/components/ui/sidebar.tsx";
import {useLocation} from "react-router";

const pathnameMapping: Record<string, string> = {
    '/': 'Home',
    '/admin/dashboard': 'Dashboard',
    '/admin/produits': 'Produits',
    '/admin/commandes': 'Commandes',
    '/admin/clients': 'Clients',
    '/admin/logs': 'Logs',
    '/admin/settings': 'Paramètres',
}
function Placeholder() {
    const {toggleSidebar} = useSidebar()
    const {pathname} = useLocation()

    return (
        <div className={"w-full flex-col h-full flex items-center justify-center"}>
            <span>Placeholder {pathnameMapping[pathname]}</span>
            <Button onClick={toggleSidebar}>
                Sidebar Collapse Behavior
            </Button>
        </div>
    )
}

export default Placeholder;