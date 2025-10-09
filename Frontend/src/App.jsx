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

import FuelSlotBooking from './components/Banner/FuelSlotBooking'
import TableReservation from './components/TableBooking/TableSlotBooking'
import TableSlotBooking from './components/TableBooking/TableSlotBooking'
import XeroxBooking from './components/XeroxSlotBooking/Xerox2'
import Payment from './components/Banner/Payment'
import DarshanBooking from './components/Darshan/DarshanBooking'
import TableBooking from './components/TableBooking/TableSlotBooking'


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
   <Route path="/table-booking" element={<TableBooking />} />
   <Route path="/payment" element={<Payment/>} />
   <Route path="/darshanBooking" element={<DarshanBooking/>} />
   
 </Routes>

 
  )
}

export default App 

// on subit payment form should come which include the current conline phone pay and all
// profile done log out