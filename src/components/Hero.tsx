interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#2d2d2d]/95 text-white pt-36 pb-24 px-8 text-center overflow-hidden"
      style={{ scrollMarginTop: '70px' }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#1a1a1a] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2d2d2d] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
          Azichina Consultancy Services Ltd
        </h1>
        <p className="text-2xl md:text-3xl italic mb-4 text-[#d4a017]">
          ...handling everything China
        </p>
        <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
          Your Trusted Bridge Between Nigeria and China<br />
          Professional Travel, Education & Business Consulting
        </p>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-[#d4a017] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#ffd700] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
        >
          Get Started Today
        </button>
      </div>
    </section>
  );
}
