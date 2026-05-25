"use client";

import type { ComponentProps } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import { navbarItems } from "@/data/client";



export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
     {
      navbarItems.map((item) => (
        <NavigationMenuItem key={item.key}>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to={item.url}>{item.title}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))
     }
    </NavigationMenuList>
  </NavigationMenu>
);
