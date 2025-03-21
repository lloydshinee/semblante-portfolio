import Image from "next/image";
import { BackgroundMusic } from "../BackgroundMusic";

export function Angy() {
  return (
    <main className="min-h-screen bg-red-700 py-20 px-8 space-y-10">
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
        <div className="mb-10">
          <Image src={"/openMe/22.jpg"} width={300} height={300} alt="he" />
        </div>
        <div>
          <h1 className="text-white text-4xl font-bold">Eyyy yoo kalmaa</h1>
          <p className="text-md text-gray-300 mt-4">
            Langga, I know you&apos;re angry, and that&apos;s okay. Pero ayaw
            pasagdi nga makaguba na sa imong kalinaw. Breathe lang, take your
            time, and let it pass. You&apos;re strong, smart, and you got this.
            If you need someone, naa ra ko diri para nimo. 🤍✨
          </p>
        </div>
      </section>
      <BackgroundMusic videoId="Te8pWkmPphg" />
    </main>
  );
}
