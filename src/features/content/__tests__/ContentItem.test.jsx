import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import ContentItem from '../ContentItem'

const mockNavigate = vi.fn()
vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

const mockContent = {
  id: 'c1',
  title: 'React의 모든 것',
  summary: 'React는 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다.',
}

describe('ContentItem Component', () => {
  const mockOnFavoriteToggle = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('컨텐츠 아이템을 클릭하면 상세 페이지로 이동해야 한다', () => {
    const handleClick = () => {
      mockNavigate(`/content/${mockContent.id}`)
    }

    render(
      <BrowserRouter>
        <ContentItem
          content={mockContent}
          onClick={handleClick}
          onFavoriteToggle={mockOnFavoriteToggle}
          bookmarkIdList={[]}
        />
      </BrowserRouter>,
    )

    // 텍스트를 포함하는 가장 가까운 div(ContentItemContainer)를 클릭합니다.
    const itemContainer = screen.getByText(mockContent.title).closest('div')
    fireEvent.click(itemContainer)

    // navigate 함수가 올바른 경로로 호출되었는지 확인합니다.
    expect(mockNavigate).toHaveBeenCalledTimes(1)
    expect(mockNavigate).toHaveBeenCalledWith('/content/c1')
  })

  it('하트 아이콘을 클릭하면 onFavoriteToggle 함수가 호출되어야 한다', () => {
    render(
      <BrowserRouter>
        <ContentItem
          content={mockContent}
          onClick={() => {}}
          isBookmark={false}
          onFavoriteToggle={mockOnFavoriteToggle}
          bookmarkIdList={[]}
        />
      </BrowserRouter>,
    )

    const favoriteButton = screen.getByTitle(/찜하기/i)
    fireEvent.click(favoriteButton)

    expect(mockOnFavoriteToggle).toHaveBeenCalledTimes(1)
    expect(mockOnFavoriteToggle).toHaveBeenCalledWith(mockContent.id, false)

    expect(mockNavigate).not.toHaveBeenCalled()
  })

  it('isBookmark가 true일 때 채워진 하트가 보여야 한다', () => {
    render(
      <BrowserRouter>
        <ContentItem
          content={mockContent}
          onClick={() => {}}
          isBookmark={true}
          onFavoriteToggle={mockOnFavoriteToggle}
        />
      </BrowserRouter>,
    )

    expect(screen.getByText('❤️')).toBeInTheDocument()
  })
}) 