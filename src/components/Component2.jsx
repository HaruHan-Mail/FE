import React from 'react'
import './Component2.css'

const Component2 = () => {
  return (
    <div className='Component2Container'>
      <h1 className='Component2H1'>원하는 시간에 
        <span className="Component2Highlight"> 메일</span>을 통해 <br/> 
        <span className="Component2Highlight">짧지만 알찬 지식</span>을 공유해드려요!</h1>
      <div className='Component2MailTemplate'>
        🧠 오늘의 주제 <br/>
        📌 알아두면 쓸모 있는 배경 지식 <br/>
        🌟 이 지식이 왜 중요할까? <br/>
        💡 오늘의 팁 <br/>
        📖 더 알고 싶다면 <br/>
        📨 내일도 기대하세요! <br/>
      </div>
    </div>
  )
}

export default Component2