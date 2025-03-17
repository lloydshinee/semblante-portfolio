"use client";

import { portfolioLinks, socials } from "@/lib/links";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="md:flex items-center gap-8 hidden">
      <div className="flex items-center gap-4">
        {portfolioLinks.map((link, i) => (
          <Link
            href={link.href}
            key={i}
            className="text-zinc-700 flex items-center gap-2"
          >
            <link.icon size={16} />
            {link.tag}
          </Link>
        ))}
      </div>
      <div className="flex gap-1">
        {socials.map((social, i) => (
          <Image src={social.icon} height={16} width={16} alt="icon" key={i} />
        ))}
      </div>
      <button className="flex items-center gap-2 justify-center transition-colors hover:bg-zinc-900 hover:text-white p-2 border-[1px] border-zinc-900 text-zinc-900 rounded-lg">
        <Link href="/chat" className="flex items-center gap-2">
          <MessageCircle size={12} />
          <p className="text-sm">Chat with Me</p>
        </Link>
      </button>
    </div>
  );
}
