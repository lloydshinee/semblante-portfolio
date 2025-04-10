import { skills } from "@/lib/skills";
import Image from "next/image";

export function Skills() {
  return (
    <section className="p-10 overflow-hidden relative">
      <div className="flex items-center gap-10 whitespace-nowrap animate-infinite-scroll will-change-transform">
        {[...skills, ...skills].map((skill, i) => (
          <div key={i} className="flex-shrink-0">
            <Image height={80} width={80} src={skill.img} alt="skill" />
          </div>
        ))}
      </div>
    </section>
  );
}
