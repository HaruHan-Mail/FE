import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeAll, afterEach, afterAll, beforeEach } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'
import PopularTopicSection from '../PopularTopicSection'

// Mock 데이터
const mockPopularData = [
  {
    id: 1,
    title: 'JavaScript 기초',
    description: '자바스크립트의 기본 개념들',
    image: '/images/js-basics.jpg',
    category: 'Programming'
  },
  {
    id: 2,
    title: 'React 훅스',
    description: 'React Hooks 완전 정복',
    image: '/images/react-hooks.jpg',
    category: 'Framework'
  }
]

const server = setupServer(
  http.get('/api/popular-topics', () => {
    return HttpResponse.json({
      success: true,
      data: mockPopularData
    })
  })
)

vi.mock('../PopularTopic/PopularTopicList', () => ({
  default: () => (
    <div data-testid="popular-topic-list">
      <div data-testid="popular-item">Popular Item 1</div>
      <div data-testid="popular-item">Popular Item 2</div>
    </div>
  )
}))

const TestWrapper = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </QueryClientProvider>
  )
}

describe('PopularTopicSection Component', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    render(
      <TestWrapper>
        <PopularTopicSection />
      </TestWrapper>
    )
  })

  it('섹션 타이틀이 올바르게 렌더링된다', () => {
    const sectionTitle = screen.getByText(/오늘 사람들이 가장 많이 찾은 지식/i)
    expect(sectionTitle).toBeInTheDocument()
  })

  it('섹션 서브타이틀이 올바르게 렌더링된다', () => {
    const subtitle = screen.getByText(/지금 가장 주목받는 주제들을 한눈에 확인하고/i)
    expect(subtitle).toBeInTheDocument()
  })

  it('PopularTopicList 컴포넌트가 렌더링된다', () => {
    const popularList = screen.getByTestId('popular-topic-list')
    expect(popularList).toBeInTheDocument()
  })

  it('인기 토픽 아이템들이 렌더링된다', () => {
    const popularItems = screen.getAllByTestId('popular-item')
    expect(popularItems).toHaveLength(2)
  })

}) 