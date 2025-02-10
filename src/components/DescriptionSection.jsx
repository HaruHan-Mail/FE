import './DescriptionSection.css'

const descriptionData = [
  { "icon": "🧠", "text": "오늘의 주제" },
  { "icon": "📌", "text": "알아두면 쓸모 있는 배경 지식" },
  { "icon": "🌟", "text": "이 지식이 왜 중요할까?" },
  { "icon": "💡", "text": "오늘의 팁" },
  { "icon": "📖", "text": "더 알고 싶다면" },
  { "icon": "📨", "text": "내일도 기대하세요!" },
]

const DescriptionSection = () => {
  return (
    <section className='DescriptionSectionContainer'>
      <img className='DescriptionSectionImage' src='src\assets\HaruhanPhone.png' />
      <h1 className='DescriptionSectionH1'>원하는 시간에
        <span className="DescriptionSectionHighlight"> 메일</span>을 통해 <br />
        <span className="DescriptionSectionHighlight">짧지만 알찬 지식</span>을
        <br /> 아래와 같이 공유해드려요!</h1>
      <div className='DescriptionSectionTemplate'>
        {descriptionData.map((item, key) => {
          return (
            <div key={key}>
              <p>{item.icon} {item.text}</p><br />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default DescriptionSection