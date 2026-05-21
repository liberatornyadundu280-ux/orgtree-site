import FadeIn from "../components/FadeIn";
import SectionHeading from "../components/SectionHeading";

const markets = [
  "Schools & Universities",
  "NGOs & Scholarship Bodies",
  "Small Businesses",
  "African Markets",
  "South Asian Markets",
];

function About() {
  return (
    <section id="about" className="relative py-32 max-w-5xl mx-auto px-4 sm:px-6">
      <FadeIn>
        <SectionHeading
          title="About OrgTree Systems"
          subtitle="We build digital infrastructure for institutions and organisations across Africa and South Asia."
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="theme-card rounded-[32px] p-8 sm:p-12 backdrop-blur-xl">
          <p className="leading-relaxed theme-text-secondary text-lg">
            OrgTree Systems designs and builds websites, content management platforms, and full
            institutional systems for schools, organisations, and growing businesses. Our flagship
            product — OrgTree — gives institutions a live interactive map of their entire hierarchy,
            communication system, and campus infrastructure. We also build standalone client websites
            and managed platforms tailored to each institution's needs and budget.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {markets.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full border border-[#C8A95B]/25 text-[#C8A95B]/70 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export default About;
