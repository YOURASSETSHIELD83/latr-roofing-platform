import { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  if (dismissed) return null;

  return (
    <>
      {/* Floating Call Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Expanded Card */}
        {expanded && (
          <div className="bg-[#0A2540] border border-[#F5F3EE]/10 rounded-2xl shadow-2xl shadow-black/30 p-5 w-64 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-[#F5F3EE] font-bold text-sm">LATR Consulting LLC</p>
                <p className="text-[#F5F3EE]/50 text-xs font-light">Piqua & Dayton, Ohio</p>
              </div>
              <button
                onClick={() => setExpanded(false)}
                className="text-[#F5F3EE]/40 hover:text-[#F5F3EE]/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="w-full h-px bg-[#F5F3EE]/8 mb-3" />
            <p className="text-[#F5F3EE]/60 text-xs leading-relaxed mb-4 font-light">
              Available 24/7 for emergency storm response. Call now for a free roof inspection.
            </p>
            <a
              href="tel:9375699934"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#C9A84C] text-[#0A2540] rounded-xl font-bold text-sm hover:bg-[#d4b558] transition-all"
            >
              <Phone className="w-4 h-4" />
              937-569-9934
            </a>
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                setExpanded(false);
              }}
              className="mt-2 w-full py-2.5 border border-[#F5F3EE]/15 text-[#F5F3EE]/70 rounded-xl text-xs font-semibold hover:bg-[#F5F3EE]/5 transition-all"
            >
              Request Free Inspection
            </button>
          </div>
        )}

        {/* Main FAB */}
        <div className="flex items-center gap-3">
          {/* Dismiss */}
          {expanded && (
            <button
              onClick={() => setDismissed(true)}
              className="w-9 h-9 bg-[#0A2540]/80 backdrop-blur-sm border border-[#F5F3EE]/10 text-[#F5F3EE]/50 rounded-full flex items-center justify-center hover:text-[#F5F3EE]/80 transition-all"
              title="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Main button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="group relative flex items-center gap-2.5 px-5 py-3.5 bg-[#0A2540] text-[#F5F3EE] rounded-full font-bold text-sm shadow-xl shadow-black/25 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 border border-[#F5F3EE]/15"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#C9A84C]/15 scale-100 group-hover:scale-110 transition-transform duration-300" />
            <span className="relative flex items-center gap-2.5">
              <div className="relative">
                <Phone className="w-4 h-4 text-[#C9A84C]" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#C9A84C] rounded-full animate-pulse" />
              </div>
              <span className="hidden sm:block">Call Now</span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Direct Call Button - Always visible on mobile */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A2540] border-t border-[#F5F3EE]/10 safe-area-inset-bottom">
        <div className="flex items-stretch">
          <a
            href="tel:9375699934"
            className="flex-1 flex items-center justify-center gap-2 py-4 text-[#F5F3EE] font-bold text-sm border-r border-[#F5F3EE]/10 active:bg-[#F5F3EE]/5"
          >
            <Phone className="w-4 h-4 text-[#C9A84C]" />
            937-569-9934
          </a>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-1 flex items-center justify-center py-4 bg-[#C9A84C] text-[#0A2540] font-bold text-sm active:bg-[#d4b558]"
          >
            Free Inspection
          </button>
        </div>
      </div>
    </>
  );
}
