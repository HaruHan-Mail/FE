import React from 'react'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../common/LoadingSpinner'
import styled from '@emotion/styled'
import { useContentDetail } from '../../hooks/queries'

const DetailContainer = styled.section`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 3rem;
  background-color: var(--white);

  @media (max-width: 768px) {
    margin: 1rem;
    padding: 1.3rem;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const Summary = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  color: var(--d-grey);
  line-height: 1.5;
  border-left: 4px solid var(--primary);
  padding: 0.5rem 1rem 0.5rem 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const SectionHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary);
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const ContentList = styled.ul`
  padding-left: 1.5rem;
  line-height: 1.5;

  li {
    margin-bottom: 0.75rem;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    li {
      font-size: 0.8rem;
    }
  }
`

const ResourceLink = styled.a`
  color: var(--primary);
  text-decoration: none;
  word-break: break-all;

  &:hover {
    text-decoration: underline;
  }
`

const ContentDetailSection = () => {
  const { contentId } = useParams()

  const { data: contentDetail, isLoading } = useContentDetail(contentId)

  if (isLoading) return <LoadingSpinner fullscreen />
  if (!contentDetail) return <div>컨텐츠를 불러올 수 없습니다.</div>

  const renderList = (items) => (
    <ContentList>
      {(items || []).map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ContentList>
  )

  const renderResourceList = (items) => (
    <ContentList>
      {(items || []).map((item, index) => (
        <li key={index}>
          <ResourceLink href={item} target="_blank" rel="noreferrer">
            {item}
          </ResourceLink>
        </li>
      ))}
    </ContentList>
  )

  return (
    <DetailContainer>
      <Title>{contentDetail.title}</Title>
      <Summary>{contentDetail.summary}</Summary>

      <SectionHeader>알아두면 쓸모 있는 배경 지식</SectionHeader>
      {renderList(contentDetail.background)}

      <SectionHeader>이 지식이 왜 중요할까?</SectionHeader>
      {renderList(contentDetail.importance)}

      <SectionHeader>오늘의 팁</SectionHeader>
      {renderList(contentDetail.tip)}

      <SectionHeader>더 알고 싶다면</SectionHeader>
      {renderResourceList(contentDetail.additionalResources)}
    </DetailContainer>
  )
}

export default ContentDetailSection
