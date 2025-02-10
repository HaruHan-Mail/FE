import React from 'react'
import './PopuplarTopicSection.css'

const PopuplarTopicSection = () => {
  return (
    <section className='PopuplarTopicSectionContainer'>
      <img className='PopuplarTopicSectionImage' src='src\assets\HaruhanBook.png' />
      <h1 className='PopuplarTopicSectionH1'>인기가 많은
        <span className="PopuplarTopicSectionHighlight"> 교양 지식</span>이에요!</h1>
      <div className='PopuplarTopicSectionChart'>
        <h2>1️⃣ 우주 쓰레기</h2>
        <h2>2️⃣ 우주 쓰레기</h2>
        <h2>3️⃣ 우주 쓰레기</h2>
        <h2>4️⃣ 우주 쓰레기</h2>
        <h2>5️⃣ 우주 쓰레기</h2>
      </div>
    </section>
  )
}

export default PopuplarTopicSection