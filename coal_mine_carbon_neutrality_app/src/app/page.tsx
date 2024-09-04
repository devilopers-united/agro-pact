
"use client"
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Hero from "@/components/Hero";
import { useSession } from "next-auth/react";
import Footer from "@/components/Footer";


export default function Home() {
  // useEffect(() => {
  //   (
  //     async () => {
  //       const LocomotiveScroll = (await import('locomotive-scroll')).default
  //       const locomotiveScroll = new LocomotiveScroll();
  //     }
  //   )()
  // }, [])

  // const session = useSession();


  return (
    <main className="flex min-h-screen flex-col items-center py-8 px-24 relative justify-between overflow-hidden sm:px-10">
      <Hero />
      <Footer />
      {/* <div>{JSON.stringify(session.data?.user)}</div> */}
    </main>

  );
}
