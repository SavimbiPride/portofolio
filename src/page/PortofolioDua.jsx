const HalamanDua = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed text-[#392F43] font-barrio py-16 px-6 overflow-hidden">
      
      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        
        {/* --- SECTION 1: ABOUT --- */}
        <section id="about" className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-xl tracking-widest uppercase border-b-2 border-[#392F43] inline-block pb-1">
              01. Perkenalan
            </h2>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Halo, Saya seorang <br />
              {/* Efek stabilo/blok pada teks */}
              <span className="bg-[#392F43] text-[#E1E1DF] px-4 py-2 inline-block transform -rotate-2 mt-2 shadow-[4px_4px_0px_#8B9E9C]">
                Web Developer.
              </span>
            </h1>

            {/* Menggunakan efek tekstur kertas untuk deskripsi */}
            <div className="paper-texture-overlay p-6 border-2 border-[#392F43] shadow-[5px_5px_0px_#8B9E9C] transform rotate-1">
              <p className="text-xl leading-relaxed">
                Saya memiliki ketertarikan mendalam dalam membangun aplikasi web modern dan responsif. Menggabungkan desain fungsional dengan arsitektur backend yang solid.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Kotak Pendidikan */}
              <div className="paper-texture-overlay p-5 border border-[#392F43] shadow-[3px_3px_0px_#8B9E9C] hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-bold border-b border-[#392F43] pb-2 mb-2">Pendidikan</h3>
                <p className="text-lg">SMK PGRI 3</p>
                <p className="text-sm opacity-80">Rekayasa Perangkat Lunak</p>
              </div>
              {/* Kotak Pengalaman */}
              <div className="paper-texture-overlay p-5 border border-[#392F43] shadow-[3px_3px_0px_#8B9E9C] hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-bold border-b border-[#392F43] pb-2 mb-2">Pengalaman</h3>
                <p className="text-lg">Magang Web Developer</p>
                <p className="text-sm opacity-80">2025 - 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: SKILLS --- */}
        <section id="skills" className="space-y-8">
          <h2 className="text-4xl font-bold border-b-4 border-[#392F43] pb-2 inline-block transform -rotate-1">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Frontend", skills: "HTML, CSS, JavaScript, React" },
              { title: "Backend", skills: "Node.js, Express" },
              { title: "Database", skills: "MySQL" },
              { title: "Tools", skills: "Git, GitHub, Figma, VS Code" }
            ].map((item, idx) => (
              // Efek kertas berjejer dengan rotasi acak untuk kesan organik
              <div 
                key={idx} 
                className={`paper-texture-overlay p-6 border-2 border-[#392F43] shadow-[4px_4px_0px_#8B9E9C] hover:scale-105 transition-transform ${idx % 2 === 0 ? 'transform rotate-2' : 'transform -rotate-2'}`}
              >
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-lg">{item.skills}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 3: PROJECTS --- */}
        <section id="projects" className="space-y-8">
          <h2 className="text-4xl font-bold border-b-4 border-[#392F43] pb-2 inline-block transform rotate-1">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Project 1 */}
            <div className="paper-texture-overlay border-2 border-[#392F43] shadow-[6px_6px_0px_#8B9E9C] overflow-hidden group">
              <div className="h-48 bg-[#B9BEBD] border-b-2 border-[#392F43] flex items-center justify-center relative">
                <span className="text-[#392F43] font-bold tracking-widest">[ IMAGE SCREENSHOT ]</span>
                {/* Efek overlay saat hover (gaya kertas) */}
                <div className="absolute inset-0 bg-[#392F43]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-3xl font-bold">FOCUS POINT EDUCATION</h3>
                <p className="text-lg">Landing page interaktif dengan navigasi sticky, side menu, dan integrasi antarmuka chatbot.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 border border-[#392F43] bg-white/50 text-sm shadow-[2px_2px_0px_#8B9E9C]">React</span>
                  <span className="px-3 py-1 border border-[#392F43] bg-white/50 text-sm shadow-[2px_2px_0px_#8B9E9C]">Tailwind CSS</span>
                </div>
                <div className="pt-4 flex gap-4 font-bold border-t border-[#392F43] border-dashed mt-4">
                  <a href="#" className="hover:underline flex items-center gap-2"><span>Demo</span> →</a>
                  <a href="#" className="hover:underline">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="paper-texture-overlay border-2 border-[#392F43] shadow-[6px_6px_0px_#8B9E9C] overflow-hidden group">
              <div className="h-48 bg-[#8F9C9F] border-b-2 border-[#392F43] flex items-center justify-center relative">
                <span className="text-[#392F43] font-bold tracking-widest">[ IMAGE SCREENSHOT ]</span>
                <div className="absolute inset-0 bg-[#392F43]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-3xl font-bold">IPOS Mobile App Backend</h3>
                <p className="text-lg">Pengembangan arsitektur backend, integrasi database MySQL, dan pembuatan RESTful API menggunakan Express.js.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 border border-[#392F43] bg-white/50 text-sm shadow-[2px_2px_0px_#8B9E9C]">Node.js</span>
                  <span className="px-3 py-1 border border-[#392F43] bg-white/50 text-sm shadow-[2px_2px_0px_#8B9E9C]">Express.js</span>
                  <span className="px-3 py-1 border border-[#392F43] bg-white/50 text-sm shadow-[2px_2px_0px_#8B9E9C]">MySQL</span>
                </div>
                <div className="pt-4 flex gap-4 font-bold border-t border-[#392F43] border-dashed mt-4">
                  <a href="#" className="hover:underline flex items-center gap-2"><span>Demo</span> →</a>
                  <a href="#" className="hover:underline">GitHub</a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- SECTION 4: CERTIFICATES --- */}
        <section id="certificates" className="space-y-8">
          <h2 className="text-4xl font-bold border-b-4 border-[#392F43] pb-2 inline-block">
            Sertifikasi
          </h2>
          {/* Efek seperti tiket/kupon kertas */}
          <div className="paper-texture-overlay p-6 border-2 border-[#392F43] border-dashed flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#E1E1DF]">
            <div>
              <h3 className="text-2xl font-bold">Fullstack Web Development</h3>
              <p className="text-lg italic">Penyelenggara XYZ</p>
            </div>
            <div className="text-right">
              <p className="mb-2 font-bold">Tahun 2026</p>
              <a href="#" className="px-4 py-2 border-2 border-[#392F43] bg-[#392F43] text-white hover:bg-white hover:text-[#392F43] transition-colors shadow-[3px_3px_0px_#8B9E9C]">
                Verifikasi Link
              </a>
            </div>
          </div>
        </section>

        {/* --- SECTION 5: CONTACT --- */}
        <section id="contact" className="py-12 border-t-4 border-[#392F43] border-double text-center space-y-6">
          <h2 className="text-4xl font-bold">Mari Berkolaborasi</h2>
          <p className="text-xl max-w-md mx-auto">
            Tertarik untuk membangun sesuatu yang luar biasa? Jangan ragu untuk menghubungi saya.
          </p>
          <div className="flex justify-center gap-6 pt-4">
            
            {/* Tombol sosmed gaya kertas bulat */}
            <a href="#" className="flex items-center justify-center w-14 h-14 rounded-full paper-texture-overlay border-2 border-[#392F43] shadow-[3px_3px_0px_#8B9E9C] hover:translate-y-1 hover:shadow-none transition-all">
              <svg className="w-8 h-8 text-[#392F43]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            
            <a href="#" className="flex items-center justify-center w-14 h-14 rounded-full paper-texture-overlay border-2 border-[#392F43] shadow-[3px_3px_0px_#8B9E9C] hover:translate-y-1 hover:shadow-none transition-all">
               <svg className="w-8 h-8 text-[#392F43]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                 <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
               </svg>
            </a>
            
          </div>
        </section>

      </div>
    </div>
  );
};

export default HalamanDua;