import { Logo } from "@/components/client/Logo";
import { NavMenu } from "@/components/client/NavMenu";
import { NavigationSheet } from "@/components/client/NavigationSheet.tsx";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import SearchInputDialog from "./SearchInputDialog";

import LoginFormOrUserInfo from "./LoginFormOrUserInfo";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-4 top-6 mx-auto h-16 max-w-(--breakpoint-xl) rounded-full border bg-background">
      <div className="mx-auto flex h-full items-center justify-between px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <SearchInputDialog />
          <Button className="hidden sm:inline-flex">
            <Heart />
          </Button>
          <Button className="hidden sm:inline-flex">
            <ShoppingCart />
          </Button>
          <LoginFormOrUserInfo/>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
