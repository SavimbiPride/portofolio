import React from 'react';

const PortofolioDua = () => {
  return (
    <div className="min-h-screen bg-[#E1E1DF] text-[#392F43] pt-24 pb-12 px-6">
      
      {/* Container Utama */}
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Contoh Card Kertas */}
        <section className="fpe-paper p-8 transform -rotate-1">
          <h1 className="text-4xl border-b border-[#392F43] pb-4 mb-4">
            Halo, Saya Web Developer
          </h1>
          <p className="text-xl">
            Selamat datang di portofolio dengan tema kertas. 
            Semua elemen di sini menggunakan palet warna yang Anda inginkan.
          </p>
        </section>

        {/* Contoh Box Tech Stack */}
        <div className="grid grid-cols-2 gap-6">
          <div className="fpe-paper p-6 bg-[#B9BEBD]">
            <h3 className="text-2xl font-bold">Frontend</h3>
            <p>React, Tailwind, CSS</p>
          </div>
          <div className="fpe-paper p-6 bg-[#8F9C9F]">
            <h3 className="text-2xl font-bold">Backend</h3>
            <p>Node.js, Express, MySQL</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PortofolioDua;