import { Home, Building2, CloudLightning, Shield, Search, AlertTriangle, GraduationCap, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'residential',
    icon: Home,
    title: 'Residential Roofing',
    subtitle: 'Full-Service Home Roofing',
    description:
      'Complete residential roofing solutions from full tear-off replacements to precision repairs. We install architectural shingles, designer shingles, impact-resistant systems, and metal roofing — all spec-compliant and properly documented.',
    features: [
      'Full tear-off & replacement',
      'Architectural asphalt shingles',
      'Designer & premium shingles',
      'Impact-resistant systems',
      'Ventilation upgrades',
      'Flashing replacement',
    ],
    cta: 'Learn More',
    accent: '#0A2540',
    bgLight: '#F0F4F8',
  },
  {
    id: 'commercial',
    icon: Building2,
    title: 'Commercial Roofing',
    subtitle: 'Commercial Building Systems',
    description:
      'Professional commercial roofing for business properties of all sizes. From low-slope membrane systems to standing seam metal, we deliver code-compliant, manufacturer-spec installations with full project documentation.',
    features: [
      'Commercial membrane systems',
      'Low-slope roofing',
      'Standing seam metal',
      'Rubber roofing systems',
      'Flat roof restoration',
      'Project documentation',
    ],
    cta: 'Learn More',
    accent: '#0A2540',
    bgLight: '#F0F4F8',
  },
  {
    id: 'storm',
    icon: CloudLightning,
    title: 'Storm Damage Restoration',
    subtitle: 'Expert Restoration Services',
    description:
      'When storms strike, LATR responds fast. We provide thorough storm damage assessments, professional documentation, and complete restoration services. We educate homeowners on the restoration process every step of the way.',
    features: [
      'Emergency storm response',
      'Detailed damage documentation',
      'Insurance restoration support',
      'Hail & wind damage repair',
      'Homeowner education',
      'Professional reporting',
    ],
    cta: 'Get Storm Help',
    accent: '#C9A84C',
    bgLight: '#FDF9EE',
  },
  {
    id: 'metal',
    icon: Shield,
    title: 'Metal Roofing Systems',
    subtitle: 'Premium Metal Installation',
    description:
      'Metal roofing specialists offering the full range of metal systems. Standing seam, ribbed screw-down, run-to-length seamless systems, metal shingles, and specialty custom-ordered metal roofing for residential and commercial properties.',
    features: [
      'Standing seam metal',
      'Ribbed screw-down systems',
      'Run-to-length / seamless',
      'Specialty ordered systems',
      'Metal shingles',
      'Solar-ready metal systems',
    ],
    cta: 'Explore Metal Roofing',
    accent: '#0A2540',
    bgLight: '#F0F4F8',
  },
  {
    id: 'inspections',
    icon: Search,
    title: 'Free Roof Inspections',
    subtitle: 'No-Cost Professional Assessment',
    description:
      'Every inspection is performed by an experienced professional and delivered with detailed documentation. We assess your roofing system thoroughly and provide an honest, transparent report — no pressure, no gimmicks.',
    features: [
      'Complete roof assessment',
      'Photo documentation',
      'Written inspection report',
      'Damage identification',
      'Material condition review',
      'No obligation estimate',
    ],
    cta: 'Schedule Inspection',
    accent: '#C9A84C',
    bgLight: '#FDF9EE',
  },
  {
    id: 'emergency',
    icon: AlertTriangle,
    title: 'Emergency Storm Response',
    subtitle: '24/7 Emergency Services',
    description:
      'Storm damage doesn\'t wait for business hours. Our emergency response team is available 24/7 to secure your property, prevent further damage, and begin the restoration process immediately.',
    features: [
      '24/7 emergency response',
      'Emergency tarping & securing',
      'Rapid damage assessment',
      'Immediate response team',
      'Insurance documentation',
      'Priority scheduling',
    ],
    cta: 'Call Now: 937-569-9934',
    accent: '#C9A84C',
    bgLight: '#FDF9EE',
    callHref: 'tel:9375699934',
  },
];

export default function Services() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Core Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2540] leading-tight mb-4">
            Professional Roofing<br />
            <span className="text-[#0A2540]/60">& Restoration Services</span>
          </h2>
          <p className="text-[#0A2540]/55 text-lg font-light leading-relaxed">
            25 years of expertise delivering properly installed, code-compliant roofing systems
            with the transparency and professionalism you deserve.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="group relative bg-[#FAFAF9] border border-[#0A2540]/8 rounded-2xl p-7 hover:border-[#0A2540]/20 hover:shadow-xl hover:shadow-[#0A2540]/5 transition-all duration-300 flex flex-col"
            >
              {/* Icon & Accent */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${service.accent}12` }}
                >
                  <service.icon className="w-6 h-6" style={{ color: service.accent }} />
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 opacity-60" />
              </div>

              {/* Title */}
              <div className="mb-3">
                <p className="text-[#0A2540]/45 text-[11px] font-semibold tracking-[0.15em] uppercase mb-1">
                  {service.subtitle}
                </p>
                <h3 className="text-[#0A2540] text-xl font-bold">{service.title}</h3>
              </div>

              {/* Description */}
              <p className="text-[#0A2540]/55 text-sm leading-relaxed mb-5 font-light">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-1">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-sm text-[#0A2540]/65 font-medium">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: service.accent === '#C9A84C' ? '#C9A84C' : '#0A2540' }}
                    />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {service.callHref ? (
                <a
                  href={service.callHref}
                  className="flex items-center gap-2 text-[#C9A84C] font-bold text-sm group-hover:gap-3 transition-all duration-200"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <button
                  onClick={() => scrollTo('contact')}
                  className="flex items-center gap-2 text-[#0A2540] font-bold text-sm group-hover:gap-3 transition-all duration-200 hover:text-[#C9A84C]"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 p-8 bg-[#0A2540] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[#F5F3EE] text-xl font-bold mb-1">Not Sure Where to Start?</h3>
            <p className="text-[#F5F3EE]/55 text-sm font-light">
              Schedule a free, no-obligation roof inspection with our team today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:9375699934"
              className="flex items-center gap-2 px-5 py-3 border border-[#F5F3EE]/20 text-[#F5F3EE] rounded-xl text-sm font-semibold hover:bg-[#F5F3EE]/8 transition-all"
            >
              <GraduationCap className="w-4 h-4" />
              937-569-9934
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="px-5 py-3 bg-[#F5F3EE] text-[#0A2540] rounded-xl text-sm font-bold hover:bg-white transition-all"
            >
              Free Inspection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
