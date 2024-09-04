"use client"
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Hero from "@/components/Hero";


export default function Home() {
  // useEffect(() => {
  //   (
  //     async () => {
  //       const LocomotiveScroll = (await import('locomotive-scroll')).default
  //       const locomotiveScroll = new LocomotiveScroll();
  //     }
  //   )()
  // }, [])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative justify-center overflow-hidden sm:px-10">
      <Hero />
    </main>
  );
}
