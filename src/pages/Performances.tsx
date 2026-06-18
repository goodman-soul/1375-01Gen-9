import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import PerfCard from "@/components/PerfCard";
import { performancesData } from "@/data/performances";
import type { Performance } from "@/data/performances";
import { ArrowLeft, CalendarDays, Filter } from "lucide-react";

const allTags: Array<Performance["tag"] | "全部"> = ["全部", "独奏", "合奏", "讲座", "雅集"];

function PerfHero() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="pt-24 md:pt-32 pb-14 md:pb-20">
      <div className="container">
        <div
          ref={ref}
          className="max-w-3xl relative"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-ink-soft hover:text-cinnabar transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={13} />
            返回首页
          </Link>
          <p className="font-serif text-cinnabar tracking-widest1 text-sm mb-5">
            · 独立板块 ·
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-wider1 leading-tight mb-8">
            近期演出
          </h1>
          <div className="w-20 h-px bg-cinnabar/40 mb-8" />
          <p className="text-[15.5px] md:text-lg text-ink/85 leading-[2] mb-8 max-w-2xl">
            独奏会、名家讲座、文人雅集——
            亲临现场，琴声入耳，才知纸上谈兵之浅。以下为近期精选演出信息，
            部分活动人数有限，建议提前预约。
          </p>
        </div>
        <div
              ref={useScrollReveal<HTMLDivElement>()}
              className="mt-10 flex flex-wrap gap-3"
            >
          <div className="inline-flex items-center gap-2 text-xs text-ink-soft pr-4 border-r border-ink-line/80 mr-3">
            <CalendarDays size={14} className="text-cinnabar/70" />
            2026 年 7 月 — 9 月
          </div>
          <div className="inline-flex items-center gap-2 text-xs text-ink-soft">
            <Filter size={14} className="text-pine/80" />
            共 {performancesData.length} 场活动
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Performances() {
  const [activeTag, setActiveTag] = useState<(typeof allTags)[number]>("全部");

  const filtered = useMemo(() => {
    if (activeTag === "全部") return performancesData;
    return performancesData.filter((p) => p.tag === activeTag);
  }, [activeTag]);

  return (
    <>
      <PerfHero />

      <section className="pb-20 md:pb-32">
        <div className="container">
          {/* 标签筛选 */}
          <div className="flex flex-wrap gap-3 md:gap-4 mb-10 md:mb-14">
            {allTags.map((tag) => {
              const active = activeTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-2 text-sm tracking-wider1 border transition-all duration-400 ${
                    active
                      ? "bg-ink text-paper border-ink"
                      : "text-ink-soft border-ink-line/80 hover:border-pine/50 hover:text-pine"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          {/* 演出列表 */}
          <div className="space-y-6 md:space-y-8 max-w-5xl mx-auto">
            {filtered.length ? (
              filtered.map((p, i) => (
                <PerfCard key={p.title} perf={p} index={i} />
              ))
            ) : (
              <div className="py-20 text-center text-ink-soft">
                暂无此分类下的演出信息。
              </div>
            )}
          </div>

          {/* 说明 */}
          <div className="mt-20 md:mt-28 max-w-2xl mx-auto pt-10 border-t border-ink-line/80">
            <SectionTitle
              title="温馨提示"
              align="center"
            />
            <div className="grid sm:grid-cols-2 gap-6 text-[14.5px] text-ink/85 leading-[2]">
              <p>
                演出票建议提前两周购票，部分雅集与讲座名额有限，
                请留意各场馆官方渠道预约。
              </p>
              <p>
                古琴演出通常不设扩音设备，
                静听为礼。建议着素色便服，关闭手机铃声，
                一曲方毕，再行鼓掌。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
