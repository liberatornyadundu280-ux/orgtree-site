import FadeIn from "../components/FadeIn";
import SectionHeading from "../components/SectionHeading";

const tiers = [
  {
    badge: "Starter",
    name: "Launch Site",
    price: "$25 – $50",
    priceNote: "Lower end if your content is ready. Higher if we source images, write copy, or build extra sections.",
    desc: "Your business gets a professional website — fast, mobile-first, and built to work on any connection. Live within a week.",
    detail: "No tech knowledge needed. You send updates, we handle the rest.",
    highlight: false,
  },
  {
    badge: "Most Popular",
    name: "Managed Site",
    price: "$80 – $150 + $15/mo",
    priceNote: "Depends on number of pages, content types, and depth of CMS customisation. Monthly covers hosting and maintenance.",
    desc: "Your team updates the site themselves — add news, events, staff, and announcements without writing a line of code.",
    detail: "One person. Thirty minutes of training. Live content.",
    highlight: true,
  },
  {
    badge: "Enterprise",
    name: "Full Platform",
    price: "$500 – $900",
    priceNote: "Depends on organisation size, number of modules, and whether multiple portals (staff, parent, admin) are needed.",
    desc: "A complete digital system — staff directory, notifications, portals, and org hierarchy. Built on OrgTree and shaped to your structure.",
    detail: "Custom-built for your specific structure.",
    highlight: false,
  },
];

const steps = [
  {
    number: "01",
    title: "Scope",
    desc: "A free 30-minute call. We learn your business, goals, and budget — and tell you exactly what we'd build.",
  },
  {
    number: "02",
    title: "Build",
    desc: "We design and develop. You review, request changes, and approve before anything goes live.",
  },
  {
    number: "03",
    title: "Launch",
    desc: "Your site goes live. We hand over everything — logins, training, and ongoing support if you need it.",
  },
];

function Services() {
  return (
    <section id="services" className="relative py-20 max-w-5xl mx-auto px-4 sm:px-6">
      <FadeIn>
        <SectionHeading
          title="Services"
          subtitle="Three ways we help businesses and institutions get online and stay ahead."
        />
      </FadeIn>

      {/* How it works */}
      <FadeIn delay={0.05}>
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-[#C8A95B]/50 mb-6">
            How it works
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-2">
                <span className="text-3xl font-bold text-[#C8A95B]/20">{step.number}</span>
                <h4 className="font-semibold theme-text-primary text-sm">{step.title}</h4>
                <p className="text-xs theme-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {tiers.map((s, i) => (
          <FadeIn key={s.name} delay={i * 0.08}>
            <div
              className={`relative theme-card rounded-[28px] p-8 backdrop-blur-xl flex flex-col gap-3 transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,169,91,0.12)] ${
                s.highlight ? "border-[#C8A95B]/40" : ""
              }`}
            >
              {s.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#C8A95B] text-black text-[10px] font-bold tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#C8A95B]/60">
                {s.badge}
              </span>
              <h3 className="text-xl font-bold theme-text-primary">{s.name}</h3>
              <p className="text-[#C8A95B] font-semibold text-sm">{s.price}</p>
              <p className="text-[10px] text-white/35 leading-relaxed -mt-1">{s.priceNote}</p>
              <p className="text-sm theme-text-secondary leading-relaxed">{s.desc}</p>
              <p className="text-xs text-white/30 italic mt-auto pt-3 border-t border-white/5">
                {s.detail}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <div className="mt-8 theme-card rounded-[24px] p-6 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold theme-text-primary text-sm">Architecture Consultation</p>
            <p className="text-xs theme-text-secondary mt-1">
              Your team builds. We design the system — database schema, API structure, role model, deployment strategy.
            </p>
            <p className="text-[10px] text-white/35 mt-1">
              $80 for a focused 1–2hr session · $150 for complex systems with full documentation.
            </p>
          </div>
          <span className="text-[#C8A95B] font-semibold text-sm whitespace-nowrap">$80 – $150</span>
        </div>
      </FadeIn>
    </section>
  );
}

export default Services;
