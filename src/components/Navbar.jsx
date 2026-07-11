import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Skill', href: '#skills' },
    { name: 'Project', href: '#projects' },
    { name: 'Sertifikat', href: '#certificates' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-neo-black/80 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
      <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-green-400 animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold tracking-widest text-white">
              <span className="animate-rgb-text">&lt;DEV/&gt;</span>
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-cyan-400 text-sm uppercase tracking-wider font-medium transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#00ffff]"></span>
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-cyan-400 focus:outline-none transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neo-card border-b border-gray-800 animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-gray-400 hover:text-cyan-400 hover:bg-gray-900/50 rounded-md text-base font-medium transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;