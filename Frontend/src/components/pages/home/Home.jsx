import React from 'react'
import Navbar1 from '../../Navbar1'
import Banner from '../../Banner/Banner'
import HeroSection from '../../Banner/HeroSection'
import ServicesSection from '../../Banner/ServicesSection'
import HowItWorksSection from '../../Banner/HowItWorksSections'
import  { XeroxSlotBooking } from '../../Banner/BookingFormSection'

function Home() {
  return (
    <div>
      <Navbar1/>
     
      <HeroSection/>
      <ServicesSection/>
       <HowItWorksSection/>
    
       <XeroxSlotBooking/>
    </div>
  )
}

export default Home