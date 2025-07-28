import { useState } from 'react';
import styled from '@emotion/styled';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { privacyPolicyData } from './privacyPolicyData';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 48px auto;
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(80, 104, 164, 0.09);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  border-bottom: 1px solid #eceef2;
  cursor: pointer;
  transition: background 0.2s;
  border-radius: 8px;
  &:hover {
    background: #f7f9fd;
  }
  &:last-of-type {
    border-bottom: none;
  }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.15rem 0.3rem 1.15rem 0.3rem;
`;

const ItemTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
  font-weight: 600;
`;

const Content = styled.div`
  margin-top: 0.7rem;
  font-size: 1rem;
  line-height: 1.5;
  padding-bottom: 1.1rem;
  transition: all 0.2s;

  ul {
    list-style: none;
  }
`;

const PrivacyPolicy = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Container>
      <ContentWrapper>
        <Title>Haruhan 개인정보취급방침</Title>
        <List>
          {privacyPolicyData.map((section, index) => (
            <Item key={index} onClick={() => toggleSection(index)}>
              <ItemHeader>
                <ItemTitle>{section.title}</ItemTitle>
                {openSections[index] ? (
                  <IoIosArrowUp size={20} color="#B2B8C6" />
                ) : (
                  <IoIosArrowDown size={20} color="#B2B8C6" />
                )}
              </ItemHeader>
              {openSections[index] && <Content>{section.content}</Content>}
            </Item>
          ))}
        </List>
      </ContentWrapper>
    </Container>
  );
};

export default PrivacyPolicy;
