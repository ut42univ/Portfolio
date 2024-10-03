import Link from "next/link";
import styles from "./Header.module.css";
import { Button } from "@/components/ui/button";
import { Github, Twitter, UserRound } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

const urlTwitter = "https://twitter.com/ut42_dev";
const urlGithub = "https://github.com/ut42univ";

export const Header = () => {
  return (
    <header
      className={`${styles.header} dark:bg-black dark:bg-opacity-80 dark:border-white dark:border-opacity-10`}
    >
      <Link href="/" className="flex gap-3 items-center">
        <UserRound
          size={32}
          className="rounded-full border-2 border-black dark:border-white"
        />
        <h3 className="text-3xl font-extrabold">
          U<span className="text-indigo-600">.</span>T
        </h3>
      </Link>
      <div className="flex gap-4">
        <nav className="hidden md:block">
          <ul>
            <Button variant="link" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/about">About</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/news">News</Link>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <Link href={urlTwitter} target="_blank">
                <Twitter />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={urlGithub} target="_blank">
                <Github />
              </Link>
            </Button>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};
