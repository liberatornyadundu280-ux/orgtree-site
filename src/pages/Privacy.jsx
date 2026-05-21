import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const sections = [
  {
    title: "Information We Collect",
    body: "When you contact us through the website form, we collect your name, email address, institution name, and the message you send. We do not collect any data passively — no cookies, no tracking pixels, no analytics beyond what Formspree provides for form submissions.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your contact details solely to respond to your enquiry and discuss your project. We do not sell, rent, or share your information with any third party. We do not add you to any mailing list without your explicit consent.",
  },
  {
    title: "Data Storage",
    body: "Form submissions are processed by Formspree and delivered to our email. We retain email correspondence for as long as a business relationship exists. You may request deletion of your data at any time by emailing us directly.",
  },
  {
    title: "Third-Party Services",
    body: "This site uses Formspree for contact form delivery. Their privacy policy applies to data processed through their service. No other third-party services collect data through this website.",
  },
  {
    title: "Contact",
    body: "For any privacy-related questions or data deletion requests, email liberatornyadundu280@gmail.com.",
  },
];

function Privacy() {
  return (
    <div className="relative min-h-screen theme-bg theme-text-primary">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <div className="mb-2 text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A95B]/50">
          Legal
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#C8A95B] mb-3">Privacy Policy</h1>
        <p className="text-sm text-white/30 mb-12">Last updated: {new Date().getFullYear()}</p>

        <div className="flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.title} className="theme-card rounded-[24px] p-8 backdrop-blur-xl">
              <h2 className="text-base font-semibold theme-text-primary mb-3">{s.title}</h2>
              <p className="text-sm theme-text-secondary leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/"
            className="text-sm text-[#C8A95B]/60 hover:text-[#C8A95B] transition-colors duration-200 underline underline-offset-4"
          >
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Privacy;
