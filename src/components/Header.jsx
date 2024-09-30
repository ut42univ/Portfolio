import Link from "next/link";
import styles from "./Header.module.css";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h3 className="text-2xl font-semibold">Portfolio</h3>
      <nav>
        <ul>
          <Link href="#">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link href="#">
            <Button variant="ghost">About</Button>
          </Link>
          <Link href="#">
            <Button variant="ghost">Contact</Button>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
