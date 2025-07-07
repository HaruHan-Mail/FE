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

// KnowledgeSectionList를 실제 구조에 맞게 Mock
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

//   it('Knowledge 아이템을 클릭하면 모달이 열린다', () => {
//     const knowledgeItem = screen.getByRole('button', { name: /Knowledge Item 1/i })
    
//     // 클릭 이벤트 발생
//     fireEvent.click(knowledgeItem)
    
//     // openModal 함수가 호출되었는지 확인
//     expect(mockOpenModal).toHaveBeenCalledTimes(1)
//   })

//   it('모달이 닫힌 상태에서는 모달이 렌더링되지 않는다', () => {
//     const modal = screen.queryByTestId('subscription-modal')
//     expect(modal).not.toBeInTheDocument()
//   })

//   describe('Modal 상호작용', () => {
//     beforeEach(() => {
//       // 모달이 열린 상태로 설정
//       mockIsModalOpen = true
//     })

//     it('모달이 열린 상태에서는 모달이 렌더링된다', () => {
//       render(
//         <TestWrapper>
//           <KnowledgeSection />
//         </TestWrapper>
//       )

//       const modal = screen.getByTestId('subscription-modal')
//       expect(modal).toBeInTheDocument()
//     })

//     it('모달 닫기 버튼을 클릭하면 모달이 닫힌다', () => {
//       render(
//         <TestWrapper>
//           <KnowledgeSection />
//         </TestWrapper>
//       )

//       const closeButton = screen.getByTestId('close-modal')
//       fireEvent.click(closeButton)

//       expect(mockCloseModal).toHaveBeenCalledTimes(1)
//     })
//   })
})