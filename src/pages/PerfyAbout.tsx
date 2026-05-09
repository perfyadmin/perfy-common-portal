import { PerfyNav } from "@/components/perfy/PerfyNav";
import { PerfyFooter } from "@/components/perfy/PerfyFooter";
import { EcosystemNetwork } from "@/components/perfy/EcosystemNetwork";
import { PartnersSection } from "@/components/perfy/PartnersSection";
import { FinalCTAPerfy } from "@/components/perfy/FinalCTAPerfy";
import { RevealOnScroll } from "@/components/perfy/RevealOnScroll";
import { useSeo } from "@/hooks/useSeo";
import { ParticleField } from "@/components/perfy/ParticleField";
import { motion } from "framer-motion";
import { Sparkles, Target, Workflow, ShieldCheck, TrendingUp, Globe2, MapPin, Compass } from "lucide-react";
import aboutCharacter from "@/assets/perfy-about-character.png";

const philosophy = [
  { t: "Structure precedes scale", b: "Operational clarity must exist before growth can compound." },
  { t: "Execution defines success", b: "Strategy is necessary — execution is decisive." },
  { t: "Clarity eliminates risk", b: "Documented systems remove fragility and tribal dependence." },
];

const mission = [
  "Structured systems",
  "Scalable operations",
  "Controlled execution",
  "Data-driven decisions",
  "Financial discipline",
  "Human capital development",
  "Technology integration",
];

