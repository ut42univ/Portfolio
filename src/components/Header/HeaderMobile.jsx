"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NavMobile } from "@/components/Header/NavMobile";
import { ModeToggle } from "@/components/ModeToggle";
import { useToggleMenu } from "@/hooks/useToggleMenu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const HeaderMobile = () => {
  const { isMenuOpen, toggleMenu } = useToggleMenu();

  return (
    <header className="fixed top-0 z-50 h-16 w-full px-4 mb-8 flex justify-between items-center bg-white bg-opacity-80 shadow-xl backdrop-blur-xl border-b-1 border-black border-opacity-10 dark:bg-black dark:bg-opacity-80 dark:border-white dark:border-opacity-10">
      <Link href="/" className="flex items-center gap-2">
        <Avatar className="border-2 h-8 w-8">
          <AvatarImage src="https://pbs.twimg.com/profile_images/1835729229599932416/ZBg36eLt_400x400.jpg" />
          <AvatarFallback>UT</AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-bold">
          U<span className="text-gray-500">.</span>T
        </h3>
      </Link>
      <div className="flex gap-4">
        <ModeToggle />
        <Button
          onClick={toggleMenu}
          variant="ghost"
          size="icon"
          className={`rounded-full transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "-rotate-90" : "rotate-0"
          }`}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      <div
        className={`absolute top-16 left-0 w-full rounded-b-2xl bg-white bg-opacity-90 shadow-xl border-b-1 border-black border-opacity-10 dark:bg-black dark:bg-opacity-80 dark:border-white dark:border-opacity-10 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {isMenuOpen && <NavMobile onClose={toggleMenu} />}
      </div>
    </header>
  );
};
