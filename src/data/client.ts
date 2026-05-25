import { CLIENT_ROUTES_MAPPING } from "@/routing/paths-mapping";
import type { NavbarItem } from "@/types/navbar-types";

export const navbarItems: NavbarItem[] = [
  {
    key: 1,
    title: 'Shop',
    url: CLIENT_ROUTES_MAPPING.PRODUCTS
  },
  {
    key: 2,
    title: 'New Arrivals',
    url: CLIENT_ROUTES_MAPPING.NEW_ARRIVALS,
  },
  {
    key: 3,
    title: 'Deals',
    url: CLIENT_ROUTES_MAPPING.DEALS
  },
  {
    key: 4,
    title: 'Support',
    url: CLIENT_ROUTES_MAPPING.SUPPORT
  }
]