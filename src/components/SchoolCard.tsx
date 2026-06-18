import { MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { School } from "@/data/schools";

export default function SchoolCard({ school, index }: { school: School; index: number }) {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      className="group relative flex flex-col pb-8 border-b border-ink-line/70 hover:border-cinnabar/50 transition-colors duration-400"
    >
      <div className="flex items-center gap-2 text-xs text-ink-soft mb-4">
        <MapPin size={14} className="text-cinnabar/70" />
        <span>{school.region}</span>
      </div>
      <h3 className="font-serif text-2xl md:text-[26px] text-ink tracking-wider1 mb-3 group-hover:text-cinnabar transition-colors duration-400">
        {school.name}
      </h3>
      <p className="font-serif text-[15px] text-pine mb-4">{school.style}</p>
      <p className="text-sm text-ink-soft mb-4">
        代表人物：<span className="text-ink/85">{school.representative}</span>
      </p>
      <p className="text-[14.5px] md:text-[15px] text-ink/85 leading-[1.95] flex-1">
        {school.description}
      </p>
    </article>
  );
}
