import React from 'react'
import Header from '../components/Header'
import Component1 from '../components/Component1'
import Component2 from '../components/Component2'
import Component3 from '../components/Component3'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='HomeContainer'>
        <Header />
        <Component1 />
        <Component2 />
        <Component3 />
        <Footer />
    </div>
  )
}

export default Home