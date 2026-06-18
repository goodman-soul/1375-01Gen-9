import { Calendar, MapPin, Users, Music2 } from "lucide-react";
import type { Performance } from "@/data/performances";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const tagColor: Record<Performance["tag"], string> = {
  独奏: "bg-cinnabar/10 text-cinnabar border-cinnabar/30",
  合奏: "bg-pine/10 text-pine border-pine/30",
  讲座: "bg-paper-3 text-ink border-ink-line",
  雅集: "bg-ink/5 text-ink border-ink/20",
};

export default function PerfCard({ perf, index }: { perf: Performance; index: number }) {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.08 });

  const date = new Date(perf.date);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 70}ms` }}
      className="group grid md:grid-cols-[120px_1fr] gap-6 md:gap-8 p-6 md:p-8 bg-paper border border-ink-line/70 hover:border-pine/40 transition-colors duration-400"
    >
      {/* 日期块 */}
      <div className="md:border-r md:border-ink-line/70 md:pr-6 flex md:flex-col md:items-start items-center gap-3 md:gap-2">
        <div className="flex items-baseline gap-2 md:gap-0 md:flex-col">
          <span className="font-serif text-4xl md:text-5xl text-cinnabar leading-none">
            {String(day).padStart(2, "0")}
          </span>
          <span className="font-serif text-base text-cinnabar/80">
            {String(month).padStart(2, "0")}月
          </span>
        </div>
        <div className="md:mt-2 flex items-center gap-2 text-xs text-ink-soft">
          <Calendar size={12} />
          <span>{perf.weekday}</span>
          <span>·</span>
          <span>{perf.time}</span>
        </div>
        <span
          className={`hidden md:inline-block mt-3 text-[11px] px-2 py-1 border ${
            tagColor[perf.tag]
          }`}
        >
          {perf.tag}
        </span>
      </div>

      {/* 内容 */}
      <div className="flex flex-col">
        <div className="flex md:hidden items-center gap-3 mb-3">
          <span
            className={`text-[11px] px-2 py-1 border ${tagColor[perf.tag]}`}
          >
            {perf.tag}
          </span>
          <span className="text-xs text-ink-soft">{perf.city}</span>
        </div>

        <h3 className="font-serif text-xl md:text-2xl text-ink tracking-wider1 mb-4 group-hover:text-pine transition-colors duration-400">
          {perf.title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-[13px] text-ink-soft mb-4">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={13} className="text-cinnabar/70" />
            {perf.venue}
            <span className="hidden md:inline text-ink-soft/70">（{perf.city}）</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users size={13} className="text-pine/80" />
            {perf.performers.join("、")}
          </span>
        </div>

        {perf.introduction && (
          <p className="text-[14px] md:text-[14.5px] text-ink/80 leading-[1.9] mb-5">
            {perf.introduction}
          </p>
        )}

        <div className="pt-4 border-t border-ink-line/70">
          <p className="text-[12px] text-ink-soft mb-3 inline-flex items-center gap-1.5">
            <Music2 size={12} className="text-cinnabar/70" />
            曲目
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[13.5px] text-ink/85">
            {perf.programs.map((p) => (
              <li
                key={p.track}
                className="inline-flex items-baseline gap-1.5"
              >
                <span className="font-serif text-pine">{p.track}</span>
                {p.composer && (
                  <span className="text-xs text-ink-soft">
                    · {p.composer}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
