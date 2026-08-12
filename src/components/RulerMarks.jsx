// Purely decorative -- fixed tick marks along the left and right edges,
// like measurement marks on a physical drafting sheet. Reinforces the
// blueprint identity as you scroll through the whole page.
export default function RulerMarks() {
  const ticks = Array.from({ length: 20 });

  return (
    <>
      <div className="hidden lg:flex fixed left-3 top-0 h-full flex-col justify-between py-24 z-0 pointer-events-none">
        {ticks.map((_, i) => (
          <div
            key={i}
            className={`bg-blueprint-line ${
              i % 5 === 0 ? "w-3 h-px" : "w-1.5 h-px"
            }`}
          />
        ))}
      </div>
      <div className="hidden lg:flex fixed right-3 top-0 h-full flex-col justify-between py-24 z-0 pointer-events-none">
        {ticks.map((_, i) => (
          <div
            key={i}
            className={`bg-blueprint-line self-end ${
              i % 5 === 0 ? "w-3 h-px" : "w-1.5 h-px"
            }`}
          />
        ))}
      </div>
    </>
  );
}
