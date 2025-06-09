"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
const NavBarClient = () => {
  const pathname = usePathname();

  const shouldShowNavbar = !["/signup", "/signin"].includes(pathname);

  return shouldShowNavbar ? <Navbar /> : null;
};

export default NavBarClient;
