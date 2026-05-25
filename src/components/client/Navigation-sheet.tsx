import { Logo } from "@/components/client/Logo";
import { NavMenu } from "@/components/client/NavMenu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { CircleUserRound, Menu, ShoppingCart, Heart } from "lucide-react";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger asChild>
        <Button className="rounded-full" size="icon" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3">
        <Logo />
        <div className="ml-2 flex gap-3 mt-6">
          <Button className=" sm:inline-flex" size={"sm"}>
            <Heart />
          </Button>
          <Button className=" sm:inline-flex" size={"sm"}>
            <ShoppingCart />
          </Button>
          <Button className=" sm:inline-flex" size={"sm"}>
            <CircleUserRound />
          </Button>
        </div>
        <NavMenu className="[&>div]:h-full" orientation="vertical" />
      </SheetContent>
    </Sheet>
  );
};
