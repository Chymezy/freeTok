export default function CTASection() {
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

  const handleDeveloperCTA = () => {
    alert(
      "Developer APIs coming soon! This will include comprehensive SDKs and documentation.",
    );
  };

  const handleCreatorCTA = () => {
    alert(
      "Creator monetization features coming in Phase 2! Direct tipping and tokenization.",
    );
  };

  const handleOrganizationCTA = () => {
    alert(
      "Enterprise solutions coming soon! Custom deployments for organizations and NGOs.",
    );
  };

  return (
    <section className="from-deep-indigo to-electric-blue relative overflow-hidden bg-gradient-to-r py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 h-32 w-32 rounded-full bg-white/10"></div>
        <div className="bg-vibrant-orange/20 absolute bottom-10 left-10 h-24 w-24 rounded-full"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading mb-8 text-4xl font-bold text-white md:text-5xl">
          Ready to Build the Future?
        </h2>
        <p className="font-body mx-auto mb-12 max-w-2xl text-xl text-white/90">
          Join thousands of creators, developers, and communities who are
          already building the future of decentralized social media.
        </p>

        {/* Primary CTA */}
        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
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

        {/* User Type CTAs */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
            <div className="mb-4 text-3xl">👨‍💻</div>
            <h3 className="font-heading mb-2 text-xl font-bold text-white">
              Developers
            </h3>
            <p className="font-body mb-4 text-sm text-white/80">
              Build on our open platform with comprehensive APIs and SDKs
            </p>
            <button
              onClick={handleDeveloperCTA}
              className="font-body w-full rounded-lg bg-white/20 px-4 py-2 text-sm text-white transition-colors hover:bg-white/30"
            >
              View APIs
            </button>
          </div>

          <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
            <div className="mb-4 text-3xl">🎥</div>
            <h3 className="font-heading mb-2 text-xl font-bold text-white">
              Creators
            </h3>
            <p className="font-body mb-4 text-sm text-white/80">
              Monetize your content directly without platform fees
            </p>
            <button
              onClick={handleCreatorCTA}
              className="font-body w-full rounded-lg bg-white/20 px-4 py-2 text-sm text-white transition-colors hover:bg-white/30"
            >
              Start Creating
            </button>
          </div>

          <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
            <div className="mb-4 text-3xl">🏢</div>
            <h3 className="font-heading mb-2 text-xl font-bold text-white">
              Organizations
            </h3>
            <p className="font-body mb-4 text-sm text-white/80">
              Deploy custom solutions for your community or organization
            </p>
            <button
              onClick={handleOrganizationCTA}
              className="font-body w-full rounded-lg bg-white/20 px-4 py-2 text-sm text-white transition-colors hover:bg-white/30"
            >
              Contact Sales
            </button>
          </div>
        </div>

        {/* Platform Features Preview */}
        <div className="mb-8 rounded-xl bg-white/10 p-8 backdrop-blur-sm">
          <h3 className="font-heading mb-6 text-2xl font-bold text-white">
            Platform Features
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-2xl">📝</div>
              <div className="font-body text-sm text-white">Posts & Feed</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-2xl">💬</div>
              <div className="font-body text-sm text-white">
                Comments & Likes
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-2xl">🪙</div>
              <div className="font-body text-sm text-white">Tokenization</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-2xl">🔐</div>
              <div className="font-body text-sm text-white">Identity</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-white/20 pt-8">
          <div className="font-body flex flex-wrap items-center justify-center gap-8 text-sm text-white/60">
            <span>🔓 Open Source</span>
            <span>🌍 Censorship Resistant</span>
            <span>💰 Creator Monetization</span>
            <span>⚡ Built on ICP</span>
            <span>🔒 Zero Platform Fees</span>
          </div>
        </div>
      </div>
    </section>
  );
}
