"use client";

import { FadeUp, TextReveal, SlideIn, ScaleIn, Parallax } from "./motion";

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-32 px-6 noise-overlay" style={{ background: "var(--bg-secondary)" }}>
      <div className="relative max-w-7xl mx-auto z-10">
        <FadeUp>
          <span className="section-badge">
            01 / About
          </span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-4xl sm:text-5xl font-bold mt-6 mb-10 gradient-text max-w-md">
            A bit about me
          </h2>
        </FadeUp>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-start">
          {/* Left — text */}
          <div className="space-y-6">
            <SlideIn direction="left" delay={0.2}>
              <TextReveal
                className="text-text-secondary leading-relaxed text-lg"
                text="I'm a Software Engineer at Cloudanix, where I build multi-cloud security infrastructure spanning AWS, GCP, and Azure. My day-to-day involves designing distributed systems, building JIT access controls, and architecting event processing pipelines on Kubernetes."
                delay={0.1}
              />
            </SlideIn>

            <FadeUp delay={0.3}>
              <p className="text-text-secondary leading-relaxed">
                I studied{" "}
                <span className="text-text-primary font-medium">AI &amp; Machine Learning</span>{" "}
                at Pune University (2020–2024), which gave me a strong foundation
                in both systems thinking and intelligent automation. These days I
                lean heavily into backend engineering, cloud-native platforms, and
                GenAI tooling.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="text-text-secondary leading-relaxed">
                Outside of work, I&apos;m usually building side projects that push
                me into unfamiliar territory — whether that&apos;s a deployment
                platform, a distributed judge system, or an AI-powered expense
                tracker. Web3 is on the radar next.
              </p>
            </FadeUp>

            {/* Quick details */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Location", value: "India (Remote)", icon: "📍" },
                { label: "Currently", value: "Learning K8s & gRPC🚀", icon: "⚡" },
                { label: "Interests", value: "Systems · Cloud · GenAI", icon: "🎯" },
                { label: "Next Up", value: "Exploring Web3 & WebRTC", icon: "🔮" },
              ].map((item, i) => (
                <ScaleIn key={item.label} delay={0.5 + i * 0.08}>
                  <div className="glass glass-hover rounded-xl p-4 group cursor-default">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm">{item.icon}</span>
                      <p className="text-xs font-mono text-text-muted">{item.label}</p>
                    </div>
                    <p className="text-sm text-text-primary group-hover:text-accent-light transition-colors">
                      {item.value}
                    </p>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>

          {/* Right — identity card + stats */}
          <div className="space-y-4 max-w-sm lg:ml-auto lg:-mt-24">
            <Parallax offset={20}>
              <SlideIn direction="right" delay={0.3}>
                <div className="card gradient-border rounded-2xl p-6">
                  <div
                    className="w-full rounded-xl mb-4 relative overflow-hidden"
                    style={{ aspectRatio: "3 / 4" }}
                  >
                    <img
                      src="/photo.jpeg"
                      alt="Sahil Shah"
                      className="w-full h-full object-cover"
                    />
                    {/* Subtle gradient overlay at bottom for text readability */}
                    <div
                      className="absolute inset-0 pointer-events-none rounded-xl"
                      style={{
                        background: "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.3) 100%)",
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-text-primary font-bold text-lg">Sahil Abhijit Shah</p>
                    <p className="text-accent-light text-sm font-mono mt-1">@sash2721</p>
                    <div className="flex justify-center gap-2 mt-4">
                      {["Go", "Python", "TypeScript"].map((lang) => (
                        <span
                          key={lang}
                          className="text-[10px] font-mono px-2 py-1 rounded-md text-accent-lighter"
                          style={{
                            background: "var(--bg-glass)",
                            border: "1px solid var(--border-primary)",
                          }}
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SlideIn>
            </Parallax>

            <div className="grid grid-cols-2 gap-3">
              <ScaleIn delay={0.4}>
                <div className="card rounded-xl p-4 text-center group cursor-default">
                  <p className="text-3xl font-bold text-accent-light group-hover:scale-110 transition-transform inline-block">
                    4+
                  </p>
                  <p className="text-xs text-text-muted mt-1">Projects Shipped</p>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.5}>
                <div className="card rounded-xl p-4 text-center group cursor-default">
                  <p className="text-3xl font-bold text-accent-3 group-hover:scale-110 transition-transform inline-block">
                    1+
                  </p>
                  <p className="text-xs text-text-muted mt-1">Years Experience</p>
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
