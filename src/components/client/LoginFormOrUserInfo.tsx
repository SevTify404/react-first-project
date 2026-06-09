import { useAuthStore } from "@/stores/authStore";
import LoginInputDialog from "./LoginInputDialog";
import UserInfoDialog from "./UserInfoDialog";
export default function LoginFormOrUserInfo() {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? <UserInfoDialog /> : <LoginInputDialog />
}
