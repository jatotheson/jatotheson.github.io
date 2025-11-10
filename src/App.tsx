import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

import { COLORS } from "./constants";
import { PageButton } from "@/components/ui/PageButton";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";

export default function PortfolioSite(): JSX.Element {
  type Page = "home" | "projects";
  const [page, setPage] = useState<Page>("home");

  const scrollY = useMotionValue(0);
  const backgroundColor = useTransform(
    scrollY,
    [0, 1],
    [COLORS.background.default, COLORS.background.scrollEnd]
  );

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress =
        maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
      scrollY.set(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, page]);

  const [customColor, setCustomColor] = useState<string | null>(null);
  const [textColor, setTextColor] = useState<string>("white");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    // Clear previous reset timer if any
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Generate a soft pastel tone
    const hue = Math.floor(Math.random() * 360);
    const color = `hsl(${hue}, 70%, 75%)`;
    const darkerColor = `hsl(${hue}, 70%, 60%)`;

    // Determine contrast for legibility
    const isLight = 75 > 60; // pastel is always somewhat bright
    const newTextColor = isLight ? "#1e293b" /* slate-800 */ : "white";

    setCustomColor(`linear-gradient(to right, ${color}, ${darkerColor})`);
    setTextColor(newTextColor);

    // Reset back to original color smoothly
    timerRef.current = setTimeout(() => {
      setCustomColor(null);
      setTextColor("white");
      timerRef.current = null;
    }, 2000);
  };

  return (
    <motion.div
      style={{
        backgroundColor: backgroundColor,
      }}
      className="min-h-screen text-gray-900 flex flex-col items-center p-6 transition-colors duration-0"
    >
      <header className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-4 py-4 mb-8 px-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          {/* <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-3 rounded-2xl shadow-md border border-blue-200"> */}
          <h1
            onClick={handleClick}
            className="text-2xl font-bold px-4 py-3 rounded-2xl border border-blue-700 shadow-[0_0_25px_rgba(99,102,241,0.6)] transition-all duration-500 cursor-pointer select-none"
            style={{
              color: textColor,
              background:
                customColor || "linear-gradient(to right, #0ea5e9, #0284c7)",
              boxShadow: customColor
                ? `0 0 20px ${customColor.match(/hsl\([^)]*\)/)?.[0]},
                    0 0 40px ${customColor.match(/hsl\([^)]*\)/)?.[0]},
                    0 0 60px ${customColor.match(/hsl\([^)]*\)/)?.[0]}`
                : `0 0 20px rgba(99,102,241,0.6), 
                    0 0 40px rgba(99,102,241,0.5), 
                    0 0 60px rgba(99,102,241,0.4)`,
            }}
          >
            Tae Kwang (Jason) Chung's Website
          </h1>

          <a
            href="https://www.linkedin.com/in/tae-kwang-jason-chung-7a2404149/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={48} className="mt-2 sm:mt-0" />
          </a>
        </div>

        <nav
          className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4"
          aria-label="Main navigation"
        >
          <PageButton
            variant={page === 'home' ? 'default' : 'outline'}
            onClick={() => setPage('home')}
            aria-pressed={page === 'home'}
          >
            Home
          </PageButton>
          <PageButton
            variant={page === 'projects' ? 'default' : 'outline'}
            onClick={() => setPage('projects')}
            aria-pressed={page === 'projects'}
          >
            Projects
          </PageButton>
        </nav>
      </header>

      <main className="w-full max-w-5xl min-h-screen">
        <AnimatePresence mode="wait">
          {page === "home" && <HomePage />}
          {page === "projects" && <ProjectsPage />}
        </AnimatePresence>
      </main>

      <footer className="mt-16 pt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Jason Chung's Website. All rights reserved.
      </footer>
    </motion.div>
  );
}
