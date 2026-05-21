import FadeIn from "../components/FadeIn";
import SectionHeading from "../components/SectionHeading";

const tiers = [
  {
    badge: "Tier 1",
    name: "Web Presence",
    price: "From $50",
    desc: "A professional 1-page website. Fast, mobile-first, works on 2G connections. Your institution online in one week.",
    detail: "No admin needed. You send updates, we deploy.",
    highlight: false,
  },
  {
    badge: "Tier 2",
    name: "Managed Website",
    price: "From $150 + $25/mo",
    desc: "A website your team updates themselves. Add news, events, staff, and announcements without touching code.",
    detail: "One staff member, 30 minutes of training, live content.",
    highlight: true,
  },
  {
    badge: "Tier 3",
    name: "Institutional Platform",
    price: "From $800",
    desc: "Full management system. Staff directory, notifications, parent portals, achievements, and org hierarchy. Built on OrgTree.",
    detail: "Custom-built for your institution's structure.",
    highlight: false,
  },
];

function Services() {
  return (
    <section id="services" className="relative py-20 max-w-5xl mx-auto px-4 sm:px-6">
      <FadeIn>
        <SectionHeading
          title="Services"
          subtitle="Three ways we help institutions establish and grow their digital presence."
        />
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
          </div>
          <span className="text-[#C8A95B] font-semibold text-sm whitespace-nowrap">From $200</span>
        </div>
      </FadeIn>
    </section>
  );
}

export default Services;
