import { BackgroundMusic } from "../BackgroundMusic";
import Logger from "../Logger";

export function Kry() {
  return (
    <main className="min-h-screen bg-black py-20 px-8 space-y-10">
      <section>
        <div className="">
          <h1 className="text-white text-4xl font-bold">
            Ma okay ra ang tanan..
          </h1>
          <p className="text-md text-gray-300 mt-4">
            Langga, I know you&apos;re feeling sad right now, but please
            remember—you&apos;re not alone. 💖 You are strong, beautiful, and
            deserving of so much happiness. Hard days will pass, and brighter
            ones are coming. Smile when you’re ready, and know that I’m always
            here for you. 🤍✨
          </p>
        </div>
      </section>
      <BackgroundMusic videoId="WNN4m8WEwE8" />
      <Logger status="Crying" />
    </main>
  );
}
