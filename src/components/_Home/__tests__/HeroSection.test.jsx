import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import HeroSection from '../HeroSection'

// Three.js 컴포넌트만 mock 처리 (Underlay는 실제 렌더링)
vi.mock('../Hero/ThreeScene', () => ({
  default: () => <div data-testid="three-scene">3D Scene</div>
}))

const TestWrapper = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}

describe('HeroSection Component', () => {
    beforeEach(() => {
        render(
            <TestWrapper>
            <HeroSection />
            </TestWrapper>
        )
        })
    it('메인 타이틀이 올바르게 렌더링된다', () => {
        const mainTitle = screen.getByText(/매일, 당신의 지성을 깨우는 시간/i)
        expect(mainTitle).toBeInTheDocument()
    })

    it('서브타이틀이 올바르게 렌더링된다', () => {
        const subtitle = screen.getByText(/하루한은 일상에 영감을 더하는/i)
        expect(subtitle).toBeInTheDocument()
    })

    it('3D Scene 컴포넌트가 렌더링된다', () => {
        const threeScene = screen.getByTestId('three-scene')
        expect(threeScene).toBeInTheDocument()
    })

    it('HeroSection 컨테이너가 올바르게 렌더링된다', () => {
        const heroSection = screen.getByTestId('hero-section')
        expect(heroSection).toBeInTheDocument()
    })
}) 