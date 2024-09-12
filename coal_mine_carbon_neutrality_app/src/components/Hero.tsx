import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import ClientNavbar from "./clientNav";
import { Typewriter } from "./TypeWriter";

const Hero = () => {
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
    <div>
      <div>
        <h1 className="text-5xl text-green-400 font-mono font-bold   ">
          AgriBAZAAR
        </h1>
      </div>
      <div>
        <Typewriter />
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
