import Link from "next/link";
import styles from "./Header.module.css";
import { Button } from "@/components/ui/button";
import { Github, Twitter } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

const urlTwitter = "https://twitter.com/ut42_dev";
const urlGithub = "https://github.com/ut42univ";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h3 className="text-2xl font-semibold">UT's Portfolio</h3>
      </Link>
      <nav>
        <ul>
          <Link href="/">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost">About</Button>
          </Link>
          <Link href="/news">
            <Button variant="ghost">News</Button>
          </Link>
          <Link href={urlTwitter} target="_blank">
            <Button variant="ghost" size="icon">
              <Twitter />
            </Button>
          </Link>
          <Link href={urlGithub} target="_blank">
            <Button variant="ghost" size="icon">
              <Github />
            </Button>
          </Link>
          <ModeToggle />
        </ul>
      </nav>
    </header>
  );
};
