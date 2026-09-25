import backgroundFpe from '../assets/backgroundfpe.jpeg';
import profileImg from '../assets/fpe_logo.png';

import missCircle from "../assets/teacher/miss_circle.png";
import missThavel from "../assets/teacher/miss_thavel.png";
import missBloomie from "../assets/teacher/miss_bloomie.png";
import missGrace from "../assets/teacher/miss_grace.png";
import misterDemi from "../assets/teacher/mister_demi.png";
import missEmily from "../assets/teacher/miss_emily.png";
import misterCompass from "../assets/teacher/mister_compass.png";

import abbie from "../assets/students/abbie.png";
import claire from "../assets/students/claire.png";
import engel from "../assets/students/engel.png";
import bubble from "../assets/students/bubble.png";
import lana from "../assets/students/lana.png";
import oliver from "../assets/students/oliver.png";
import zip from "../assets/students/zip.png";
import edward from "../assets/students/edward.png";
import petunia from "../assets/students/petunia.png";
import lizzy from "../assets/students/lizzy.png";
import kevin from "../assets/students/kevin.png";
import cubby from "../assets/students/cubby.png";
import robby from "../assets/students/robby.png";
import ruby from "../assets/students/ruby.png";
import skell from "../assets/students/skell.png";
import riley from "../assets/students/riley.png";

const dummyStudents = [
  {
    id: 1,
    name: "Abbie",
    role: {
      id: "Siswa",
      en: "Student"
    },
    desc: {
      id: "Ia mengalami nasib tragis setelah gagal dalam ujian di Basics in Behavior dan kemudian dibunuh oleh gurunya.",
      en: "He met a tragic fate after failing the Basics in Behavior exam and was subsequently killed by his teacher."
    },
    image: abbie
  },
  {
    id: 2,
    name: "Claire",
    role: {
      id: "Siswa",
      en: "Student"
    },
    desc: {
      id: "Ia memiliki rambut bob pendek dengan pita di atas kepalanya, serta mengenakan kemeja putih berlengan panjang, celana pendek putih, kaus kaki putih, dan sepatu hitam.",
      en: "She has short bob hair with a ribbon on top of her head, and she wears a long-sleeved white shirt, white shorts, white socks, and black shoes."
    },
    image: claire
  },
  {
    id: 3,
    name: "Engel",
    role: {
      id: "Siswa",
      en: "Student"
    },
    desc: {
      id: "Engel adalah salah satu karakter dalam Fundamental Paper Education dan menjadi deuteragonis dalam Basics in Behavior. Ia merupakan siswa Paper School dengan rambut putih panjang yang diikat ekor kuda rendah serta dua bulu berwarna biru dan merah-oranye. Ia mengenakan kemeja putih, overall hitam, leg warmer bergaris biru-merah, dan sepatu hitam. Engel juga memiliki lengan hitam dengan empat jari runcing serta ekor kecil berwarna putih.",
      en: "Engel is one of the characters in Fundamental Paper Education and serves as the deuteragonist in Basics in Behavior. He is a student at Paper School with long white hair tied in a low ponytail, along with two feathers colored blue and red-orange. He wears a white shirt, black overalls, blue-red striped leg warmers, and black shoes. Engel also has black arms with four sharp fingers and a small white tail."
    },
    image: engel
  },
  {
    id: 4,
    name: "Bubble",
    role: {
      id: "Siswa",
      en: "Student"
    },
    desc: {
      id: "Ia memiliki rambut putih mengembang seperti gelembung atau awan, mata biru dan hitam dengan pupil berbentuk bintang, serta aksesori bebek kuning dan sikat gigi biru. Ia mengenakan kaus putih, overall hitam, kaus kaki putih, dan sepatu hitam, serta memiliki ekor putih yang menyerupai gelembung atau awan.",
      en: "She has white hair that puffs up like a bubble or cloud, blue and black eyes with star-shaped pupils, and accessories including a yellow duck and a blue toothbrush. She wears a white t-shirt, black overalls, white socks, and black shoes, and has a white tail resembling a bubble or cloud."
    },
    image: bubble
  },
  {
    id: 5,
    name: "Lana",
    role: {
      id: "Siswa",
      en: "Student"
    },
    desc: {
      id: "Suka menggunakan boneka tangans.",
      en: "Likes using hand puppets."
    },
    image: lana
  },
  {
    id: 6,
    name: "Oliver",
    role: {
      id: "Siswa",
      en: "Student"
    },
    desc: {
      id: "Suka berbuat jahil.",
      en: "Likes playing pranks."
    },
    image: oliver
  },
  {
    id: 7,
    name: "Zip",
    role: {
      id: "Siswa",
      en: "Student"
    },
    desc: {
      id: "Anggota kelompok pembuat onar.",
      en: "A member of the troublemaking group."
    },
    image: zip
  },
  {
    id: 8,
    name: "Edward",
    role: {
      id: "Siswa",
      en: "Student"
    },
    desc: {
      id: "Suka bereksperimen dan inventif.",
      en: "Enjoys experimenting and is inventive."
    },
    image: edward
  },
  {
    id: 9,
    name: "Petunia",
    role: {
      id: "Siswa",
      en: "Student"
    },
    desc: {
      id: "Siswa yang bergaya dan populer.",
      en: "A stylish and popular student."
    },
    image: petunia
  },
  {
    id: 10,
    name: "Lizzy",
    role: {
      id: "Siswa",
      en: "Student"
    },
    desc: {
      id: "Teman dekat Petunia.",
      en: "Petunia's close friend."
    },
    image: lizzy
  },
  {
    id: 11,
    name: "Kevin",
    role: {
      id: "Siswa",
      en: "Student"
    },
    desc: {
      id: "Kutu buku sekolah.",
      en: "The school's bookworm."
    },
    image: kevin
  },
  {
    id: 12,
    name: "Cubby",
    role: {
      id: "Siswa",
      en: "Student"
    },
    desc: {
      id: "Pendiam dan tenang.",
      en: "Quiet and calm."
    },
    image: cubby
  },
  {
    id: 13,
    name: "Robby",
    role: {
      id: "Siswa",
      en: "Student"
    },
    desc: {
      id: "Suka merakit peralatan.",
      en: "Likes assembling equipment."
    },
    image: robby
  },
  {
    id: 14,
    name: "Ruby",
    role: {
      id: "Siswa",
      en: "Student"
    },
    desc: {
      id: "Siswa dengan kepala layar televisi.",
      en: "A student with a television screen for a head."
    },
    image: ruby
  },
  {
    id: 15,
    name: "Skell",
    role: {
      id: "Siswa",
      en: "Student"
    },
    desc: {
      id: "Siswa bergaya emo/goth.",
      en: "An emo/goth-styled student."
    },
    image: skell
  },
  {
    id: 16,
    name: "Riley",
    role: {
      id: "Siswa",
      en: "Student"
    },
    desc: {
      id: "Siswa yang cukup terobsesi.",
      en: "A rather obsessive student."
    },
    image: riley
  }
];

