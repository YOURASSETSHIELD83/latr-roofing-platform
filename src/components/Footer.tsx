import { Phone, Mail, MapPin, Globe, ArrowRight } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Residential Roofing', href: '#residential' },
    { label: 'Commercial Roofing', href: '#commercial' },
    { label: 'Storm Damage Restoration', href: '#storm' },
    { label: 'Metal Roofing', href: '#metal' },
    { label: 'Roof Inspections', href: '#inspections' },
    { label: 'Emergency Response', href: '#emergency' },
  ],
  'Roofing Systems': [
    { label: 'Architectural Shingles', href: '#systems' },
    { label: 'Impact-Resistant Shingles', href: '#systems' },
    { label: 'Standing Seam Metal', href: '#systems' },
    { label: 'Rubber Roofing', href: '#systems' },
    { label: 'Commercial Membrane', href: '#systems' },
    { label: 'Solar Shingles', href: '#systems' },
  ],
  Education: [
    { label: 'Storm Damage Guide', href: '#education' },
    { label: 'Roofing Systems 101', href: '#education' },
    { label: 'Insurance Restoration', href: '#education' },
    { label: 'Contractor Hiring Guide', href: '#education' },
    { label: 'Scam Prevention', href: '#education' },
    { label: 'Property Protection', href: '#education' },
  ],
  Company: [
    { label: 'About LATR', href: '#about' },
    { label: 'Service Areas', href: '#service-areas' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Free Inspection', href: '#contact' },
    { label: 'lookatthatroof.com', href: 'https://lookatthatroof.com', external: true },
  ],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank');
      return;
    }
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060F1A] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo Mark */}
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <polyline points="50,5 95,40 5,40" fill="none" stroke="#F5F3EE" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round"/>
                  <rect x="10" y="40" width="80" height="65" fill="#0A2540" stroke="#F5F3EE" strokeWidth="3"/>
                  <text x="18" y="72" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="22" fill="#F5F3EE" letterSpacing="1">LA</text>
                  <text x="18" y="97" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="22" fill="#F5F3EE" letterSpacing="1">TR</text>
                </svg>
              </div>
              <div>
                <p className="text-[#F5F3EE] font-bold text-base">LATR Consulting LLC</p>
                <p className="text-[#F5F3EE]/40 text-[10px] font-medium tracking-[0.15em] uppercase">Look At That Roofing</p>
              </div>
            </div>

            <p className="text-[#F5F3EE]/40 text-sm font-light leading-relaxed mb-4">
              Technology Integrated Property Recovery. Professional roofing and storm restoration serving Piqua and Dayton, Ohio since 1999.
            </p>

            <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-6">Trust the Process.</p>

            {/* Contact Quick */}
            <div className="space-y-3">
              <a href="tel:9375699934" className="flex items-center gap-3 text-[#F5F3EE]/60 hover:text-[#F5F3EE] text-sm font-medium transition-colors">
                <Phone className="w-4 h-4 text-[#C9A84C]" />
                937-569-9934
              </a>
              <a href="mailto:iculooking24.7@gmail.com" className="flex items-center gap-3 text-[#F5F3EE]/60 hover:text-[#F5F3EE] text-sm font-medium transition-colors break-all">
                <Mail className="w-4 h-4 text-[#C9A84C]" />
                iculooking24.7@gmail.com
              </a>
              <div className="flex items-center gap-3 text-[#F5F3EE]/60 text-sm font-medium">
                <MapPin className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                Piqua & Dayton, Ohio
              </div>
              <a href="https://lookatthatroof.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#F5F3EE]/60 hover:text-[#F5F3EE] text-sm font-medium transition-colors">
                <Globe className="w-4 h-4 text-[#C9A84C]" />
                lookatthatroof.com
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-[#F5F3EE] text-xs font-bold uppercase tracking-[0.15em] mb-4">{category}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-[#F5F3EE]/45 hover:text-[#F5F3EE]/80 text-sm font-light transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="bg-[#0A2540] rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-[#F5F3EE] font-bold text-base mb-1">Ready to Get Started?</p>
            <p className="text-[#F5F3EE]/45 text-sm font-light">Request your free roof inspection today.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:9375699934"
              className="flex items-center gap-2 px-5 py-2.5 border border-[#F5F3EE]/15 text-[#F5F3EE] rounded-xl text-sm font-semibold hover:bg-[#F5F3EE]/8 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="flex items-center gap-1.5 px-5 py-2.5 bg-[#C9A84C] text-[#0A2540] rounded-xl text-sm font-bold hover:bg-[#d4b558] transition-all"
            >
              Free Inspection
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="bg-[#0A2540]/50 border border-[#F5F3EE]/5 rounded-xl p-4 mb-8">
          <p className="text-[#F5F3EE]/30 text-[11px] leading-relaxed text-center font-light">
            <span className="font-semibold text-[#F5F3EE]/50">Legal Notice: </span>
            LATR Consulting LLC is a professional roofing company specializing in roofing systems, storm damage restoration,
            property documentation, and contractor education. LATR Consulting LLC is not a public adjusting firm,
            does not negotiate insurance claims, and does not provide legal representation.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#F5F3EE]/5 pt-6">
          <p className="text-[#F5F3EE]/25 text-xs font-light">
            © {new Date().getFullYear()} LATR Consulting LLC. All rights reserved. Piqua, Ohio.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[#F5F3EE]/20 text-[10px] font-medium">Roofing Contractor · Piqua OH · Dayton OH</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
