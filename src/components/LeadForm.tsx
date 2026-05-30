import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle, Home } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  message: string;
  service: string;
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  address: '',
  message: '',
  service: '',
};

const serviceOptions = [
  'Residential Roofing',
  'Commercial Roofing',
  'Storm Damage Restoration',
  'Metal Roofing',
  'Free Roof Inspection',
  'Emergency Storm Response',
  'Roof Repair',
  'Other',
];

export default function LeadForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        'service_7p3lqp4',
        'template_hanssip',
        {
          form_type: 'Free Roof Inspection Request',
          from_name: form.name,
          reply_to: form.email || 'No email provided',
          phone: form.phone,
          address: form.address,
          service: form.service || 'Not specified',
          message: form.message || 'No additional notes',
        },
        'DoxSKYkbZSYPgpM7D'
      );
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0A2540]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Get Started</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#F5F3EE] leading-tight mb-5">
              Request a Free<br />
              <span className="text-[#F5F3EE]/55">Roof Inspection</span>
            </h2>
            <p className="text-[#F5F3EE]/50 text-lg font-light leading-relaxed mb-10">
              No pressure. No obligation. Just an honest, professional assessment of your roofing system
              from an expert with 25 years of experience.
            </p>

            {/* Contact Details */}
            <div className="space-y-5 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#F5F3EE]/8 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-[#F5F3EE]/40 text-xs font-semibold uppercase tracking-wider mb-0.5">Phone</p>
                  <a href="tel:9375699934" className="text-[#F5F3EE] font-bold text-base hover:text-[#C9A84C] transition-colors">
                    937-569-9934
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#F5F3EE]/8 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-[#F5F3EE]/40 text-xs font-semibold uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:iculooking24.7@gmail.com" className="text-[#F5F3EE] font-semibold text-sm hover:text-[#C9A84C] transition-colors break-all">
                    iculooking24.7@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#F5F3EE]/8 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-[#F5F3EE]/40 text-xs font-semibold uppercase tracking-wider mb-0.5">Service Area</p>
                  <p className="text-[#F5F3EE] font-semibold text-sm">Piqua & Dayton, Ohio</p>
                  <p className="text-[#F5F3EE]/40 text-xs">Greater Miami Valley Region</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#F5F3EE]/8 flex items-center justify-center flex-shrink-0">
                  <Home className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-[#F5F3EE]/40 text-xs font-semibold uppercase tracking-wider mb-0.5">Website</p>
                  <a href="https://lookatthatroof.com" target="_blank" rel="noopener noreferrer" className="text-[#F5F3EE] font-semibold text-sm hover:text-[#C9A84C] transition-colors">
                    lookatthatroof.com
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3">
              {[
                '25 Years Experience',
                'Local Ohio Company',
                'IRC Code Compliant',
                'No Obligation Quote',
                '24/7 Emergency Response',
                'Technology Integrated',
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2 bg-[#F5F3EE]/5 rounded-lg px-3 py-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C9A84C] flex-shrink-0" />
                  <span className="text-[#F5F3EE]/60 text-xs font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#F5F3EE] rounded-2xl p-7 sm:p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#0A2540]/10 flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-[#0A2540]" />
                </div>
                <h3 className="text-[#0A2540] text-xl font-bold mb-3">Request Sent!</h3>
                <p className="text-[#0A2540]/60 text-sm font-light leading-relaxed mb-6 max-w-sm">
                  Thank you for contacting LATR Consulting LLC. We'll reach out to you shortly to schedule your free roof inspection.
                </p>
                <p className="text-[#0A2540]/50 text-xs font-medium mb-5">
                  Or call us directly: <a href="tel:9375699934" className="text-[#0A2540] font-bold">937-569-9934</a>
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-5 py-2.5 bg-[#0A2540] text-[#F5F3EE] rounded-xl text-sm font-bold hover:bg-[#0d2f4f] transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <div className="mb-7">
                  <h3 className="text-[#0A2540] text-xl font-bold mb-1">Free Roof Inspection Request</h3>
                  <p className="text-[#0A2540]/50 text-sm font-light">
                    Complete the form below and we'll contact you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[#0A2540] text-xs font-bold uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-[#C9A84C]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full px-4 py-3 bg-white border border-[#0A2540]/15 rounded-xl text-[#0A2540] text-sm placeholder-[#0A2540]/30 focus:outline-none focus:border-[#0A2540]/40 focus:ring-2 focus:ring-[#0A2540]/8 transition-all"
                    />
                  </div>

                  {/* Phone + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#0A2540] text-xs font-bold uppercase tracking-wider mb-1.5">
                        Phone <span className="text-[#C9A84C]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="937-000-0000"
                        className="w-full px-4 py-3 bg-white border border-[#0A2540]/15 rounded-xl text-[#0A2540] text-sm placeholder-[#0A2540]/30 focus:outline-none focus:border-[#0A2540]/40 focus:ring-2 focus:ring-[#0A2540]/8 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[#0A2540] text-xs font-bold uppercase tracking-wider mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className="w-full px-4 py-3 bg-white border border-[#0A2540]/15 rounded-xl text-[#0A2540] text-sm placeholder-[#0A2540]/30 focus:outline-none focus:border-[#0A2540]/40 focus:ring-2 focus:ring-[#0A2540]/8 transition-all"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-[#0A2540] text-xs font-bold uppercase tracking-wider mb-1.5">
                      Property Address <span className="text-[#C9A84C]">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      required
                      placeholder="123 Main St, Piqua, OH 45356"
                      className="w-full px-4 py-3 bg-white border border-[#0A2540]/15 rounded-xl text-[#0A2540] text-sm placeholder-[#0A2540]/30 focus:outline-none focus:border-[#0A2540]/40 focus:ring-2 focus:ring-[#0A2540]/8 transition-all"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-[#0A2540] text-xs font-bold uppercase tracking-wider mb-1.5">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-[#0A2540]/15 rounded-xl text-[#0A2540] text-sm focus:outline-none focus:border-[#0A2540]/40 focus:ring-2 focus:ring-[#0A2540]/8 transition-all"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[#0A2540] text-xs font-bold uppercase tracking-wider mb-1.5">
                      Additional Notes
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your roofing concern or anything we should know before the inspection..."
                      className="w-full px-4 py-3 bg-white border border-[#0A2540]/15 rounded-xl text-[#0A2540] text-sm placeholder-[#0A2540]/30 focus:outline-none focus:border-[#0A2540]/40 focus:ring-2 focus:ring-[#0A2540]/8 transition-all resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <p className="text-red-600 text-xs font-medium">Something went wrong. Please call us at 937-569-9934.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#0A2540] text-[#F5F3EE] rounded-xl font-bold text-sm hover:bg-[#0d2f4f] disabled:opacity-70 transition-all duration-200 mt-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#F5F3EE]/40 border-t-[#F5F3EE] rounded-full animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Request Free Inspection
                      </>
                    )}
                  </button>

                  <p className="text-[#0A2540]/35 text-[11px] text-center leading-relaxed font-light">
                    By submitting this form you agree to be contacted by LATR Consulting LLC.
                    Your information is never sold or shared.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
