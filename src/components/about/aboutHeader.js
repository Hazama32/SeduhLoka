import React from "react"
import Fade from "react-reveal/Fade"

import Image3 from "../../images/about-head.png"

const AboutHeader = () => {
  return (
    <Fade>
      <div className="max-w-5xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl max-h-105 m-4">
          <img alt="Image" src={Image3}></img>
        </div>
        <div className="mt-10 px-8 justify-center text-center flex flex-col gap-4">
          <h1 className="font-bold text-4xl text-black text-gradient bg-gradient-to-t from-amber-500 to-amber-800">
            SeduhLoka: Tempat Kopi yang Merangkul Anda
          </h1>
          {/* <h2 className="text-black text-3xl font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-3xl lg:text-3xl">
            Membangun Generasi Cerdas dan Berkarakter
          </h2> */}
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader
