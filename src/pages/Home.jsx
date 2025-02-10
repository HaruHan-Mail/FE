import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import DescriptionSection from '../components/DescriptionSection'
import PopuplarTopicSection from '../components/PopuplarTopicSection'
import ClosingSection from '../components/ClosingSection'
import Footer from '../components/Footer'
import './Home.css'

const Home = () => {
  return (
    <div className='HomeContainer'>
        <Header />
        <HeroSection />
        <DescriptionSection />
        <PopuplarTopicSection />
        <ClosingSection />
        <Footer />
    </div>
  )
};

export default Home;
