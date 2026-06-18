import { Check } from "lucide-react";
import type { StageContent } from "@/data/learning";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function StageCard({ stage, index }: { stage: StageContent; index: number }) {
  const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className="relative grid md:grid-cols-[1fr_5fr] gap-8 md:gap-12 pt-4"
    >
      {/* 左侧编号 */}
      <div className="md:sticky md:top-24 h-fit flex md:flex-col items-center md:items-start gap-4">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-cinnabar/40 flex items-center justify-center bg-paper-2/60">
          <span className="font-serif text-2xl md:text-3xl text-cinnabar tracking-widest1">
            {stage.stage}
          </span>
        </div>
        {index < 2 && (
          <span className="hidden md:block w-px flex-1 h-16 bg-ink-line mt-4 md:ml-10" />
        )}
      </div>

      {/* 右侧内容 */}
      <div className="flex-1 pb-16 md:pb-24 border-b border-ink-line last:border-0">
        <header className="mb-8">
          <h3 className="font-serif text-3xl md:text-4xl text-ink tracking-wider1 mb-3">
            {stage.title}
          </h3>
          <p className="text-pine font-serif text-[15px] md:text-base mb-4">
            {stage.subtitle}
          </p>
          <p className="text-[15px] md:text-[16px] text-ink/85 leading-[2] max-w-2xl">
            {stage.intro}
          </p>
        </header>

        <div className="space-y-8 mb-10">
          {stage.points.map((pt) => (
            <div key={pt.title} className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-8">
              <h4 className="font-serif text-lg text-cinnabar pt-0.5 tracking-wider1">
                {pt.title}
              </h4>
              <p className="text-[15px] md:text-[16px] text-ink/90 leading-[2]">
                {pt.text}
              </p>
            </div>
          ))}
        </div>

        {/* 达标清单 */}
        <div className="bg-paper-2/60 border border-ink-line/70 p-6 md:p-8">
          <p className="font-serif text-ink mb-5 tracking-wider1 text-[17px]">
            · 本阶段达标清单 ·
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {stage.checklist.map((ck) => (
              <li key={ck} className="flex items-start gap-3 text-[14.5px] text-ink/85">
                <span className="mt-1 shrink-0 w-5 h-5 rounded-full border border-pine/40 flex items-center justify-center text-pine">
                  <Check size={12} />
                </span>
                <span className="leading-relaxed">{ck}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
