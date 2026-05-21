import { useState } from "react";
import { Send } from "lucide-react";
import FadeIn from "../components/FadeIn";
import SectionHeading from "../components/SectionHeading";

const FORMSPREE_ID = "mbdbrdak";

function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.target);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-32 max-w-5xl mx-auto px-4 sm:px-6">
      <FadeIn>
        <SectionHeading
          title="Get in Touch"
          subtitle="Tell us about your institution or project. We will come back to you within 2 business days."
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="theme-card rounded-[32px] p-8 sm:p-12 backdrop-blur-xl">
          {status === "sent" ? (
            <div className="text-center py-8">
              <p className="text-2xl mb-3">✓</p>
              <p className="font-semibold text-[#C8A95B]">Message received.</p>
              <p className="mt-2 text-sm theme-text-secondary">
                We will get back to you within 2 business days.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-[#C8A95B]/70 hover:text-[#C8A95B] transition underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <p className="theme-text-secondary leading-relaxed mb-6">
                Whether you need a brochure site, a managed platform, or a full institutional
                system — tell us where you are and what you are trying to build.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-[#C8A95B]/70 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-[#C8A95B]/50 focus:outline-none text-sm transition-colors placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#C8A95B]/70 uppercase tracking-wider mb-2">
                    Institution
                  </label>
                  <input
                    type="text"
                    name="institution"
                    placeholder="Your school or organisation"
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-[#C8A95B]/50 focus:outline-none text-sm transition-colors placeholder:text-white/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#C8A95B]/70 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-[#C8A95B]/50 focus:outline-none text-sm transition-colors placeholder:text-white/20"
                />
              </div>

              <div>
                <label className="block text-xs text-[#C8A95B]/70 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your institution — what you currently have and what you need."
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-[#C8A95B]/50 focus:outline-none text-sm transition-colors resize-none placeholder:text-white/20"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Email us directly at liberatornyadundu280@gmail.com
                </p>
              )}

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex items-center gap-2 px-7 py-3 rounded-full bg-[#C8A95B] text-black font-semibold hover:opacity-90 disabled:opacity-50 transition"
                >
                  <Send size={15} />
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
                <a
                  href="mailto:liberatornyadundu280@gmail.com"
                  className="text-sm theme-text-secondary hover:text-[#C8A95B] transition underline underline-offset-4"
                >
                  Or email directly
                </a>
              </div>
            </form>
          )}
        </div>
      </FadeIn>
    </section>
  );
}

export default Contact;
