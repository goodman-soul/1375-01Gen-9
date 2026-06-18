import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import StageCard from "@/components/StageCard";
import { learningStages } from "@/data/learning";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function LearningHero() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container">
        <div ref={ref} className="max-w-3xl">
          <p className="font-serif text-cinnabar tracking-widest1 text-sm mb-5">
            · 循序渐进 ·
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-wider1 leading-tight mb-8">
            习琴之路
          </h1>
          <div className="w-20 h-px bg-cinnabar/40 mb-8" />
          <p className="text-[15.5px] md:text-lg text-ink/85 leading-[2] mb-8">
            操缦之道，非一蹴而就。先以听赏入心，继以识谱入门，
            终以护琴养志。三阶段层层递进，不急不躁，方得琴中真味。
          </p>
          <div className="flex flex-wrap gap-6 text-xs md:text-sm text-ink-soft">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cinnabar" />
              壹 · 听赏入门
            </span>
            <span className="text-ink-line">→</span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pine" />
              贰 · 识谱基础
            </span>
            <span className="text-ink-line">→</span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ink" />
              叁 · 保养指南
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Learning() {
  const tipRef = useScrollReveal<HTMLDivElement>();
  return (
    <>
      <LearningHero />

      <section className="pb-16 md:pb-24">
        <div className="container">
          <SectionTitle
            index="三阶递进"
            title="由浅入深 · 徐徐图之"
            subtitle="每一阶段皆有其关注重点与达标清单，完成后再进阶，稳扎稳打，方为正道。"
          />
          <div className="max-w-5xl mx-auto">
            {learningStages.map((stage, i) => (
              <StageCard key={stage.stage} stage={stage} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 连接演出信息 */}
      <section className="py-16 md:py-24 bg-paper-2/50 border-y border-ink-line-soft">
        <div
          ref={tipRef}
          className="container grid md:grid-cols-[1.6fr_1fr] gap-10 md:gap-16 items-center"
        >
          <div>
            <p className="text-xs font-serif text-cinnabar tracking-widest1 mb-4">
              · 实地观摩 ·
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-ink tracking-wider1 mb-5 leading-snug">
              纸上得来终觉浅
              <br className="hidden md:block" />
              绝知此事要躬听
            </h3>
            <p className="text-[15px] md:text-[16px] text-ink/85 leading-[2] mb-6 max-w-xl">
              听赏阶段之要义，在于亲耳聆听现场演奏。场馆中琴声绕梁，
              观演奏家指法之妙，悟琴韵之深，远胜录音十遍。
            </p>
            <Link
              to="/performances"
              className="group inline-flex items-center gap-2.5 px-5 py-3 bg-ink text-paper text-sm tracking-wider1 hover:bg-pine transition-colors duration-400"
            >
              <BookOpen size={15} />
              浏览近期演出
              <ArrowRight
                size={15}
                className="transition-transform duration-400 group-hover:translate-x-1"
              />
            </Link>
          </div>
          <div className="hidden md:block relative">
            <div className="aspect-[4/5] bg-paper border border-ink-line relative overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <p className="font-serif text-[80px] text-cinnabar/15 leading-none mb-4">
                  琴
                </p>
                <div className="w-12 h-px bg-ink-line mb-4" />
                <p className="font-serif text-xl text-ink/70 tracking-widest1 leading-loose">
                  士
                  <br />
                  无
                  <br />
                  故
                  <br />
                  不
                  <br />
                  撤
                  <br />
                  琴
                  <br />
                  瑟
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
