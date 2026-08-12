export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-blueprint-line px-6 md:px-16 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 font-mono text-xs text-paper-dim">
        <p>© {year} Blessed Okunato. Built with React & Tailwind.</p>
        <a
          href="https://github.com/blessedokunato"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber transition-colors"
        >
          github.com/blessedokunato
        </a>
      </div>
    </footer>
  );
}
