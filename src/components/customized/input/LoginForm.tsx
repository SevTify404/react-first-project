import onlineshopping from "@/assets/images/bag.png";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useLogin } from "@/hooks/react-queries-hooks/useLogin";
import { loginSchemas, type LoginData } from "@/types/schemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon, LockIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isPending, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchemas),
    mode: "onChange",
    defaultValues: {
      expiresInMins: 60,
    },
  });

  const canSubmit = isValid && isDirty && !isPending;

  const onSubmit = (data: LoginData) => {
    login(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center w-full max-w-xl gap-10"
    >
      <div className="flex flex-col gap-4 basis-3/4">
        {/* Erreur globale renvoyée par l'API */}
        {error && <p className="text-sm text-red-500">{error.message}</p>}

        <InputGroup
          className={`
    ${errors.username && "ring-2 ring-red-500/50 border-red-500 shadow-red-500"}
  `}
        >
          <InputGroupAddon>
            <UserIcon className="text-muted-foreground" />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Username"
            type="text"
            {...register("username")}
          />
        </InputGroup>
        {errors.username && (
          <p className="text-sm text-red-500">{errors.username.message}</p>
        )}

        <InputGroup 
        className={`
    ${errors.password && "ring-2 ring-red-500/50 border-red-500 shadow-red-500"}
  `}>
          <InputGroupAddon>
            <LockIcon className="text-muted-foreground" />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOffIcon className="size-4 text-muted-foreground" />
              ) : (
                <EyeIcon className="size-4 text-muted-foreground" />
              )}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}

        <Button className="w-full" type="submit" disabled={!canSubmit}>
          {isPending ? "Connexion..." : "Se connecter"}
        </Button>
      </div>
      <div className="flex justify-center basis-1/4">
        <img src={onlineshopping} alt="Marketflow" width={100} height={100} />
      </div>
    </form>
  );
}
