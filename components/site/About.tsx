import { Zap, Layers, Code2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const points = [
  { icon: Zap, title: "Fast Delivery", desc: "Tim ramping, workflow modern, sprint cepat tanpa drama." },
  { icon: Layers, title: "Scalable Stack", desc: "Arsitektur yang siap tumbuh dari MVP sampai jutaan user." },
  { icon: Code2, title: "Modern Tech", desc: "React, Next.js, TanStack, Node, Laravel — sesuai kebutuhan." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="About"
          title={<>Tim kecil dengan <span className="text-gradient">dampak besar</span></>}
          description="Yang Penting Kode (YPK) adalah digital agency yang fokus membantu founder, startup, dan brand membangun produk digital yang cepat, indah, dan benar-benar bekerja."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="card-glow card-glow-hover rounded-2xl p-6 h-full">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 mb-4">
                  <p.icon size={20} />
                </div>
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
