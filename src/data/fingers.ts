export interface FingerTechnique {
  symbol: string;
  name: string;
  action: string;
  note?: string;
}

export interface FingerGroup {
  title: string;
  subtitle: string;
  items: FingerTechnique[];
}

export const rightHandFingers: FingerTechnique[] = [
  { symbol: "一", name: "大指", action: "拇指外侧指甲尖触弦", note: "古称「擘」" },
  { symbol: "二", name: "食指", action: "食指甲尖向徽外弹弦", note: "古称「挑」" },
  { symbol: "三", name: "中指", action: "中指甲尖向徽外弹弦", note: "古称「勾」" },
  { symbol: "四", name: "名指", action: "无名指甲尖向徽外弹弦", note: "古称「打」" },
];

export const rightHandBasics: FingerGroup = {
  title: "右手八法",
  subtitle: "四指各有向内外两势，合为八法，乃指法之根基",
  items: [
    { symbol: "托", name: "托", action: "大指向内（向身侧）拨弦" },
    { symbol: "擘", name: "擘", action: "大指向外（离身）拨弦" },
    { symbol: "抹", name: "抹", action: "食指向内拨弦" },
    { symbol: "挑", name: "挑", action: "食指向外拨弦" },
    { symbol: "勾", name: "勾", action: "中指向内拨弦" },
    { symbol: "剔", name: "剔", action: "中指向外拨弦" },
    { symbol: "打", name: "打", action: "无名指向内拨弦" },
    { symbol: "摘", name: "摘", action: "无名指向外拨弦" },
  ],
};

export const leftHandBasics: FingerGroup = {
  title: "左手常法",
  subtitle: "按弦取音，以吟猱、上下、进退之法润饰音色",
  items: [
    { symbol: "散", name: "散音", action: "空弦不按，声如钟磬，苍劲浑厚" },
    { symbol: "按", name: "按音", action: "左手按弦，右手指弹，得温润之声" },
    { symbol: "泛", name: "泛音", action: "左指轻点徽位，右手指弹，得天籁清声" },
    { symbol: "吟", name: "吟", action: "按弦后左右轻微摆动，如诗之吟咏" },
    { symbol: "猱", name: "猱", action: "按弦后上下大幅摆动，如猿猴攀援" },
    { symbol: "绰", name: "绰", action: "先按下方，上滑至正位，得向上滑音" },
    { symbol: "注", name: "注", action: "先按上方，下滑至正位，得向下滑音" },
    { symbol: "撞", name: "撞", action: "按位得音后，急促向上一撞即回" },
  ],
};
