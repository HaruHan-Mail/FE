import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import KnowledgeSection from '../KnowledgeSection'

// useModal 훅 Mock - 상태 변화 가능하도록
let mockIsModalOpen = false
const mockOpenModal = vi.fn(() => { mockIsModalOpen = true })
const mockCloseModal = vi.fn(() => { mockIsModalOpen = false })

vi.mock('../../../hooks/useModal', () => ({
  default: () => ({
    isModalOpen: mockIsModalOpen,
    openModal: mockOpenModal,
    closeModal: mockCloseModal
  })
}))

// Mock 컴포넌트들
vi.mock('../Knowledge/KnowledgeSectionLottie', () => ({
  default: () => <div data-testid="knowledge-lottie">Knowledge Lottie Animation</div>
}))

vi.mock('../Knowledge/KnowledgeSectionList', () => ({
  default: () => (
    <div data-testid="knowledge-list">
      <button 
        data-testid="knowledge-item" 
        onClick={mockOpenModal}
        aria-label="Knowledge Item 1"
      >
        Knowledge Item 1
      </button>
    </div>
  )
}))

// SubscriptionModal Mock
vi.mock('../../modal/SubscriptionModal', () => ({
  default: ({ isOpen, onClose }) => 
    isOpen ? (
      <div data-testid="subscription-modal">
        <div>Subscription Modal</div>
        <button onClick={onClose} data-testid="close-modal">닫기</button>
      </div>
    ) : null
}))

const TestWrapper = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}

describe('KnowledgeSection Component', () => {
  beforeEach(() => {
    // Mock 함수들과 상태 초기화
    vi.clearAllMocks()
    mockIsModalOpen = false
    
    render(
      <TestWrapper>
        <KnowledgeSection />
      </TestWrapper>
    )
  })

  it('섹션 타이틀이 올바르게 렌더링된다', () => {
    const sectionTitle = screen.getByText(/하루 한 조각, 지식을 채우는 시간/i)
    expect(sectionTitle).toBeInTheDocument()
  })

  it('섹션 서브타이틀이 올바르게 렌더링된다', () => {
    const subtitle = screen.getByText(/매일 이메일로 전달되는 짧지만/i)
    expect(subtitle).toBeInTheDocument()
  })

  it('Lottie 애니메이션 컴포넌트가 렌더링된다', () => {
    const lottieComponent = screen.getByTestId('knowledge-lottie')
    expect(lottieComponent).toBeInTheDocument()
  })

  it('Knowledge 리스트가 렌더링된다', () => {
    const knowledgeList = screen.getByTestId('knowledge-list')
    expect(knowledgeList).toBeInTheDocument()
  })

  it('Knowledge 아이템이 렌더링된다', () => {
    const knowledgeItem = screen.getByRole('button', { name: /Knowledge Item 1/i })
    expect(knowledgeItem).toBeInTheDocument()
  })

  it('Knowledge 아이템을 클릭하면 모달이 열린다', () => {
    const knowledgeItemButton = screen.getByRole('button', { name: /Knowledge Item 1/i })
    fireEvent.click(knowledgeItemButton)
    expect(mockOpenModal).toHaveBeenCalled()
  })
})