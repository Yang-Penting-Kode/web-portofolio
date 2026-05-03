import {
  Globe,
  Smartphone,
  Server,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Landing page, company profile, sampai web app kompleks dengan performa tingkat tinggi.",
    color: "text-primary",
    ring: "border-primary/30",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Aplikasi iOS & Android native maupun cross-platform dengan UX yang premium.",
    color: "text-secondary",
    ring: "border-secondary/30",
  },
  {
    icon: Server,
    title: "Backend & API",
    desc: "Sistem backend yang aman, scalable, dan siap diintegrasikan dengan apa pun.",
    color: "text-accent",
    ring: "border-accent/30",
  },
  {
    icon: Lightbulb,
    title: "Tech Consulting",
    desc: "Pilih stack tepat, arsitektur sehat, roadmap jelas — sebelum baris kode pertama ditulis.",
    color: "text-primary",
    ring: "border-primary/30",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Layanan yang <span className="text-gradient">end-to-end</span>
            </>
          }
          description="Dari ide di kepala sampai produk live di tangan pengguna — semuanya kami kerjakan."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group card-glow card-glow-hover rounded-2xl p-6 h-full relative overflow-hidden">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface-elevated border ${s.ring} ${s.color} mb-5 group-hover:scale-110 transition-transform`}
                >
                  <s.icon size={22} />
                </div>
                <h3 className="font-semibold text-lg flex items-center justify-between">
                  {s.title}
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition"
                  />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-md bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
