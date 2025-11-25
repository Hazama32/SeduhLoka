import React from "react"
import Gallery from "../components/gallery-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GalleryPage = () => {
  return (
    <Layout>
      <Seo
        title="Menu SeduhLoka"
        description="Cicipi menu spesial SeduhLoka! Dari Iced Latte yang unik, Hot Cappucino, hingga Manual Brew V60 dari biji kopi pilihan terbaik."
      ></Seo>
      <Gallery></Gallery>
    </Layout>
  )
}

export default GalleryPage
