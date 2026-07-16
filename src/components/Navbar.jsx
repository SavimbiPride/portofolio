import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cybertek from "../assets/cybertek.mp3";
import fpeWelcome from "../assets/fpe_welcome.mp3";

const Navbar = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const location = useLocation();
  const isPage1 = location.pathname === '/'; 
  const isFuture = location.pathname === "/";
  const desktopSettingsRef = useRef(null);
  const mobileSettingsRef = useRef(null);
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const musicPopupRef = useRef(null);
  const [transitioning, setTransitioning] = useState(false);
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
    setIsSettingsOpen(false);
  };

  // --- HANDLE KLIK DI LUAR DROPDOWN ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsideDesktop = desktopSettingsRef.current && !desktopSettingsRef.current.contains(event.target);
      const clickedOutsideMobile = mobileSettingsRef.current && !mobileSettingsRef.current.contains(event.target);
      
      if (clickedOutsideDesktop && clickedOutsideMobile) {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // --- SETUP AUDIO & CEK GANTI HALAMAN ---
  useEffect(() => {
    const currentAudioPath = isFuture ? cybertek : fpeWelcome;

    if (!audioRef.current) {
      audioRef.current = new Audio(currentAudioPath);
      audioRef.current.loop = true;
    }

    const audio = audioRef.current;

    // Jika lagu berubah karena pindah rute (misal dari back/forward browser)
    if (audio.src !== new URL(currentAudioPath, window.location.origin).href) {
      audio.pause();
      audio.src = currentAudioPath;
      audio.load();
      setIsPlaying(false); 
    }
  }, [isFuture]);

  // --- SINKRONISASI STATE PLAY/PAUSE ---
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const play = () => setIsPlaying(true);
    const pause = () => setIsPlaying(false);

    audio.addEventListener("play", play);
    // eslint-disable-next-line
    audio.addEventListener("pause", pause);

    return () => {
      audio.removeEventListener("play", play);
      audio.removeEventListener("pause", pause);
    };
  }, []);

  // --- UPDATE PROGRESS BAR ---
  useEffect(() => {
    const interval = setInterval(() => {
      if (!audioRef.current) return;
      const audio = audioRef.current;
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // --- UPDATE VOLUME ---
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // --- HANDLE KLIK DI LUAR MUSIC PLAYER ---
  useEffect(() => {
    const handleClickOutsideMusic = (event) => {
      if (!isMusicOpen) return;

      const clickedMusic = musicPopupRef.current?.contains(event.target);
      const clickedDesktopSettings = desktopSettingsRef.current?.contains(event.target);
      const clickedMobileSettings = mobileSettingsRef.current?.contains(event.target);

      if (!clickedMusic && !clickedDesktopSettings && !clickedMobileSettings) {
        setIsMusicOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideMusic);
    return () => document.removeEventListener("mousedown", handleClickOutsideMusic);
  }, [isMusicOpen]);

  // --- KONTROL MUSIK UTAMA ---
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const skipForward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(
      audioRef.current.currentTime + 10,
      audioRef.current.duration || 0
    );
  };

  const skipBackward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(
      audioRef.current.currentTime - 10, 0
    );
  };

  // --- EFEK FADE OUT SAAT GANTI HALAMAN (LALU STOP) ---
  const fadeToMusic = (newMusic) => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    const targetVolume = volume;
    const wasPlaying = !audio.paused; // Simpan kondisi sebelum ganti lagu

    // Jika sebelumnya tidak sedang play
    if (!wasPlaying) {
      audio.src = newMusic;
      audio.load();
      return;
    }

    let currentVolume = audio.volume;

    const fadeOut = setInterval(() => {
      currentVolume -= 0.05;

      if (currentVolume <= 0) {
        clearInterval(fadeOut);

        audio.pause();
        audio.src = newMusic;
        audio.load();
        audio.volume = targetVolume;

        // Tunggu lagu siap lalu play lagi
        audio.oncanplaythrough = () => {
          audio.play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch(console.error);

          audio.oncanplaythrough = null;
        };
      } else {
        audio.volume = currentVolume;
      }
    }, 60);
  };

  const navLinks = [
    { name: lang === 'id' ? 'Alamat' : 'Address', href: '#alamat' },
  ];

  const changeTheme = () => {
    if (transitioning) return;
    setTransitioning(true);

    const targetPath = isPage1 ? "/FPE_style" : "/";
    fadeToMusic(isPage1 ? fpeWelcome : cybertek);

    setTimeout(() => {
      navigate(targetPath);
      setTransitioning(false);
    }, 1800);
  };

  // --- LOGIKA TEMA DINAMIS ---
  const theme = isPage1 
    ? {
        // Tema Future (Halaman 1) - Solid & Gelap
        navBg: "bg-neo-black border-gray-800", 
        topBar: "bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-green-400 animate-pulse",
        logo: "text-white",
        linkText: "text-gray-400 hover:text-cyan-400",
        hoverLine: "bg-cyan-400 group-hover:shadow-[0_0_8px_#00ffff]",
        iconBtn: "text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50",
        dropdownBg: "bg-gray-900 border-gray-700 shadow-lg",
        dropdownItem: "text-gray-300 hover:text-cyan-400 hover:bg-gray-800",
        mobileMenu: "bg-neo-card border-gray-800 shadow-xl",
      }
    : {
        // Tema FPE (Halaman 2) - Kertas & Terang
        // Menghapus paper-crumpled di area layout krusial agar tidak miring/rusak
        navBg: "bg-[#E1E1DF] border-[#392F43] border-b-4", 
        topBar: "bg-[#392F43]",
        logo: "text-[#392F43] font-black drop-shadow-[2px_2px_0px_#8B9E9C]",
        linkText: "text-[#392F43] font-bold hover:text-black",
        hoverLine: "bg-[#392F43] h-[3px]",
        iconBtn: "text-[#392F43] hover:bg-white hover:shadow-[2px_2px_0px_#8B9E9C] border-2 border-transparent hover:border-[#392F43]",
        dropdownBg: "bg-[#E1E1DF] border-2 border-[#392F43] drop-shadow-[5px_5px_0px_#8B9E9C]", 
        dropdownItem: "text-[#392F43] font-bold hover:bg-white border-b border-dashed border-gray-400 last:border-0",
        mobileMenu: "bg-[#E1E1DF] border-[#392F43] border-b-4 shadow-lg", 
      };

  return (
    <>
      {transitioning && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          <div className="absolute inset-0 bg-black animate-fadeOpacity"/>
          <div className="absolute inset-0 opacity-30 animate-glitch"/>
        </div>
      )}

      <nav className={`sticky w-full z-[100] top-0 border-b transition-all duration-300 ${theme.navBg}`}>
        <div className={`h-[2px] w-full ${theme.topBar}`}></div>
        
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <h1 className={`text-2xl md:text-3xl ${theme.logo}`}>
              <span className={isPage1 ? "animate-rgb-text font-bold" : "font-barrio"}>&lt;DEV/&gt;</span>
            </h1>

            {/* Area Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`text-sm uppercase tracking-wider transition-colors duration-300 relative group ${isPage1 ? "animate-rgb-text font-bold" : "font-barrio"} ${theme.linkText}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 w-0 transition-all duration-300 group-hover:w-full ${theme.hoverLine} ${isPage1 ? 'h-0.5' : 'h-1'}`}></span>
                </a>
              ))}
              
              {/* Settings Dropdown Button (Desktop) */}
              <div className="relative" ref={desktopSettingsRef}>
                <button 
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                  className={`transition-colors p-2 rounded-full cursor-pointer ${theme.iconBtn}`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </button>

                {isSettingsOpen && (
                  <div className={`absolute right-0 mt-4 w-52 border rounded-lg overflow-hidden animate-fade-in-down z-50 ${theme.dropdownBg}`}>
                    <button 
                      onClick={() => {
                        setIsSettingsOpen(false);
                        changeTheme();
                      }}
                      className={`w-full text-left block px-4 py-3 text-sm transition-colors cursor-pointer ${isPage1 ? "animate-rgb-text font-bold" : "font-barrio"} ${theme.dropdownItem}`}
                    >
                      🎨 {isPage1 ? "FPE Style" : "Future Style"}
                    </button>
                    
                    <button 
                      onClick={() => {
                        setIsMusicOpen(true);
                        setIsSettingsOpen(false);
                      }}
                      className={`w-full text-left block px-4 py-3 text-sm transition-colors cursor-pointer ${isPage1 ? "animate-rgb-text font-bold" : "font-barrio"} ${theme.dropdownItem}`}
                    >
                      🎵 {lang === 'id' ? 'Buka Musik Player' : 'Open Music Player'}
                    </button>

                    <button 
                      onClick={toggleLanguage}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors flex items-center justify-between cursor-pointer ${isPage1 ? "animate-rgb-text font-bold" : "font-barrio"} ${theme.dropdownItem}`}
                    >
                      <span>{lang === 'id' ? '🇬🇧 English' : '🇮🇩 Bahasa'}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-bold uppercase ${isPage1 ? 'bg-gray-800 text-cyan-400' : 'bg-[#392F43] text-white'}`}>
                        {lang}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Nav Button */}
            <div className="md:hidden flex items-center space-x-4" ref={mobileSettingsRef}>
              <button 
                onClick={() => {
                  setIsSettingsOpen(!isSettingsOpen);
                  setIsOpen(false);
                }} 
                className={`transition-colors p-1 rounded-md ${theme.iconBtn}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </button>
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  setIsSettingsOpen(false);
                }}
                className={`focus:outline-none transition-colors p-1 rounded-md ${theme.iconBtn}`}
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

        {/* Mobile Nav Links */}
        {isOpen && (
          <div className={`md:hidden border-b animate-fade-in-down ${theme.mobileMenu}`}>
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base transition-all ${theme.dropdownItem}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Settings Menu */}
        {isSettingsOpen && (
          <div className={`md:hidden border-b animate-fade-in-down ${theme.mobileMenu}`}>
            <button 
              onClick={() => {
                setIsSettingsOpen(false);
                changeTheme();
              }}
              className={`w-full text-left block px-7 py-4 transition-colors cursor-pointer ${theme.dropdownItem}`}
            >
              🎨 {isPage1 ? "FPE Style" : "Future Style"}
            </button>
            
            <button 
              onClick={() => {
                setIsMusicOpen(true);
                setIsSettingsOpen(false);
              }}
              className={`w-full text-left block px-7 py-4 transition-colors cursor-pointer ${theme.dropdownItem}`}
            >
              🎵 {lang === 'id' ? 'Buka Musik Player' : 'Open Music Player'}
            </button>

            <button
              onClick={toggleLanguage}
              className={`w-full py-5 flex items-center justify-center transition-colors cursor-pointer ${theme.dropdownItem}`}
            >
              <span className="text-xl font-bold leading-none">
                {lang === 'id' ? '🇬🇧 Switch to English' : '🇮🇩 Ganti ke Indonesia'}
              </span>
            </button>
          </div>
        )}
      </nav>

      {/* --- MUSIC PLAYER POPUP --- */}
      {isMusicOpen && (() => {
        const music = isPage1 
        ? {
            title: "Cybertek",
            artist: "Frank Klepacki",
            bg: "bg-neo-black border-gray-700",
            text: "text-white",
            subText: "text-cyan-400",
            btn: "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_10px_rgba(0,255,255,0.5)]",
            progressBar: "bg-cyan-400"
          }
        : {
            title: "FPE Welcome",
            artist: "weercal",
            bg: "bg-[#E1E1DF] border-[#392F43] border-2",
            text: "text-[#392F43]",
            subText: "text-[#392F43]/70",
            btn: "bg-[#392F43] hover:bg-black text-white shadow-none",
            progressBar: "bg-[#392F43]"
          };

        return (
          <div ref={musicPopupRef} className={`fixed bottom-6 right-6 w-80 ${music.bg} rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.2)] z-[60] overflow-hidden animate-fade-in-down`}>
            <div className={`flex justify-between items-center px-4 py-2 border-b ${isPage1 ? 'bg-gray-800 border-gray-700' : 'bg-[#D1D1CF] border-[#392F43]'}`}>
              <span className={`text-xs font-semibold tracking-widest uppercase ${isPage1 ? "animate-rgb-text font-bold" : "font-barrio"} ${isPage1 ? 'text-gray-400' : 'text-[#392F43]'}`}>
                Now Playing
              </span>
              <button 
                onClick={() => setIsMusicOpen(false)}
                className="text-red-500 hover:text-red-300 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="p-5 flex items-center space-x-4">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${isPage1 ? 'bg-gradient-to-tr from-cyan-400 to-fuchsia-500' : 'bg-[#392F43]'} ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}>
                <div className={`w-4 h-4 rounded-full ${isPage1 ? 'bg-neo-black' : 'bg-[#E1E1DF]'}`}></div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className={`text-sm font-bold truncate ${isPage1 ? "animate-rgb-text font-bold" : "font-barrio tracking-widest"} ${music.text}`}>{music.title}</h4>
                <p className={`text-xs truncate font-sans font-bold ${music.subText}`}>{music.artist}</p>
              </div>
            </div>

            <div className="px-5 pb-5">
              {/* Progress */}
              <div
                className={`h-1.5 w-full rounded-full cursor-pointer mb-5 overflow-hidden ${isPage1 ? "bg-gray-800" : "bg-gray-300"}`}
                onClick={(e) => {
                  if (!audioRef.current) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  const percent = (e.clientX - rect.left) / rect.width;
                  audioRef.current.currentTime = percent * audioRef.current.duration;
                }}
              >
                <div className={`h-full ${music.progressBar}`} style={{ width: `${progress}%` }} />
              </div>

              {/* Volume */}
              <div className="flex items-center gap-3 mb-6">
                <svg className={`w-5 h-5 ${isPage1 ? "text-white" : "text-[#392F43]"}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 9v6h4l5 5V4L9 9H5z" />
                </svg>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="flex-1 accent-cyan-500 cursor-pointer"
                />
                <span className={`text-xs font-bold w-8 ${isPage1 ? "text-cyan-400" : "text-[#392F43]"}`}>
                  {Math.round(volume * 100)}%
                </span>
              </div>

              {/* Player Buttons */}
              <div className="flex justify-center items-center gap-8">
                <button onClick={skipBackward} title="Back 10 Seconds" className="cursor-pointer opacity-70 hover:opacity-100 transition-transform hover:scale-110">
                  <svg className={`w-6 h-6 ${isPage1 ? "text-white" : "text-[#392F43]"}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 20L9 12l10-8v16zM5 19h2V5H5v14z"/>
                  </svg>
                </button>

                <button onClick={toggleMusic} className={`w-14 h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 cursor-pointer ${music.btn}`}>
                  {isPlaying ? (
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                  ) : (
                    <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  )}
                </button>

                <button onClick={skipForward} title="Forward 10 Seconds" className="cursor-pointer opacity-70 hover:opacity-100 transition-transform hover:scale-110">
                  <svg className={`w-6 h-6 ${isPage1 ? "text-white" : "text-[#392F43]"}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 4l10 8-10 8V4zm14 15h-2V5h2v14z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </>
  );
};

export default Navbar;