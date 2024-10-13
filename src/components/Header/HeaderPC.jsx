import Link from "next/link";
import { UserRound } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { NavPC } from "@/components/Header/NavPC";

export const HeaderPC = () => {
  return (
    <header className="sticky top-8 h-20 min-w-[18rem] max-w-[64rem] py-4 px-12 mx-auto my-8 flex justify-between items-center bg-white bg-opacity-80 shadow-xl backdrop-blur-lg rounded-3xl border-2 border-black border-opacity-10 dark:bg-black dark:bg-opacity-80 dark:border-white dark:border-opacity-10">
      <Link href="/" className="flex gap-3 items-center">
        <UserRound
          size={32}
          className="rounded-full border-2 border-black dark:border-white"
        />
        <h3 className="text-3xl font-extrabold">
          U<span className="text-gray-500">.</span>T
        </h3>
      </Link>
      <div className="flex gap-4">
        <NavPC />
        <ModeToggle />
      </div>
    </header>
  );
};
