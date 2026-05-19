import {Button} from "@/components/ui/button.tsx";
import {useSidebar} from "@/components/ui/sidebar.tsx";
import {useLocation} from "react-router";
import useTheme from "@/hooks/useTheme.ts";
import { PATHS_MAPPING, FULL_ADMIN_ROUTES_MAPPING } from "@/routing/paths-mapping.ts";

const pathnameMapping: Record<string, string> = {
    [PATHS_MAPPING.HOME]: 'Home',
    [FULL_ADMIN_ROUTES_MAPPING.DASHBOARD]: 'Dashboard',
    [FULL_ADMIN_ROUTES_MAPPING.PRODUCTS]: 'Produits',
    [FULL_ADMIN_ROUTES_MAPPING.ORDERS]: 'Commandes',
    [FULL_ADMIN_ROUTES_MAPPING.CUSTOMERS]: 'Clients',
    [FULL_ADMIN_ROUTES_MAPPING.LOGS]: 'Logs',
    [FULL_ADMIN_ROUTES_MAPPING.SETTINGS]: 'Paramètres',
}
function Placeholder() {
    const {toggleSidebar} = useSidebar()
    const {pathname} = useLocation()
    const {toggleTheme} = useTheme()
    return (
        <div className={"w-full flex-col h-full flex items-center justify-center"}>
            <span>Placeholder {pathnameMapping[pathname]}</span>
            <Button onClick={toggleSidebar}>
                Sidebar Behavior
            </Button>
            <Button onClick={toggleTheme}>
                Changer le theme
            </Button>
        </div>
    )
}

export default Placeholder;