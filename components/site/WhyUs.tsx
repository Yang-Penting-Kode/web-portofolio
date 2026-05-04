import { Award, Clock, LifeBuoy, SlidersHorizontal } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    icon: Award,
    title: "Profesional",
    desc: "Kode bersih, dokumentasi rapi, proses transparan.",
  },
  {
    icon: Clock,
    title: "Cepat & Tepat Waktu",
    desc: "Komitmen pada deadline, milestone yang jelas.",
  },
  {
    icon: LifeBuoy,
    title: "Support After Project",
    desc: "Maintenance & bantuan teknis pasca-launch.",
  },
  {
    icon: SlidersHorizontal,
    title: "Custom Sesuai Kebutuhan",
    desc: "Solusi dibuat presisi, bukan one-size-fits-all.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              Kenapa pilih <span className="text-gradient">YPK?</span>
            </>
          }
          description="Karena kami percaya kode yang baik adalah kode yang membantu bisnismu tumbuh."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div className="card-glow card-glow-hover rounded-2xl p-6 h-full">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-secondary/20 border border-primary/20 text-primary mb-4">
                  <it.icon size={20} />
                </div>
                <h3 className="font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
