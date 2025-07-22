import styled from '@emotion/styled';
import TeamHero from './TeamHero';
import TeamIntro from './TeamIntro';

const TeamInfoContainer = styled.div`
`

const TeamInfoSection = () => {


  return (
    <TeamInfoContainer>
      <TeamHero />
      <TeamIntro />
    </TeamInfoContainer>
  )
}

export default TeamInfoSection;