import Image from "next/image";
import { BackgroundMusic } from "../BackgroundMusic";

export function MotmotPage() {
  return (
    <main className="min-h-screen py-20 bg-gradient-to-r from-pink-500 to-rose-500 text-white flex flex-col justify-center items-center p-8">
      <section className="mb-20 flex items-center justify-center flex-col gap-4 md:flex-row">
        <div className="max-w-lg">
          <h1 className="text-6xl font-bold">
            Happy Monthsary <span className="text-pink-950">Langga</span>
          </h1>
          <p className="text-lg leading-relaxed my-10">
            &apos;Halo happy monthsary, thankyou for being with me for almost 1
            year lang. Even tho sge kog pangaway nimo you still sabot and
            pasaylo me. Thank you sa tnan mga efforts nimo like giving gifts to
            me. Gina appreciate gyud na nako tanan, thankful kaayo ko na I
            encountered someone like you. Thankyou for being the best girlfriend
            sa akoa, thankyou for being understanding, caring, loving, sweet
            kaayo, maldita, qtqt, thankyou gyud sa tanan. Imo gyud gipa feel sa
            akoa na naa pay nag care nako. Iloveyou&apos;
          </p>
        </div>
        <section className="w-full flex flex-wrap gap-4 items-center justify-center">
          <Image
            src="/openMe/3.jpg"
            width={300}
            height={300}
            alt="he"
            className="rounded-lg"
          />
          <Image
            src="/openMe/18.jpg"
            width={300}
            height={300}
            alt="he"
            className="rounded-lg"
          />
          <Image
            src="/openMe/5.jpg"
            width={300}
            height={300}
            alt="he"
            className="rounded-lg"
          />
          <Image
            src="/openMe/6.jpg"
            width={300}
            height={300}
            alt="he"
            className="rounded-lg"
          />
        </section>
      </section>
      <BackgroundMusic videoId="ybQA720eyIE" />
    </main>
  );
}
