export default function Team() {
  const team = [
    {
      initials: 'TO',
      name: 'Theresa Omovoraino Sani-Dickson',
      role: 'Managing Director',
      bio: 'Highly skilled Customer Service Expert and Fraud Prevention Specialist with over 10 years of experience in customer relations, operational support, and strategic project management. Proven track record in transforming customer experiences and managing stakeholder relationships with integrity and professionalism.',
      image: '/team/theresa_omovoraino_sani-dickson.png'
    },
    {
      initials: 'YD',
      name: 'Engr. Yusuf Waziri Dauda',
      role: 'Assistant Managing Director',
      bio: 'Highly experienced Mechanical Engineer with 13 years in the oil and gas industry. Worked with Nigeria National Oil Company and Nigeria LNG. Proven track record of delivering projects on time, within budget, and to specification with strong understanding of industrial standards.',
      image: '/team/engr._yusuf_waziri_dauda.png'
    },
    {
      initials: 'MN',
      name: 'Muhammad Nazif Adamu',
      role: 'Director of Financials',
      bio: 'Criminologist & Security Expert specializing in Criminal Investigation and Prosecution of Cases, with expertise in intelligence gathering, evidence analysis, and case documentation in line with legal procedures.',
      image: '/team/muhammad_nazif_adamu.png'
    },
    {
      initials: 'MB',
      name: 'Mohammed Bello',
      role: 'Special Adviser',
      bio: 'Seasoned Nigerian entrepreneur and technologist. Co-Founder of BellBank, a Central Bank-licensed microfinance bank. Built transformative ventures across fintech, mobility, commerce, and logistics, driving solutions that empower communities.',
      image: '/team/mohammed_bello.png'
    },
    {
      initials: 'SA',
      name: 'Suru Alkassim Jidda, Esq',
      role: 'Legal Adviser',
      bio: 'Seasoned lawyer with 15 years of experience. Solicitor and advocate of the Supreme Court of Nigeria. Serves on various boards as company secretary, legal adviser and trustee. Passionate advocate for justice, especially for women and children.',
      image: '/team/suru_alkassim_jidda,_esq.png'
    }
  ];

  return (
    <section id="team" className="py-20 px-8 bg-[#f9f7f4]" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center mb-6 relative pb-6">
          Our Management Team
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#d4a017]"></span>
        </h2>

        <p className="text-center max-w-4xl mx-auto text-lg leading-relaxed mb-12 text-gray-700">
          The management team of Azichina Consultancy Services Ltd comprises experienced professionals with strong expertise in international trade, business advisory, market entry strategy, and cross-border relations. Our leadership brings together diverse industry knowledge, strategic insight, and practical experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {member.image ? (
                <div className="h-64 overflow-hidden bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] h-64 flex items-center justify-center text-[#d4a017] text-6xl font-bold">
                  {member.initials}
                </div>
              )}
              <div className="p-6">
                <div className="text-xl font-bold text-[#1a1a1a] mb-1">{member.name}</div>
                <div className="text-[#d4a017] font-semibold mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
