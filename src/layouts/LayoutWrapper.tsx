import type {ReactNode} from "react";
import {TooltipProvider} from "@/components/ui/tooltip.tsx";
import {useNavigation} from "react-router";
import FullPageLoader from "@/components/admin/FullPageLoader.tsx";

/**
 * @description Composant pour envelopper les layouts, fournissant des contexts et des comportements partagés
 * @param children - Les éléments enfants à rendre à l'intérieur du wrapper
 * @returns Un composant React qui enveloppe les enfants avec les providers nécessaires
 * @example
 * <LayoutWrapper>
 *   <ClientLayout />
 * </LayoutWrapper>
 *
 * <LayoutWrapper>
 *   <AdminLayout />
 * </LayoutWrapper>
 */
function LayoutWrapper({children}: Readonly<{ children: ReactNode }>) {
    const navigation = useNavigation();
    const isNavigating = navigation.state === "loading";

    return (
        <TooltipProvider>
            {isNavigating && <FullPageLoader/>}
            {children}
        </TooltipProvider>
    )
}

export default LayoutWrapper;