import { Mail, GitFork, MapPin } from "lucide-react";
import Reveal from "./Reveal";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "blessedokunato@gmail.com",
    href: "mailto:blessedokunato@gmail.com",
    Icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/blessedokunato",
    href: "https://github.com/blessedokunato",
    Icon: GitFork,
  },
  {
    label: "Location",
    value: "Ogun State, Nigeria",
    href: null,
    Icon: MapPin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-16 py-24 md:py-32">
      <Reveal>
      <div className="bp-panel bp-glow max-w-3xl mx-auto border border-blueprint-line bg-blueprint-700/30 p-10 md:p-14 text-center">
        <p className="font-mono text-amber text-sm tracking-widest uppercase mb-4">
          Fig. 07 — Contact
        </p>

        <h2 className="font-display font-semibold text-3xl md:text-4xl text-paper mb-5">
          Let's build something
        </h2>

        <p className="text-paper-dim text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Open to internships, collaborations, and roles where I can keep
          shipping real, useful software. Reach out — I read everything.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-8 font-mono">
          {CONTACT_LINKS.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex flex-col items-center sm:items-start"
              >
                <p className="text-xs uppercase tracking-widest text-paper-dim mb-1">
                  {link.label}
                </p>
                <p className="flex items-center gap-2 text-paper group-hover:text-amber transition-colors">
                  <link.Icon size={15} strokeWidth={1.75} />
                  {link.value}
                </p>
              </a>
            ) : (
              <div key={link.label} className="flex flex-col items-center sm:items-start">
                <p className="text-xs uppercase tracking-widest text-paper-dim mb-1">
                  {link.label}
                </p>
                <p className="flex items-center gap-2 text-paper">
                  <link.Icon size={15} strokeWidth={1.75} />
                  {link.value}
                </p>
              </div>
            )
          )}
        </div>
      </div>
      </Reveal>
    </section>
  );
}
