import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      content: (
        <>
          No. 21 Addis Ababa Crescent<br />
          Wuse Zone 4<br />
          FCT Abuja, Nigeria
        </>
      )
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      content: (
        <>
          +234 703 196 9065<br />
          +234 803 454 2057<br />
          +234 803 676 3796<br />
          <em className="opacity-80 text-sm">Call or WhatsApp</em>
        </>
      )
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: (
        <>
          azichinac@gmail.com<br />
          info@azichina.org<br />
          <em className="opacity-80 text-sm">Response within 24 hours</em>
        </>
      )
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: (
        <>
          Monday - Friday<br />
          9:00 AM - 5:00 PM WAT<br />
          Saturday (By Appointment)<br />
          <em className="opacity-80 text-sm">Emergency support available</em>
        </>
      )
    }
  ];

  return (
    <section id="contact" className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white py-20 px-8 text-center" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 relative pb-6">
          Contact Us
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#d4a017]"></span>
        </h2>

        <p className="text-xl mb-8">Ready to start your China journey? Get in touch with us today.</p>

        <div className="max-w-3xl mx-auto mb-12 bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
          <h3 className="text-[#d4a017] text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            <Phone size={28} />
            Reach Out to Our Team
          </h3>
          <p className="mb-4 leading-relaxed">
            We're here to answer your questions about studying in China, visa applications, travel arrangements, and more. Whether you're planning to apply for a scholarship or need guidance on documentation, our experienced consultants are ready to assist you.
          </p>
          <p className="leading-relaxed">
            Schedule a free initial consultation to discuss your goals and learn how we can support your journey to China.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className="mx-auto mb-3 text-[#d4a017]" size={32} />
                <h3 className="font-bold text-lg mb-3">{info.title}</h3>
                <p className="leading-relaxed text-sm">{info.content}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="mailto:azichinac@gmail.com"
            className="bg-[#d4a017] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#ffd700] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 inline-block"
          >
            Send Us an Email
          </a>
          <a
            href="tel:+2347031969065"
            className="bg-[#d4a017] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#ffd700] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 inline-block"
          >
            Call Now
          </a>
        </div>

        <div className="max-w-2xl mx-auto p-6 bg-[#d4a017]/10 rounded-xl border-2 border-[#d4a017]">
          <h3 className="text-[#d4a017] text-xl font-bold mb-2 flex items-center justify-center gap-2">
            Book Your Free Consultation
          </h3>
          <p className="opacity-95">
            Discuss your education or travel plans with our experts. No obligation, just professional guidance to help you make informed decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
