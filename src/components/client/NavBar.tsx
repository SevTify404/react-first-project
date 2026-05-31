import { Logo } from "@/components/client/Logo";
import { NavMenu } from "@/components/client/NavMenu";
import { NavigationSheet } from "@/components/client/Navigation-sheet";
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
          {/* On mets juste une condition ternaire ici, si l'user est connecté c'est 
          son profil qui sera affiché dans la modal, sinon on afiche la modal de connexion */}
          {/* Donc on va utiliser le hook du store en haut de la page pour vérifier tout çà */}
          {/* {isAuthenticated ? <UserInfoDialog /> : <LoginInputDialog />} */}
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
