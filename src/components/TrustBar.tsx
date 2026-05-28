import { Shield, Home, Building2, Zap, CheckCircle, Cpu, MapPin, Clock } from 'lucide-react';

const trustItems = [
  { icon: Shield, label: '25 Years Experience', sub: 'Since 1999' },
  { icon: Home, label: 'Residential Roofing', sub: 'Expert Installation' },
  { icon: Building2, label: 'Commercial Roofing', sub: 'All System Types' },
  { icon: Zap, label: 'Storm Restoration', sub: 'Rapid Response' },
  { icon: CheckCircle, label: 'IRC Code Compliant', sub: 'Every Project' },
  { icon: Cpu, label: 'Technology Integrated', sub: 'Modern Systems' },
  { icon: MapPin, label: 'Piqua & Dayton, Ohio', sub: 'Local Experts' },
  { icon: Clock, label: 'Available 24/7', sub: 'Emergency Service' },
];

export default function TrustBar() {
  return (
    <section id="trust" className="bg-[#F5F3EE] border-y border-[#0A2540]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {trustItems.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-[#0A2540]/6 flex items-center justify-center group-hover:bg-[#0A2540]/12 transition-colors duration-200">
                <item.icon className="w-5 h-5 text-[#0A2540]" />
              </div>
              <div>
                <p className="text-[#0A2540] font-bold text-xs leading-tight">{item.label}</p>
                <p className="text-[#0A2540]/50 text-[10px] font-medium mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
