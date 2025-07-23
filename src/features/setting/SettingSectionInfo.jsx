import styled from '@emotion/styled';

const InfoContainer = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: var(--sliver);
  border-radius: 10px;
  border-left: 4px solid var(--primary);
`;

const Title = styled.h3`
  margin-top: 0;
  color: var(--black);
  font-size: 1rem;
`;

const Paragraph = styled.p`
  margin: 0.5rem 0;
  color: var(--d-grey);
`;

const SettingSectionInfo = () => {
  return (
    <InfoContainer>
      <Title>수신 빈도에 대한 안내</Title>
      <Paragraph>
        <b>하루 1개 지식 받기</b>: 매일 한 가지 주제의 지식을 보내드립니다
      </Paragraph>
      <Paragraph>
        <b>하루 5개 지식 받기</b>: 매주 월요일 5가지 주제의 지식을 보내드립니다
      </Paragraph>
    </InfoContainer>
  );
};

export default SettingSectionInfo;
