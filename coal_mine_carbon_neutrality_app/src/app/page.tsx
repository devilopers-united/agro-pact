"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleNavigation = (path: string) => {
    if (session) {
      router.push(path);
    } else {
      router.push("/signin");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center py-8 px-24 relative justify-between overflow-hidden sm:px-10">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold">AgriBazar</h1>
        <p className="text-2xl text-center">
          Connecting consumers and producers via a marketplace
        </p>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6">
        <Button
          className="bg-slate-500 text-xl py-4 px-8"
          onClick={() => handleNavigation("/dashboard/farmer")}
        >
          Farmer
        </Button>
        <Button
          className="bg-slate-500 text-xl py-4 px-8"
          onClick={() => handleNavigation("/dashboard/buyer")}
        >
          Buyer
        </Button>
      </div>
    </main>
  );
}
