import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { FaLinkedin } from 'react-icons/fa';

import { COLORS } from './constants';
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

  return (
    <motion.div
      style={{
        backgroundColor: backgroundColor
      }}
      className="min-h-screen text-gray-900 flex flex-col items-center p-6 transition-colors duration-0"
    >
      <header className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-4 py-4 mb-8 px-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <h1
            className="text-2xl font-bold text-white 
            bg-gradient-to-r from-sky-500 to-sky-600 shadow-[0_0_25px_rgba(99,102,241,0.6)]
            hover:from-blue-500 hover:to-blue-600 hover:shadow-[0_0_25px_rgba(56,189,248,0.8)]
            px-4 py-3 rounded-2xl border border-blue-700 
            transition-all duration-300"
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