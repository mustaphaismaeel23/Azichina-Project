interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  return (
    <header className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white py-4 fixed w-full top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          <img src="/logo1.png" alt="Azichina Logo" className="w-14 h-14 object-contain" />
          <div>
            <div className="font-bold text-xl">AZICHINA</div>
            <div className="text-xs italic opacity-90 -mt-1">...handling everything China</div>
          </div>
        </div>
        <ul className="hidden md:flex gap-8">
          {['home', 'about', 'services', 'team', 'partners', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-[#d4a017] transition-colors duration-300 font-medium capitalize"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
