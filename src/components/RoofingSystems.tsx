import { CheckCircle } from 'lucide-react';

const materialSystems = [
  {
    category: 'Asphalt Shingle Systems',
    items: [
      'Architectural / Dimensional Shingles',
      'Designer Shingles',
      'Impact-Resistant Shingles (Class 4)',
      'Three-Tab Shingles',
      'Premium Luxury Shingles',
    ],
    img: 'https://images.pexels.com/photos/37677394/pexels-photo-37677394.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    imgAlt: 'Professional asphalt shingle installation',
  },
  {
    category: 'Metal Roofing Systems',
    items: [
      'Standing Seam Metal Roofing',
      'Ribbed Screw-Down Metal',
      'Run-to-Length / No-Seam Systems',
      'Specialty Ordered Metal Systems',
      'Metal Shingles',
      'Solar-Ready Metal Systems',
    ],
    img: 'https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    imgAlt: 'Standing seam metal roofing',
  },
  {
    category: 'Commercial & Specialty Systems',
    items: [
      'Rubber (EPDM) Roofing Systems',
      'TPO Membrane Systems',
      'Low-Slope Roofing Systems',
      'Commercial Membrane Systems',
      'Flat Roof Restoration',
      'Solar Shingle Integration',
    ],
    img: 'https://images.pexels.com/photos/33404981/pexels-photo-33404981.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    imgAlt: 'Commercial roofing system installation',
  },
];

const allServices = [
  'Full Tear-Off & Replacement',
  'Roof Repairs',
  'Storm Damage Restoration',
  'Insurance Restoration Support',
  'Residential Roofing',
  'Commercial Roofing',
  'Free Roof Inspections',
  'Ventilation Upgrades',
  'Flashing Replacement',
  'Emergency Storm Response',
  'IRC Code Compliant Installations',
  'Manufacturer-Spec Compliant Work',
  'Professional Documentation',
  'Technology-Integrated Workflow',
];

export default function RoofingSystems() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="systems" className="py-24 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Roofing Systems</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2540] leading-tight mb-4">
            Every Material,<br />
            <span className="text-[#0A2540]/55">Every System</span>
          </h2>
          <p className="text-[#0A2540]/55 text-lg font-light leading-relaxed">
            LATR installs and services the complete range of residential and commercial roofing systems.
            Every installation is code-compliant and manufacturer-spec certified.
          </p>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {materialSystems.map((system) => (
            <div
              key={system.category}
              className="bg-white rounded-2xl overflow-hidden border border-[#0A2540]/8 hover:shadow-xl hover:shadow-[#0A2540]/5 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={system.img}
                  alt={system.imgAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/70 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-[#F5F3EE] font-bold text-base leading-tight">{system.category}</h3>
                </div>
              </div>
              {/* Items */}
              <div className="p-6">
                <ul className="space-y-2.5">
                  {system.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-[#0A2540]/50 flex-shrink-0" />
                      <span className="text-[#0A2540]/70 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* All Services Banner */}
        <div className="bg-[#0A2540] rounded-2xl p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="lg:w-72 flex-shrink-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Full Service</span>
              </div>
              <h3 className="text-[#F5F3EE] text-2xl font-bold mb-3">
                Complete Service Offering
              </h3>
              <p className="text-[#F5F3EE]/50 text-sm font-light leading-relaxed mb-6">
                From free inspections to full replacements — LATR handles every aspect of your roofing needs.
              </p>
              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-2.5 bg-[#F5F3EE] text-[#0A2540] rounded-xl text-sm font-bold hover:bg-white transition-all"
              >
                Get a Free Quote
              </button>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {allServices.map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                    <span className="text-[#F5F3EE]/70 text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
