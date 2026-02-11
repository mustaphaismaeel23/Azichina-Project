import { Instagram, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white text-center py-8 px-4">
      <p>&copy; 2026 Azichina Consultancy Services Ltd. All rights reserved.</p>
      <p className="mt-2 opacity-80">...handling everything China</p>
      <p className="mt-1 opacity-80">Professional Nigeria-China Travel, Education & Business Consulting</p>

      <div className="flex justify-center items-center gap-8 mt-6 text-2xl">
        <a
          href="https://www.instagram.com/azichina"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#d4a017] transition-colors duration-300 flex items-center gap-2"
          title="Instagram"
        >
          <Instagram size={28} />
          <span className="text-base">@azichina</span>
        </a>
        <a
          href="http://www.azichina.org"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#d4a017] transition-colors duration-300 flex items-center gap-2"
          title="Website"
        >
          <Globe size={28} />
          <span className="text-base">www.azichina.org</span>
        </a>
      </div>
    </footer>
  );
}
