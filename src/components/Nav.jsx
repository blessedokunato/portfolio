import { useEffect, useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" } // triggers around the middle of the screen
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-blueprint-line bg-blueprint-800/90 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-16 py-4">
        <a
          href="#"
          className="font-mono text-amber text-sm tracking-widest uppercase"
        >
          B. Okunato
        </a>

        <div className="hidden sm:flex gap-8 font-mono text-sm">
          {LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition-colors ${
                  isActive
                    ? "text-amber"
                    : "text-paper-dim hover:text-amber"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-px bg-amber transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
