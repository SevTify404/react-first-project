import {useSidebar} from "@/components/ui/sidebar.tsx";
import {useCallback} from "react";

/**
 * Hook pour gérer automaiquement certaines choses sur Mobile au niveau de la sidebar
 */
export function useMobileSidebar() {
    const {state, toggleSidebar, isMobile} = useSidebar()

    const collapseOnlyOnMobile = useCallback(() => {
        if (isMobile && state === "expanded") {
            toggleSidebar();
        }
    }, [isMobile, state, toggleSidebar]);

    return {collapseOnlyOnMobile}

}