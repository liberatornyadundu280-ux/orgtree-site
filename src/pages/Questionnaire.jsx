import { useState } from "react";
import { Link } from "react-router-dom";
import { Send, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";

const FORMSPREE_ID = "mbdbrdak";

const STEPS = [
  { title: "Your Business",     subtitle: "Tell us who you are." },
  { title: "The Project",       subtitle: "What are you trying to build?" },
  { title: "Your Customers",    subtitle: "Who are you trying to reach?" },
  { title: "Content & Features",subtitle: "What does your site need to do?" },
  { title: "Design & Style",    subtitle: "How should it look and feel?" },
  { title: "Budget & Timeline", subtitle: "When do you need it, and what can you invest?" },
  { title: "Your Details",      subtitle: "How do we reach you?" },
];

const INITIAL = {
  businessName: "", industry: "", location: "", existingUrl: "",
  projectType: [], projectWhy: "", projectSuccess: "",
  customerDescription: "", visitorActions: [], keyMessage: "",
  pagesNeeded: [], contentReady: [], updateNeeds: "", features: [],
  designVibe: [], designInspo: "", brandColors: "",
  budget: "", timeline: "", deadline: "", howFound: "",
  contactName: "", contactEmail: "", contactPhone: "", anythingElse: "",
};

/* ── tiny primitives ───────────────────────────────────────────── */

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs text-[#C8A95B]/70 uppercase tracking-wider">{label}</label>
      {children}
    </div>
  );
}

function TextInput({ value, onChange, placeholder, type = "text", required }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10
                 focus:border-[#C8A95B]/50 focus:outline-none text-sm transition-colors
                 placeholder:text-white/20"
    />
  );
}

function TextArea({ value, onChange, placeholder, rows = 3 }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10
                 focus:border-[#C8A95B]/50 focus:outline-none text-sm transition-colors
                 resize-none placeholder:text-white/20"
    />
  );
}

