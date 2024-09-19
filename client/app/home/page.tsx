"use client";
import React from "react";

import {BackgroundLines} from "@/components/ui/background-lines";
import Navbar from "@/components/Navbar";
import HomeButton from "@/components/ui/HomeButton";

export function Home() {
  return (
    <div className="relative w-full h-full">
      <Navbar />
      <div className="h-screen relative">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 h-full">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            AlgoLab, <br /> Master Data Structures <br /> & Algorithms Together
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            Your all-in-one platorm for collaborative DSA problem-solving, coding, and interview
            prep.
          </p>
          <HomeButton />
        </BackgroundLines>
      </div>
    </div>
  );
}

export default Home;
