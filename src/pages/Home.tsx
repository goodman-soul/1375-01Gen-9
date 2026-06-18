import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import Timeline from "@/components/Timeline";
import SchoolCard from "@/components/SchoolCard";
import FingerTable from "@/components/FingerTable";
import TrackCard from "@/components/TrackCard";
import { historyData } from "@/data/history";
import { schoolsData } from "@/data/schools";
import {
  rightHandBasics,
  leftHandBasics,
} from "@/data/fingers";
import { tracksData } from "@/data/tracks";
import { ArrowRight, Sparkles } from "lucide-react";

function Hero() {
  const hRef = useScrollReveal<HTMLDivElement>();
  const subRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative pt-24 md:pt-36 pb-28 md:pb-40 overflow-hidden">
      <div className="container relative">
        <div
          ref={hRef}
          className="text-center mb-14 md:mb-20"
        >
          <p className="font-serif text-cinnabar/80 tracking-widest1 text-sm mb-6">
            · 古琴文化入门 ·
          </p>
          <h1 className="font-serif text-[44px] md:text-6xl lg:text-[72px] text-ink tracking-widest1 leading-tight mb-8">
            琴 韵
          </h1>
          <div className="mx-auto w-16 h-px bg-ink-line mb-8" />
          <p className="text-ink-soft text-[15px] md:text-base leading-[2.1] max-w-xl mx-auto">
            三千年琴人之思，七弦上的山河故人。
            <br className="hidden md:block" />
            静听松风，慢抚流水，从这里走近古琴。
          </p>
        </div>

        <div
          ref={subRef}
          className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6 md:gap-10"
        >
          {[
            {
              t: "从听赏始",
              d: "聆琴音、辨三籁，先让耳朵熟悉古琴的散、按、泛三音。",
            },
            {
              t: "循流派行",
              d: "识虞山之清微、广陵之绮丽、川派之雄放，各擅其美。",
            },
            {
              t: "至操缦终",
              d: "右手八法、左手吟猱，徐徐抚弦，终得雅韵。",
            },
          ].map((it, i) => (
            <div
              key={it.t}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
              className="text-center reveal is-visible"
            >
              <p className="font-serif text-cinnabar text-xs tracking-widest1 mb-3">
                {["壹", "贰", "叁"][i]}
              </p>
              <h3 className="font-serif text-xl text-ink mb-2 tracking-wider1">
                {it.t}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-16 md:mt-20 text-center"
        >
          <Link
            to="/learning"
            className="group inline-flex items-center gap-2 text-[15px] text-pine border-b border-pine/40 pb-1 hover:text-cinnabar hover:border-cinnabar/60 transition-colors duration-400"
          >
            <span className="flex items-center gap-2">
              <Sparkles size={15} />
              查看学习路线
            </span>
            <ArrowRight
              size={16}
              className="transition-transform duration-400 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* 琴史 */}
      <section id="history" className="pb-24 md:pb-36">
        <div className="container">
          <SectionTitle
            index="壹 · 琴史"
            title="三千年弦歌不辍"
            subtitle="从先秦的滥觞之音，到唐宋的斫琴鼎盛，再到近现代的薪火相传，七弦上铭刻了半部中国文人精神史。"
          />
          <div className="max-w-4xl mx-auto pt-4">
            <Timeline items={historyData} />
          </div>
        </div>
      </section>

      {/* 流派 */}
      <section id="schools" className="py-24 md:py-36 bg-paper-2/40 border-y border-ink-line-soft">
        <div className="container">
          <SectionTitle
            index="贰 · 流派"
            title="百川归海 · 琴派纵横"
            subtitle="一方水土一方琴，虞山的清微、广陵的绮丽、川派的雄峻、诸城的刚劲，构成琴乐的万紫千红。"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 md:gap-y-14">
            {schoolsData.map((s, i) => (
              <SchoolCard key={s.name} school={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 指法 */}
      <section id="fingers" className="py-24 md:py-36">
        <div className="container">
          <SectionTitle
            index="叁 · 指法"
            title="左手吟猱 · 右手弹挑"
            subtitle="指法为琴乐之筋骨。右手八法定音之清浊，左手常法饰韵之幽微，二者相合，方有琴韵。"
          />
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-14 max-w-6xl mx-auto">
            <FingerTable group={rightHandBasics} accent="pine" />
            <FingerTable group={leftHandBasics} accent="cinnabar" />
          </div>
        </div>
      </section>

      {/* 经典曲目 */}
      <section id="tracks" className="py-24 md:py-36 bg-paper-2/40 border-t border-ink-line-soft">
        <div className="container">
          <SectionTitle
            index="肆 · 曲目"
            title="名曲钩沉 · 琴中世界"
            subtitle="从《流水》的奔流到《平沙》的辽远，从《酒狂》的佯狂到《潇湘》的苍茫，每一曲都是一段千古心事。"
          />
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {tracksData.map((t, i) => (
              <TrackCard key={t.title} track={t} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
