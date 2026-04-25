"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./theme-toggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = links.map((l) => l.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass"
      style={{
        background: scrolled
          ? "var(--bg-glass-hover)"
          : "var(--bg-glass)",
        backdropFilter: scrolled ? "blur(24px)" : "blur(16px)",
        borderBottom: scrolled
          ? "1px solid var(--border-hover)"
          : "1px solid var(--border-primary)",
        transition: "all 0.4s cubic-bezier(0.25, 0.4, 0.25, 1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="group relative font-display text-3xl text-text-heading transition-all hover:opacity-80"
        >
          <span className="relative">
            SaSh
            <motion.span
              className="absolute -bottom-1 left-0 h-[2px] rounded-full"
              style={{ background: "var(--gradient-accent)" }}
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm px-3 py-2 rounded-lg transition-all"
                style={{
                  color: isActive ? "var(--accent-light)" : "var(--text-secondary)",
                }}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-lg -z-10"
                    style={{
                      background: "var(--bg-glass)",
                      border: "1px solid var(--border-accent)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <div className="w-px h-5 mx-3" style={{ background: "var(--border-primary)" }} />
          <a
            href="https://drive.google.com/file/d/1t3aR6bJNGVYWR5geLvQCLc0yZ19X64qm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-lg glass glass-hover text-text-secondary hover:text-text-primary transition-all animated-underline"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
            style={{
              borderColor: "var(--border-primary)",
              background: "var(--bg-glass-hover)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-sm text-text-secondary hover:text-accent-light transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
