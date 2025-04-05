import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent tracking-tight">
            About Me
          </h2>

          <div className="rounded-xl p-8 bg-white/5 border border-white/10 shadow-xl hover:-translate-y-1 transition-all duration-300 backdrop-blur">
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Passionate developer with expertise in building scalable web
              applications and crafting innovative solutions across the full
              stack.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend Skills */}
              <div className="rounded-xl p-6 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="rounded-xl p-6 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-base">
                <li>
                  <strong>B.S. in Computer Science</strong> – XYZ University (2016–2020)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud Computing...
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300 text-base">
                <div>
                  <h4 className="font-semibold">Software Engineer at ABC Corp (2020–Present)</h4>
                  <p>Developed and maintained microservices for cloud-based applications.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Intern at DEF Startups (2019)</h4>
                  <p>Assisted in building front-end components and integrating REST APIs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
