import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const navLinks = [
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Residential Roofing', href: '#residential' },
      { label: 'Commercial Roofing', href: '#commercial' },
      { label: 'Storm Damage Restoration', href: '#storm' },
      { label: 'Metal Roofing', href: '#metal' },
      { label: 'Roof Inspections', href: '#inspections' },
      { label: 'Emergency Response', href: '#emergency' },
    ],
  },
  { label: 'Roofing Systems', href: '#systems' },
  { label: 'Education Center', href: '#education' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A2540]/98 backdrop-blur-md shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            {/* LATR House Logo SVG */}
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Roof outline */}
                <polyline points="50,5 95,40 5,40" fill="none" stroke="#F5F3EE" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round"/>
                {/* House body */}
                <rect x="10" y="40" width="80" height="65" fill="#0A2540" stroke="#F5F3EE" strokeWidth="3"/>
                {/* LATR text inside */}
                <text x="18" y="72" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="22" fill="#F5F3EE" letterSpacing="1">LA</text>
                <text x="18" y="97" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="22" fill="#F5F3EE" letterSpacing="1">TR</text>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#F5F3EE] font-bold text-lg leading-tight tracking-wide">LATR</span>
              <span className="text-[#F5F3EE]/70 text-[10px] font-medium tracking-[0.15em] uppercase leading-tight">Consulting LLC</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => !link.children && scrollTo(link.href)}
                  className="flex items-center gap-1 px-4 py-2 text-[#F5F3EE]/80 hover:text-[#F5F3EE] text-sm font-medium tracking-wide transition-colors duration-200 group"
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                  )}
                </button>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-60 bg-[#0A2540] border border-[#F5F3EE]/10 rounded-xl shadow-2xl overflow-hidden">
                    {link.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() => scrollTo(child.href)}
                        className="block w-full text-left px-5 py-3 text-[#F5F3EE]/75 hover:text-[#F5F3EE] hover:bg-white/5 text-sm font-medium transition-colors duration-150"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:9375699934"
              className="flex items-center gap-2 text-[#F5F3EE]/80 hover:text-[#F5F3EE] text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              937-569-9934
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-5 py-2.5 bg-[#F5F3EE] text-[#0A2540] text-sm font-bold rounded-lg hover:bg-white transition-all duration-200 tracking-wide"
            >
              Free Inspection
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#F5F3EE]"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A2540] border-t border-[#F5F3EE]/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <button
                  onClick={() => !link.children && scrollTo(link.href)}
                  className="block w-full text-left px-3 py-3 text-[#F5F3EE]/80 hover:text-[#F5F3EE] font-medium text-sm tracking-wide border-b border-[#F5F3EE]/5"
                >
                  {link.label}
                </button>
                {link.children && (
                  <div className="pl-4 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() => scrollTo(child.href)}
                        className="block w-full text-left px-3 py-2 text-[#F5F3EE]/60 hover:text-[#F5F3EE] text-xs font-medium"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2 space-y-3">
              <a
                href="tel:9375699934"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#F5F3EE]/10 text-[#F5F3EE] rounded-lg font-medium text-sm"
              >
                <Phone className="w-4 h-4" />
                Call: 937-569-9934
              </a>
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full py-3 bg-[#F5F3EE] text-[#0A2540] rounded-lg font-bold text-sm"
              >
                Request Free Inspection
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
