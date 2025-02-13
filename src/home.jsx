import React from 'react'
import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchedCar from './components/MostSearchedCar'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'
import Cards from './components/ui/Cards'
// import Profile from "./components/ui/Profile"
// import ProfileCards from './components/ui/ProfileCards'
// import Cardss from './components/ui/Cardsss'
import Profile from './components/ui/Profile'
import Navbar from './components/ui/Navbar'


function Home() {
  return (
    <div>
        {/* Header  */}
        
        <Header/>
        {/* Hero  */}
        <Hero/>
        <Navbar/>
        {/* Category  */}
        {/* <Category/> */}
    {/* <Profile/> */}
    {/* <ProfileCards/> */}

    
        {/* Most Searched Car  */}
        <MostSearchedCar/>
        
        {/* InfoSection  */}
        <InfoSection/>
        {/* Footer  */}
        {/* <Cards/> */}
        <Profile/>
        <Footer/>

    </div>
  )
}

export default Home