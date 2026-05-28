import { MapPin, Phone, Clock, Star, ChevronRight } from 'lucide-react';

const serviceAreas = [
  {
    city: 'Piqua, Ohio',
    description:
      'LATR\'s home base. Serving Piqua homeowners and businesses with premium residential and commercial roofing, storm damage restoration, and metal roofing installation.',
    services: ['Residential Roofing', 'Commercial Roofing', 'Storm Restoration', 'Metal Roofing', 'Free Inspections'],
    keywords: ['Roofing Contractor Piqua OH', 'Storm Damage Piqua', 'Metal Roofing Piqua Ohio'],
  },
  {
    city: 'Dayton, Ohio',
    description:
      'Serving the greater Dayton metro area with the same professional standard as our Piqua operations. Full roofing services for residential and commercial properties throughout Dayton.',
    services: ['Residential Roofing', 'Commercial Roofing', 'Storm Restoration', 'Emergency Response', 'Roof Repairs'],
    keywords: ['Roofing Contractor Dayton OH', 'Commercial Roofing Dayton', 'Storm Damage Dayton Ohio'],
  },
  {
    city: 'Greater Miami Valley',
    description:
      'Extending service throughout the Miami Valley region including surrounding communities. Contact us to confirm service availability in your specific area.',
    services: ['Residential Roofing', 'Storm Restoration', 'Metal Roofing', 'Inspections', 'Emergency Response'],
    keywords: ['Miami Valley Roofing', 'Ohio Roofing Contractor', 'Storm Restoration Ohio'],
  },
];

const stats = [
  { value: '25+', label: 'Years in Business', sub: 'Since 1999' },
  { value: '100%', label: 'Code Compliant', sub: 'Every Installation' },
  { value: '24/7', label: 'Emergency Response', sub: 'Storm Ready' },
  { value: '2', label: 'Markets Served', sub: 'Piqua & Dayton' },
];

export default function LocalSEO() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="service-areas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Service Areas</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2540] leading-tight mb-4">
              Locally Rooted.<br />
              <span className="text-[#0A2540]/55">Professionally Delivered.</span>
            </h2>
            <p className="text-[#0A2540]/55 text-lg font-light leading-relaxed">
              LATR is a local company, not a national chain. We know the Miami Valley, we live here,
              and we're invested in the communities we serve.
            </p>
          </div>

          {/* Contact Quick Block */}
          <div className="bg-[#F5F3EE] border border-[#0A2540]/8 rounded-2xl p-5 flex flex-col gap-3 min-w-[240px]">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#0A2540]" />
              <div>
                <p className="text-[#0A2540]/50 text-[10px] font-semibold uppercase tracking-wider">Call Us</p>
                <a href="tel:9375699934" className="text-[#0A2540] font-bold text-sm hover:text-[#C9A84C] transition-colors">937-569-9934</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#0A2540]" />
              <div>
                <p className="text-[#0A2540]/50 text-[10px] font-semibold uppercase tracking-wider">Headquarters</p>
                <p className="text-[#0A2540] font-semibold text-sm">Piqua, Ohio</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#0A2540]" />
              <div>
                <p className="text-[#0A2540]/50 text-[10px] font-semibold uppercase tracking-wider">Hours</p>
                <p className="text-[#0A2540] font-semibold text-sm">24/7 Emergency</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#0A2540] rounded-2xl p-6 text-center">
              <p className="text-[#F5F3EE] text-4xl font-bold mb-1">{stat.value}</p>
              <p className="text-[#F5F3EE]/70 text-sm font-semibold mb-0.5">{stat.label}</p>
              <p className="text-[#F5F3EE]/35 text-xs font-light">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {serviceAreas.map((area, index) => (
            <div
              key={area.city}
              className={`rounded-2xl p-7 border ${
                index === 0
                  ? 'bg-[#0A2540] border-[#0A2540]'
                  : 'bg-[#FAFAF9] border-[#0A2540]/8'
              } hover:shadow-xl transition-all duration-300`}
            >
              {/* City */}
              <div className="flex items-center gap-2 mb-4">
                <MapPin className={`w-4 h-4 ${index === 0 ? 'text-[#C9A84C]' : 'text-[#0A2540]'}`} />
                <h3 className={`font-bold text-base ${index === 0 ? 'text-[#F5F3EE]' : 'text-[#0A2540]'}`}>
                  {area.city}
                </h3>
                {index === 0 && (
                  <span className="ml-auto px-2 py-0.5 bg-[#C9A84C]/20 text-[#C9A84C] text-[10px] font-bold rounded-full tracking-wider uppercase">
                    HQ
                  </span>
                )}
              </div>

              <p className={`text-sm font-light leading-relaxed mb-5 ${index === 0 ? 'text-[#F5F3EE]/55' : 'text-[#0A2540]/55'}`}>
                {area.description}
              </p>

              {/* Services */}
              <div className="space-y-1.5 mb-5">
                {area.services.map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <ChevronRight className={`w-3.5 h-3.5 ${index === 0 ? 'text-[#C9A84C]' : 'text-[#0A2540]/40'}`} />
                    <span className={`text-xs font-medium ${index === 0 ? 'text-[#F5F3EE]/65' : 'text-[#0A2540]/60'}`}>
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              {/* SEO Keywords */}
              <div className="flex flex-wrap gap-1.5">
                {area.keywords.map((kw) => (
                  <span
                    key={kw}
                    className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${
                      index === 0
                        ? 'bg-[#F5F3EE]/10 text-[#F5F3EE]/40'
                        : 'bg-[#0A2540]/5 text-[#0A2540]/40'
                    }`}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Local CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#F5F3EE] border border-[#0A2540]/10 rounded-2xl p-7">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#C9A84C] fill-[#C9A84C]" />
              ))}
            </div>
            <div>
              <p className="text-[#0A2540] font-bold text-sm">Trusted by Piqua & Dayton Homeowners</p>
              <p className="text-[#0A2540]/50 text-xs font-light">25 years serving the Miami Valley</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:9375699934"
              className="flex items-center gap-2 px-5 py-2.5 border border-[#0A2540]/20 text-[#0A2540] rounded-xl text-sm font-semibold hover:bg-[#0A2540]/5 transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="px-5 py-2.5 bg-[#0A2540] text-[#F5F3EE] rounded-xl text-sm font-bold hover:bg-[#0d2f4f] transition-all"
            >
              Free Inspection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
