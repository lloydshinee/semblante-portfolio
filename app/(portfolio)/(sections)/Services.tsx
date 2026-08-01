import { services } from "@/lib/services";

export function Services() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          How I help businesses
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl">
          I automate businesses — from simple workflows to complete business
          systems. Save time, reduce errors, eliminate paperwork, and run
          faster.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 rounded-xl shadow-md border border-gray-100 p-6 flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {service.title}
              </h3>
              <p className="text-zinc-600 text-sm font-medium mb-3">
                {service.tagline}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.examples.map((example) => (
                  <li
                    key={example}
                    className="flex items-start gap-2 text-gray-700 text-sm"
                  >
                    <span className="text-zinc-500 mt-0.5">›</span>
                    {example}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <p className="text-xs text-gray-500 font-medium mb-2">
                  Built with
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
