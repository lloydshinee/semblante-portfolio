"use client";

import { portfolioLinks, socials } from "@/lib/links";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="md:flex items-center gap-8 hidden">
      <div className="flex items-center gap-6">
        {portfolioLinks.map((link, i) => {
          const isActive = pathname === link.href;
          return (
            <Link
              href={link.href}
              key={i}
              className={`flex items-center gap-2 transition-colors ${
                isActive
                  ? "text-zinc-900 font-medium"
                  : "text-zinc-700 hover:text-zinc-900"
              }`}
            >
              <link.icon
                size={16}
                className={isActive ? "text-zinc-900" : ""}
              />
              <span
                className={
                  isActive
                    ? "relative after:absolute after:left-0 after:w-full after:h-0.5 after:bg-zinc-900 after:-bottom-1"
                    : ""
                }
              >
                {link.tag}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="flex gap-1">
        {socials.map((social, i) => (
          <a
            href={social.link}
            key={i}
            className="p-1.5 hover:bg-zinc-100 rounded-full transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={social.icon} height={16} width={16} alt="Social icon" />
          </a>
        ))}
      </div>
      <Link
        href="/chat"
        className="flex items-center gap-2 justify-center transition-colors hover:bg-zinc-900 hover:text-white p-2 border border-zinc-900 text-zinc-900 rounded-lg group"
      >
        <MessageCircle size={12} className="group-hover:text-white" />
        <p className="text-sm group-hover:text-white">Chat with Me</p>
      </Link>
    </div>
  );
}
