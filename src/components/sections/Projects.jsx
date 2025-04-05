import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent tracking-tight">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Cloud Platform",
                desc: "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
                tech: ["React", "Node.js", "AWS", "Docker"],
              },
              {
                title: "AI Analytics Dashboard",
                desc: "ML-powered data visualization platform with predictive analytics and interactive reports.",
                tech: ["Python", "TensorFlow", "D3.js", "Flask"],
              },
              {
                title: "E-Commerce Web App",
                desc: "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
                tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
              },
              {
                title: "Real-Time Chat App",
                desc: "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
                tech: ["Socket.IO", "Express", "React", "Redis"],
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] hover:border-blue-500/30"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-2 text-sm"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
