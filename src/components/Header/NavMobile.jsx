import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Twitter } from "lucide-react";

const urlTwitter = "https://twitter.com/ut42_dev";
const urlGithub = "https://github.com/ut42univ";

export const NavMobile = ({ onClose }) => {
  return (
    <nav>
      <ul className="flex flex-col gap-4 p-4">
        <li>
          <Button variant="link" asChild>
            <Link href="/" onClick={onClose}>
              Home
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="link" asChild>
            <Link href="/about" onClick={onClose}>
              About
            </Link>
          </Button>
        </li>
        <li className="flex gap-2 justify-start">
          <Button variant="ghost" size="icon" asChild>
            <Link href={urlTwitter} target="_blank" onClick={onClose}>
              <Twitter />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={urlGithub} target="_blank" onClick={onClose}>
              <Github />
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};
