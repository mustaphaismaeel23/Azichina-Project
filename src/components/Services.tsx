import { GraduationCap, School, FileCheck, Plane, Briefcase, FileText } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: 'Education Consulting',
      description: 'Comprehensive guidance for undergraduate and postgraduate admission into Chinese universities. Support for scholarships and self-sponsored programs.'
    },
    {
      icon: School,
      title: 'Trade & Commerce',
      description: 'Sourcing, Factory Verification, and Import/ Export'
    },
    {
      icon: FileCheck,
      title: 'China Student Visa Advisory & Processing',
      description: 'Complete support for X1 and X2 student visa categories, including documentation review and application guidance.'
    },
    {
      icon: Plane,
      title: 'Business Travel Processing & Advisory',
      description: 'Tourist visa guidance (L visa) and comprehensive travel planning for your China journey,'
    },

    {
      icon: FileText,
      title: 'Cultural Exchange Programs',
      description: 'Explore Chinese and Nigeria Culture through organized seminar, tour and language training.'
    }
  ];

  return (
    <section id="services" className="py-20 px-8 bg-[#f9f7f4]" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center mb-16 relative pb-6">
          Our Services
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#d4a017]"></span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#d4a017] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className="text-[#d4a017] mb-4" size={48} />
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
