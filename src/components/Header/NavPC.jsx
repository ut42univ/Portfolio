import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Github } from "lucide-react";

const SocialIcon = ({ href, icon: Icon, label }) => (
  <Button variant="ghost" size="icon" asChild>
    <Link href={href} target="_blank" aria-label={label}>
      <Icon />
    </Link>
  </Button>
);

const NavLink = ({ href, label }) => (
  <Button variant="link" asChild>
    <Link href={href}>{label}</Link>
  </Button>
);

export const NavPC = () => {
  const socialLinks = [
    { href: "https://twitter.com/ut42_dev", icon: Twitter, label: "Twitter" },
    { href: "https://github.com/ut42univ", icon: Github, label: "Github" },
  ];

  return (
    <nav>
      <ul className="flex gap-4">
        <NavLink href="/" label="Home" />
        <NavLink href="/about" label="About" />
        {socialLinks.map(({ href, icon, label }) => (
          <SocialIcon key={href} href={href} icon={icon} label={label} />
        ))}
      </ul>
    </nav>
  );
};