const Section = ({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) => (
  <section id={id} className="py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <RevealOnScroll>
        <span className="text-xs tracking-[0.3em] text-[hsl(var(--perfy-cyan))]">{eyebrow}</span>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white font-display-perfy max-w-3xl">{title}</h2>
      </RevealOnScroll>
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

const PerfyAbout = () => {
  useSeo({
    title: "About PERFY — Performance Empowerment Ecosystem",
    description: "Discover PERFY's philosophy, vision, ecosystem, leadership, and long-term mission to engineer high-performance businesses worldwide.",
    canonical: typeof window !== "undefined" ? window.location.origin + "/about" : undefined,
  });

  return (
    <div className="theme-perfy-dark min-h-screen overflow-x-hidden">
      <PerfyNav />
      <main>
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 mesh-perfy" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute inset-0"><ParticleField density={50} /></div>
          <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center w-full">
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="text-xs tracking-[0.3em] text-[hsl(var(--perfy-cyan))]">ABOUT PERFY</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] font-display-perfy"
              >
                We engineer the<br />
                <span className="text-electric animate-gradient-shift bg-gradient-to-r from-[hsl(var(--perfy-electric))] via-[hsl(var(--perfy-cyan))] to-white bg-clip-text text-transparent">
                  future of business performance.
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}
                className="mt-8 text-lg text-[hsl(var(--perfy-muted))] max-w-2xl mx-auto lg:mx-0"
              >
                A performance-empowerment ecosystem dedicated to building structured, scalable,
                and high-performing organisations.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 -m-10 rounded-[3rem] bg-gradient-to-br from-[hsl(var(--perfy-electric))]/25 via-[hsl(var(--perfy-cyan))]/15 to-transparent blur-3xl" />
              <div className="relative animate-perfy-float">
                <img
                  src={aboutCharacter}
                  alt="PERFY storyteller reading our story"
                  width={1024}
                  height={1024}
                  className="relative w-full h-auto max-w-md mx-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <Section eyebrow="WHO WE ARE" title={<>Embedded partners. <span className="text-electric">Not advisors.</span></>}>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <p className="text-base md:text-lg text-[hsl(var(--perfy-muted))] leading-relaxed">
              PERFY is a performance-empowerment ecosystem dedicated to building structured, scalable, and
              high-performing organisations. We partner with startups, growth-stage businesses, and established
              enterprises to eliminate inefficiencies, institutionalise systems, and drive performance through
              disciplined execution and strategic clarity.
            </p>
            <RevealOnScroll delay={0.15}>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { k: "Embedded", v: "Inside the engine, not on the sidelines", Icon: Target, grad: "from-[hsl(var(--perfy-electric))] to-[hsl(var(--perfy-cyan))]" },
                  { k: "Outcome", v: "Measured in performance, not deliverables", Icon: TrendingUp, grad: "from-[hsl(var(--perfy-cyan))] to-[hsl(190_90%_55%)]" },
                  { k: "End-to-End", v: "Strategy → execution → optimisation", Icon: Workflow, grad: "from-[hsl(280_80%_60%)] to-[hsl(var(--perfy-electric))]" },
                  { k: "Discipline", v: "Systems built to compound over decades", Icon: ShieldCheck, grad: "from-[hsl(22_85%_60%)] to-[hsl(340_80%_60%)]" },
                ].map((card) => (
                  <div key={card.k} className="group relative rounded-2xl bg-card/90 backdrop-blur border border-foreground/10 shadow-sm p-4 overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_hsl(var(--perfy-electric)/0.35)] transition-all duration-300">
                    <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${card.grad}`} />
                    <div className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity bg-gradient-to-br ${card.grad} blur-xl -z-10`} />
                    <div className="flex items-start gap-3">
                      <div className={`shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br ${card.grad} flex items-center justify-center shadow-md`}>
                        <card.Icon className="w-[18px] h-[18px] text-[#ffffff]" strokeWidth={2.5} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className={`text-[10px] uppercase tracking-[0.2em] bg-gradient-to-r ${card.grad} bg-clip-text text-transparent font-bold`}>{card.k}</div>
                        <p className="mt-1 text-[13px] text-foreground/80 leading-snug">{card.v}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </Section>

        {/* Vision */}
        <Section eyebrow="OUR VISION" title={<>A world where growth is <span className="text-electric">engineered</span>, not assumed.</>}>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <p className="text-base md:text-lg text-[hsl(var(--perfy-muted))] leading-relaxed">
              PERFY envisions a future where every organisation operates with clarity, systems, and performance
              discipline — equipped to scale sustainably, backed by structured execution and measurable outcomes.
            </p>
            <RevealOnScroll delay={0.15}>
              <div className="relative rounded-3xl bg-card/90 backdrop-blur border border-foreground/10 shadow-sm p-5 sm:p-6 overflow-hidden">
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[hsl(var(--perfy-electric))]/20 blur-3xl animate-pulse-glow" />
                <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[hsl(var(--perfy-cyan))]/15 blur-3xl" />
                <div className="relative flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[hsl(var(--perfy-electric))]" />
                    <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/70 font-bold">Compounding Impact</span>
                  </div>
                  <span className="text-[10px] text-foreground/40">Live preview</span>
                </div>
                <div className="relative space-y-4">
                  {[
                    { n: "1×", t: "Strategy", w: "20%", grad: "from-[hsl(280_80%_60%)] via-[hsl(var(--perfy-electric))] to-[hsl(var(--perfy-cyan))]" },
                    { n: "10×", t: "Systems", w: "55%", grad: "from-[hsl(var(--perfy-electric))] via-[hsl(22_85%_60%)] to-[hsl(var(--perfy-cyan))]" },
                    { n: "100×", t: "Execution", w: "92%", grad: "from-[hsl(340_80%_60%)] via-[hsl(var(--perfy-electric))] to-[hsl(190_90%_55%)]" },
                  ].map((row) => (
                    <div key={row.t}>
                      <div className="flex justify-between items-center text-xs uppercase tracking-widest mb-1.5">
                        <span className={`bg-gradient-to-r ${row.grad} bg-clip-text text-transparent font-bold`}>{row.t}</span>
                        <span className="text-foreground font-bold text-sm">{row.n}</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-foreground/10 overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: row.w }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                          className={`h-full rounded-full bg-gradient-to-r ${row.grad} relative overflow-hidden shadow-[0_0_12px_hsl(var(--perfy-electric)/0.4)]`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-[shimmer_2.5s_infinite]" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative mt-5 pt-4 border-t border-foreground/10 flex items-center gap-2">
                  <span className="text-base">⚡</span>
                  <p className="text-xs text-foreground/70 italic">Compounding returns from disciplined execution.</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </Section>

        {/* Ecosystem */}
        <section id="ecosystem" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 mesh-perfy opacity-50" />
          <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div>
                <span className="text-xs tracking-[0.3em] text-[hsl(var(--perfy-cyan))]">PERFY ECOSYSTEM</span>
                <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white font-display-perfy">
                  An ecosystem built for <span className="text-electric">multi-disciplinary execution</span>.
                </h2>
                <p className="mt-6 text-[hsl(var(--perfy-muted))]">
                  Strategy, execution, finance, technology, branding, and capital — operating as one connected
                  system to transform businesses end-to-end.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.15}><EcosystemNetwork /></RevealOnScroll>
          </div>
        </section>

        {/* Foundational Leadership */}
        <PartnersSection />

        {/* Long-Term Mission */}
        <Section eyebrow="LONG-TERM MISSION" title={<>Empowering organisations with <span className="text-electric">enduring systems</span>.</>}>
          <div className="grid md:grid-cols-2 gap-4">
            {mission.map((m, i) => (
              <RevealOnScroll key={m} delay={i * 0.05}>
                <div className="rounded-2xl glass-perfy p-5 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[hsl(var(--perfy-electric))] to-[hsl(var(--perfy-cyan))] text-black font-bold flex items-center justify-center font-display-perfy">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white">{m}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Section>

        {/* Future Vision */}
        <Section eyebrow="FUTURE VISION" title={<>A globally recognised <span className="text-electric">business transformation ecosystem</span>.</>}>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <p className="text-base md:text-lg text-[hsl(var(--perfy-muted))] leading-relaxed">
              PERFY's mission is to ensure no entrepreneur fears building or scaling a business because of a
              lack of structure, systems, or execution. We are building the operating layer for the next
              generation of high-performance organisations across industries.
            </p>
            <RevealOnScroll delay={0.15}>
              <div>
                <div className="relative">
                {/* timeline rail */}
                <div className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-[hsl(var(--perfy-electric))] via-[hsl(var(--perfy-cyan))] to-[hsl(280_80%_60%)] opacity-50" />
                <div className="space-y-3">
                  {[
                    { n: "2026", t: "India scale", d: "Embedded with 100+ growth-stage companies", Icon: MapPin, grad: "from-[hsl(var(--perfy-electric))] to-[hsl(22_85%_60%)]" },
                    { n: "2028", t: "APAC reach", d: "Operating layer across South & SE Asia", Icon: Globe2, grad: "from-[hsl(var(--perfy-cyan))] to-[hsl(190_90%_55%)]" },
                    { n: "2030", t: "Global ecosystem", d: "Cross-border performance OS for enterprises", Icon: Compass, grad: "from-[hsl(280_80%_60%)] to-[hsl(340_80%_60%)]" },
                  ].map((m) => (
                    <div key={m.n} className="group relative pl-14">
                      <div className={`absolute left-0 top-1 w-10 h-10 rounded-xl bg-gradient-to-br ${m.grad} flex items-center justify-center shadow-[0_8px_20px_-8px_hsl(var(--perfy-electric)/0.6)] ring-2 ring-foreground/10`}>
                        <m.Icon className="w-[18px] h-[18px] text-[#ffffff]" strokeWidth={2.5} />
                      </div>
                      <div className="rounded-2xl bg-card/90 backdrop-blur border border-foreground/10 shadow-sm p-3.5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 overflow-hidden relative">
                        <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${m.grad}`} />
                        <div className="flex items-center gap-2 flex-wrap">
                          <div className={`text-lg sm:text-xl font-bold font-display-perfy bg-gradient-to-r ${m.grad} bg-clip-text text-transparent leading-none`}>{m.n}</div>
                          <span className={`text-[9px] sm:text-[10px] uppercase tracking-[0.18em] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${m.grad} text-[#ffffff] shadow-sm`}>{m.t}</span>
                        </div>
                        <p className="mt-1.5 text-[12.5px] text-foreground/70 leading-snug">{m.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
                </div>
                <div className="mt-4 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[hsl(var(--perfy-electric))]/15 via-[hsl(280_80%_60%)]/10 to-[hsl(var(--perfy-cyan))]/15 border border-foreground/10 p-4">
                  <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[hsl(var(--perfy-electric))]/30 blur-2xl animate-pulse-glow" />
                  <p className="relative text-[10px] uppercase tracking-[0.22em] text-[hsl(var(--perfy-electric))] font-bold flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[hsl(var(--perfy-electric))] animate-pulse" />
                    North Star
                  </p>
                  <p className="relative mt-1.5 text-sm text-foreground font-display-perfy font-semibold">Zero entrepreneur left behind for lack of systems.</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </Section>

        <FinalCTAPerfy />
      </main>
      <PerfyFooter />
    </div>
  );
};

export default PerfyAbout;
