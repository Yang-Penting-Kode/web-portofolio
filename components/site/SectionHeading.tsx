import { Reveal } from "./Reveal";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  return (
    <div
      className={
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"
      }
    >
      {eyebrow && (
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border bg-surface/60 text-xs uppercase tracking-wider text-primary mb-4">
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p className="mt-4 text-muted-foreground">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
