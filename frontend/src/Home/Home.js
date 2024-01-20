import React from 'react'
import NavBar from './NavBar'
import { HeroSection } from './HeroSection'
import Customer from './Customer'
import Video from './Video'
import HappyCoutomer from './HappyCoutomer'
import GetInTouch from './GetInTouch'
import Footer from './Footer'
import Recipies from './Recipies'

const Home = () => {
  return (
   <>
    <NavBar />
    <HeroSection />
    <Customer />
    <Recipies />
    <Video  />
    <HappyCoutomer />
    <GetInTouch />
    <Footer />
   </>
  )
}

export default Home