import { Code } from "lucide-react";
import { Sidebar } from "./Sidebar";
import NavLinks from "./NavLinks";

export function Navbar() {
  return (
    <nav className="z-50 w-full sticky top-0 p-6 bg-white/60 drop-shadow-md backdrop-blur-md flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Code className="text-red-900" />
        <h3 className="font-semibold">Lloyd Semblante</h3>
      </div>
      <div>
        <Sidebar />
        <NavLinks />
      </div>
    </nav>
  );
}
