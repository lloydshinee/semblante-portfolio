"use client";

import { portfolioLinks, socials } from "@/lib/links";
import { Code, MenuIcon, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="md:hidden">
      <MenuIcon
        className="cursor-pointer opacity-55 hover:text-zinc-900"
        onClick={handleToggle}
      />
      <div
        className={`absolute top-0 left-0 h-screen w-full bg-black/50 transition-opacity duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleToggle}
      ></div>
      <div
        className={`absolute -left-[60rem] top-0 h-screen w-[80%] md:w-80 bg-white z-50 transition-all duration-500 ${
          open ? "left-0" : "-left-[60rem]"
        } flex flex-col gap-4`}
      >
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-2 text-zinc-900">
            <Code />
            <h2 className="font-semibold text-2xl">Lloyd Semblante</h2>
          </div>
          <p className="opacity-60">Fullstack Developer</p>
        </div>
        <div className="flex flex-col gap-4">
          {portfolioLinks.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className={`w-full py-4 px-6 flex items-center transition-colors gap-2 hover:bg-zinc-900 hover:text-white
                ${pathname == link.href ? "text-zinc-900" : ""}
                `}
            >
              <link.icon size={18} className="opacity-90" />
              <p className="opacity-70">{link.tag}</p>
            </Link>
          ))}
        </div>
        <div className="mt-auto space-y-4 px-2 py-10">
          <div className="flex gap-4 w-full justify-center">
            {socials.map((social, i) => (
              <Image
                src={social.icon}
                height={30}
                width={30}
                alt="icon"
                key={i}
              />
            ))}
          </div>
          <button className="w-full flex items-center gap-2 justify-center transition-colors hover:bg-zinc-900 hover:text-white p-2 border-[1px] border-zinc-900 text-zinc-900 rounded-lg">
            <Link href="/chat" className="flex items-center gap-2">
              <MessageCircle size={16} />
              Chat with Me
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
