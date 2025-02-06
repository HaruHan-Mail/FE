import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className='HeroSectionContainer'>
        <div className='HeroSectionContent'>
            <h1 className='HeroSectionH1'> <span className="HeroSectionHighlight">HaruHan지식</span>이 <br/> 
                알아두면 쓸모 있는 지식을 <br/>
                <span className="HeroSectionHighlight">하루</span>에 <span className="HeroSectionHighlight">하나</span>씩 보내드릴게요!</h1>
            <button className='HeroSectionSubscribeButton'>구독하기</button>
        </div>
    </section>
  )
}

export default HeroSection