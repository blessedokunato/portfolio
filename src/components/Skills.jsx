import { Server, Layout, Wrench } from "lucide-react";
import Reveal from "./Reveal";

const GROUP_ICONS = {
  Backend: Server,
  Frontend: Layout,
  Tools: Wrench,
};

const GROUPS = [
  {
    title: "Backend",
    items: [
      { name: "Python", level: "Comfortable" },
      { name: "Flask", level: "Comfortable" },
      { name: "PostgreSQL / SQLAlchemy", level: "Learning" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML / CSS", level: "Comfortable" },
      { name: "JavaScript", level: "Familiar" },
      { name: "React", level: "Learning" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git & GitHub", level: "Comfortable" },
      { name: "Render (deployment)", level: "Familiar" },
    ],
  },
];

// Maps each level to a fill width -- used for the small bar indicator
const LEVEL_WIDTH = {
  Comfortable: "w-full",
  Familiar: "w-2/3",
  Learning: "w-1/3",
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-mono text-amber text-sm tracking-widest uppercase mb-4">
            Fig. 04 — Skills
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-paper mb-14">
            What I work with
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {GROUPS.map((group, i) => {
            const Icon = GROUP_ICONS[group.title];
            return (
            <Reveal key={group.title} delay={i * 150}>
            <div className="bp-panel bp-lift border border-blueprint-line bg-blueprint-700/30 p-6">
              <h3 className="flex items-center gap-2 font-mono text-amber text-sm uppercase tracking-widest mb-6">
                <Icon size={16} strokeWidth={1.75} />
                {group.title}
              </h3>

              <ul className="space-y-5">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex justify-between items-baseline mb-1.5">
                      <span className="text-paper text-sm md:text-base">
                        {item.name}
                      </span>
                      <span className="font-mono text-paper-dim text-xs uppercase tracking-wide">
                        {item.level}
                      </span>
                    </div>
                    <div className="h-1 bg-blueprint-line rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-amber ${LEVEL_WIDTH[item.level]}`}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
