import FadeIn from "../components/FadeIn";
import SectionHeading from "../components/SectionHeading";

const markets = [
  "Small Businesses",
  "Retailers & Shops",
  "Schools & Universities",
  "NGOs & Scholarship Bodies",
  "African Markets",
  "South Asian Markets",
];

function About() {
  return (
    <section id="about" className="relative py-32 max-w-5xl mx-auto px-4 sm:px-6">
      <FadeIn>
        <SectionHeading
          title="About OrgTree Systems"
          subtitle="Most businesses across Africa and South Asia are invisible online — even when their service is excellent. We fix that."
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="theme-card rounded-[32px] p-8 sm:p-12 backdrop-blur-xl">
          <p className="leading-relaxed theme-text-secondary text-lg">
            Potential clients are searching online right now for what you offer. If your business
            does not have a fast, credible website — they find your competitor instead. OrgTree
            Systems builds websites, managed platforms, and full digital systems for small
            businesses, schools, and organisations across Africa and South Asia. We scope every
            project to your actual budget and needs, and build it to work on African networks.
            Whether you need a $50 launch site or a complete management platform — we have done it,
            and we can do it for you.
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
