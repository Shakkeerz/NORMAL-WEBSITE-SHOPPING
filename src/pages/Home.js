import React, { useContext } from 'react'
import HomeIntro from '../components/HomeIntro'
import ServicesAndIcons from '../components/ServicesAndIcons'
import { ProductsContext } from '../context/ProductsContext'
import ProductOffer from '../components/ProductOffers'
import TeamSection from '../components/TeamSection'
import Footer from '../components/Footer'

function Home() {
    const value = useContext(ProductsContext)

  return (
    <div>
      <HomeIntro/>
      <ServicesAndIcons/>
      <ProductOffer/>
      <TeamSection/>
      <Footer/>
    </div>
  )
}

export default Home