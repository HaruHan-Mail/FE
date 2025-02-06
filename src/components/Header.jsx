import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className='HeaderContainer'>
        <img className='HeaderLogoImage' src='src\assets\HaruhanLogo.png' />
        <a className='HeaderTeamInfoLink' target='_blank' href='https://www.notion.so/Inside-Insight-16b39551f55a80c38a65dd3c3057b969'>팀 소개</a>
        <button className='HeaderSubscribeButton'>구독하기</button>
    </section>
  )
}

export default Header