const dummyTeachers = [
  {
    id: 1,
    name: "Miss Circle",
    role: {
      id: "Guru Matematika",
      en: "Math Teacher"
    },
    desc: {
      id: "Sangat tegas dengan nilai Matematika.",
      en: "Very strict about Mathematics grades."
    },
    image: missCircle
  },
  {
    id: 2,
    name: "Miss Thavel",
    role: {
      id: "Guru Bahasa",
      en: "Language Teacher"
    },
    desc: {
      id: "Mengajar bahasa dengan disiplin tinggi.",
      en: "Teaches languages with high discipline."
    },
    image: missThavel
  },
  {
    id: 3,
    name: "Miss Bloomie",
    role: {
      id: "Guru Sains",
      en: "Science Teacher"
    },
    desc: {
      id: "Guru sains yang tidak kalah galak.",
      en: "A science teacher who is just as strict."
    },
    image: missBloomie
  },
  {
    id: 4,
    name: "Miss Grace",
    role: {
      id: "Kepala Sekolah",
      en: "Principal"
    },
    desc: {
      id: "Kepala sekolah Akademi Kertas.",
      en: "The principal of Paper Academy."
    },
    image: missGrace
  },
  {
    id: 5,
    name: "Mister Demi",
    role: {
      id: "Guru Musik",
      en: "Music Teacher"
    },
    desc: {
      id: "Guru musik yang pemalu dan lembut.",
      en: "A shy and gentle music teacher."
    },
    image: misterDemi
  },
  {
    id: 6,
    name: "Miss Emily",
    role: {
      id: "Guru Sejarah",
      en: "History Teacher"
    },
    desc: {
      id: "Guru sejarah yang ramah.",
      en: "A friendly history teacher."
    },
    image: missEmily
  },
  {
    id: 7,
    name: "Mister Compass",
    role: {
      id: "Guru Pengganti",
      en: "Substitute Teacher"
    },
    desc: {
      id: "Guru pengganti yang misterius.",
      en: "A mysterious substitute teacher."
    },
    image: misterCompass
  }
];

