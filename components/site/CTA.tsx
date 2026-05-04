import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-surface-elevated via-surface to-background p-10 md:p-16 text-center">
            <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-md bg-primary/30 blur-[100px] animate-glow-pulse" />
            <div className="absolute bottom-0 right-0 h-60 w-60 rounded-md bg-secondary/20 blur-[100px]" />

            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Punya ide? <span className="text-gradient">Kita bantu wujudkan.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Konsultasi gratis 30 menit. Kami bantu petakan kebutuhan, stack, dan estimasi project kamu.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:scale-[1.03] shadow-[0_0_40px_-8px_var(--color-cyan-glow)]"
              >
                Mulai Konsultasi
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
