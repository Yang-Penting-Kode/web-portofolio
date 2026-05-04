import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    quote:
      "YPK delivered our MVP dalam 6 minggu. Kualitas kode dan komunikasinya top — sudah seperti tim internal sendiri.",
    name: "Rani Pradipta",
    role: "Founder, Lumen Commerce",
  },
  {
    quote:
      "Mereka tidak cuma ngoding, tapi ikut mikirin produk. Hasilnya, retention app kami naik 38% setelah redesign.",
    name: "Aditya Surya",
    role: "Product Lead, Wanderly",
  },
  {
    quote:
      "Profesional, responsif, dan hasilnya bersih. Kami akan tetap pakai YPK untuk project-project berikutnya.",
    name: "Maria Hutapea",
    role: "CTO, FinDesk",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Dipercaya oleh <span className="text-gradient">tim hebat</span>
            </>
          }
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="card-glow card-glow-hover rounded-2xl p-6 h-full flex flex-col">
                <Quote className="text-primary/70" size={28} />
                <blockquote className="mt-4 text-sm text-foreground/90 leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 pt-4 border-t border-border/60">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