const translations = {
  id: {
    title1: "Fundamental",
    title2: "Paper Education",
    lore: "Lore & Karakter",
    characterSection: "Karakter FPE (23 Total)",
    studentsTitle: "Siswa (16 Students)",
    teachersTitle: "Guru (7 Teachers)",
    LoreDesc: "Fundamental Paper Education (FPE) adalah dunia pendidikan bertema kertas yang berpusat di Paper School. Sekolah ini memiliki sistem pendidikan dan aturan yang ekstrem, dengan guru yang memiliki wewenang besar terhadap siswa. Di balik kegiatan belajar, terdapat berbagai tempat dan fenomena misterius yang membuat dunia FPE berbeda dari sekolah biasa. Banyak bagian dari sejarah, aturan, dan asal-usul dunia FPE masih belum terungkap sepenuhnya, sehingga menyisakan berbagai misteri untuk dieksplorasi.",
    collaborate: "semua nya milik Katie",
  },
  en: {
    title1: "Fundamental",
    title2: "Paper Education",
    lore: "Lore & Characters",
    characterSection: "FPE Characters (23 Total)",
    studentsTitle: "Students (16 Students)",
    teachersTitle: "Teachers (7 Teachers)",
    LoreDesc: "Fundamental Paper Education (FPE) is a paper-themed educational world centered at Paper School. This school has an extreme educational system and rules, with teachers having great authority over students. Behind the learning activities, there are various mysterious places and phenomena that make the FPE world different from a regular school. Many aspects of the history, rules, and origins of the FPE world are still not fully revealed, leaving various mysteries to be explored.",
    collaborate: "all belong to Katie",
  }
};

