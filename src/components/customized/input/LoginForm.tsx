"use client";

import onlineshopping from "@/assets/images/bag.png";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { EyeIcon, EyeOffIcon, LockIcon, UserIcon } from "lucide-react";
import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center w-full max-w-xl gap-10">
      <div className="flex flex-col gap-4 basis-3/4">
        <InputGroup>
          <InputGroupAddon>
            <UserIcon className="text-muted-foreground" />
          </InputGroupAddon>
          <InputGroupInput
            className="border-0 shadow-none focus-visible:ring-0"
            placeholder="Username"
            type="email"
          />
        </InputGroup>
        {/* </div> */}
        <InputGroup>
          <InputGroupAddon>
            <LockIcon className="text-muted-foreground" />
          </InputGroupAddon>
          <InputGroupInput
            className="border-0 shadow-none focus-visible:ring-0"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />

          <InputGroupAddon align="inline-end">
            <InputGroupButton onClick={togglePasswordVisibility}>
              {showPassword ? (
                <EyeOffIcon className="size-4 text-muted-foreground" />
              ) : (
                <EyeIcon className="size-4 text-muted-foreground" />
              )}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <Button className="w-full">Se connecter</Button>
      </div>
      <div className="flex justify-center basis-1/4">
        <img src={onlineshopping} alt="Marketflow" width={100} height={100} />
      </div>
    </div>
  );
}
