import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const sections = [
  {
    title: "Services",
    body: "OrgTree Systems provides website design, managed platform development, institutional system builds, and architecture consultation. The exact scope, deliverables, timeline, and pricing for each engagement are agreed upon in writing before work begins.",
  },
  {
    title: "Payments",
    body: "A deposit is required before any work commences. The deposit amount and payment schedule are defined per project. All prices listed on this website are starting prices — final pricing depends on scope, complexity, and timeline.",
  },
  {
    title: "Intellectual Property",
    body: "Upon full payment, the client owns the final deliverable. OrgTree Systems retains the right to display the work in its portfolio unless the client requests otherwise in writing. Any third-party components (fonts, libraries, open-source tools) remain subject to their respective licences.",
  },
  {
    title: "Revisions",
    body: "Each project includes a defined number of revision rounds. Additional revisions beyond the agreed scope are billed at an hourly rate agreed before work begins.",
  },
  {
    title: "Limitation of Liability",
    body: "OrgTree Systems is not liable for any indirect, incidental, or consequential damages arising from the use of delivered work. Our total liability for any claim is limited to the amount paid for the specific project in question.",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of the Republic of Zimbabwe. Any disputes will first be attempted to be resolved through direct communication before any formal proceedings.",
  },
  {
    title: "Contact",
    body: "For any questions about these terms, email liberatornyadundu280@gmail.com.",
  },
];

function Terms() {
  return (
    <div className="relative min-h-screen theme-bg theme-text-primary">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <div className="mb-2 text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A95B]/50">
          Legal
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#C8A95B] mb-3">Terms of Service</h1>
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

export default Terms;
