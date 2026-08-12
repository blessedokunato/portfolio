const PRINCIPLES = [
  {
    title: "Built for real use",
    description:
      "I design for how software actually gets used, not just how it demos — handling edge cases, timezones, and real user flows.",
  },
  {
    title: "Security by default",
    description:
      "Rate limiting, CAPTCHA, proper auth — I treat these as standard, not afterthoughts.",
  },
  {
    title: "Documented, not just delivered",
    description:
      "Every project I ship comes with clear docs, so it's usable and maintainable beyond just me.",
  },
  {
    title: "Learning in public",
    description:
      "I build with technologies I'm still mastering, and treat every project as a chance to go deeper, not just finish faster.",
  },
];

import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section className="border-y border-blueprint-line bg-blueprint-700/40 px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-mono text-amber text-sm tracking-widest uppercase mb-4">
            Fig. 06 — How I Build
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-paper mb-14">
            Principles, not just tools
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-8">
          {PRINCIPLES.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 120}>
              <div className="flex gap-5">
                <span className="font-mono text-amber text-lg shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-lg text-paper mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-paper-dim text-sm md:text-base leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
