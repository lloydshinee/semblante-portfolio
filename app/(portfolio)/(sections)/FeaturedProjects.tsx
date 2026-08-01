import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-16 px-6 md:px-12 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Featured work
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Business systems and automation built to replace manual work.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 text-zinc-700 font-medium hover:text-zinc-500 transition-colors"
          >
            View all projects
            <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.images[0]}
                  fill
                  alt={`${project.title} screenshot`}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        <Link
          href="/projects"
          className="md:hidden flex items-center justify-center gap-2 text-zinc-700 font-medium mt-8"
        >
          View all projects
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
