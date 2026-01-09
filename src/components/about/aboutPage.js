import React from "react"
import Fade from "react-reveal/Fade"

const WorkPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      {/* <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row mb-5 max-h-80">
          <div className="w-2/4 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <h1 className="text-5xl mt-5 font-bold text-white">
              test<br></br>
            </h1>
            <p className="mt-5 text-white opacity-70">
              test
            </p>
          </div>
          <div className="overflow-hidden rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6 object-cover object-center h-full w-full">
            <img src={Image3} alt="image"></img>
          </div>
        </div>
      </Fade> */}

      <Fade bottom cascade>
        <div className="mt-10  flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          {/* <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Performance</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">95+</h4>
          </div> */}

          {/* <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Accessibility</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div> */}
          {/* <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Best Practices</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div> */}
          {/* <div className="lg:rounded-xl lg:w-1/3 lg:bg-dp bg-dp p-8 rounded-xl m-5 xxs:w-full xxs:bg-dp xxs:rounded-xl xs:w-full xs:bg-dp xs:rounded-xl sm:hidden md:hidden lg:block">
            <h3 className="text-white text-2xl">SEO</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div> */}
        </div>
      </Fade>
      <div className="mt-4 px-8">
        {/* <h2 className="text-black text-4xl font-semibold">PERFORMANCE</h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Time to lock new speeds
        </h3> */}

        <p className="text-black font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          SeduhLoka lahir dari sebuah filosofi sederhana bahwa kopi terbaik adalah kopi yang dibuat dengan hati dan disajikan di tempat yang terasa seperti rumah. Nama kami, gabungan dari "Seduh" (proses teliti membuat kopi) dan "Loka" (tempat), mencerminkan visi kami yaitu menciptakan coffeeshop yang menjadi loka yang hangat, nyaman, dan menjadi pelabuhan favorit bagi siapa pun yang mencari kualitas dan ketenangan. Kami hadir bukan sekadar untuk menjual kafein, tetapi untuk menyajikan pengalaman seduh premium dalam suasana yang merangkul Anda.
        </p>
        <p className="text-black font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
         Komitmen utama kami berakar pada kualitas yang tiada kompromi. Setiap cangkir kopi di SeduhLoka adalah hasil dari proses pemilihan biji yang cermat berasal dari petani lokal dan regional yang kami dukung dan teknik penyeduhan yang presisi oleh Barista kami yang terlatih. Kami percaya pada transparansi, memastikan bahwa biji kopi yang Anda nikmati tidak hanya lezat tetapi juga memiliki cerita dan dampak positif. Kami menjembatani hasil kerja keras petani dengan cangkir sempurna Anda, menjadikan setiap seduhan menjadi momen yang berharga.
        </p>
        <p className="text-black font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          SeduhLoka lebih dari sekadar kedai, kami adalah pusat komunitas yang aktif. Kami menyediakan ruang yang ideal bagi Anda untuk bekerja, berkreasi, atau sekadar berbagi tawa bersama teman. Kami mengundang Anda untuk merasakan langsung perbedaan rasa di rumah yang kami tawarkan. Kunjungi SeduhLoka hari ini, rasakan kehangatan loka kami, dan temukan kopi harian sempurna Anda. Kami menantikan kehadiran Anda untuk berbagi cerita dan menikmati setiap tetesnya bersama.
        </p>
      </div>
    </div>
  )
}

export default WorkPage