function Pill({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 ${
        active
          ? "bg-[#C8A95B] text-black border-[#C8A95B]"
          : "bg-white/5 border-white/10 text-white/60 hover:border-[#C8A95B]/40 hover:text-white/80"
      }`}
    >
      {label}
    </button>
  );
}

function CheckPills({ options, selected, onChange }) {
  function toggle(opt) {
    onChange(selected.includes(opt) ? selected.filter((o) => o !== opt) : [...selected, opt]);
  }
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <Pill key={opt} label={opt} active={selected.includes(opt)} onClick={() => toggle(opt)} />
      ))}
    </div>
  );
}

function RadioCards({ options, selected, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`text-left w-full px-4 py-3 rounded-2xl text-sm border transition-all duration-150 ${
            selected === opt
              ? "bg-[#C8A95B]/10 border-[#C8A95B]/50 text-[#C8A95B]"
              : "bg-white/5 border-white/10 text-white/60 hover:border-white/20 hover:text-white/80"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

/* ── step content ──────────────────────────────────────────────── */

function StepBusiness({ d, u }) {
  return (
    <div className="flex flex-col gap-6">
      <Field label="Business name *">
        <TextInput value={d.businessName} onChange={(v) => u("businessName", v)} placeholder="e.g. Chiedza's Hair Studio" />
      </Field>
      <Field label="What type of business are you? *">
        <RadioCards
          options={[
            "Retail / Shop",
            "School or Training Centre",
            "NGO / Non-profit",
            "Professional Services (law, accounting, consulting)",
            "Healthcare / Clinic",
            "Hospitality (hotel, restaurant, lodge)",
            "Other",
          ]}
          selected={d.industry}
          onChange={(v) => u("industry", v)}
        />
      </Field>
      <Field label="Where are you based? *">
        <TextInput value={d.location} onChange={(v) => u("location", v)} placeholder="e.g. Harare, Zimbabwe" />
      </Field>
      <Field label="Current website URL (if any)">
        <TextInput value={d.existingUrl} onChange={(v) => u("existingUrl", v)} placeholder="https://... (leave blank if you don't have one)" />
      </Field>
    </div>
  );
}

function StepProject({ d, u }) {
  return (
    <div className="flex flex-col gap-6">
      <Field label="What do you need? (select all that apply) *">
        <CheckPills
          options={["Brand new website", "Replace my existing website", "Add features to my existing site", "Consultation / advice only"]}
          selected={d.projectType}
          onChange={(v) => u("projectType", v)}
        />
      </Field>
      <Field label="What's prompting this now? *">
        <TextArea
          value={d.projectWhy}
          onChange={(v) => u("projectWhy", v)}
          placeholder="e.g. We're opening a new branch. Clients keep asking for our website. A competitor just launched one."
        />
      </Field>
      <Field label="What would make this project a success for you? *">
        <TextArea
          value={d.projectSuccess}
          onChange={(v) => u("projectSuccess", v)}
          placeholder="e.g. More phone enquiries from new clients. Staff able to post updates themselves. Parents can see the timetable online."
        />
      </Field>
    </div>
  );
}

function StepCustomers({ d, u }) {
  return (
    <div className="flex flex-col gap-6">
      <Field label="Describe your typical customer *">
        <TextArea
          value={d.customerDescription}
          onChange={(v) => u("customerDescription", v)}
          placeholder="e.g. Working parents aged 28–45 looking for reliable daycare near their workplace. They find us through WhatsApp referrals."
          rows={4}
        />
      </Field>
      <Field label="What do you want visitors to do on your site? (select all that apply) *">
        <CheckPills
          options={["Contact you", "Visit your location", "Buy a product or service", "Book an appointment", "Read your updates", "Apply for something", "Download something"]}
          selected={d.visitorActions}
          onChange={(v) => u("visitorActions", v)}
        />
      </Field>
      <Field label="What's the single most important message your site needs to communicate? *">
        <TextArea
          value={d.keyMessage}
          onChange={(v) => u("keyMessage", v)}
          placeholder="e.g. We are the most affordable and trusted hair salon in Bulawayo, with 10 years of experience."
        />
      </Field>
    </div>
  );
}

function StepFeatures({ d, u }) {
  return (
    <div className="flex flex-col gap-6">
      <Field label="What pages do you need? (select all that apply) *">
        <CheckPills
          options={["Home", "About Us", "Services / Products", "Gallery / Portfolio", "Blog / News", "Contact", "Team / Staff", "Testimonials", "Online Store", "FAQ"]}
          selected={d.pagesNeeded}
          onChange={(v) => u("pagesNeeded", v)}
        />
      </Field>
      <Field label="What content do you already have ready?">
        <CheckPills
          options={["Our logo", "Brand colours / guidelines", "Written copy / text", "Photos / images", "None yet — we need help with this"]}
          selected={d.contentReady}
          onChange={(v) => u("contentReady", v)}
        />
      </Field>
      <Field label="Will you need to update the site yourself after launch? *">
        <RadioCards
          options={["Yes — regularly (weekly or more)", "Occasionally (a few times a month)", "Rarely — I'll send changes to you", "Not sure"]}
          selected={d.updateNeeds}
          onChange={(v) => u("updateNeeds", v)}
        />
      </Field>
      <Field label="Any specific features you need?">
        <CheckPills
          options={["Contact form", "WhatsApp button", "Photo gallery", "Online booking", "Event calendar", "Staff directory", "Payment / checkout", "Password-protected area", "Live chat", "None of these"]}
          selected={d.features}
          onChange={(v) => u("features", v)}
        />
      </Field>
    </div>
  );
}

function StepDesign({ d, u }) {
  return (
    <div className="flex flex-col gap-6">
      <Field label="What vibe are you going for? (select all that apply) *">
        <CheckPills
          options={["Clean & minimal", "Bold & eye-catching", "Warm & friendly", "Professional & corporate", "Modern & techy", "Traditional / classic", "Playful / fun"]}
          selected={d.designVibe}
          onChange={(v) => u("designVibe", v)}
        />
      </Field>
      <Field label="Any websites you admire? (optional)">
        <TextArea
          value={d.designInspo}
          onChange={(v) => u("designInspo", v)}
          placeholder="Paste links or describe what you like. Even mentioning a competitor's site is helpful."
        />
      </Field>
      <Field label="Primary brand colours (optional)">
        <TextInput value={d.brandColors} onChange={(v) => u("brandColors", v)} placeholder="e.g. Navy blue and gold — or just describe the feeling" />
      </Field>
    </div>
  );
}

function StepBudget({ d, u }) {
  return (
    <div className="flex flex-col gap-6">
      <Field label="What's your budget range? *">
        <RadioCards
          options={["Under $50", "$50 – $150", "$150 – $500", "$500 – $900", "$900+", "Not sure yet — please advise me"]}
          selected={d.budget}
          onChange={(v) => u("budget", v)}
        />
      </Field>
      <Field label="When do you need this live? *">
        <RadioCards
          options={["Within 2 weeks", "Within 1 month", "2 – 3 months", "No specific deadline"]}
          selected={d.timeline}
          onChange={(v) => u("timeline", v)}
        />
      </Field>
      <Field label="Is there a specific event or deadline driving this? (optional)">
        <TextArea
          value={d.deadline}
          onChange={(v) => u("deadline", v)}
          placeholder="e.g. We open our doors on 1 August. We have a trade fair in September."
          rows={2}
        />
      </Field>
      <Field label="How did you find OrgTree Systems? (optional)">
        <RadioCards
          options={["Google / online search", "Social media", "Referral from someone I know", "Direct / other"]}
          selected={d.howFound}
          onChange={(v) => u("howFound", v)}
        />
      </Field>
    </div>
  );
}

function StepContact({ d, u }) {
  return (
    <div className="flex flex-col gap-6">
      <Field label="Your name *">
        <TextInput value={d.contactName} onChange={(v) => u("contactName", v)} placeholder="Your full name" />
      </Field>
      <Field label="Email address *">
        <TextInput type="email" value={d.contactEmail} onChange={(v) => u("contactEmail", v)} placeholder="your@email.com" />
      </Field>
      <Field label="WhatsApp / Phone (optional)">
        <TextInput value={d.contactPhone} onChange={(v) => u("contactPhone", v)} placeholder="+263 77 123 4567" />
      </Field>
      <Field label="Anything else you'd like us to know? (optional)">
        <TextArea
          value={d.anythingElse}
          onChange={(v) => u("anythingElse", v)}
          placeholder="Any other context, concerns, or questions."
          rows={4}
        />
      </Field>
    </div>
  );
}

/* ── validation per step ───────────────────────────────────────── */

function validate(step, d) {
  switch (step) {
    case 0:
      if (!d.businessName.trim()) return "Please enter your business name.";
      if (!d.industry) return "Please select your industry type.";
      if (!d.location.trim()) return "Please enter your location.";
      return "";
    case 1:
      if (!d.projectType.length) return "Please select at least one project type.";
      if (!d.projectWhy.trim()) return "Please tell us what's prompting this project.";
      if (!d.projectSuccess.trim()) return "Please describe what success looks like for you.";
      return "";
    case 2:
      if (!d.customerDescription.trim()) return "Please describe your typical customer.";
      if (!d.visitorActions.length) return "Please select at least one visitor action.";
      if (!d.keyMessage.trim()) return "Please fill in the key message field.";
      return "";
    case 3:
      if (!d.pagesNeeded.length) return "Please select the pages you need.";
      if (!d.updateNeeds) return "Please select how you'll manage updates after launch.";
      return "";
    case 4:
      if (!d.designVibe.length) return "Please select at least one design vibe.";
      return "";
    case 5:
      if (!d.budget) return "Please select a budget range.";
      if (!d.timeline) return "Please select your timeline.";
      return "";
    case 6:
      if (!d.contactName.trim()) return "Please enter your name.";
      if (!d.contactEmail.trim()) return "Please enter your email address.";
      return "";
    default:
      return "";
  }
}

/* ── main component ────────────────────────────────────────────── */

function Questionnaire() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(INITIAL);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function update(key, value) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function advance() {
    const err = validate(step, data);
    if (err) { setError(err); return; }
    setError("");
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    setError("");
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function submit() {
    const err = validate(step, data);
    if (err) { setError(err); return; }
    setStatus("sending");

    const fd = new FormData();
    fd.append("_subject", `Client Questionnaire — ${data.businessName}`);
    fd.append("Form Type", "Client Questionnaire");
    fd.append("Business Name", data.businessName);
    fd.append("Industry", data.industry);
    fd.append("Location", data.location);
    fd.append("Existing Website", data.existingUrl || "None");
    fd.append("Project Type", data.projectType.join(", ") || "Not specified");
    fd.append("Why Now", data.projectWhy);
    fd.append("Success Looks Like", data.projectSuccess);
    fd.append("Customer Description", data.customerDescription);
    fd.append("Visitor Actions", data.visitorActions.join(", ") || "Not specified");
    fd.append("Key Message", data.keyMessage);
    fd.append("Pages Needed", data.pagesNeeded.join(", ") || "Not specified");
    fd.append("Existing Content", data.contentReady.join(", ") || "None");
    fd.append("Update Needs", data.updateNeeds || "Not specified");
    fd.append("Features Needed", data.features.join(", ") || "None");
    fd.append("Design Vibe", data.designVibe.join(", ") || "Not specified");
    fd.append("Design Inspiration", data.designInspo || "None provided");
    fd.append("Brand Colours", data.brandColors || "Not specified");
    fd.append("Budget Range", data.budget);
    fd.append("Timeline", data.timeline);
    fd.append("Specific Deadline", data.deadline || "None");
    fd.append("How They Found Us", data.howFound || "Not specified");
    fd.append("Contact Name", data.contactName);
    fd.append("email", data.contactEmail);
    fd.append("Phone / WhatsApp", data.contactPhone || "Not provided");
    fd.append("Additional Notes", data.anythingElse || "None");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const isLast = step === STEPS.length - 1;

  const stepContent = [
    <StepBusiness   key="business"  d={data} u={update} />,
    <StepProject    key="project"   d={data} u={update} />,
    <StepCustomers  key="customers" d={data} u={update} />,
    <StepFeatures   key="features"  d={data} u={update} />,
    <StepDesign     key="design"    d={data} u={update} />,
    <StepBudget     key="budget"    d={data} u={update} />,
    <StepContact    key="contact"   d={data} u={update} />,
  ];

  return (
    <div className="relative min-h-screen theme-bg theme-text-primary">
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 pt-36 pb-24">

        {status === "sent" ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-6">✓</p>
            <h2 className="text-2xl font-bold text-[#C8A95B] mb-3">Questionnaire received.</h2>
            <p className="theme-text-secondary mb-8">
              Thank you, {data.contactName}. We have your answers and will come back to you within
              2 business days with a plan tailored to your project.
            </p>
            <Link
              to="/"
              className="text-sm text-[#C8A95B]/60 hover:text-[#C8A95B] transition underline underline-offset-4"
            >
              ← Back to home
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-2 text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A95B]/50">
              Client Questionnaire
            </div>

            {/* Progress bar */}
            <div className="flex items-center gap-1.5 mb-10">
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full flex-1 transition-all duration-300 ${
                    i <= step ? "bg-[#C8A95B]" : "bg-white/10"
                  }`}
                />
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#C8A95B] mb-1">
              {STEPS[step].title}
            </h1>
            <p className="text-sm text-white/40 mb-10">{STEPS[step].subtitle}</p>

            <div className="theme-card rounded-[32px] p-8 sm:p-10 backdrop-blur-xl mb-6">
              {stepContent[step]}
            </div>

            {error && <p className="text-sm text-red-400 mb-4">{error}</p>}

            <div className="flex items-center justify-between">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={back}
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition"
                >
                  <ChevronLeft size={16} /> Back
                </button>
              ) : (
                <Link
                  to="/"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition"
                >
                  <ChevronLeft size={16} /> Home
                </Link>
              )}

              {isLast ? (
                <button
                  type="button"
                  onClick={submit}
                  disabled={status === "sending"}
                  className="flex items-center gap-2 px-7 py-3 rounded-full bg-[#C8A95B] text-black font-semibold hover:opacity-90 disabled:opacity-50 transition"
                >
                  <Send size={15} />
                  {status === "sending" ? "Sending…" : "Submit Questionnaire"}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={advance}
                  className="flex items-center gap-2 px-7 py-3 rounded-full bg-[#C8A95B] text-black font-semibold hover:opacity-90 transition"
                >
                  Next <ChevronRight size={15} />
                </button>
              )}
            </div>

            {status === "error" && (
              <p className="text-sm text-red-400 mt-4 text-center">
                Something went wrong. Email us directly at{" "}
                <a href="mailto:liberatornyadundu280@gmail.com" className="underline">
                  liberatornyadundu280@gmail.com
                </a>
              </p>
            )}

            <p className="text-center text-xs text-white/20 mt-6">
              Step {step + 1} of {STEPS.length}
            </p>
          </>
        )}
      </main>
    </div>
  );
}

export default Questionnaire;
