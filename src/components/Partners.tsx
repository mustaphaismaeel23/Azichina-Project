import { Plane, Globe, Network, Activity, Building, Building2 } from 'lucide-react';

export default function Partners() {
  const partners = [
    { icon: Plane, name: 'Exilien Travels and Tour' },
    { icon: Globe, name: 'Dan-Gandu World Concepts' },
    { icon: Network, name: 'L&J Sili Global Concept' },
    { icon: Activity, name: 'Dental Bay' },
    { icon: Building, name: 'Heromaxx International Ltd' },
    { icon: Building2, name: 'Bank Partners' }
  ];

  return (
    <section id="partners" className="py-20 px-8 bg-[#f9f7f4]" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center mb-6 relative pb-6">
          Our Partners
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#d4a017]"></span>
        </h2>

        <p className="text-center max-w-3xl mx-auto text-lg mb-12 text-gray-700">
          We collaborate with trusted partners to deliver comprehensive services to our clients.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
              >
                <Icon className="text-[#d4a017] mx-auto mb-4" size={48} />
                <h3 className="text-lg font-semibold text-[#1a1a1a]">{partner.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
