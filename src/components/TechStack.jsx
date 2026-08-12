import {
  FileCode2,
  FlaskConical,
  Database,
  Braces,
  Atom,
  Globe,
  Palette,
  GitBranch,
  Rocket,
  Zap,
} from "lucide-react";
import Reveal from "./Reveal";

const STACK = [
  { name: "Python", Icon: FileCode2 },
  { name: "Flask", Icon: FlaskConical },
  { name: "PostgreSQL", Icon: Database },
  { name: "SQLAlchemy", Icon: Braces },
  { name: "JavaScript", Icon: Braces },
  { name: "React", Icon: Atom },
  { name: "HTML5", Icon: Globe },
  { name: "CSS3", Icon: Palette },
  { name: "Git & GitHub", Icon: GitBranch },
  { name: "Render", Icon: Rocket },
  { name: "Vite", Icon: Zap },
];

function TickerRow({ reverse = false }) {
  // Render the list twice back-to-back so the scroll loop is seamless
  const doubled = [...STACK, ...STACK];

  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex gap-12 shrink-0 pr-12 animate-ticker`}
      >
        {doubled.map(({ name, Icon }, i) => (
          <span
            key={`${name}-${i}`}
            className="flex items-center gap-2 font-mono text-paper-dim text-sm md:text-base whitespace-nowrap hover:text-amber transition-colors"
          >
            <Icon size={16} strokeWidth={1.75} />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="border-y border-blueprint-line bg-blueprint-700/40 px-6 md:px-16 py-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-mono text-amber text-xs tracking-widest uppercase mb-6">
            Fig. 03 — Stack
          </p>
        </Reveal>
        <TickerRow />
      </div>
    </section>
  );
}
