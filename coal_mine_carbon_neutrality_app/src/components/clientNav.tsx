"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Nav";

export default function ClientNavbar() {
  const pathname = usePathname();

  const shouldShowNavbar = !["/signup", "/signin"].includes(pathname);

  return shouldShowNavbar ? <Navbar /> : null;
}
