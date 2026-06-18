import { Clock, Music } from "lucide-react";
import type { Track } from "@/data/tracks";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const diffColor: Record<Track["difficulty"], string> = {
  初阶: "text-pine bg-pine/10 border-pine/20",
  中阶: "text-cinnabar bg-cinnabar/10 border-cinnabar/20",
  进阶: "text-ink bg-ink/10 border-ink/20",
};

export default function TrackCard({ track, index }: { track: Track; index: number }) {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.08 });

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 70}ms` }}
      className="group h-full flex flex-col p-7 md:p-8 bg-paper-2/40 border border-ink-line/70 hover:border-cinnabar/40 hover:bg-paper-2/80 transition-colors duration-500"
    >
      <header className="mb-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-serif text-[28px] md:text-3xl text-ink tracking-wider1 group-hover:text-cinnabar transition-colors duration-400">
            {track.title}
          </h3>
          <span
            className={`shrink-0 text-[12px] px-2.5 py-1 border ${
              diffColor[track.difficulty]
            }`}
          >
            {track.difficulty}
          </span>
        </div>
        <p className="font-serif text-pine text-[13px] mb-2">{track.subtitle}</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-soft">
          <span>{track.era}</span>
          <span className="inline-flex items-center gap-1">
            <Clock size={12} />
            {track.duration}
          </span>
        </div>
      </header>

      <p className="text-[14.5px] md:text-[15px] text-ink/85 leading-[1.95] mb-5 flex-1">
        {track.description}
      </p>

      <div className="flex flex-wrap items-center gap-2 pt-5 border-t border-ink-line/70">
        {track.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 text-[12px] text-ink-soft"
          >
            <Music size={11} className="text-cinnabar/60" />
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
