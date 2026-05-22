import {
    createBrowserRouter,
} from 'react-router'

import Index  from "../pages/Index.tsx";
import AdminLayout from "@/layouts/AdminLayout.tsx";
import Placeholder from "@/pages/Placeholder.tsx";
import { PATHS_MAPPING } from "./paths-mapping.ts";

export const router = createBrowserRouter([
    {
        path: PATHS_MAPPING.HOME,
        Component: Index,
    },
    {
        path: PATHS_MAPPING.ADMIN,
        Component: AdminLayout,
        children: [
            {
                path: PATHS_MAPPING.ADMIN_DASHBOARD,
                Component: Placeholder,
            },
            {
                path: PATHS_MAPPING.ADMIN_PRODUCTS,
                Component: Placeholder,
            },
            {
                path: PATHS_MAPPING.ADMIN_ORDERS,
                Component: Placeholder,
            },
            {
                path: PATHS_MAPPING.ADMIN_CUSTOMERS,
                Component: Placeholder,
            },
            {
                path: PATHS_MAPPING.ADMIN_LOGS,
                Component: Placeholder,
            },
            {
                path: PATHS_MAPPING.ADMIN_SETTINGS,
                Component: Placeholder,
            },
        ]
    },
    {
        path: PATHS_MAPPING.LOGIN
        // ajouter le componanet après
    }
])