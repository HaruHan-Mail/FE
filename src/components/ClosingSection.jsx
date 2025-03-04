import React from 'react'
import './css/ClosingSection.css'
import SubscriptionButton from './SubscriptionButton'

const ClosingSection = () => {
  return (
    <section className='ClosingSectionContainer'>  
        <div className='ClosingSectionSubscribeText'><span className="ClosingSectionHighlight">Haruhan 지식</span>을 무료로 구독해보세요!</div>
        <SubscriptionButton size={"Large"}/>
    </section>
  )
}

export default ClosingSection