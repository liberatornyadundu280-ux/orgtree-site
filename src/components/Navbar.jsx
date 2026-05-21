import { useContext, useState } from "react";
import { ChevronRight } from "lucide-react";
import { ThemeContext } from "../theme/ThemeProvider";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition text-xs"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-3">
          <img src="/orgtree.svg" alt="OrgTree" className="w-10 h-10 object-contain" />
          <span className="text-sm font-semibold tracking-wide text-[#C8A95B]">
            OrgTree Systems
          </span>
        </a>

        <nav className="flex items-center gap-8">
          <a href="#hero" className="text-sm text-white/80 hover:text-[#C8A95B] transition">Home</a>
          <a href="#about" className="text-sm text-white/80 hover:text-[#C8A95B] transition">About</a>
          <a href="#services" className="text-sm text-white/80 hover:text-[#C8A95B] transition">Services</a>
          <a href="#work" className="text-sm text-white/80 hover:text-[#C8A95B] transition">Work</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-[#C8A95B] transition">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#C8A95B] text-black text-sm font-semibold hover:opacity-90 transition-opacity duration-200"
          >
            Hire Us
          </a>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <a href="#hero" className="flex items-center gap-2.5">
            <img src="/orgtree.svg" alt="OrgTree" className="w-9 h-9 object-contain" />
            <span className="text-sm font-semibold text-[#C8A95B]">OrgTree Systems</span>
          </a>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-full bg-[#C8A95B] text-black text-xs font-semibold"
            >
              Hire Us
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 flex justify-center">
          <div className="relative w-full max-w-[350px]">
            <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-black/80 to-transparent pointer-events-none z-10" />
            <div className="absolute top-1/2 right-2 -translate-y-1/2 z-20 pointer-events-none">
              <ChevronRight size={16} className="text-[#C8A95B]/70" />
            </div>
            <nav className="flex items-center gap-6 overflow-x-auto whitespace-nowrap px-4 py-3 scrollbar-hide">
              <a href="#hero" className="text-sm text-white/80 hover:text-[#C8A95B] transition flex-shrink-0">Home</a>
              <a href="#about" className="text-sm text-white/80 hover:text-[#C8A95B] transition flex-shrink-0">About</a>
              <a href="#services" className="text-sm text-white/80 hover:text-[#C8A95B] transition flex-shrink-0">Services</a>
              <a href="#work" className="text-sm text-white/80 hover:text-[#C8A95B] transition flex-shrink-0">Work</a>
              <a href="#contact" className="text-sm text-white/80 hover:text-[#C8A95B] transition flex-shrink-0">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
