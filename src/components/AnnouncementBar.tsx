import { Phone, AlertTriangle } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#C9A84C] hidden">
      {/* This can be activated for emergency announcements */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-3">
        <AlertTriangle className="w-3.5 h-3.5 text-[#0A2540]" />
        <p className="text-[#0A2540] text-xs font-bold">
          Storm damage? We respond 24/7. Call now:
        </p>
        <a href="tel:9375699934" className="text-[#0A2540] text-xs font-black underline">
          937-569-9934
        </a>
        <Phone className="w-3.5 h-3.5 text-[#0A2540]" />
      </div>
    </div>
  );
}
