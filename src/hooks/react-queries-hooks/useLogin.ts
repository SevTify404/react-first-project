import { login } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  return useMutation(
    {
      mutationFn: login,
    }
  )
}