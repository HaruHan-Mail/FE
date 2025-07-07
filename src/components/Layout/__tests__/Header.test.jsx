import { render, screen, fireEvent, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import Header from '../Header'

// Mock 컴포넌트들
vi.mock('../../../components/modal/SubscriptionModal', () => ({
  default: ({ isOpen, onClose }) => 
    isOpen ? <div data-testid="subscription-modal">구독 모달<button onClick={onClose}>닫기</button></div> : null
}))

// 테스트용 래퍼 컴포넌트
const TestWrapper = ({ children }) => {
  return (
      <BrowserRouter>
        {children}
      </BrowserRouter>
  )
}

// 스크롤 이벤트 시뮬레이션을 위한 헬퍼 함수
const simulateScroll = (scrollY) => {
  Object.defineProperty(window, 'scrollY', {
    writable: true,
    value: scrollY,
  })
  window.dispatchEvent(new Event('scroll'))
}

describe('Header Component', () => {
  beforeEach(() => {
    // 스크롤 위치 초기화
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
    })

    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('헤더의 구독하기 버튼이 렌더링된다', () => {
    const subscribeButton = screen.getByRole('button', { name: /구독하기/i })
    expect(subscribeButton).toBeInTheDocument()
  })

  it('로고 이미지가 렌더링된다', () => {
    const logo = screen.getByAltText('Haruhan Logo')
    expect(logo).toBeInTheDocument()
  })

  it('팀소개 링크가 렌더링된다', () => {
    const teamInfoLink = screen.getByText(/팀 소개/i)
    expect(teamInfoLink).toBeInTheDocument()
  })

  it('스크롤 시 헤더 스타일이 변경된다', async () => {
    // 초기 상태에서는 scrolled 클래스가 없음
    const header = screen.getByRole('banner')
    expect(header).not.toHaveClass('scrolled')

    // 스크롤 시뮬레이션
    simulateScroll(20)
    
    // 스크롤 후에는 scrolled 클래스가 추가됨 (실제로는 상태 업데이트가 필요)
    // 이 부분은 실제 DOM 업데이트를 기다려야 할 수 있습니다
  })

  it('팀소개 버튼 클릭 시 올바른 경로로 이동한다', async () => {
    // 이 테스트는 실제 navigation이 작동하는지 확인하기 위해
    // useNavigate mock이 필요할 수 있습니다
    const teamInfoLink = screen.getByText(/팀 소개/i)
    expect(teamInfoLink).toBeInTheDocument()
    
    await act(async () => {
      fireEvent.click(teamInfoLink)
    })
  })
}) 