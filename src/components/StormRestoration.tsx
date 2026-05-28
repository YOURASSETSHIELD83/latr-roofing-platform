import { AlertTriangle, Camera, FileText, Phone, Home, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Contact LATR',
    description: 'Call or submit a request. We respond fast — 24/7 for emergency situations.',
  },
  {
    number: '02',
    icon: Camera,
    title: 'Free Inspection & Documentation',
    description: 'We conduct a thorough roof inspection with detailed photo documentation and a professional written report.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Education & Transparency',
    description: 'We walk you through our findings, explain your options, and ensure you fully understand the scope of work — before anything is agreed upon.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Professional Installation',
    description: 'Our crew installs your roofing system to IRC code standards and manufacturer specifications. No shortcuts, ever.',
  },
  {
    number: '05',
    icon: Home,
    title: 'Final Documentation',
    description: 'You receive a complete project documentation package — photos, material specs, warranty info, and completion report.',
  },
];

export default function StormRestoration() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="storm-process" className="py-24 bg-[#0A2540]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Storm Restoration Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F5F3EE] leading-tight mb-4">
            How We Handle<br />
            <span className="text-[#F5F3EE]/55">Storm Damage</span>
          </h2>
          <p className="text-[#F5F3EE]/50 text-lg font-light leading-relaxed">
            LATR's storm restoration process is designed for maximum transparency, professional documentation,
            and homeowner confidence — from first call to final inspection.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connector line - desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5F3EE]/10 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col">
                {/* Step Header */}
                <div className="flex lg:flex-col items-start lg:items-start gap-4 lg:gap-3 mb-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F3EE]/10 border border-[#F5F3EE]/15 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-[#C9A84C]" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[#C9A84C] text-xs font-bold tracking-wider">{step.number}</span>
                    <h3 className="text-[#F5F3EE] font-bold text-sm mt-0.5">{step.title}</h3>
                  </div>
                </div>
                <p className="text-[#F5F3EE]/45 text-xs leading-relaxed font-light">
                  {step.description}
                </p>

                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-5 -right-3 z-10 items-center">
                    <ArrowRight className="w-4 h-4 text-[#F5F3EE]/20" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Warning Banner */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Red Flags */}
          <div className="bg-[#F5F3EE]/5 border border-[#F5F3EE]/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-[#C9A84C]" />
              <h3 className="text-[#F5F3EE] font-bold text-base">Watch Out for Storm Chasers</h3>
            </div>
            <ul className="space-y-2.5">
              {[
                'Contractors who show up unsolicited after storms',
                'Pressure to sign contracts on the spot',
                'Requests for full upfront payment',
                'No local business presence or address',
                'No written estimate or project scope',
                'Promises that seem too good to be true',
              ].map((flag) => (
                <li key={flag} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                  <span className="text-[#F5F3EE]/55 text-xs font-medium">{flag}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* LATR Difference */}
          <div className="bg-[#F5F3EE]/5 border border-[#C9A84C]/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-5 h-5 text-[#C9A84C]" />
              <h3 className="text-[#F5F3EE] font-bold text-base">The LATR Standard</h3>
            </div>
            <ul className="space-y-2.5">
              {[
                'Local company — Piqua & Dayton, Ohio based',
                'Written estimates before any work begins',
                'Never pressure for immediate decisions',
                'Complete project documentation provided',
                'IRC code compliant on every installation',
                'Transparent pricing with no hidden fees',
              ].map((diff) => (
                <li key={diff} className="flex items-center gap-3">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C9A84C] flex-shrink-0" />
                  <span className="text-[#F5F3EE]/70 text-xs font-medium">{diff}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#C9A84C]/10 border border-[#C9A84C]/25 rounded-2xl p-6">
          <div>
            <p className="text-[#C9A84C] font-bold text-sm uppercase tracking-wider mb-1">24/7 Emergency Response</p>
            <p className="text-[#F5F3EE]/70 text-sm font-light">Storm damage doesn't wait. Neither do we.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:9375699934"
              className="flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-[#0A2540] rounded-xl font-bold text-sm hover:bg-[#d4b558] transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Now: 937-569-9934
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 border border-[#F5F3EE]/20 text-[#F5F3EE] rounded-xl font-semibold text-sm hover:bg-[#F5F3EE]/8 transition-all"
            >
              Request Inspection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
