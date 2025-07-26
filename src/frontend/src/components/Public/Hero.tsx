export default function Hero() {
  const scrollToFeed = () => {
    const feedSection = document.getElementById("feed");
    if (feedSection) {
      feedSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="from-deep-indigo via-electric-blue to-vibrant-orange relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="bg-vibrant-orange animate-pulse-slow absolute top-20 left-10 h-4 w-4 rounded-full opacity-60"></div>
        <div className="bg-electric-blue animate-pulse-slow absolute top-40 right-20 h-6 w-6 rounded-full opacity-40"></div>
        <div className="animate-pulse-slow absolute bottom-20 left-1/4 h-3 w-3 rounded-full bg-white opacity-50"></div>
        <div className="animate-pulse-slow absolute top-1/2 left-1/3 h-2 w-2 rounded-full bg-white opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <div className="animate-fade-in">
          {/* Main Headline */}
          <h1 className="font-heading mb-8 text-5xl leading-tight font-black text-white md:text-7xl lg:text-8xl">
            Own Your
            <span className="from-vibrant-orange block bg-gradient-to-r to-white bg-clip-text text-transparent">
              Digital Identity
            </span>
          </h1>

          {/* Value Proposition */}
          <p className="font-body mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-white/90 md:text-2xl">
            The first truly decentralized social platform where you control your
            data, monetize your content, and build communities that can&apos;t
            be silenced.
          </p>

          {/* Social Proof */}
          <div className="font-body mb-12 flex flex-wrap items-center justify-center gap-6 text-white/80">
            <div className="flex items-center">
              <span className="mr-2 text-2xl">🌐</span>
              <span>Global accessibility</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-2xl">🔒</span>
              <span>Zero censorship</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-2xl">💰</span>
              <span>Direct monetization</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={scrollToFeed}
              className="btn-primary transform hover:scale-105"
            >
              Start Building
            </button>
            <button onClick={scrollToFeatures} className="btn-secondary">
              Explore Platform
            </button>
          </div>

          {/* Network of People */}
          <div className="mx-auto max-w-5xl rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
            <div className="relative">
              {/* Network Grid */}
              <div className="relative z-10 mb-6 grid grid-cols-3 gap-8 md:grid-cols-5">
                {/* People Nodes */}
                <div className="flex flex-col items-center">
                  <div className="from-electric-blue to-vibrant-orange mb-2 flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-gradient-to-br">
                    <span className="text-lg font-bold text-white">👤</span>
                  </div>
                  <div className="font-body text-xs text-white/90">Creator</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="from-vibrant-orange to-deep-indigo mb-2 flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-gradient-to-br">
                    <span className="text-lg font-bold text-white">👤</span>
                  </div>
                  <div className="font-body text-xs text-white/90">
                    Developer
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="from-deep-indigo to-electric-blue mb-2 flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-gradient-to-br">
                    <span className="text-lg font-bold text-white">👤</span>
                  </div>
                  <div className="font-body text-xs text-white/90">
                    Community
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="from-electric-blue to-vibrant-orange mb-2 flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-gradient-to-br">
                    <span className="text-lg font-bold text-white">👤</span>
                  </div>
                  <div className="font-body text-xs text-white/90">
                    Activist
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="from-vibrant-orange to-deep-indigo mb-2 flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-gradient-to-br">
                    <span className="text-lg font-bold text-white">👤</span>
                  </div>
                  <div className="font-body text-xs text-white/90">
                    Investor
                  </div>
                </div>
              </div>

              {/* Electric Connections - Behind Text */}
              <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  {/* Electric lines connecting all nodes */}
                  <path
                    d="M20 50 Q50 20 80 50 M20 50 Q50 80 80 50 M20 50 Q80 20 80 50 M20 50 Q80 80 80 50"
                    stroke="url(#electricGradient)"
                    strokeWidth="1.5"
                    fill="none"
                    className="animate-pulse"
                    opacity="0.6"
                  />
                  <defs>
                    <linearGradient
                      id="electricGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Power to the People Text */}
              <div className="relative z-10 mt-6 text-center">
                <h3 className="font-heading mb-2 text-2xl font-bold text-white">
                  Power to the People
                </h3>
                <p className="font-body text-sm text-white/80">
                  Connected. Empowered. Uncensored.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="font-body mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white/60">
            <span>🔓 Open Source</span>
            <span>🌍 Censorship Resistant</span>
            <span>💰 Creator Monetization</span>
            <span>⚡ Built on ICP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
