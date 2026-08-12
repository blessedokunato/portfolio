import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[240px_1fr] gap-12 md:gap-16 items-start">
        {/* Placeholder avatar panel */}
        <Reveal>
          <div className="bp-glow bp-panel mx-auto md:mx-0 w-48 h-48 md:w-full md:h-60 flex items-center justify-center border border-blueprint-line bg-blueprint-700">
            <span className="font-display font-semibold text-5xl text-amber">
              BO
            </span>
          </div>
        </Reveal>

        <div>
          <Reveal delay={100}>
            <p className="font-mono text-amber text-sm tracking-widest uppercase mb-4">
              Fig. 02 — About
            </p>
          </Reveal>

          <Reveal delay={150}>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-paper mb-6">
              Who I am
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-paper-dim text-lg leading-relaxed max-w-2xl mb-8">
              I'm a Software Engineering student at Babcock University in
              Nigeria, focused on full-stack web development. Over the past
              two years I've moved from learning fundamentals to shipping
              real, deployed systems — most notably Attendora, a QR-based
              attendance platform built end-to-end with Flask and PostgreSQL.
              I'm currently working toward a career abroad, building deeper
              expertise across the stack as I go.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <a
                href="/resume/blessed-okunato-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm uppercase tracking-wide border border-amber text-amber px-6 py-3 rounded-sm hover:bg-amber/10 transition-colors"
              >
                View Resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
