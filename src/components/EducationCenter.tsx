import { BookOpen, Shield, AlertTriangle, FileText, Home, Cpu, DollarSign, CheckSquare, ArrowRight } from 'lucide-react';

const educationTopics = [
  {
    icon: AlertTriangle,
    category: 'Storm Damage',
    title: 'Understanding Storm Damage to Your Roof',
    summary:
      'Learn how to identify hail damage, wind damage, and other storm-related roof issues — and what steps to take immediately after a storm event.',
    tags: ['Hail Damage', 'Wind Damage', 'Emergency Steps'],
  },
  {
    icon: Home,
    category: 'Roofing Systems',
    title: 'Choosing the Right Roofing System',
    summary:
      'Compare asphalt shingles, metal roofing, rubber systems, and more. Understand the pros, cons, and cost considerations for each material type.',
    tags: ['Asphalt vs Metal', 'Material Comparison', 'Cost Factors'],
  },
  {
    icon: Cpu,
    category: 'Ventilation',
    title: 'Why Roof Ventilation Matters',
    summary:
      'Poor ventilation is one of the most common causes of premature roof failure. Learn how proper attic ventilation protects your roofing system and your home.',
    tags: ['Attic Ventilation', 'Ridge Vents', 'Energy Efficiency'],
  },
  {
    icon: DollarSign,
    category: 'Insurance Restoration',
    title: 'The Insurance Restoration Process',
    summary:
      'A complete homeowner guide to storm damage insurance claims — from filing a claim to understanding your settlement. Education only. LATR does not negotiate claims.',
    tags: ['Filing a Claim', 'ACV vs RCV', 'Process Timeline'],
  },
  {
    icon: Shield,
    category: 'Contractor Education',
    title: 'How to Hire a Roofing Contractor',
    summary:
      'Protect yourself from fraudulent contractors. Learn what questions to ask, what to look for in a contract, and red flags to avoid in the hiring process.',
    tags: ['Contractor Vetting', 'Contract Basics', 'Red Flags'],
  },
  {
    icon: AlertTriangle,
    category: 'Scam Prevention',
    title: 'Roofing Scams & How to Avoid Them',
    summary:
      'Storm chasers and fraudulent contractors prey on homeowners after storms. Learn the most common scams in the industry and how to protect yourself.',
    tags: ['Storm Chasers', 'Common Scams', 'Protection Tips'],
  },
  {
    icon: FileText,
    category: 'Documentation',
    title: 'Why Documentation Matters',
    summary:
      'Professional roof documentation protects your investment, supports insurance claims, and ensures accountability. Learn what proper project documentation should include.',
    tags: ['Photo Documentation', 'Project Reports', 'Warranty Records'],
  },
  {
    icon: CheckSquare,
    category: 'Property Protection',
    title: 'Property Protection Strategies',
    summary:
      'Proactive steps homeowners can take to protect their property from storm damage, extend the life of their roofing system, and reduce long-term costs.',
    tags: ['Preventive Maintenance', 'Inspection Schedule', 'Storm Prep'],
  },
];

export default function EducationCenter() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="education" className="py-24 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Homeowner Education Center</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2540] leading-tight mb-4">
              Knowledge Is<br />
              <span className="text-[#0A2540]/55">Your Best Protection</span>
            </h2>
            <p className="text-[#0A2540]/55 text-lg font-light leading-relaxed">
              LATR is committed to educating homeowners. An informed homeowner makes better decisions,
              avoids scams, and gets the outcome they deserve.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0A2540]/8 rounded-full">
              <BookOpen className="w-4 h-4 text-[#0A2540]" />
              <span className="text-[#0A2540] text-xs font-bold">Free Educational Resources</span>
            </div>
          </div>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {educationTopics.map((topic) => (
            <div
              key={topic.title}
              className="group bg-white border border-[#0A2540]/8 rounded-2xl p-5 hover:border-[#0A2540]/20 hover:shadow-lg hover:shadow-[#0A2540]/5 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Icon + Category */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#0A2540]/6 flex items-center justify-center">
                  <topic.icon className="w-4.5 h-4.5 text-[#0A2540]" style={{ width: 18, height: 18 }} />
                </div>
                <span className="text-[#C9A84C] text-[10px] font-bold tracking-wider uppercase">{topic.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-[#0A2540] font-bold text-sm mb-2 leading-snug group-hover:text-[#0A2540] transition-colors">
                {topic.title}
              </h3>

              {/* Summary */}
              <p className="text-[#0A2540]/50 text-xs leading-relaxed font-light mb-4 flex-1">{topic.summary}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {topic.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-[#0A2540]/5 text-[#0A2540]/50 text-[10px] font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read indicator */}
              <div className="flex items-center gap-1.5 text-[#0A2540]/40 group-hover:text-[#0A2540]/70 text-xs font-semibold transition-colors">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read More</span>
                <ArrowRight className="w-3 h-3 ml-auto group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Legal Notice */}
        <div className="p-5 bg-[#0A2540]/5 border border-[#0A2540]/10 rounded-xl">
          <p className="text-[#0A2540]/45 text-xs leading-relaxed text-center font-light">
            <span className="font-semibold text-[#0A2540]/60">Educational Content Disclaimer: </span>
            All content in the LATR Education Center is provided for informational purposes only.
            LATR Consulting LLC is a professional roofing company and does not negotiate insurance claims,
            provide legal advice, or act as a public adjusting firm. Always consult qualified professionals for legal and financial decisions.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-[#0A2540]/50 text-sm mb-4 font-light">
            Have questions about your roofing system or storm damage?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 bg-[#0A2540] text-[#F5F3EE] rounded-xl text-sm font-bold hover:bg-[#0d2f4f] transition-all"
            >
              Ask a Professional
            </button>
            <a
              href="tel:9375699934"
              className="flex items-center gap-2 px-6 py-3 border border-[#0A2540]/20 text-[#0A2540] rounded-xl text-sm font-semibold hover:bg-[#0A2540]/5 transition-all"
            >
              Call 937-569-9934
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
