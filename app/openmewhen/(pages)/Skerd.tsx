import Image from "next/image";
import { BackgroundMusic } from "../BackgroundMusic";

export function Skerd() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-800 to-indigo-900 py-20 px-8">
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
        <div>
          <h1 className="text-6xl font-bold text-white">Oh noo scared ka?</h1>
          <p className="text-lg font-medium text-zinc-200 mt-4">
            Don&apos;t worry naa si LloydChiken dre mo protect nimo hehe.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/openMe/14.jpg"
            width={300}
            height={300}
            alt="he"
            className="rounded-xl"
          />
          <p className="text-lg font-medium text-zinc-300 mt-4">
            Don&apos;t be scared, langga. 💖 You are strong, smart, and capable.
            Whatever happens, I know you can handle it. Believe in yourself—I
            believe in you. Always here for you. 🤍✨
          </p>
        </div>
      </section>
      <BackgroundMusic videoId="0dESomV8J8Q" />
    </main>
  );
}
