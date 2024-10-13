"use client";

import { useState } from "react";
import Link from "next/link";
import { UserRound, Menu } from "lucide-react";
import { NavMobile } from "@/components/Header/NavMobile";
import { ModeToggle } from "@/components/ModeToggle";
import { useToggleMenu } from "../../../hooks/useToggleMenu";

export const HeaderMobile = () => {
  const { isMenuOpen, toggleMenu } = useToggleMenu();

  return (
    <header className="sticky top-0 h-16 w-full px-4 flex justify-between items-center bg-white bg-opacity-80 shadow-xl backdrop-blur-xl border-b-1 border-black border-opacity-10 dark:bg-black dark:bg-opacity-80 dark:border-white dark:border-opacity-10">
      <Link href="/" className="flex items-center gap-2">
        <UserRound
          size={28}
          className="rounded-full border-2 border-black dark:border-white"
        />
        <h3 className="text-xl font-bold">
          U<span className="text-gray-500">.</span>T
        </h3>
      </Link>
      <div className="flex gap-4">
        <ModeToggle />
        <button onClick={toggleMenu} className="text-black dark:text-white">
          <Menu size={28} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white bg-opacity-80 shadow-xl border-b-1 border-black border-opacity-10 dark:bg-black dark:bg-opacity-80 dark:border-white dark:border-opacity-10">
          <NavMobile onClose={toggleMenu} />
        </div>
      )}
    </header>
  );
};
