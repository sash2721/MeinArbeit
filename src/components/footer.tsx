"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-footer)" }}
    >
      {/* Top content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "#22c55e", boxShadow: "0 0 8px rgba(34,197,94,0.5)" }}
            />
            <p className="font-mono text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              Built by Sahil Shah
            </p>
          </div>

          <div className="flex items-center gap-6">
            {[
              { label: "GitHub", href: "https://github.com/sash2721" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/sash2721/" },
              { label: "X", href: "https://x.com/ss_21_" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono transition-colors animated-underline"
                style={{ color: "rgba(255,255,255,0.3)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 flex items-center justify-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} · Designed & built with ☕ and curiosity
          </p>
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
