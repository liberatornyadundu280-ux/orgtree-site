import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";

function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-[75vh] text-center px-4 sm:px-6">
      {/* Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C8A95B]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-[#C8A95B]/5 blur-[140px] rounded-full" />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-[#C8A95B]/30 bg-[#0f0f0f] shadow-[0_0_45px_rgba(200,169,91,0.2)] flex items-center justify-center p-5"
      >
        <img src="/orgtree.svg" alt="OrgTree" className="w-full h-full object-contain" />
      </motion.div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C8A95B]/30 bg-[#C8A95B]/5 text-[#C8A95B]/80 text-xs font-semibold tracking-widest uppercase"
      >
        OrgTree Systems
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-[#C8A95B]"
      >
        Digital Infrastructure<br className="hidden sm:block" /> for Businesses & Institutions.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.42 }}
        className="mt-4 text-sm text-white/40 tracking-wide"
      >
        Websites · Managed Platforms · Digital Systems
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href="#services"
          className="px-7 py-3 rounded-full bg-[#C8A95B] text-black font-semibold hover:opacity-90 transition"
        >
          See What We Build
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 px-7 py-3 rounded-full border border-[#C8A95B]/50 text-[#C8A95B] font-medium hover:bg-[#C8A95B]/10 transition-colors duration-200"
        >
          Let's Talk
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
