import type { FingerGroup } from "@/data/fingers";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FingerTableProps {
  group: FingerGroup;
  accent: "pine" | "cinnabar";
}

export default function FingerTable({ group, accent }: FingerTableProps) {
  const ref = useScrollReveal<HTMLDivElement>();
  const accentColor =
    accent === "pine" ? "text-pine border-pine/30" : "text-cinnabar border-cinnabar/30";
  const accentBg =
    accent === "pine" ? "bg-pine/5" : "bg-cinnabar/5";
  const dotColor = accent === "pine" ? "bg-pine" : "bg-cinnabar";

  return (
    <div ref={ref} className="flex flex-col">
      <div className="mb-6">
        <h3 className="font-serif text-2xl text-ink tracking-wider1 mb-2">
          {group.title}
        </h3>
        <p className="text-sm text-ink-soft leading-relaxed">{group.subtitle}</p>
      </div>
      <div
        className={`rounded-sm overflow-hidden border border-ink-line/70 ${accentBg}`}
      >
        <div className="grid grid-cols-[80px_1fr_1.6fr] text-[13px] md:text-sm">
          <div className={`px-4 py-3 font-serif tracking-widest1 border-b border-ink-line/60 ${accentColor}`}>
            指法
          </div>
          <div className="px-4 py-3 font-serif border-b border-ink-line/60 text-ink">
            名称
          </div>
          <div className="px-4 py-3 font-serif border-b border-ink-line/60 text-ink">
            动作说明
          </div>
          {group.items.map((it) => (
            <>
              <div
                key={`s-${it.symbol}`}
                className={`px-4 py-3.5 font-serif text-2xl md:text-3xl tracking-widest1 border-b border-ink-line-soft ${accentColor}`}
              >
                {it.symbol}
              </div>
              <div
                key={`n-${it.symbol}`}
                className="px-4 py-3.5 border-b border-ink-line-soft flex items-center gap-2"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                <span className="text-ink">{it.name}</span>
                {it.note && (
                  <span className="text-[12px] text-ink-soft ml-1">
                    （{it.note}）
                  </span>
                )}
              </div>
              <div
                key={`a-${it.symbol}`}
                className="px-4 py-3.5 border-b border-ink-line-soft text-ink/85 leading-relaxed"
              >
                {it.action}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
