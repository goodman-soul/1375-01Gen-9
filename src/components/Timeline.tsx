import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { HistoryItem } from "@/data/history";

interface TimelineProps {
  items: HistoryItem[];
}

function TimelineItem({ item, index }: { item: HistoryItem; index: number }) {
  const ref = useScrollReveal<HTMLLIElement>({ threshold: 0.1 });

  return (
    <li
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className="relative grid grid-cols-[120px_1fr] md:grid-cols-[160px_40px_1fr] gap-4 md:gap-8 pb-14 last:pb-0"
    >
      {/* 左：朝代 */}
      <div className="md:text-right pt-1 md:pr-0">
        <p className="font-serif text-lg md:text-xl text-cinnabar tracking-wider1 mb-1">
          {item.era}
        </p>
        <p className="text-[12px] md:text-[13px] text-ink-soft leading-relaxed">
          {item.period}
        </p>
      </div>

      {/* 中：轴点 + 连线 */}
      <div className="hidden md:flex flex-col items-center">
        <span className="relative z-10 mt-2 w-3 h-3 rounded-full bg-cinnabar/80 ring-4 ring-paper" />
        {index < 5 && (
          <span className="absolute top-8 w-px bg-ink-line h-[calc(100%-2rem)]" />
        )}
      </div>
      <div className="md:hidden col-span-2 flex items-center gap-3 mb-1">
        <span className="w-2.5 h-2.5 rounded-full bg-cinnabar/80 shrink-0" />
        <span className="flex-1 h-px bg-ink-line-soft" />
      </div>

      {/* 右：内容 */}
      <div className="md:pt-0.5">
        <h3 className="font-serif text-lg md:text-[22px] text-ink mb-2 tracking-wide">
          {item.title}
        </h3>
        <p className="text-[15px] md:text-[16px] text-ink/85 leading-[2]">
          {item.content}
        </p>
      </div>
    </li>
  );
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative">
      {items.map((item, i) => (
        <TimelineItem key={item.era} item={item} index={i} />
      ))}
    </ol>
  );
}
