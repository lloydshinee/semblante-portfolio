import { Code } from "lucide-react";
import { Sidebar } from "./Sidebar";
import NavLinks from "./NavLinks";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="z-50 w-full sticky top-0 p-4 md:p-6 bg-white/80 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Code className="text-zinc-900 transition-transform group-hover:rotate-12" />
          <h3 className="font-semibold text-zinc-700 group-hover:text-zinc-900 transition-colors">
            Lloyd Semblante
          </h3>
        </Link>
        <Sidebar />
        <NavLinks />
      </div>
    </nav>
  );
}
