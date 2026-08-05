import { useState, useEffect } from 'react';
import myrealphoto from '../assets/sigma.png';
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png';
import project3Image from '../assets/project3.png';
import sertifikasi1 from '../assets/serft1.jpg';
import sertifikasi2 from '../assets/serft2.jpg';
import hummas from '../assets/hummas.png';
import karisma from '../assets/karisma.jpeg';

const BackgroundLines = () => {
  return (
    <svg 
      className="fixed inset-0 w-full h-full opacity-30 pointer-events-none z-0" 
      viewBox="0 0 1000 1000" 
      preserveAspectRatio="xMidYMid slice" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 0,200 L 300,200 L 400,300 L 1000,300" fill="none" strokeWidth="4" className="animate-rgb-stroke" />
      <path d="M 1000,700 L 600,700 L 500,600 L 0,600" fill="none" strokeWidth="3" className="animate-rgb-stroke" style={{ animationDelay: "-1s" }} />
      <path d="M 250,0 L 250,400 L 350,500 L 350,1000" fill="none" strokeWidth="4" className="animate-rgb-stroke" style={{ animationDelay: "-2s" }} />
      <path d="M 800,1000 L 800,450 L 700,350 L 700,0" fill="none" strokeWidth="3" className="animate-rgb-stroke" style={{ animationDelay: "-1.5s" }} />
    </svg>
  );
};

const translations = {
  id: {
    greeting: "Halo, Saya seorang",
    role: "Web Developer rookie",
    bio: "nama saya hadza mirza lahir di malang 2008. saya sekolah berpendidikan di SMK PGRI 3 malang, dan juga pernah magang di KARISMA ACADEMY. saya juga punya cita cita yaitu membuat game (game developer).",
    education: "Pendidikan",
    major: "Rekayasa Perangkat Lunak",
    experience: "Pengalaman",
    expTitle: "Magang Web Developer",
    techStack: "Tech Stack",
    projects: "Featured Projects",
    project1Desc: "adalah website pendaftaran sekolah dengan pembayaran dua cara (offline dan online). react.js sebagai frontend, node.js dan express.js sebagai backend, serta mysql sebagai database.",
    project2Desc: "adalah applikasi self service, memesan makan sendiri dan memilih meja sendiri. react native sebagai frontend, node.js dan express.js sebagai backend, serta mysql sebagai database.",
    project3Desc: "adalah website bootcamp menggunakan React.js, node.js dan express.js sebagai backend, serta mysql sebagai database.",
    certificates: "Sertifikasi",
    certProvider1: "sertifikasi kompetensi",
    certProvider2: "sertifikasi magang",
    collaborate: "Mari Berkolaborasi",
    contactDesc: "Tertarik untuk membangun sesuatu yang luar biasa? Jangan ragu untuk menghubungi saya melalui platform di bawah ini."
  },
  en: {
    greeting: "Hello, I am a",
    role: "Web Developer rookie",
    bio: "my name is hadza mirza born in malang 2008. I studied at SMK PGRI 3 malang, and also interned at KARISMA ACADEMY. I also have a dream of making games (game developer).",
    education: "Education",
    major: "Software Engineering",
    experience: "Experience",
    expTitle: "Web Developer Intern",
    techStack: "Tech Stack",
    projects: "Featured Projects",
    project1Desc: "Development of a school registration website with two payment methods (offline and online) using React.js for the frontend, Node.js and Express.js for the backend, and MySQL as the database.",
    project2Desc: "Development of a self-service application for ordering food and selecting tables using React Native for the frontend, Node.js and Express.js for the backend, and MySQL as the database.",
    project3Desc: "Development of a bootcamp website using React.js, Node.js and Express.js for the backend, and MySQL as the database.",
    certificates: "Certifications",
    certProvider1: "competency certification",
    certProvider2: "internship certification",
    collaborate: "Let's Collaborate",
    contactDesc: "Interested in building something amazing? Feel free to reach out to me through the platforms below."
  }
};

