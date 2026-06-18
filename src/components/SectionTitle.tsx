import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionTitleProps {
  index?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  index,
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      {index && (
        <p
          className={`font-serif text-cinnabar tracking-widest1 text-sm mb-3 ${
            align === "center" ? "" : ""
          }`}
        >
          {index}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-[34px] text-ink tracking-wider1 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-ink-soft text-[15px] leading-relaxed ${
            align === "center"
              ? "max-w-2xl mx-auto"
              : "max-w-xl"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-px bg-ink-line w-20 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
