export const LoaderIds = {
    ADMIN_PROTECTED_ROUTES: 'admin-protected-route-loader',
}

export type LoaderId = (typeof LoaderIds)[keyof typeof LoaderIds];
