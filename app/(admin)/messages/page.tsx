import { Binoculars } from "lucide-react";

export default function MessagesPage() {
  return (
    <main className="h-screen flex items-center gap-4 justify-center text-zinc-700">
      <Binoculars />
      <h2 className="font-bold text-lg">No opened Message</h2>
    </main>
  );
}
