import React from "react";
import Link from "next/link";

import {ThemeToggle} from "./ThemeToggleComponent";

const Navbar = () => {
  return (
    <nav className="bg-transparent p-4 fixed z-50 w-full top-0">
      <div className="container mx-auto flex justify-between items-center dark:text-white text-black">
        <div className="text-lg font-bold">
          <Link href="/">AlgoLab</Link>
        </div>
        <div className="flex space-x-4 items-center">
          <Link className="hover:text-gray-400 dark:hover:text-gray-300" href="/">
            Home
          </Link>
          <Link className="hover:text-gray-400 dark:hover:text-gray-300" href="/about">
            About
          </Link>
          <Link className="hover:text-gray-400 dark:hover:text-gray-300" href="/contact">
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
