import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Twitter } from "lucide-react";

const urlTwitter = "https://twitter.com/ut42_dev";
const urlGithub = "https://github.com/ut42univ";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const socialLinks = [
  { href: urlTwitter, icon: <Twitter />, label: "Twitter" },
  { href: urlGithub, icon: <Github />, label: "Github" },
];

const NavLink = ({ href, label, onClose }) => (
  <Button variant="link" className="text-base" asChild>
    <Link href={href} onClick={onClose}>
      {label}
    </Link>
  </Button>
);

const SocialLink = ({ href, icon, onClose }) => (
  <Button variant="ghost" size="icon" asChild>
    <Link href={href} target="_blank" onClick={onClose}>
      {icon}
    </Link>
  </Button>
);

export const NavMobile = ({ onClose }) => {
  return (
    <nav>
      <ul className="gap-4 p-4 items-center flex flex-col">
        {links.map((link) => (
          <li key={link.href}>
            <NavLink href={link.href} label={link.label} onClose={onClose} />
          </li>
        ))}
        <li className="flex gap-4">
          {socialLinks.map((social) => (
            <SocialLink
              key={social.href}
              href={social.href}
              icon={social.icon}
              onClose={onClose}
            />
          ))}
        </li>
      </ul>
    </nav>
  );
};
