import { useState, useEffect } from 'react';
import { Phone, Shield, Clock, Star, ArrowRight, ChevronDown } from 'lucide-react';

const HERO_IMAGE = 'https://images.pexels.com/photos/33404080/pexels-photo-33404080.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A2540]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Professional roofing installation"
          className="w-full h-full object-cover object-center opacity-20"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/85 to-[#0A2540]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-[#0A2540]/30" />
        {/* Subtle texture pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #F5F3EE 0px,
              #F5F3EE 1px,
              transparent 1px,
              transparent 60px
            )`,
          }}
        />
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#1a4a7a]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Overline */}
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F5F3EE]/10 backdrop-blur-sm border border-[#F5F3EE]/15 rounded-full">
              <div className="w-2 h-2 bg-[#C9A84C] rounded-full animate-pulse" />
              <span className="text-[#F5F3EE]/80 text-xs font-semibold tracking-[0.2em] uppercase">
                Piqua & Dayton, Ohio
              </span>
            </div>
            <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-[#F5F3EE]/20 to-transparent" />
          </div>

          {/* Main Headline */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F5F3EE] leading-[1.05] tracking-tight mb-6 transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Technology
            <br />
            <span className="text-[#F5F3EE]/90">Integrated</span>
            <br />
            <span className="relative">
              <span className="text-[#C9A84C]">Property Recovery</span>
            </span>
          </h1>

          {/* Sub Headline */}
          <p
            className={`text-lg sm:text-xl text-[#F5F3EE]/65 leading-relaxed max-w-2xl mb-10 font-light transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Residential and commercial roofing specialists serving Piqua and Dayton, Ohio.
            We modernize storm damage restoration through professional roofing services,
            advanced documentation systems, and homeowner education.{' '}
            <span className="text-[#F5F3EE]/80 font-medium">25 years of proven expertise.</span>
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-3 mb-12 transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <button
              onClick={() => scrollTo('contact')}
              className="group flex items-center gap-2 px-6 py-3.5 bg-[#F5F3EE] text-[#0A2540] font-bold text-sm rounded-xl hover:bg-white transition-all duration-200 shadow-lg shadow-black/20"
            >
              Request Free Inspection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('residential')}
              className="px-6 py-3.5 border border-[#F5F3EE]/25 text-[#F5F3EE] font-semibold text-sm rounded-xl hover:bg-[#F5F3EE]/8 hover:border-[#F5F3EE]/40 transition-all duration-200"
            >
              Residential Roofing
            </button>
            <button
              onClick={() => scrollTo('commercial')}
              className="px-6 py-3.5 border border-[#F5F3EE]/25 text-[#F5F3EE] font-semibold text-sm rounded-xl hover:bg-[#F5F3EE]/8 hover:border-[#F5F3EE]/40 transition-all duration-200"
            >
              Commercial Roofing
            </button>
            <button
              onClick={() => scrollTo('storm')}
              className="px-6 py-3.5 border border-[#F5F3EE]/25 text-[#F5F3EE] font-semibold text-sm rounded-xl hover:bg-[#F5F3EE]/8 hover:border-[#F5F3EE]/40 transition-all duration-200"
            >
              Storm Damage Help
            </button>
            <a
              href="tel:9375699934"
              className="flex items-center gap-2 px-6 py-3.5 bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] font-bold text-sm rounded-xl hover:bg-[#C9A84C]/25 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Trust Stats */}
          <div
            className={`flex flex-wrap items-center gap-6 transition-all duration-700 delay-[400ms] ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C]" />
              <span className="text-[#F5F3EE]/70 text-sm font-medium">25 Years Experience</span>
            </div>
            <div className="w-px h-4 bg-[#F5F3EE]/15" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-[#F5F3EE]/70 text-sm font-medium">IRC Code Compliant</span>
            </div>
            <div className="w-px h-4 bg-[#F5F3EE]/15" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-[#F5F3EE]/70 text-sm font-medium">Available 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollTo('trust')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#F5F3EE]/40 hover:text-[#F5F3EE]/70 transition-colors duration-200"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
