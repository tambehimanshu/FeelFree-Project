import React from 'react'
import Navbar1 from '../../Navbar1'
import Banner from '../../Banner/Banner'
import HeroSection from '../../Banner/HeroSection'
import ServicesSection from '../../Banner/ServicesSection'
import HowItWorksSection from '../../Banner/HowItWorksSections'
import  { XeroxSlotBooking } from '../../Banner/BookingFormSection'
import Footer from '../../Footer'
//import QRScanner from '../../Banner/QRScanner'

function Home() {
  return (
    <div>
      <Navbar1/>
     
      <HeroSection/>
      <ServicesSection/>
       <HowItWorksSection/>
       <Footer/>
    
       
    </div>
  )
}

export default Home