export interface Performance {
  title: string;
  date: string;
  weekday: string;
  time: string;
  venue: string;
  city: string;
  performers: string[];
  programs: { track: string; composer?: string }[];
  tag: "独奏" | "合奏" | "讲座" | "雅集";
  introduction?: string;
}

export const performancesData: Performance[] = [
  {
    title: "高山流水 · 古琴名家独奏音乐会",
    date: "2026-07-12",
    weekday: "周日",
    time: "19:30",
    venue: "国家大剧院 · 小剧场",
    city: "北京",
    performers: ["陈长林", "李祥霆", "龚一"],
    programs: [
      { track: "流水", composer: "川派 · 张孔山传谱" },
      { track: "广陵散", composer: "古曲" },
      { track: "梅花三弄", composer: "古曲" },
      { track: "潇湘水云", composer: "宋 · 郭沔" },
    ],
    tag: "独奏",
    introduction:
      "三位当代古琴大家联袂登台，以经典曲目再现千年琴韵。流水奔腾、广陵慷慨、梅花高洁、潇湘苍茫，一夜听遍琴中四大名曲。",
  },
  {
    title: "平沙落雁 · 广陵派传承演奏会",
    date: "2026-07-26",
    weekday: "周日",
    time: "14:30",
    venue: "扬州音乐厅",
    city: "扬州",
    performers: ["戴晓莲", "扬州市广陵琴社"],
    programs: [
      { track: "平沙落雁", composer: "广陵派传谱" },
      { track: "渔歌", composer: "古曲" },
      { track: "樵歌", composer: "毛敏仲" },
      { track: "醉渔唱晚", composer: "古曲" },
    ],
    tag: "合奏",
    introduction:
      "广陵派发源地扬州，迎来本派嫡传弟子戴晓莲教授携琴社同仁，演绎广陵派标志性曲目，重温「跌宕多变，绮丽细腻」之风。",
  },
  {
    title: "琴与诗 · 古琴讲座与示范",
    date: "2026-08-03",
    weekday: "周一",
    time: "19:00",
    venue: "上海图书馆 · 多功能厅",
    city: "上海",
    performers: ["严晓星（主讲）", "茅毅（示范）"],
    programs: [
      { track: "阳关三叠", composer: "唐代古曲" },
      { track: "忆故人", composer: "彭祉卿传谱" },
      { track: "良宵引", composer: "明代古谱" },
    ],
    tag: "讲座",
    introduction:
      "著名琴学学者严晓星主讲「琴与古典诗词」，由诸城派传人茅毅现场示范。边讲边弹，琴诗互映，为入门爱好者度身打造。",
  },
  {
    title: "夏夜清音 · 文人雅集",
    date: "2026-08-15",
    weekday: "周六",
    time: "19:30",
    venue: "苏州拙政园 · 远香堂",
    city: "苏州",
    performers: ["苏州怡园琴会", "裴金宝", "叶名佩"],
    programs: [
      { track: "石上流泉", composer: "古曲" },
      { track: "山居吟", composer: "毛敏仲" },
      { track: "龙翔操", composer: "古曲" },
      { track: "普庵咒", composer: "古曲" },
    ],
    tag: "雅集",
    introduction:
      "仲夏之夜，于苏州园林百年雅集胜地，焚香点茶，听琴赏荷。以琴会友，不拘形式，观众亦可自荐抚琴一曲。限 50 人。",
  },
  {
    title: "梅庵风 · 诸城梅庵派名曲专场",
    date: "2026-08-30",
    weekday: "周日",
    time: "19:30",
    venue: "南通更俗剧院",
    city: "南通",
    performers: ["王永昌", "梅庵琴社"],
    programs: [
      { track: "长门怨", composer: "诸城派传谱" },
      { track: "关山月", composer: "梅庵派传谱" },
      { track: "捣衣", composer: "梅庵派传谱" },
      { track: "凤求凰", composer: "梅庵派传谱" },
    ],
    tag: "合奏",
    introduction:
      "梅庵派发源地南通，迎来本派第九代传人王永昌先生率琴社。梅庵四弄齐奏，重现「流畅如歌、明快生动」之琴风。",
  },
  {
    title: "九霄环佩 · 名琴鉴赏与演奏",
    date: "2026-09-20",
    weekday: "周日",
    time: "14:00",
    venue: "故宫博物院 · 珍宝馆",
    city: "北京",
    performers: ["故宫博物院古琴专家", "吴钊"],
    programs: [
      { track: "幽兰", composer: "南朝 · 丘明传谱" },
      { track: "酒狂", composer: "晋 · 阮籍" },
      { track: "胡笳十八拍（节本）", composer: "古曲" },
    ],
    tag: "讲座",
    introduction:
      "故宫藏唐代雷氏名琴「九霄环佩」开箱鉴赏，古琴专家现场讲解斫琴工艺，并以宋琴演奏古曲。限额 30 人，需提前预约。",
  },
];
