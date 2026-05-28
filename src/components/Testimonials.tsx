import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael T.',
    location: 'Piqua, OH',
    service: 'Full Roof Replacement',
    rating: 5,
    text: 'LATR was an absolute game changer. After the hailstorm last spring, I didn\'t know where to start. Timmy came out immediately, walked me through everything he found, showed me photos, explained the process step-by-step. No pressure, no gimmicks. The roof looks incredible and every detail was documented. Couldn\'t be more impressed.',
  },
  {
    name: 'Sarah K.',
    location: 'Dayton, OH',
    service: 'Storm Damage Restoration',
    rating: 5,
    text: 'What sets LATR apart is the transparency. I\'ve dealt with contractors who just wanted my signature. LATR actually explained what storm damage looks like, what needed to be fixed, and why. The documentation they provided was thorough and professional. Genuinely restored my faith in roofing contractors.',
  },
  {
    name: 'James R.',
    location: 'Piqua, OH',
    service: 'Commercial Metal Roofing',
    rating: 5,
    text: 'We needed a standing seam metal roof on our commercial building. LATR delivered on every promise — timeline, quality, code compliance, documentation. The technology systems they use to manage the project kept us informed the entire time. Professional operation from start to finish.',
  },
  {
    name: 'Linda M.',
    location: 'Dayton, OH',
    service: 'Free Roof Inspection',
    rating: 5,
    text: 'I called LATR after noticing some damage and wasn\'t sure if it was serious. They came out quickly, documented everything thoroughly, and gave me an honest assessment with no pressure whatsoever. They identified two areas that needed attention and prioritized them clearly. Professional, honest, and extremely knowledgeable.',
  },
  {
    name: 'Dave H.',
    location: 'Troy, OH',
    service: 'Impact-Resistant Shingles',
    rating: 5,
    text: 'After researching roofing contractors extensively, LATR was the clear choice. Their approach is completely different — educational, technology-forward, transparent. They helped us understand the difference between shingle systems, why impact-resistant mattered for our area, and delivered a flawless installation.',
  },
  {
    name: 'Carol B.',
    location: 'Piqua, OH',
    service: 'Emergency Storm Response',
    rating: 5,
    text: 'Called LATR at 9pm after a severe storm compromised my roof. They were there within 2 hours, tarped everything, documented the damage, and had a complete plan to me the next morning. That kind of response in a crisis is rare. True professionals who genuinely care.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Client Reviews</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2540] leading-tight mb-4">
            What Homeowners<br />
            <span className="text-[#0A2540]/55">Are Saying</span>
          </h2>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C]" />
              ))}
            </div>
            <p className="text-[#0A2540]/55 text-sm font-medium">25+ years of trusted service across the Miami Valley</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className={`rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg ${
                index === 0
                  ? 'bg-[#0A2540] border-[#0A2540]'
                  : 'bg-[#FAFAF9] border-[#0A2540]/8 hover:border-[#0A2540]/20'
              }`}
            >
              {/* Quote icon */}
              <Quote className={`w-6 h-6 mb-4 ${index === 0 ? 'text-[#C9A84C]' : 'text-[#0A2540]/15'}`} />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 fill-current ${index === 0 ? 'text-[#C9A84C]' : 'text-[#C9A84C]'}`} />
                ))}
              </div>

              {/* Review Text */}
              <p className={`text-sm leading-relaxed font-light mb-5 ${index === 0 ? 'text-[#F5F3EE]/75' : 'text-[#0A2540]/65'}`}>
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className={`font-bold text-sm ${index === 0 ? 'text-[#F5F3EE]' : 'text-[#0A2540]'}`}>
                    {t.name}
                  </p>
                  <p className={`text-xs font-medium mt-0.5 ${index === 0 ? 'text-[#F5F3EE]/40' : 'text-[#0A2540]/40'}`}>
                    {t.location}
                  </p>
                </div>
                <span
                  className={`px-2.5 py-1 text-[10px] font-semibold rounded-full ${
                    index === 0
                      ? 'bg-[#F5F3EE]/10 text-[#F5F3EE]/50'
                      : 'bg-[#0A2540]/6 text-[#0A2540]/50'
                  }`}
                >
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-[#0A2540]/45 text-sm font-light mb-4">
            Join hundreds of satisfied homeowners across Piqua and Dayton, Ohio.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-[#0A2540] text-[#F5F3EE] rounded-xl text-sm font-bold hover:bg-[#0d2f4f] transition-all"
          >
            Request Your Free Inspection
          </button>
        </div>
      </div>
    </section>
  );
}
