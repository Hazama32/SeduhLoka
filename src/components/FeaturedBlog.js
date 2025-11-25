import React from "react"
import Fade from "react-reveal/Fade"

const FeaturedBlog = () => {
  return (
    <Fade duration={2200}>
      <div className="bg-transparent">
        <div className="pt-6 px-6 lg:px-0 mx-auto max-w-screen-xl lg:pt-8  ">
          <h2 className="text-black text-4xl opacity-70 font-semibold pl-4">
          </h2>
           <h3 className="relative text-6xl font-bold">
          <span className="absolute inset-0 text-gray-300">Postingan Terbaru</span>
          <span className="relative bg-gradient-to-t from-amber-500 to-amber-800 bg-clip-text text-transparent">
            Postingan Terbaru
          </span>
          </h3>
          <div className="blog-hover bg-gradient-to-b from-amber-500 to-amber-800 border mt-10 border-amber-500 rounded-lg p-8 md:p-12 mb-8">
            <h2 className="text-black text-3xl font-semibold mb-2">
             Arabika vs Robusta Mana yang Cocok untuk Seduhan Harianmu?
            </h2>
            <p className="text-lg  text-black opacity-70 mb-6">
              Pernahkah Anda bertanya-tanya mengapa ada kopi yang pahitnya kuat dan ada yang aromanya lebih lembut? Jawabannya ada pada dua jenis biji kopi paling populer di dunia: Arabika dan Robusta. Di SeduhLoka, kami percaya setiap seduhan adalah pengalaman, dan pengalaman terbaik dimulai dengan pemahaman. Mari kita bedah perbedaannya!
            </p>
            <a
              href="/blog/blog-post"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white hover:text-amber-400 rounded-lg border border-amber-500 hover:bg-amber-800"
            >
              Baca Selengkapnya
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="blog-hover bg-gradient-to-b from-amber-500 to-amber-800 rounded-lg p-8 md:p-12">
              <h2 className="text-black text-3xl font-semibold mb-2">
                Rahasia Seduhan Sempurna: Tips Barista SeduhLoka untuk Kopi Rumahanmu
              </h2>
              <p className="text-lg font-normal text-black opacity-70 mb-4">
               Siapa bilang kopi enak hanya bisa dinikmati di coffeeshop? Dengan sedikit tips dari Barista SeduhLoka, Anda bisa menciptakan seduhan yang tak kalah nikmat di kenyamanan rumah Anda sendiri. Siapkan alat seduh favoritmu, mari kita mulai!
              </p>
              <a
                href="/blog/blog-post-1"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white hover:text-amber-400 rounded-lg border border-amber-500 hover:bg-amber-800"
              >
                Baca Selengkapnya
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div className="blog-hover bg-gradient-to-b from-amber-500 to-amber-800 rounded-lg p-8 md:p-12">
              <h2 className="text-gray-900 text-3xl font-semibold mb-2">
                Di Balik Setiap Seduhan: Kisah SeduhLoka dan Komunitas Kami
              </h2>
              <p className="text-lg font-normal text-black opacity-70 mb-4">
                Sejak pintu SeduhLoka pertama kali terbuka, kami selalu memiliki satu tujuan: menjadi lebih dari sekadar coffeeshop. Kami ingin menjadi sebuah tempat di mana orang-orang bisa berkumpul, berbagi cerita, dan merasa seperti di rumah.
              </p>
              <a
                href="/blog/blog-post-2"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white hover:text-amber-400 rounded-lg border border-amber-500 hover:bg-amber-800"
              >
                Baca Selengkapnya
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default FeaturedBlog
