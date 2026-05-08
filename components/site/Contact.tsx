import { Mail, MessageCircle, Instagram } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "yangpentingkode@gmail.com",
    href: "mailto:yangpentingkode@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 881 0103 01313",
    href: "https://wa.me/62881010301313",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@yangpentingkode",
    href: "https://instagram.com/yangpentingkode",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Contact"
          title={<>Mari <span className="text-gradient">ngobrol</span></>}
          description="Pilih channel yang paling nyaman buatmu. Kami biasanya membalas dalam 1×24 jam."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group card-glow card-glow-hover rounded-2xl p-6 flex flex-col items-center text-center h-full"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform">
                  <c.icon size={20} />
                </div>
                <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="mt-1 font-semibold text-foreground group-hover:text-primary transition">{c.value}</div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:scale-[1.03] shadow-[0_0_40px_-8px_var(--color-cyan-glow)]"
            >
              <MessageCircle size={16} />
              Chat via WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
