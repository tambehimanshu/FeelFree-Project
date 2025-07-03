import React from 'react'
import Navbar from './components/Navbar'
import Navbar1 from './components/Navbar1'
import { Outlet, Route,Routes ,BrowserRouter } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Orders from './components/pages/orders/Orders'
import AboutPage from './components/pages/about/AboutPage'
import Profile from './components/pages/profile/Profile'
import Login from './components/Login/Login'
import ServicesSection from './components/Banner/ServicesSection'
import XeroxBooking from './components/Banner/XeroxBooking'
import Payment from './components/Banner/Payment'
import FuelSlotBooking from './components/Banner/FuelSlotBooking'
import TableReservation from './components/Banner/TableSlotBooking'
import TableSlotBooking from './components/Banner/TableSlotBooking'

function App() {
  return (
     
 <Routes>
  <Route path='/' element={<Home/>}/>
   <Route path='/orders' element={<Orders/>}/>
    <Route path='/about' element={<AboutPage/>}/>
     <Route path='/profile' element={<Profile/>}/>
     <Route path='/login' element={<Home/>}/>
        <Route path='/services' element={<ServicesSection/>}/>
         <Route path='/xerox-booking' element={<XeroxBooking/>}/>
              <Route path="/fuelSlot-booking" element={<FuelSlotBooking />} />
              <Route path="/table-booking" element={<TableSlotBooking />} />

 </Routes>
 
  )
}

export default App