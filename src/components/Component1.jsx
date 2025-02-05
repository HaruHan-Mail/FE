import React from 'react'
import './Component1.css'

const Component1 = () => {
  return (
    <div className='Component1Container'>
        <div className='Component1Left'>
            <h1 className='Component1H1'> <span className="Component1Highlight">HaruHan지식</span>이 <br/> 
                알아두면 쓸모 있는 지식을 <br/>
                <span className="Component1Highlight">하루</span>에 <span className="Component1Highlight">하나</span>씩 보내드릴게요!</h1>
            <button className='Component1SubscribeButton'>구독하기</button>
        </div>
        <div className='Component1Right'>
            <img className='Component1Image' src='src\assets\HaruhanPhone.png' />
        </div>
    </div>
  )
}

export default Component1