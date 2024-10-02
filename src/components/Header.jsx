import Link from "next/link";
import styles from "./Header.module.css";
import { Button } from "@/components/ui/button";
import { Github, Twitter } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

const urlTwitter = "https://twitter.com/ut42_dev";
const urlGithub = "https://github.com/ut42univ";

export const Header = () => {
  return (
    <header
      className={`${styles.header} dark:bg-black dark:bg-opacity-80 dark:border-white dark:border-opacity-10`}
    >
      <Link href="/">
        <h3 className="text-2xl font-semibold">UT's Portfolio</h3>
      </Link>
      <nav>
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

          <ModeToggle />
        </ul>
      </nav>
    </header>
  );
};
