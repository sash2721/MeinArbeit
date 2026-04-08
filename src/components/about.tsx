"use client";

import { FadeUp, TextReveal, SlideIn, ScaleIn, Parallax } from "./motion";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 px-6" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent-light">
            01 / About
          </span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-16 gradient-text max-w-md">
            A bit about me
          </h2>
        </FadeUp>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
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
                { label: "Location", value: "India (Remote)" },
                { label: "Currently", value: "Building Relay 🚀" },
                { label: "Interests", value: "Systems · Cloud · GenAI" },
                { label: "Next Up", value: "Exploring Web3" },
              ].map((item, i) => (
                <ScaleIn key={item.label} delay={0.5 + i * 0.08}>
                  <div className="glass rounded-xl p-4">
                    <p className="text-xs font-mono text-text-muted mb-1">{item.label}</p>
                    <p className="text-sm text-text-primary">{item.value}</p>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>

          {/* Right — identity card + stats */}
          <div className="space-y-4 max-w-sm lg:max-w-none mx-auto lg:mx-0">
            <Parallax offset={30}>
              <SlideIn direction="right" delay={0.3}>
                <div className="card rounded-2xl p-8">
                  <div className="w-full aspect-square rounded-xl flex items-center justify-center mb-6"
                    style={{ background: "linear-gradient(135deg, var(--accent-1), var(--accent-3))", opacity: 0.15 }}>
                    <span className="text-6xl font-black font-mono" style={{ opacity: 1, color: "var(--accent-light)" }}>
                      SS
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-text-primary font-bold text-lg">Sahil Abhijit Shah</p>
                    <p className="text-accent-light text-sm font-mono mt-1">@sash21</p>
                  </div>
                </div>
              </SlideIn>
            </Parallax>

            <div className="grid grid-cols-2 gap-3">
              <ScaleIn delay={0.4}>
                <div className="card rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-accent-light">4+</p>
                  <p className="text-xs text-text-muted mt-1">Projects Shipped</p>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.5}>
                <div className="card rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-accent-3">1+</p>
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