const PortofolioDua = ({ lang = 'id' }) => {
  const t = translations[lang] || translations.id;

  return (
    <div 
      className="animate-[paperReveal_1s_ease] min-h-screen bg-cover bg-center text-[#392F43] font-barrio py-16 px-6 overflow-x-hidden" 
      style={{ backgroundImage: `url(${backgroundFpe})` }}
    >
      
      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        
        {/* --- SECTION 1: ABOUT (Pengenalan) --- */}
        <section id="about" className="flex flex-col md:flex-row gap-12 items-center">
          {/* Foto Lingkaran di Sebelah Kiri */}
          <div className="w-56 h-56 md:w-72 md:h-72 flex-shrink-0 rounded-full border-4 border-[#392F43] drop-shadow-[8px_8px_0px_#8B9E9C] overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
            <img 
              src={profileImg} 
              alt="Profile Karakter" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://placehold.co/400x400/png?text=Photo';
              }}
            />
          </div>

          <div className="flex-1 space-y-8 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {t.title1} <br />
              <span className="bg-[#392F43] text-[#E1E1DF] px-4 py-2 inline-block transform -rotate-2 mt-2 shadow-[4px_4px_0px_#8B9E9C]">
                {t.title2}
              </span>
            </h1>

            {/* Kotak Deskripsi: Kertas Kusut & Sobek */}
            <div className="paper-crumpled paper-ripped px-8 py-4 border-2 border-[#392F43] drop-shadow-[5px_5px_0px_#8B9E9C] transform rotate-1 inline-block">
              <p className="text-2xl md:text-3xl font-bold tracking-wider italic">
                "learning is fun"
              </p>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: LORE & KARAKTER (23 Total) --- */}
        <section id="lore" className="space-y-12">
          <h2 className="text-4xl font-bold border-b-4 border-[#392F43] pb-2 inline-block transform -rotate-1">
            lore
          </h2>
          
          {/* Lore Text Box */}
          <div className="paper-crumpled paper-ripped p-8 border-2 border-[#392F43] drop-shadow-[7px_7px_0px_#8B9E9C] transform rotate-1">
            <p className="text-xl font-sans font-semibold leading-relaxed mt-4">
              {t.LoreDesc}
            </p>
          </div>

          <h2 className="text-4xl font-bold border-b-4 border-[#392F43] pb-2 inline-block transform -rotate-1">
            characters
          </h2>

          {/* Sub-section: 16 Students */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-[#392F43] text-white px-4 py-2 inline-block shadow-[4px_4px_0px_#8B9E9C] transform -rotate-1">
              {t.studentsTitle}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
              {dummyStudents.map((char, idx) => (
                <div
                  key={char.id}
                  className={`flex items-center gap-5 ${
                    idx % 2 === 0 ? "-rotate-1" : "rotate-1"
                  }`}
                >

                  {/* IMAGE MASING-MASING STUDENT */}
                  <div className="w-60 h-72 flex-shrink-0 overflow-visible">
                    <img
                      src={char.image}
                      alt={char.name}
                      className="w-full h-full object-contain scale-110"
                    />
                  </div>

                  {/* CONTAINER NAMA + BIO */}
                  <div
                    className="
                      paper-crumpled paper-ripped
                      border-2 border-[#392F43]
                      drop-shadow-[4px_4px_0px_#8B9E9C]
                      p-5
                      flex-1
                      min-h-[220px]
                      text-left
                      flex flex-col justify-start
                    "
                  >
                    <h4 className="text-2xl font-bold leading-tight">
                      {char.name}
                    </h4>

                    <p className="text-sm font-sans mt-5 font-bold opacity-75">
                      {char.role[lang]}
                    </p>

                    <p className="text-sm font-sans mt-1 leading-relaxed">
                      {char.desc[lang]}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Sub-section: 7 Teachers */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-[#392F43] text-white px-4 py-2 inline-block shadow-[4px_4px_0px_#8B9E9C] transform rotate-1">
              {t.teachersTitle}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
              {dummyTeachers.map((char, idx) => (
                <div
                  key={char.id}
                  className={`flex items-center gap-5 ${
                    idx % 2 === 0 ? "-rotate-1" : "rotate-1"
                  }`}
                >

                  {/* IMAGE KARAKTER */}
                  <div className="w-60 h-72 flex-shrink-0 overflow-visible">
                    <img
                      src={char.image}
                      alt={char.name}
                      className="w-full h-full object-contain scale-110"
                    />
                  </div>

                  {/* CONTAINER NAMA + BIO */}
                  <div
                    className="
                      paper-crumpled paper-ripped
                      border-2 border-[#392F43]
                      drop-shadow-[4px_4px_0px_#8B9E9C]
                      p-5
                      flex-1
                      min-h-[220px]
                      text-left
                      flex flex-col justify-start
                    "
                  >
                    {/* NAMA */}
                    <h4 className="text-2xl font-bold leading-tight">
                      {char.name}
                    </h4>

                    <p className="text-sm font-sans mt-5 font-bold opacity-75">
                      {char.role[lang]}
                    </p>

                    <p className="text-sm font-sans mt-1 leading-relaxed">
                      {char.desc[lang]}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 border-t-4 border-[#392F43] border-double text-center space-y-6">
          <h2 className="text-4xl font-bold">{t.collaborate}</h2>
          <p className="text-xl max-w-md mx-auto font-sans font-bold">
            {t.contactDesc}
          </p>
          <div className="flex justify-center gap-6 pt-4">
            
            <a href="https://discord.gg/WZKNFYPfNZ" className="flex items-center justify-center w-14 h-14 rounded-full paper-crumpled border-2 border-[#392F43] drop-shadow-[4px_4px_0px_#8B9E9C] hover:translate-y-1 hover:drop-shadow-none transition-all">
                <svg className="w-8 h-8 text-[#392F43]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
            </a>

            <a href="https://github.com/SavimbiPride" className="flex items-center justify-center w-14 h-14 rounded-full paper-crumpled border-2 border-[#392F43] drop-shadow-[4px_4px_0px_#8B9E9C] hover:translate-y-1 hover:drop-shadow-none transition-all">
              <svg className="w-8 h-8 text-[#392F43]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            
            <a href="https://www.instagram.com/ravlores/?hl=en" className="flex items-center justify-center w-14 h-14 rounded-full paper-crumpled border-2 border-[#392F43] drop-shadow-[4px_4px_0px_#8B9E9C] hover:translate-y-1 hover:drop-shadow-none transition-all">
               <svg className="w-8 h-8 text-[#392F43]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                 <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
               </svg>
            </a>

            <a href="https://fundamental-paper-education.fandom.com/wiki/Fundamental_Paper_Education_Wiki" className="flex items-center justify-center w-14 h-14 rounded-full paper-crumpled border-2 border-[#392F43] drop-shadow-[4px_4px_0px_#8B9E9C] hover:translate-y-1 hover:drop-shadow-none transition-all">
               <svg className="w-8 h-8 text-[#392F43]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                 <circle cx="12" cy="12" r="10"></circle>
                 <line x1="2" y1="12" x2="22" y2="12"></line>
                 <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
               </svg>
            </a>
            
          </div>
        </section>

      </div>
    </div>
  );
};

export default PortofolioDua;