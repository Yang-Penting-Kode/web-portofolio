import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "5jt",
    desc: "Cocok untuk landing page & company profile.",
    features: ["1 Landing Page", "Responsive Design", "Basic SEO", "Revisi 2x", "Support 14 hari"],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "15jt",
    desc: "Untuk bisnis yang butuh web/app interaktif.",
    features: ["Custom Web/App", "CMS Integration", "Advanced SEO", "Revisi 5x", "Support 60 hari", "Analytics setup"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Solusi skala besar dengan kebutuhan kompleks.",
    features: ["Tim dedicated", "Arsitektur scalable", "API & Integrasi", "Unlimited revisi", "Support 1 tahun", "SLA priority"],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Pricing"
          title={<>Paket yang <span className="text-gradient">fleksibel</span></>}
          description="Mulai dari yang ringan sampai skala enterprise — pilih sesuai kebutuhan."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div
                className={cn(
                  "rounded-2xl p-7 h-full relative card-glow card-glow-hover",
                  p.highlighted &&
                    "border-primary/60 bg-gradient-to-b from-primary/10 to-transparent shadow-[0_0_60px_-20px_var(--color-cyan-glow)]",
                )}
              >
                {p.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-md bg-primary text-primary-foreground font-medium">
                    Most Popular
                  </span>
                )}
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gradient">Rp {p.price}</span>
                  {p.price !== "Custom" && <span className="text-muted-foreground text-sm">/project</span>}
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={cn(
                    "mt-8 inline-flex w-full items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition",
                    p.highlighted
                      ? "bg-primary text-primary-foreground hover:opacity-90 shadow-[0_0_30px_-8px_var(--color-cyan-glow)]"
                      : "border border-border text-foreground hover:border-primary/50 hover:text-primary",
                  )}
                >
                  Pilih {p.name}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
