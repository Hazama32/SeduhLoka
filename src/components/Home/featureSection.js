import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import HeroImage from "../../images/Kopi.webp"
import Image1 from "../../images/iced.png"
import Image2 from "../../images/hot latte.png"
import Image3 from "../../images/Kopi.png"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mt-10">
        {/* Gambar */}
        <div className="w-full lg:w-1/2">
          <img
            className="rounded-xl w-full object-cover aspect-[4/3] sm:aspect-video shadow-md"
            src={HeroImage}
            alt="HeroImage"
            fetchpriority="high"
          />
        </div>

        {/* Teks */}
        <div className="w-full lg:w-1/2 text-center lg:text-right flex flex-col justify-center min-h-[200px]">
         <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-center lg:text-right bg-gradient-to-b from-amber-500 to-amber-800 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
            Setiap Seduhan, Rasa di Rumah.
         </h2>
          <p className="mt-4 text-gray-800 text-justify sm:text-lg leading-relaxed px-2 sm:px-0">
          Menciptakan tempat di mana kualitas kopi premium tidak terasa intimidating, dan setiap pengunjung merasa seperti kembali ke rumah. Kami percaya bahwa kopi terbaik adalah kopi yang dibuat dengan hati dan disajikan di lingkungan yang nyaman.
          </p>

          <div className="mt-6 flex justify-center lg:justify-end">
            <a
              href="/gallery"
              className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium rounded-md 
                bg-gradient-to-r from-amber-500 to-amber-800
                text-white hover:text-black border border-amber-500 
                transition-transform duration-300 hover:scale-105 shadow-md"
            >
              Lihat Galeri
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Visi Misi */}
      <Fade bottom cascade>
        <div className="mt-10 flex flex-col lg:flex-row gap-6">
          <div className="bg-gradient-to-b from-amber-500 to-amber-800 p-6 rounded-xl flex-1 shadow-md">
            <h2 className="text-black font-semibold text-3xl sm:text-4xl">Visi</h2>
            <p className="mt-4 text-black text-lg leading-relaxed">
              Menjadi coffeeshop pilihan utama yang dikenal karena kualitas seduhan premium dan menciptakan loka (tempat) yang hangat, menginspirasi, dan menjadi bagian penting dari komunitas sekitar.
            </p>
          </div>

          <div className="bg-gradient-to-b from-amber-500 to-amber-800 p-6 rounded-xl flex-1 shadow-md">
            <h2 className="text-black font-semibold text-3xl sm:text-4xl">Misi</h2>
            <ol className="mt-4 list-decimal list-inside space-y-2 text-black text-base sm:text-lg leading-relaxed">
              <li>
                Menyajikan kopi dengan standar kualitas seduhan tertinggi, mulai dari pemilihan biji kopi lokal terbaik hingga teknik penyajian yang presisi.
              </li>
              <li>
                Membangun dan menjaga suasana kedai yang terasa seperti rumah (homey), menyediakan tempat yang ideal untuk bekerja, berkreasi, atau sekadar beristirahat.
              </li>
              <li>
                Berkolaborasi dan mendukung petani kopi lokal serta menjadi platform bagi seniman dan pegiat komunitas di sekitar lokasi SeduhLoka.
              </li>
              <li>
                Mengembangkan produk kopi yang unik dan memastikan pengalaman pelanggan yang cepat, ramah, dan efisien
              </li>
            </ol>
          </div>
        </div>
      </Fade>

      {/* Galeri */}
      <Fade bottom cascade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {[Image1, Image2, Image3].map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-md">
              <img
                alt={`Galeri ${i + 1}`}
                src={img}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </Fade>

      {/* Kegiatan */}
       <Fade bottom cascade>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-amber-500 to-amber-800 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-black text-xl sm:text-2xl font-semibold">
              Iced Latte SeduhLoka
            </h3>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-amber-800 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-black text-xl sm:text-2xl font-semibold">
              Hot Cappuccino SeduhLoka
            </h3>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-amber-800 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-black text-xl sm:text-2xl font-semibold">
              Hot Latte SeduhLoka
            </h3>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default FeatureSection
