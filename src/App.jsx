// import { useState } from 'react'
// import './App.css'
import Clients from './Components/Clients'
import Members from './Components/Members'
import Membership from './Components/Membership'
import MidSection from './Components/MidSection'
import Navbar from './Components/Navbar'
import TopSection from './Components/TopSection'
import Design from './Components/Design'
import Tesla from './Components/Tesla'
import Marketing from './Components/Marketing'
import Demo from './Components/Demo'
import Footer from './Components/Footer'

// import landingpage from "./assets/landingpage.svg"

function App() {

  return (
    <div>
      {/* <img src={landingpage}  alt="" /> */}
      <Navbar/>
      <TopSection/>
      <Clients/>
      <Membership/>
      <MidSection/>
      <Members/>
      <Design/>
      <Tesla/>
      <Marketing/>
      <Demo/>
      <Footer/>

    </div>
    
   
  )
}

export default App
