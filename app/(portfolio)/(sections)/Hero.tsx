import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-[70dvh] w-full flex flex-col md:flex-row">
      <div className="relative flex-1 p-6 md:p-12 lg:p-16 flex flex-col justify-center bg-gray-50 overflow-hidden">
        <Image
          src="/dots.png"
          width={500}
          height={500}
          alt="decorative dots"
          className="absolute -top-80 -left-40 opacity-70 pointer-events-none select-none hidden md:block"
        />

        <span className="text-zinc-600 font-medium mb-3">
          Full-Stack Developer
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          Crafting digital <span className="text-gray-600">experiences</span>{" "}
          with purpose
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mb-8 leading-relaxed">
          I transform ideas into elegant code and create intuitive interfaces
          that solve real-world problems. My passion lies in building technology
          that makes a difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/projects"
            className="bg-zinc-900 hover:bg-zinc-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center flex items-center justify-center gap-2 shadow-sm"
          >
            View My Work
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/chat"
            className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-lg border border-gray-200 transition-colors duration-200 text-center shadow-sm"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 relative md:block">
        <div className="relative h-64 md:h-full w-full">
          <Image
            src="/me2.jpg"
            fill
            className="object-cover md:object-[50%_35%]"
            alt="Professional portrait"
            priority
          />
        </div>
        <div className="hidden md:flex absolute bottom-10 right-10 bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-lg">
          <div className="flex gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-zinc-600">4+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-zinc-600">20+</p>
              <p className="text-sm text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-zinc-600">2+</p>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
