import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="h-[70dvh] w-full flex">
      <div className="flex-1 p-10 flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-zinc-600 mb-5">
          &ldquo;Dai Dai Dai&rdquo;
        </h1>
        <p className="text-zinc-700">
          &ldquo;They say I&apos;m too handsome to be alone, but while they
          dream of romance, I dream in code. My heart doesn&apos;t race for
          fleeting love; it beats for logic, innovation, and the pursuit of
          programming greatness. Let them swoon—I&apos;ll be busy building the
          future, one line at a time.&rdquo;
        </p>
        <button className="btn mt-4 w-fit">
          <Link href="/chat" className="flex items-center gap-2">
            I&apos;m Interested.
          </Link>
        </button>
      </div>
      <div className="flex-1 relative hidden md:block">
        <Image
          src="/me2.jpg"
          fill
          className="object-cover object-[50%_35%] -z-10"
          alt="me"
        />
      </div>
    </section>
  );
}
