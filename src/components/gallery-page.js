import React from "react"
import Fade from "react-reveal/Fade"
import BackGroud from "../images/iced.png"
import Galeri2 from "../images/Kopi.png"
import Galeri3 from "../images/hot latte.png"
import Galeri4 from "../images/manual-brew.png"

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6 px-4 sm:px-6 lg:px-8">
      <Fade Duration={2200}>
      <div className="mb-8">
        <div className="transition duration-1000 ease-out opacity-100">
          <div className="w-full bg-gradient-to-r from-amber-300 to-amber-500 p-6 sm:p-8 rounded-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4">
              <span className="bg-gradient-to-t from-amber-500 to-amber-800 bg-clip-text text-transparent">
                GALERI SEDUHLOKA
              </span>
            </h2>
            <p className="text-base sm:text-lg mt-4 text-gray-800 text-center opacity-90">
              Halaman ini menampilkan berbagai dokumentasi kegiatan sekolah yang menggambarkan semangat belajar, kreativitas, serta kebersamaan seluruh warga sekolah.
              Melalui galeri ini, kami ingin berbagi momen-momen berharga dari setiap kegiatan akademik maupun nonakademik yang menjadi bagian dari perjalanan dan prestasi SMP Daan Mogot.
            </p>
          </div>
        </div>
      </div>
      </Fade>
    
      <div className="mt-8">
        <Fade bottom cascade>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:gap-8">
          <a
            href="#"
            className="group relative flex h-60 sm:h-72 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100"
          >
            <img
              src={BackGroud}
              loading="lazy"
              alt="Iced Coffee SeduhLoka"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-medium">
              Iced Coffee SeduhLoka
            </span>
          </a>
          <a
            href="#"
            className="group relative flex h-60 sm:h-72 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 sm:col-span-1 md:col-span-2"
          >
            <img
              src={Galeri2}
              loading="lazy"
              alt="Hot Latte SeduhLoka"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-medium">
              Hot Latte SeduhLoka
            </span>
          </a>
          <a
            href="#"
            className="group relative flex h-60 sm:h-72 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 sm:col-span-1 md:col-span-2"
          >
            <img
              src={Galeri3}
              loading="lazy"
              alt="Hot Cappuccino SeduhLoka"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-medium">
              Hot Cappuccino SeduhLoka
            </span>
          </a>
          <a
            href="#"
            className="group relative flex h-60 sm:h-72 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100"
          >
            <img
              src={Galeri4}
              loading="lazy"
              alt="Manual Brew SeduhLoka"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-medium">
              Manual Brew SeduhLoka
            </span>
          </a>
          
        </div>
        </Fade>
      </div>
    </div>
  )
}

export default Gallery