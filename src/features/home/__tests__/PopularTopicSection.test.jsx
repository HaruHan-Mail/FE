import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import PopularTopicSection from '../PopularTopicSection'


vi.mock('../PopularTopic/PopularTopicList', () => ({
  default: () => (
    <div data-testid="popular-topic-list">
      <div data-testid="popular-item">Popular Item 1</div>
      <div data-testid="popular-item">Popular Item 2</div>
    </div>
  ),
}))

const TestWrapper = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>
}

describe('PopularTopicSection Component', () => {
  beforeEach(() => {
    render(
      <TestWrapper>
        <PopularTopicSection />
      </TestWrapper>,
    )
  })

  it('섹션 타이틀이 올바르게 렌더링된다', () => {
    const sectionTitle = screen.getByText(/오늘 사람들이 가장 많이 찾은 지식/i)
    expect(sectionTitle).toBeInTheDocument()
  })

  it('섹션 서브타이틀이 올바르게 렌더링된다', () => {
    const subtitle = screen.getByText(
      /지금 가장 주목받는 주제들을 한눈에 확인하고/,
    )
    expect(subtitle).toBeInTheDocument()
  })

  it('PopularTopicList 컴포넌트를 렌더링해야 한다', () => {
    // mock 처리된 PopularTopicList 컴포넌트가 렌더링되었는지 확인합니다.
    const popularList = screen.getByTestId('popular-topic-list')
    expect(popularList).toBeInTheDocument()
  })

  it('PopularTopicList 내부에 인기 토픽 아이템들이 표시된다', () => {
    // mock 컴포넌트가 렌더링하는 가짜 아이템들이 정상적으로 표시되는지 확인합니다.
    const popularItems = screen.getAllByTestId('popular-item')
    expect(popularItems).toHaveLength(2)
    expect(popularItems[0]).toHaveTextContent('Popular Item 1')
  })
}) 