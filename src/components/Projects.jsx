import Reveal from "./Reveal";

const PROJECTS = [
  {
    name: "Attendora",
    status: "Shipped",
    description:
      "A QR-based student attendance system built end-to-end for real classroom use. Teachers authenticate, manage courses/semesters/students, and run timed QR attendance sessions. Includes CSV export, attendance summaries, rate limiting, CAPTCHA protection, and WAT timezone support.",
    stack: ["Flask", "SQLAlchemy", "PostgreSQL (Neon)", "Render", "Jinja2"],
    liveUrl: "https://attendora-lsh3.onrender.com",
    githubUrl: "https://github.com/blessedokunato/attendance-system",
  },
  {
    name: "Hotel Booking & Management System",
    status: "In Progress",
    description:
      "A full-stack hotel booking platform with real-time room availability, dynamic pricing, secure payment integration via Paystack, and an activity scheduling system for guest management.",
    stack: [],
    liveUrl: null,
    githubUrl: null,
  },
];

function StatusTag({ status }) {
  const isShipped = status === "Shipped";
  return (
    <span
      className={`font-mono text-xs uppercase tracking-widest px-3 py-1 border rounded-sm shrink-0 ${
        isShipped
          ? "border-amber text-amber"
          : "border-paper-dim text-paper-dim"
      }`}
    >
      {status}
    </span>
  );
}

// Small schematic corner icon so each card has a visual anchor, not just text
function CardIcon() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="w-9 h-9 shrink-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="32"
        height="32"
        fill="none"
        stroke="#f2a93b"
        strokeWidth="1.5"
        opacity="0.8"
      />
      <line x1="4" y1="14" x2="36" y2="14" stroke="#f2a93b" strokeWidth="1" opacity="0.5" />
      <circle cx="12" cy="9" r="1.5" fill="#f2a93b" />
      <circle cx="18" cy="9" r="1.5" fill="#f2a93b" opacity="0.5" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-mono text-amber text-sm tracking-widest uppercase mb-4">
            Fig. 05 — Projects
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-paper mb-14">
            What I've built
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={i * 150}>
              <div className="bp-panel bp-lift border border-blueprint-line bg-blueprint-700/30 p-7 flex flex-col h-full">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <CardIcon />
                    <h3 className="font-display font-semibold text-xl md:text-2xl text-paper">
                      {project.name}
                    </h3>
                  </div>
                  <StatusTag status={project.status} />
                </div>

                <p className="text-paper-dim text-sm md:text-base leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {project.stack.length > 0 && (
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 font-mono text-xs text-paper-dim">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                )}

                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex gap-4 pt-2 border-t border-blueprint-line">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-amber hover:underline pt-3"
                      >
                        Live Site ↗
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-amber hover:underline pt-3"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
