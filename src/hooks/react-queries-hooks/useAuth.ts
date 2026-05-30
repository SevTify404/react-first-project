import { useAuthStore } from "@/stores/authStore"

export default function useAuth() {
    const { user, isAuthenticated, clearAuth } = useAuthStore()
    
    return {
        user,
        isAuthenticated,
        clearAuth
    }
}