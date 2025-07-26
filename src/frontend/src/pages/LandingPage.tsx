import Header from "../components/Header/Header";
import Hero from "../components/Public/Hero";
import ProblemSection from "../components/Public/ProblemSection";
import FeaturesSection from "../components/Public/FeaturesSection";
import RoadmapSection from "../components/Public/RoadmapSection";
import CTASection from "../components/Public/CTASection";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <RoadmapSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
