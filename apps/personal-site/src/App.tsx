import { useState, useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

import { COLORS, WEBSITE_VERSION } from "./constants";
import { PageButton } from "@/components/ui/PageButton";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import Color from "color";

const defaultPalette = {
  start: "#0ea5e9",
  end: "#0284c7",
  text: "white",
};

type NamePalette = {
  start: string;
  end: string;
  text: string;
};

export default function PortfolioSite(): JSX.Element {
  // default page is "home"
  type Page = "home" | "projects";
  const [page, setPage] = useState<Page>("home");

  // set background color depending on the vertical scroll location
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


  // set up name box with random color when clicked
  const [namePalette, setNamePalette] = useState<NamePalette>(defaultPalette);
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
    const newTextColor = Color(darkerColor).isLight() ? "#1e293b" /* slate-800 */ : "white";

    setNamePalette({
      start: color,
      end: darkerColor,
      text: newTextColor,
    });

    // Reset back to original color smoothly
    timerRef.current = setTimeout(() => {
      setNamePalette(defaultPalette);
      timerRef.current = null;
    }, 2000);
  };



  type NameBadgeStyle = CSSProperties & {
    "--name-start": string;
    "--name-end": string;
  };

  const nameBadgeStyle: NameBadgeStyle = {
    "--name-start": namePalette.start,
    "--name-end": namePalette.end,
    color: namePalette.text,
    background: "linear-gradient(to right, var(--name-start), var(--name-end))",
    transition:
      "color 0.4s ease, box-shadow 0.4s ease, --name-start 0.4s ease, --name-end 0.4s ease",
    boxShadow: `0 0 20px ${Color(namePalette.end).alpha(0.6).string()},
                    0 0 40px ${Color(namePalette.end).alpha(0.5).string()},
                    0 0 60px ${Color(namePalette.end).alpha(0.4).string()}`,
  };

  return (
    <motion.div
      style={{
        backgroundColor: backgroundColor,
      }}
      className="relative min-h-screen text-gray-900 flex flex-col items-center p-6 transition-colors duration-0"
    >
      <span
        className="absolute top-4 right-4 text-xs tracking-[0.3em] uppercase text-gray-400 font-mono"
        aria-label={`Site version ${WEBSITE_VERSION}`}
      >
        v{WEBSITE_VERSION}
      </span>

      <header className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-4 py-4 mb-8 px-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          {/* Name box */}
          <h1
            onClick={handleClick}
            className="text-2xl font-bold px-4 py-3 rounded-2xl border border-blue-700 shadow-[0_0_25px_rgba(99,102,241,0.6)] cursor-pointer select-none"
            style={nameBadgeStyle}
          >
            Tae Kwang (Jason) Chung's Website
          </h1>

          {/* Icons */}
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

        {/* Different Page Buttons */}
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


      {/* set animation between pages */}
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
