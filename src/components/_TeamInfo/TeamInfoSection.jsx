import styled from '@emotion/styled';
import TeamHero from './TeamHero';
import TeamIntro from './TeamIntro';
import TeamAbout from './TeamAbout';

const TeamInfoContainer = styled.div`
`

const TeamInfoSection = () => {


  return (
    <TeamInfoContainer>
      <TeamHero />
      <TeamAbout />
      <TeamIntro />
    </TeamInfoContainer>
  )
}

export default TeamInfoSection;