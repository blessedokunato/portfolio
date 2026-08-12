import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="bp-grid relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blueprint-900" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        {/* Text column */}
        <div className="bp-panel py-16 px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-amber text-sm tracking-widest uppercase mb-6">
              Fig. 01 — Introduction
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="bp-glow font-display font-semibold text-4xl md:text-6xl leading-tight text-paper">
              Blessed Okunato
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-mono text-amber text-lg md:text-xl mt-3 mb-8">
              Full-Stack Developer in Training
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-paper-dim text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              Turning real problems into working software — most recently, a
              full attendance system used end-to-end, from QR scan to CSV
              export.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex gap-10 mb-10 font-mono">
              <div>
                <p className="text-3xl text-paper font-semibold">2+</p>
                <p className="text-paper-dim text-sm uppercase tracking-wide">
                  Years building
                </p>
              </div>
              <div>
                <p className="text-3xl text-paper font-semibold">1</p>
                <p className="text-paper-dim text-sm uppercase tracking-wide">
                  Deployed project
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="font-mono text-sm uppercase tracking-wide bg-amber text-blueprint-900 px-6 py-3 rounded-sm hover:bg-amber-dim transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="font-mono text-sm uppercase tracking-wide border border-amber text-amber px-6 py-3 rounded-sm hover:bg-amber/10 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </Reveal>
        </div>

        {/* Illustration column */}
        <Reveal delay={300} className="hidden md:block">
          <svg
            viewBox="0 0 400 400"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f2a93b" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f2a93b" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Outer schematic frame */}
            <rect
              x="40"
              y="40"
              width="320"
              height="320"
              fill="none"
              stroke="#1d3654"
              strokeWidth="1"
            />
            <circle
              cx="200"
              cy="200"
              r="130"
              fill="none"
              stroke="#1d3654"
              strokeWidth="1"
            />

            {/* Wireframe cube -- represents "building systems" */}
            <g stroke="url(#heroGrad)" strokeWidth="1.8" fill="none">
              <polygon points="140,160 260,160 300,200 180,200" />
              <polygon points="140,160 180,200 180,300 140,260" />
              <polygon points="180,200 300,200 300,300 180,300" />
              <line x1="140" y1="160" x2="140" y2="260" />
              <line x1="260" y1="160" x2="260" y2="260" />
              <polygon points="260,160 300,200 300,300 260,260" opacity="0.6" />
            </g>

            {/* Registration marks, like a drafting sheet */}
            <g stroke="#f2a93b" strokeWidth="1.5" opacity="0.7">
              <line x1="200" y1="20" x2="200" y2="45" />
              <line x1="200" y1="355" x2="200" y2="380" />
              <line x1="20" y1="200" x2="45" y2="200" />
              <line x1="355" y1="200" x2="380" y2="200" />
            </g>

            {/* Small orbiting nodes */}
            <circle cx="200" cy="70" r="4" fill="#f2a93b" />
            <circle cx="330" cy="200" r="4" fill="#f2a93b" />
            <circle cx="90" cy="290" r="3" fill="#edeff2" opacity="0.6" />

            {/* Annotation text, like a spec label */}
            <text
              x="200"
              y="360"
              textAnchor="middle"
              fill="#a9b4c2"
              fontFamily="JetBrains Mono, monospace"
              fontSize="10"
              letterSpacing="2"
            >
              SYSTEM.SCHEMATIC — REV.02
            </text>
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
