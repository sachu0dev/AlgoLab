"use client";
import React from "react";
import Link from "next/link";
import {useSelector} from "react-redux";

import {ThemeToggle} from "./ThemeToggleComponent";

import {RootState} from "@/lib/store";

const Navbar = () => {
  const {user} = useSelector((state: RootState) => state.auth);

  return (
    <nav className="bg-transparent p-4 fixed z-50 w-full top-0">
      <div className="container mx-auto flex justify-between items-center dark:text-white text-black">
        <div className="text-lg font-bold">
          <Link href="/home">AlgoLab</Link>
        </div>
        <div className="flex space-x-4 items-center">
          {user ? (
            <Link href="/">Dashboard</Link>
          ) : (
            <button className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-black dark:border-white bg-[linear-gradient(110deg,#ffffff,45%,#e5e7eb,55%,#ffffff)] dark:bg-[linear-gradient(110deg,#000000,45%,#1e1e1e,55%,#000000)] bg-[length:200%_100%] px-6 font-medium text-black dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black">
              Sign In
            </button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
