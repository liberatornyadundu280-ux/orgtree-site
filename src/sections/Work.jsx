import FadeIn from "../components/FadeIn";
import SectionHeading from "../components/SectionHeading";

const projects = [
  {
    label: "Flagship Product",
    name: "OrgTree",
    desc: "A live interactive org hierarchy, notification system, campus map, and staff directory — deployed at Aditya University, India.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    href: "https://org-tree-eta.vercel.app/",
    status: "Live",
  },
  {
    label: "Client Site",
    name: "Greenhoods High School",
    desc: "Full school website for a Zimbabwean secondary school — academic programmes, news & events, staff directory, admissions form, and event-filtered gallery. Mobile-first, zero-dependency deployment.",
    tags: ["HTML", "CSS", "Vanilla JS"],
    href: "https://enchanting-gumdrop-80dbf6.netlify.app/",
    status: "Live",
  },
];

function Work() {
  return (
    <section id="work" className="relative py-32 max-w-5xl mx-auto px-4 sm:px-6">
      <FadeIn>
        <SectionHeading
          title="Work"
          subtitle="Live deployments and client demos that show range across service tiers."
        />
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.1}>
            <div className="theme-card rounded-[28px] p-8 backdrop-blur-xl flex flex-col gap-4 h-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,169,91,0.12)]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#C8A95B]/60">
                  {p.label}
                </span>
                <span
                  className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                    p.status === "Live"
                      ? "bg-[#C8A95B]/10 text-[#C8A95B]"
                      : "bg-white/5 text-white/30"
                  }`}
                >
                  {p.status}
                </span>
              </div>

              <h3 className="text-xl font-bold theme-text-primary">{p.name}</h3>

              <p className="text-sm theme-text-secondary leading-relaxed flex-1">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[11px] font-medium border border-white/8 text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-[#C8A95B] hover:opacity-70 transition-opacity"
                >
                  View Live →
                </a>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export default Work;
