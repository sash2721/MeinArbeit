"use client";

import { FadeUp, TextReveal, ScaleIn, MagneticHover } from "./motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeUp>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent-light">
            06 / Contact
          </span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 gradient-text">
            Let&apos;s Connect
          </h2>
        </FadeUp>

        <TextReveal
          className="text-text-secondary leading-relaxed mb-12 max-w-lg mx-auto"
          text="I'm always open to interesting conversations, collaborations, or opportunities. Whether you have a question or just want to say hi — feel free to reach out."
          delay={0.2}
        />

        <ScaleIn delay={0.3}>
          <a
            href="mailto:sahilshah2104@gmail.com"
            className="inline-block px-8 py-4 rounded-xl gradient-accent text-white font-medium text-sm transition-all hover:opacity-90 hover:scale-[1.02]"
          >
            Say Hello →
          </a>
        </ScaleIn>

        <FadeUp delay={0.4}>
          <div className="flex justify-center gap-4 mt-10">
            {[
              { label: "GitHub", href: "https://github.com/sash2721", icon: <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /> },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/sash2721/", icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
              { label: "X", href: "https://x.com/ss_21_", icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
            ].map((s) => (
              <MagneticHover key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-11 h-11 rounded-xl glass glass-hover flex items-center justify-center text-text-muted hover:text-accent-light transition-all">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">{s.icon}</svg>
                </a>
              </MagneticHover>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
