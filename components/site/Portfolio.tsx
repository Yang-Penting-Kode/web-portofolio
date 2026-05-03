import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Lumen Commerce",
    category: "E-Commerce Platform",
    stack: ["Next.js", "Stripe", "Postgres"],
    grad: "from-primary/40 via-secondary/30 to-transparent",
  },
  {
    title: "Wanderly",
    category: "Travel Booking App",
    stack: ["React Native", "Node", "Mapbox"],
    grad: "from-accent/40 via-primary/30 to-transparent",
  },
  {
    title: "Pulse Analytics",
    category: "SaaS Dashboard",
    stack: ["React", "TanStack", "Supabase"],
    grad: "from-secondary/40 via-primary/30 to-transparent",
  },
  {
    title: "FinDesk",
    category: "Fintech Web App",
    stack: ["Vue", "Laravel", "MySQL"],
    grad: "from-primary/40 via-accent/20 to-transparent",
  },
  {
    title: "EduFlow",
    category: "Learning Platform",
    stack: ["Next.js", "tRPC", "Prisma"],
    grad: "from-secondary/40 via-accent/20 to-transparent",
  },
  {
    title: "FreshMart",
    category: "Grocery Mobile App",
    stack: ["Flutter", "Firebase"],
    grad: "from-accent/40 via-secondary/30 to-transparent",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title={<>Karya yang <span className="text-gradient">berbicara</span></>}
          description="Beberapa project yang sudah kami bangun bersama klien dari berbagai industri."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 100}>
              <article className="group card-glow card-glow-hover rounded-2xl overflow-hidden">
                <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.grad} bg-surface-elevated overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-4xl font-bold text-foreground/80 group-hover:scale-110 transition-transform duration-500">
                      {p.title.split(" ").map((w) => w[0]).join("")}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 h-9 w-9 rounded-md bg-background/70 backdrop-blur border border-border flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition">
                    <ExternalLink size={15} />
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wider text-primary">{p.category}</div>
                  <h3 className="mt-1 font-semibold text-lg">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="text-xs px-2 py-1 rounded-md bg-surface-elevated border border-border text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
