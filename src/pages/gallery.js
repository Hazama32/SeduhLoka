import React from "react"
import Gallery from "../components/gallery-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GalleryPage = () => {
  return (
    <Layout>
      <Seo
        title="Menu SeduhLoka - Coffee Shop Homey di Bekasi"
        description="Cicipi menu spesial SeduhLoka di Bekasi! Dari Iced Latte unik, Hot Cappuccino, hingga Manual Brew V60 dengan biji kopi Arabika & Robusta pilihan terbaik."
      ></Seo>
      <Gallery></Gallery>
    </Layout>
  )
}

export default GalleryPage
