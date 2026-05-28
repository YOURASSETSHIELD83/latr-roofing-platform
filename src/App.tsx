import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import RoofingSystems from './components/RoofingSystems';
import StormRestoration from './components/StormRestoration';
import ProcessSection from './components/ProcessSection';
import TechPlatform from './components/TechPlatform';
import WhyLATR from './components/WhyLATR';
import LocalSEO from './components/LocalSEO';
import Testimonials from './components/Testimonials';
import EducationCenter from './components/EducationCenter';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Trust Bar */}
        <TrustBar />

        {/* Core Services */}
        <Services />

        {/* Roofing Systems & Materials */}
        <RoofingSystems />

        {/* Storm Restoration Process */}
        <StormRestoration />

        {/* How We Work / Process */}
        <ProcessSection />

        {/* Technology Platform */}
        <TechPlatform />

        {/* Why LATR / About */}
        <WhyLATR />

        {/* Service Areas / Local SEO */}
        <LocalSEO />

        {/* Testimonials */}
        <Testimonials />

        {/* Homeowner Education Center */}
        <EducationCenter />

        {/* Lead Generation Form */}
        <LeadForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call Now Button */}
      <FloatingCTA />
    </div>
  );
}
