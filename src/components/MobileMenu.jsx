import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    // Prevent scroll when menu is open
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-sm transition-all duration-300 ease-in-out 
        flex flex-col items-center justify-center
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl focus:outline-none hover:text-red-400 transition-colors"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <nav className="flex flex-col items-center mt-10 space-y-6">
        {navItems.map(({ label, href }, index) => (
          <a
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-medium text-white tracking-wide transform transition-all duration-300 ease-in-out
              ${
                menuOpen
                  ? "opacity-100 translate-y-0 delay-[100ms]"
                  : "opacity-0 translate-y-5"
              }`}
            style={{ transitionDelay: `${index * 100 + 200}ms` }}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
};
