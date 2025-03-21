import Image from "next/image";
import { BackgroundMusic } from "../BackgroundMusic";

export function Hapi() {
  return (
    <main className="min-h-screen py-20 px-8 flex flex-col items-center gap-8">
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div>
          <Image
            src="/openMe/9.jpg"
            width={300}
            height={300}
            alt="he"
            className="rounded-xl"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-zinc-800 mb-10">
            waw happy kayka?
          </h1>
          <p className="text-lg">
            Smile a lot, langga—you’re so pretty when you do. 💖 You deserve all
            the happiness in the world. Good things are coming your way, and I
            couldn’t be happier for you. Congrats if this is for something
            special! Keep shining. ✨😊
          </p>
        </div>
      </section>
      <BackgroundMusic videoId="Fb1-Diyzvtw" />
    </main>
  );
}
