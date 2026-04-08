import { FadeUp } from "./motion";

export default function Education() {
  return (
    <section id="education" className="py-16 lg:py-24 px-6" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-20">
          {/* Left — heading */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <FadeUp>
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent-3">
                05 / Education
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 gradient-text">
                Background
              </h2>
            </FadeUp>
          </div>

          {/* Right — card */}
          <div className="lg:w-2/3">
            <FadeUp delay={0.2}>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
                  style={{ background: "linear-gradient(180deg, var(--accent-3), var(--accent-2))" }} />

                <div className="card rounded-2xl p-6 sm:p-8 ml-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-text-heading">
                        B.Tech in AI &amp; ML
                      </h3>
                      <p className="text-accent-3 font-mono text-sm mt-1">
                        Pune University
                      </p>
                    </div>
                    <p className="text-sm text-text-muted font-mono">2020 – 2024</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
