import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const phrases = ["Website", "Mobile App", "SaaS Platform", "API Backend"];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const pauseRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = phrases[idx];
    const speed = deleting ? 50 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          pauseRef.current = setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => (i + 1) % phrases.length);
        }
      }
    }, speed);
    return () => {
      clearTimeout(t);
      if (pauseRef.current) {
        clearTimeout(pauseRef.current);
        pauseRef.current = null;
      }
    };
  }, [text, deleting, idx]);

  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
      {/* background layers */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-120 w-120 rounded-md bg-primary/20 blur-[120px] animate-glow-pulse" />
        <div
          className="absolute top-40 right-10 h-72 w-72 rounded-md bg-secondary/20 blur-[100px] animate-glow-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-0 left-10 h-64 w-64 rounded-md bg-accent/15 blur-[100px] animate-glow-pulse"
          style={{ animationDelay: "2.5s" }}
        />
      </div>

      {/* floating orbs */}
      <div className="absolute top-1/3 left-12 hidden md:block">
        <div className="h-3 w-3 rounded-md bg-primary shadow-[0_0_24px_4px_var(--color-cyan-glow)] animate-float" />
      </div>
      <div className="absolute top-1/4 right-20 hidden md:block">
        <div
          className="h-2 w-2 rounded-md bg-secondary shadow-[0_0_20px_4px_var(--color-purple-glow)] animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>
      <div className="absolute bottom-24 right-1/3 hidden md:block">
        <div
          className="h-2.5 w-2.5 rounded-md bg-accent shadow-[0_0_20px_4px_var(--color-orange-glow)] animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border/80 bg-surface/60 backdrop-blur text-xs text-muted-foreground mb-8 animate-fade-in">
          <Sparkles size={14} className="text-primary" />
          Digital Agency · Build · Scale · Deliver
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] animate-fade-up">
          Bangun{" "}
          <span className="text-gradient">{text}</span>
          <span className="inline-block w-0.75 h-[0.9em] align-[-0.1em] bg-primary ml-1 animate-blink" />
          <br />
          Tanpa Ribet.
        </h1>

        <p
          className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          Yang Penting Kode mengubah ide kamu menjadi produk digital yang cepat, scalable, dan siap
          memenangkan pasar — dari konsep sampai launch.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.03] shadow-[0_0_40px_-8px_var(--color-cyan-glow)]"
          >
            Konsultasi Gratis
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 backdrop-blur px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/50 hover:text-primary transition"
          >
            Lihat Portfolio
          </a>
        </div>

        <div
          className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-up"
          style={{ animationDelay: "450ms" }}
        >
          {[
            ["50+", "Project Delivered"],
            ["30+", "Happy Clients"],
            ["5★", "Avg. Rating"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient">{n}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
