export default function Footer() {
  return (
    <footer className="mt-32 border-t border-ink-line-soft bg-paper-2/40">
      <div className="container py-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <p className="font-serif text-2xl text-ink tracking-widest1 mb-3">
            琴 韵
          </p>
          <p className="text-ink-soft text-sm leading-relaxed max-w-md">
            以琴载道，以韵传心。面向零基础古琴爱好者的文化入门站，
            静静讲述三千年琴人之思、琴曲之美。
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-ink-soft mb-2">
            © {new Date().getFullYear()} 琴韵 · 古琴文化入门
          </p>
          <p className="text-xs text-ink-soft/80">
            本站内容仅供学习参考 · 欢迎同道雅正
          </p>
        </div>
      </div>
    </footer>
  );
}
