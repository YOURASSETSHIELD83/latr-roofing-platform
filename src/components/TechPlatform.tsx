import { Cpu, Camera, FileText, Smartphone, Shield, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Advanced Documentation',
    description: 'Every project is photo-documented from inspection through completion. Digital records delivered directly to homeowners.',
  },
  {
    icon: Cpu,
    title: 'AI-Assisted Workflows',
    description: 'Technology-integrated operational systems improve accuracy, communication, and project management on every job.',
  },
  {
    icon: FileText,
    title: 'Digital Reporting',
    description: 'Professional inspection reports, material specs, project scopes, and completion documentation — all digital.',
  },
  {
    icon: Smartphone,
    title: 'Homeowner Portal',
    description: 'Real-time project visibility. Know exactly what\'s happening with your roof — every step of the way.',
  },
  {
    icon: Shield,
    title: 'Compliance Tracking',
    description: 'IRC code compliance verification and manufacturer specification tracking built into every project workflow.',
  },
  {
    icon: TrendingUp,
    title: 'Transparent Operations',
    description: 'No surprises. No hidden processes. Technology ensures accountability and transparency from first call to final delivery.',
  },
];

export default function TechPlatform() {
  return (
    <section id="technology" className="py-24 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative">
            {/* Main card */}
            <div className="bg-[#0A2540] rounded-2xl p-7 shadow-2xl shadow-[#0A2540]/20">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8">
                    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <polyline points="50,5 95,40 5,40" fill="none" stroke="#F5F3EE" strokeWidth="7" strokeLinejoin="round" strokeLinecap="round"/>
                      <rect x="10" y="40" width="80" height="65" fill="#0A2540" stroke="#F5F3EE" strokeWidth="4"/>
                      <text x="18" y="70" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="20" fill="#F5F3EE">LA</text>
                      <text x="18" y="94" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="20" fill="#F5F3EE">TR</text>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#F5F3EE] font-bold text-sm">Project Dashboard</p>
                    <p className="text-[#F5F3EE]/40 text-xs">LATR Consulting LLC</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">Live</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: 'Active Projects', value: '12' },
                  { label: 'Inspections', value: '48' },
                  { label: 'Completed', value: '847' },
                ].map((m) => (
                  <div key={m.label} className="bg-[#F5F3EE]/5 rounded-xl p-3 text-center border border-[#F5F3EE]/8">
                    <p className="text-[#F5F3EE] font-bold text-xl">{m.value}</p>
                    <p className="text-[#F5F3EE]/40 text-[10px] font-medium mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Progress Items */}
              <div className="space-y-3 mb-5">
                {[
                  { label: '123 Maple St — Roof Replacement', progress: 85, status: 'In Progress' },
                  { label: '456 Oak Ave — Storm Damage', progress: 40, status: 'Documentation' },
                  { label: '789 Elm Dr — Inspection', progress: 100, status: 'Complete' },
                ].map((item) => (
                  <div key={item.label} className="bg-[#F5F3EE]/4 rounded-xl p-3.5 border border-[#F5F3EE]/6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[#F5F3EE]/75 text-xs font-medium truncate">{item.label}</p>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ml-2 flex-shrink-0 ${
                        item.status === 'Complete'
                          ? 'bg-green-400/15 text-green-400'
                          : item.status === 'In Progress'
                          ? 'bg-[#C9A84C]/20 text-[#C9A84C]'
                          : 'bg-[#F5F3EE]/10 text-[#F5F3EE]/50'
                      }`}>{item.status}</span>
                    </div>
                    <div className="w-full bg-[#F5F3EE]/8 rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full transition-all duration-1000 ${
                          item.status === 'Complete' ? 'bg-green-400' : 'bg-[#C9A84C]'
                        }`}
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Tags */}
              <div className="flex flex-wrap gap-2">
                {['IRC Compliant', 'Documented', 'Tech Integrated', 'Piqua OH'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-[#F5F3EE]/6 text-[#F5F3EE]/40 text-[10px] font-medium rounded-full border border-[#F5F3EE]/8">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-4 -right-4 bg-[#C9A84C] rounded-xl p-4 shadow-xl w-40">
              <p className="text-[#0A2540] font-bold text-2xl mb-0.5">25+</p>
              <p className="text-[#0A2540]/70 text-xs font-semibold leading-tight">Years of Expertise Behind Every System</p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Technology Platform</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2540] leading-tight mb-5">
              Roofing Powered<br />
              <span className="text-[#0A2540]/55">by Modern Systems</span>
            </h2>
            <p className="text-[#0A2540]/55 text-lg font-light leading-relaxed mb-10">
              LATR doesn't just install roofs. We've built a technology-integrated operational system
              that brings enterprise-level transparency, documentation, and accountability to every project —
              residential or commercial.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#0A2540]/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <feature.icon className="w-4.5 h-4.5 text-[#0A2540]" style={{ width: 18, height: 18 }} />
                  </div>
                  <div>
                    <h3 className="text-[#0A2540] font-bold text-sm mb-1">{feature.title}</h3>
                    <p className="text-[#0A2540]/50 text-xs leading-relaxed font-light">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-8 p-4 bg-[#0A2540]/5 border border-[#0A2540]/8 rounded-xl">
              <p className="text-[#0A2540]/55 text-xs leading-relaxed font-light">
                <span className="font-semibold text-[#0A2540]/70">Technology as Support: </span>
                LATR's technology systems exist to enhance communication, documentation, and transparency —
                not to replace the hands-on expertise of our roofing professionals. Every project is managed
                by experienced people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
