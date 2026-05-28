import { FileText, Users, Cpu, Award, TrendingUp, HeartHandshake } from 'lucide-react';

const pillars = [
  {
    icon: Award,
    title: '25 Years of Expertise',
    description:
      'Timmy Roth and the LATR team bring a quarter-century of hands-on roofing expertise. Every project benefits from decades of system knowledge, installation precision, and field experience.',
  },
  {
    icon: Cpu,
    title: 'Technology Integrated',
    description:
      'We modernize roofing through advanced documentation systems, AI-assisted workflows, and digital project management — bringing enterprise-level transparency to every job.',
  },
  {
    icon: FileText,
    title: 'Professional Documentation',
    description:
      'Every project is thoroughly documented — from initial inspection to final installation. Detailed reports, photo documentation, and compliance records provided on every project.',
  },
  {
    icon: Users,
    title: 'Homeowner Education First',
    description:
      'We believe educated homeowners make better decisions. LATR explains every step of the process so you always understand what\'s happening with your property.',
  },
  {
    icon: TrendingUp,
    title: 'Operational Excellence',
    description:
      'Every installation follows IRC code standards and manufacturer specifications. We don\'t cut corners — we deliver properly installed systems designed to last.',
  },
  {
    icon: HeartHandshake,
    title: 'Trust the Process',
    description:
      'Our motto isn\'t marketing — it\'s a commitment. We\'ve spent 25 years building a reputation for honesty, professionalism, and delivering exactly what we promise.',
  },
];

export default function WhyLATR() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">About LATR</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2540] leading-tight mb-6">
              Restoring Trust to<br />
              <span className="text-[#0A2540]/55">the Roofing Industry</span>
            </h2>
            <p className="text-[#0A2540]/60 text-lg font-light leading-relaxed mb-5">
              LATR Consulting LLC was built on a simple belief: homeowners deserve better.
              Better communication. Better documentation. Better craftsmanship. Better honesty.
            </p>
            <p className="text-[#0A2540]/60 text-base font-light leading-relaxed mb-5">
              Founded by Timmy Roth — a roofing professional with 25 years of specialized experience
              in roofing systems and storm damage restoration — LATR exists to modernize how contractors
              operate and how homeowners experience the restoration process.
            </p>
            <p className="text-[#0A2540]/60 text-base font-light leading-relaxed mb-8">
              Based in Piqua, Ohio and serving the greater Dayton area, we combine deep technical expertise
              with modern technology to deliver a premium roofing experience unlike anything the industry typically offers.
            </p>

            {/* Founder Card */}
            <div className="bg-[#F5F3EE] border border-[#0A2540]/8 rounded-2xl p-6 flex items-center gap-5">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-xl bg-[#0A2540] flex items-center justify-center flex-shrink-0">
                <span className="text-[#F5F3EE] text-2xl font-bold">TR</span>
              </div>
              <div>
                <p className="text-[#0A2540] font-bold text-base">Timmy Roth</p>
                <p className="text-[#0A2540]/50 text-sm font-medium">Founder & Principal Roofing Specialist</p>
                <p className="text-[#0A2540]/45 text-xs mt-1 font-light">25 Years · Piqua, Ohio</p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="mt-6 p-5 border-l-4 border-[#C9A84C] bg-[#FDF9EE] rounded-r-xl">
              <p className="text-[#0A2540]/80 text-sm font-medium italic leading-relaxed">
                "We modernize roofing and storm restoration through technology, documentation, education, and transparency.
                We exist to help homeowners understand the process, deliver properly installed systems, and restore
                trust and professionalism to this industry."
              </p>
              <p className="text-[#C9A84C] text-xs font-bold mt-3 tracking-wider uppercase">— LATR Core Mission</p>
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-[#FAFAF9] border border-[#0A2540]/8 rounded-2xl p-5 hover:border-[#0A2540]/20 hover:shadow-lg hover:shadow-[#0A2540]/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A2540]/8 flex items-center justify-center mb-4">
                  <pillar.icon className="w-5 h-5 text-[#0A2540]" />
                </div>
                <h3 className="text-[#0A2540] font-bold text-sm mb-2">{pillar.title}</h3>
                <p className="text-[#0A2540]/50 text-xs leading-relaxed font-light">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-16 p-5 bg-[#F5F3EE] border border-[#0A2540]/10 rounded-xl">
          <p className="text-[#0A2540]/50 text-xs leading-relaxed text-center font-light">
            <span className="font-semibold text-[#0A2540]/70">Legal Notice: </span>
            LATR Consulting LLC is a professional roofing company specializing in roofing systems, storm damage restoration,
            property documentation, and contractor education. LATR Consulting LLC is not a public adjusting firm,
            does not negotiate insurance claims, and does not provide legal representation.
          </p>
        </div>
      </div>
    </section>
  );
}
