import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Floating Gradient Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-500 to-indigo-500 opacity-30 rounded-full mix-blend-multiply blur-3xl animate-blob -top-40 -left-40" />
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-cyan-500 to-purple-500 opacity-30 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000 top-20 -right-32" />
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-sky-400 to-blue-600 opacity-20 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-4000 -bottom-32 left-10" />

      <RevealOnScroll>
        <div className="text-center z-10 px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent tracking-tight drop-shadow-[0_5px_30px_rgba(255,255,255,0.1)]">
            Hi, Tanish
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed animate-fade-in-up animation-delay-500">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications.
          </p>

          <div className="flex justify-center gap-4 flex-wrap animate-fade-in-up animation-delay-1000">
            <a
              href="#projects"
              className="relative inline-block px-6 py-3 font-semibold bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(56,189,248,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="relative inline-block px-6 py-3 font-semibold border border-blue-500 text-blue-400 rounded-lg bg-gray-900/50 backdrop-blur-md transition-all duration-300 hover:bg-blue-500/10 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
