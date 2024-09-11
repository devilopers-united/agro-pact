"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Nav className="top-2" />
    </div>
  );
}

function Nav({ className }: { className?: string }) {
  const { data: session } = useSession();
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/objective">Our Goal</HoveredLink>
            <HoveredLink href="/contact">Contact Us</HoveredLink>
            <HoveredLink href="/help">Help</HoveredLink>
            <HoveredLink href="/support">Customer Support</HoveredLink>
          </div>
        </MenuItem>
        {session ? (
          <>
            <MenuItem setActive={setActive} active={active} item="Dashboard">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/dashboard/farmer">Farmer</HoveredLink>
                <HoveredLink href="/dashboard/buyer">Buyer</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="User">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink onClick={() => signOut()}>Logout</HoveredLink>
              </div>
            </MenuItem>
          </>
        ) : (
          <MenuItem setActive={setActive} active={active} item="User">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/signin">Login</HoveredLink>
              <HoveredLink href="/signup">Sign Up</HoveredLink>
            </div>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}

export default Navbar;