const Portfolio = ({ lang = 'id' }) => {
  const t = translations[lang] || translations.id;
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-neo-black text-gray-300 font-sans selection:bg-fuchsia-500 selection:text-white overflow-hidden">
      
      <BackgroundLines />
      
      <div 
        className={`relative z-10 transition-all duration-[1500ms] ease-out transform 
        ${showContent ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'}`}
      >
        <div className="h-1 w-full bg-gradient-to-r from-red-600 via-fuchsia-500 to-purple-600 animate-pulse"></div>
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">
          <section id="about" className="flex flex-col md:flex-row gap-12 items-center justify-between">
            <div className="flex-1 space-y-6 w-full">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                {t.greeting} <br />
                <span className="animate-rgb-text inline-block mt-2">{t.role}</span>
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed border-l-2 border-fuchsia-500 pl-4">
                {t.bio}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-neo-card p-5 rounded-lg border border-gray-800 hover:border-fuchsia-500 transition-colors">
                  <h3 className="text-fuchsia-400 font-semibold mb-2">{t.education}</h3>
                  <p className="text-white font-medium">SMK PGRI 3</p>
                  <p className="text-sm text-gray-500">{t.major}</p>
                </div>

                <div className="bg-neo-card p-5 rounded-lg border border-gray-800 hover:border-fuchsia-500 transition-colors">
                  <h3 className="text-fuchsia-400 font-semibold mb-2">{t.experience}</h3>
                  <p className="text-white font-medium">{t.expTitle}</p>
                  <p className="text-sm text-gray-500">2024 - 2025</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <img 
                  src={myrealphoto} 
                  alt="Profile" 
                  className="relative w-60 h-60 md:w-72 md:h-72 object-cover rounded-2xl border-2 border-gray-800 shadow-xl"
                />
              </div>
            </div>
          </section>

          <section id="skills" className="space-y-8">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4">
              <span className="text-fuchsia-500 mr-2">/</span> {t.techStack}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: "Frontend", skills: "HTML, CSS, JavaScript, React" },
                { title: "Backend", skills: "Node.js, Express" },
                { title: "Database", skills: "MySQL" },
                { title: "Tools", skills: "Git, GitHub, Figma, VS Code" }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-neo-card rounded-xl border border-gray-800 hover:animate-rgb-glow transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-fuchsia-400">{item.skills}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="space-y-8">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4">
              <span className="text-fuchsia-500 mr-2">/</span> {t.projects}
            </h2>
            
            {/* Mengubah md:grid-cols-2 menjadi lg:grid-cols-3 agar 3 kartu sejajar dalam 1 baris */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Project 1: FOCUS POINT EDUCATION (Warna: Fuchsia) */}
              <div className="group bg-neo-card rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <div className="h-48 bg-gray-900 relative overflow-hidden flex items-center justify-center border-b border-gray-800">
                  <span className="text-gray-600 font-mono tracking-widest text-sm"><img src={project1Image} alt="Project 1" className="w-full h-full object-cover" /></span>
                  <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    FOCUS POINT EDUCATION
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{t.project1Desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20">
                      React.js
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-600/10 text-blue-600 border border-blue-600/20">
                      Tailwind CSS
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Node.js
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/10 border border-yellow-500/20">
                      <span className="text-black-100">Express</span>
                      <span className="text-yellow-400">.js</span>
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#00758F]/10 border border-[#00758F]/30">
                      <span className="text-[#00758F]">My</span>
                      <span className="text-[#F29111]">SQL</span>
                    </span>
                  </div>
                  
                  <div className="pt-4 flex gap-6 border-t border-gray-800/60">
                    <h1 className="text-sm font-semibold text-white flex items-center gap-2 transition-colors">
                      Demo →
                    </h1>
                    <a href="https://github.com/SKARIGA-RPL-XII/project-kka-SavimbiPride.git" className="text-sm font-semibold text-gray-400 hover:text-purple-500 transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2: IPOS Mobile App Backend (Warna: Violet) */}
              <div className="group bg-neo-card rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-500 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <div className="h-48 bg-gray-900 relative overflow-hidden flex items-center justify-center border-b border-gray-800">
                  <span className="text-gray-600 font-mono tracking-widest text-sm"><img src={project2Image} alt="Project 2" className="w-full h-full object-cover" /></span>
                  <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    IPOS Mobile App Backend
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{t.project2Desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-200 border border-blue-500/20">
                      React native expo
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                      Android Studio
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Node.js
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/10 border border-yellow-500/20">
                      <span className="text-black-100">Express</span>
                      <span className="text-yellow-400">.js</span>
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#00758F]/10 border border-[#00758F]/30">
                      <span className="text-[#00758F]">My</span>
                      <span className="text-[#F29111]">SQL</span>
                    </span>
                  </div>
                  
                  <div className="pt-4 flex gap-6 border-t border-gray-800/60">
                    <h1 className="text-sm font-semibold text-white flex items-center gap-2 transition-colors">
                      Demo →
                    </h1>
                    <a href="https://github.com/SKARIGA-RPL-XII/repo-tugas-mobile-app-mobile.git" className="text-sm font-semibold text-gray-400 hover:text-emerald-500 transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3: BOOTCAMP KARISMA WEB (Warna: Emerald / Hijau Neon) */}
              <div className="group bg-neo-card rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <div className="h-48 bg-gray-900 relative overflow-hidden flex items-center justify-center border-b border-gray-800">
                  <span className="text-gray-600 font-mono tracking-widest text-sm"><img src={project3Image} alt="Project 3" className="w-full h-full object-cover" /></span>
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    BOOTCAMP KARISMA WEB
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{t.project3Desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20">
                      React.js
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-600/10 text-blue-600 border border-blue-600/20">
                      Tailwind CSS
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Node.js
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/10 border border-yellow-500/20">
                      <span className="text-black-100">Express</span>
                      <span className="text-yellow-400">.js</span>
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#00758F]/10 border border-[#00758F]/30">
                      <span className="text-[#00758F]">My</span>
                      <span className="text-[#F29111]">SQL</span>
                    </span>
                  </div>  
                  
                  <div className="pt-4 flex gap-6 border-t border-gray-800/60">
                    <h1 className="text-sm font-semibold text-white hover:text-blue-500 flex items-center gap-2 transition-colors">
                      Demo →
                    </h1>
                    <a href="https://github.com/SavimbiPride/karisma-v2.git" className="text-sm font-semibold text-gray-400 hover:text-blue-500 transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section id="certificates" className="space-y-8">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4">
              <span className="text-fuchsia-500 mr-2">/</span> {t.certificates}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card Sertifikat 1 */}
              <div className="group bg-neo-card rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 shadow-lg flex flex-col">
                {/* 1. ATAS: Gambar Sertifikat */}
                <div className="h-48 bg-gray-900 relative overflow-hidden flex items-center justify-center border-b border-gray-800">
                  <span className="text-gray-600 font-mono tracking-widest text-sm"><img src={sertifikasi1} alt="Sertifikat 1" className="w-full h-full object-cover" /></span>
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* 2. BAWAH: Informasi Sertifikat */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    {/* Nama Sertifikat */}
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {t.certProvider1}
                    </h3>

                    {/* Nama Penyelenggara + Logo Gambar */}
                    <div className="flex items-center gap-2 text-blue-400 font-medium text-sm">
                      <img 
                        src={hummas}
                        className="w-5 h-5 object-contain shrink-0 rounded-sm"
                      />
                      <span>PT Humma Teknologi Indonesia</span>
                    </div>

                    {/* Alamat Penyelenggara + Icon */}
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <svg className="w-4 h-4 shrink-0 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Perumahan Permata Regency 1 Blok 10 Nomor 28, Ngijo, Kecamatan Karangploso, Kabupaten Malang, Jawa Timur, indonesia.</span>
                    </div>
                  </div>

                  {/* Footer: Tahun */}
                  <div className="pt-4 border-t border-gray-800/60 flex items-center justify-between">
                    <span className="text-gray-500 text-xs font-mono">2026</span>
                  </div>
                </div>
              </div>

              {/* Card Sertifikat 2 */}
              <div className="group bg-neo-card rounded-xl overflow-hidden border border-gray-800 hover:border-blue-900 transition-all duration-300 shadow-lg flex flex-col">
                {/* 1. ATAS: Gambar Sertifikat */}
                <div className="h-48 bg-gray-900 relative overflow-hidden flex items-center justify-center border-b border-gray-800">
                  <span className="text-gray-600 font-mono tracking-widest text-sm"><img src={sertifikasi2} alt="Sertifikat 2" className="w-full h-full object-cover" /></span>
                  <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* 2. BAWAH: Informasi Sertifikat */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    {/* Nama Sertifikat */}
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-900 transition-colors">
                      {t.certProvider2}
                    </h3>

                    <div className="flex items-center gap-2 text-blue-900 font-medium text-sm">
                      <img 
                        src={karisma}
                        className="w-5 h-5 object-contain shrink-0 rounded-sm"
                      />
                      <span>Karisma Academy</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <svg className="w-4 h-4 shrink-0 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Jalan Watu Gong Nomor 18, Kelurahan Ketawanggede, Kecamatan Lowokwaru, Kota Malang, Jawa Timur, indonesia.</span>
                    </div>
                  </div>

                  {/* Footer: Tahun */}
                  <div className="pt-4 border-t border-gray-800/60 flex items-center justify-between">
                    <span className="text-gray-500 text-xs font-mono">2025</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section id="contact" className="py-12 border-t border-gray-800 text-center space-y-6">
            <h2 className="text-2xl font-bold text-white">{t.collaborate}</h2>
            <p className="text-gray-400 max-w-md mx-auto">
              {t.contactDesc}
            </p>
            <div className="flex justify-center gap-6 pt-4">
              
              {/* Discord Button */}
              <a href="#" className="group flex items-center justify-center w-12 h-12 rounded-full bg-neo-card border border-gray-700 hover:border-[#5865F2] hover:shadow-[0_0_15px_rgba(88,101,242,0.5)] transition-all duration-300">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-[#5865F2] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </a>

              {/* Instagram Button */}
              <a href="#" className="group flex items-center justify-center w-12 h-12 rounded-full bg-neo-card border border-gray-700 hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all duration-300">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-pink-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>

              {/* GitHub Button */}
              <a href="#" className="group flex items-center justify-center w-12 h-12 rounded-full bg-neo-card border border-gray-700 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Portfolio;