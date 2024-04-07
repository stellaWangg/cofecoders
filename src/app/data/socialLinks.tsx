// data/socialLinks.ts
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/cofecoders/",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/groups/12954432/",
    icon: FaLinkedin,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/groups/271338725948964/",
    icon: FaFacebookSquare,
  },
  {
    name: "Linktree",
    url: "https://linktr.ee/cofecoders",
    icon: SiLinktree,
  },
];
