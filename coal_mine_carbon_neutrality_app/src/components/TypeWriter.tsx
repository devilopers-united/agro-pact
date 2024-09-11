"use client";
import React, { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function Typewriter() {
  const words = [
    { text: "Decentralized" },
    { text: "Farmers" },
    { text: "marketplace" },
    { text: "AgriBazar.", className: "text-green-500 dark:text-blue-500" },
  ];

  const [restart, setRestart] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRestart((prev) => !prev);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-[40rem]">
      <TypewriterEffectSmooth
        words={words}
        key={restart ? "restart" : "initial"}
      />
    </div>
  );
}
