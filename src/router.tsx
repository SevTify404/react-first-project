import {
    createBrowserRouter,
} from 'react-router'

import App  from "./App.tsx";
import AppLayout from "@/layouts/AppLayout.tsx";
import Placeholder from "@/components/Placeholder.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
    },
    {
        path: '/admin',
        Component: AppLayout,
        children: [
            {
                path: 'dashboard',
                Component: Placeholder,
            },
            {
                path: 'produits',
                Component: Placeholder,
            },
            {
                path: 'commandes',
                Component: Placeholder,
            },
            {
                path: 'clients',
                Component: Placeholder,
            },
            {
                path: 'logs',
                Component: Placeholder,
            },
            {
                path: 'settings',
                Component: Placeholder,
            },
        ]
    }
])