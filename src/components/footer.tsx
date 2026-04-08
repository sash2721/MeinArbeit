"use client";

import { motion } from "framer-motion";
import ThemeToggle from "./theme-toggle";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-footer)" }}
    >
      {/* Top content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="flex items-center justify-between">
          <p className="font-mono text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            Built by Sahil Shah
          </p>
          <ThemeToggle />
        </div>
      </div>

      {/* Giant SASH text — clipped so bottom half is hidden */}
      <div className="relative h-[clamp(5rem,12vw,14rem)] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="footer-text text-center select-none absolute inset-x-0 top-0"
        >
          SASH
        </motion.div>
      </div>
    </footer>
  );
}
