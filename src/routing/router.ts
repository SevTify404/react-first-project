import {
    createBrowserRouter,
} from 'react-router'

import Index from "../pages/Index.tsx";
import AdminLayout from "@/layouts/AdminLayout.tsx";
import ClientLayout from "@/layouts/ClientLayout.tsx";
import Placeholder from "@/pages/Placeholder.tsx";
import { PATHS_MAPPING } from "./paths-mapping.ts";
import { ProtectedRoute } from "@/components/ProtectedRoute.tsx";
import React from 'react';

export const router = createBrowserRouter([
    {
        path: PATHS_MAPPING.HOME, 
        Component: ClientLayout,
        children: [
            {
                index: true,
                Component: Index,
            },
            {
                path: PATHS_MAPPING.CLIENT_PRODUCTS,
                Component: Placeholder,
            },
            // on va  ajouter ici les autres routes client (support, deals, etc.)
        ]
    },
    {
        path: PATHS_MAPPING.ADMIN,
        element: React.createElement(ProtectedRoute, { requiredRole: 'admin' }),  
        children: [
            {
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
            }
        ]
    },
])