import { Search, FileCheck, MessageSquare, Hammer, Star, ArrowRight } from 'lucide-react';

const PROCESS_IMAGE = 'https://images.pexels.com/photos/33501308/pexels-photo-33501308.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=700';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Free Inspection',
    description: 'Schedule your no-cost, no-obligation roof inspection. We assess, photograph, and document every detail of your roofing system.',
  },
  {
    number: '02',
    icon: FileCheck,
    title: 'Transparent Report',
    description: 'Receive a detailed written inspection report with photos, findings, and recommendations. Full transparency before any decision.',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Education & Planning',
    description: 'We walk you through every finding, explain your options clearly, and help you understand the best path forward for your property.',
  },
  {
    number: '04',
    icon: Hammer,
    title: 'Expert Installation',
    description: 'Our experienced crew executes the work to IRC code standards and manufacturer specs. Every detail properly managed.',
  },
  {
    number: '05',
    icon: Star,
    title: 'Final Documentation',
    description: 'Complete project documentation package delivered — photos, material records, warranty info, and compliance certification.',
  },
];

export default function ProcessSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden h-[580px]">
              <img
                src={PROCESS_IMAGE}
                alt="Professional roofers at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-[#0A2540]/20 to-transparent" />

              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#F5F3EE]/95 backdrop-blur-sm rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-[#0A2540] rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-[#0A2540] font-bold text-sm">25-Year Track Record</p>
                    <p className="text-[#0A2540]/55 text-xs font-light">Serving Piqua & Dayton, Ohio</p>
                  </div>
                </div>
                <p className="text-[#0A2540]/60 text-xs leading-relaxed font-light">
                  Every project backed by two decades of expertise, professional documentation, and our unwavering commitment to doing the job right.
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-[#0A2540] rounded-2xl p-5 shadow-xl w-36 text-center">
              <p className="text-[#C9A84C] font-bold text-3xl">IRC</p>
              <p className="text-[#F5F3EE]/70 text-[10px] font-semibold tracking-wider uppercase mt-1">Code Compliant</p>
              <p className="text-[#F5F3EE]/40 text-[9px] mt-0.5 font-light">Every Installation</p>
            </div>
          </div>

          {/* Right: Process Steps */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Our Process</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2540] leading-tight mb-5">
              How LATR Works<br />
              <span className="text-[#0A2540]/55">For You</span>
            </h2>
            <p className="text-[#0A2540]/55 text-lg font-light leading-relaxed mb-10">
              We've refined a 5-step process that prioritizes transparency, education, and professional execution on every single project.
            </p>

            {/* Steps */}
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-5 group">
                  {/* Left: Number + Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-[#0A2540] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A84C] transition-colors duration-300">
                      <step.icon className="w-5 h-5 text-[#F5F3EE] group-hover:text-[#0A2540] transition-colors duration-300" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-px flex-1 bg-[#0A2540]/10 my-2 min-h-[32px]" />
                    )}
                  </div>

                  {/* Right: Content */}
                  <div className="pb-6 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#C9A84C] text-[10px] font-bold tracking-widest">{step.number}</span>
                      <h3 className="text-[#0A2540] font-bold text-base">{step.title}</h3>
                    </div>
                    <p className="text-[#0A2540]/50 text-sm leading-relaxed font-light">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-6 py-3 bg-[#0A2540] text-[#F5F3EE] rounded-xl text-sm font-bold hover:bg-[#0d2f4f] transition-all"
              >
                Start with a Free Inspection
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
