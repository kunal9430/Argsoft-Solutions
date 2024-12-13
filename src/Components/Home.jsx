import React from 'react'
import IndustriesServe from "./IndustriesServe"
import OurClients from "./OurClients"
import OurSDLC from "./OurSDLC"
import OurServices from "./OurServices"
import TechStack from "./TechStack"
import Ourproducts from "./OurProducts"
import ClientsReview from "./ClientsReview"
import ContactUs from "./ContactUs"
import HeroSection from "./HeroSection"

const Home = () => {
  return (
    <>
      <HeroSection />
      <OurClients />
      <OurServices />
      <OurSDLC />
      <TechStack />
      <IndustriesServe />
      <Ourproducts />
      <ClientsReview />
      <ContactUs />
    </>
  )
}

export default Home
