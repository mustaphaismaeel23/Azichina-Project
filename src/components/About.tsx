import { Target, Rocket, CheckCircle, Star, Heart, Zap, Diamond } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'Honest and transparent service delivery in all our engagements.'
    },
    {
      icon: Star,
      title: 'Professionalism',
      description: 'Global best practices in all our client interactions and operations.'
    },
    {
      icon: Heart,
      title: 'Client-Centricity',
      description: 'Tailored solutions designed for every client\'s unique needs.'
    },
    {
      icon: Zap,
      title: 'Reliability',
      description: 'Consistent and dependable service you can trust.'
    },
    {
      icon: Diamond,
      title: 'Compliance',
      description: 'Strict adherence to regulatory and embassy requirements.'
    }
  ];

  return (
    <section id="about" className="py-20 px-8" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center mb-4 relative pb-6">
          About Azichina
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#d4a017]"></span>
        </h2>

        <p className="text-center max-w-4xl mx-auto text-lg leading-relaxed mb-8 text-gray-700">
          Azichina Consultancy Services Ltd is a Nigeria-based professional consulting firm specializing in Nigeria–China travel, education, and business facilitation services. We serve as a trusted bridge between Nigeria and China, providing end-to-end advisory, documentation, and travel solutions for individuals, students, and corporate clients.
        </p>

        <p className="text-center max-w-4xl mx-auto text-lg leading-relaxed mb-12 text-gray-700">
          Our operations are built on integrity, compliance, efficiency, and international best practices, ensuring our clients enjoy smooth, transparent, and reliable services.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl border-l-4 border-[#d4a017] shadow-lg">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
              <Target className="text-[#d4a017]" size={32} />
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To become a leading Nigeria–China consulting firm, recognized for excellence in travel, education, and international business support.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl border-l-4 border-[#d4a017] shadow-lg">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
              <Rocket className="text-[#d4a017]" size={32} />
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To simplify international travel, education, and business processes between Nigeria and China by delivering accurate guidance, timely service, and trusted partnerships.
            </p>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-[#1a1a1a] text-center mb-12">Core Values</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="bg-[#1a1a1a] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
