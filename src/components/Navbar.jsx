import React, { useState } from 'react';
import { Link } from 'react-router-dom';
  
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const navLinks = [
    { name: 'alamat', href: '#alamat' },
  ];

  return (
    <>
      <nav className="fixed w-full z-100 top-0 bg-neo-black/80 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
        <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-green-400 animate-pulse"></div>
        
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold tracking-widest text-white">
                <span className="animate-rgb-text">&lt;DEV/&gt;</span>
              </a>
            </div>

            {/* Desktop Links & Settings */}
            <div className="hidden md:flex items-center space-x-8">
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
              
              {/* Settings Dropdown Button */}
              <div className="relative">
                <button 
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                  className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-gray-800/50 cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isSettingsOpen && (
                  <div className="absolute right-0 mt-4 w-48 bg-neo-card border border-gray-700 rounded-lg shadow-lg overflow-hidden animate-fade-in-down z-50">
                    <Link to="/FPE_style" className="block px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-colors">
                      FPE Style
                    </Link>
                    <button 
                      onClick={() => {
                        setIsMusicOpen(true);
                        setIsSettingsOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-fuchsia-400 hover:bg-gray-800 transition-colors flex justify-between items-center cursor-pointer"
                    >
                      Buka Musik
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Toggle & Settings */}
            <div className="md:hidden flex items-center space-x-4">
              <button onClick={() => setIsSettingsOpen(!isSettingsOpen)} className="text-gray-400 hover:text-cyan-400 transition-colors">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </button>
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

        {/* Mobile Nav Menu */}
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

        {/* Mobile Settings Menu */}
        {isSettingsOpen && (
          <div className="md:hidden bg-neo-black border-b border-gray-800 shadow-lg">
            <a href="/FPE_style" className="block px-7 py-3 text-gray-300 hover:text-cyan-400 border-t border-gray-800">
              FPE Style
            </a>
            <button 
              onClick={() => {
                setIsMusicOpen(true);
                setIsSettingsOpen(false);
              }}
              className="w-full text-left px-7 py-3 text-gray-300 hover:text-fuchsia-400 border-t border-gray-800"
            >
              Buka Musik Player
            </button>
          </div>
        )}
      </nav>

      {/* Floating Music Player UI */}
      {isMusicOpen && (
        <div className="fixed bottom-6 right-6 w-80 bg-neo-card border border-gray-700/50 rounded-xl shadow-[0_0_20px_rgba(255,0,255,0.15)] z-[60] backdrop-blur-md overflow-hidden">
          {/* Header Drag Area / Top Bar */}
          <div className="flex justify-between items-center px-4 py-2 bg-gray-800/40 border-b border-gray-700/50">
            <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Now Playing</span>
            <button onClick={() => setIsMusicOpen(false)} className="text-gray-400 hover:text-red-400 transition-colors cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          
          {/* Player Body */}
          <div className="p-5 flex items-center space-x-4">
            <div className={`w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 flex items-center justify-center flex-shrink-0 ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}>
              <div className="w-4 h-4 bg-neo-card rounded-full"></div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-white truncate">Cyberpunk Ambience</h4>
              <p className="text-xs text-cyan-400 truncate">Lofi Synthwave</p>
            </div>
          </div>

          {/* Controls */}
          <div className="px-5 pb-5">
            <div className="h-1 w-full bg-gray-800 rounded-full mb-4 overflow-hidden">
              <div className="h-full bg-cyan-400 w-1/3"></div>
            </div>
            
            <div className="flex justify-center items-center space-x-6">
              <button className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 20L9 12l10-8v16zM5 19h2V5H5v14z"></path></svg>
              </button>
              
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 text-black rounded-full transition-all shadow-[0_0_10px_rgba(0,255,255,0.5)] cursor-pointer"
              >
                {isPlaying ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                )}
              </button>

              <button className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M5 4l10 8-10 8V4zm14 15h-2V5h2v14z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;