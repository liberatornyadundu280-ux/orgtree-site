import { useContext } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Work from "../sections/Work";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import { ThemeContext } from "../theme/ThemeProvider";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`relative min-h-screen w-full overflow-x-hidden transition-colors duration-500 theme-bg theme-text-primary`}>
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="w-full px-0 pt-24 pb-10"
      >
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}

export default Home;
