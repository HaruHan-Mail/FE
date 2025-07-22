import styled from '@emotion/styled';
import TeamHero from './TeamHero';
import TeamIntro from './TeamIntro';
import TeamAbout from './TeamAbout';
import TeamMember from './TeamMember';

const TeamInfoContainer = styled.div`
`

const TeamInfoSection = () => {


  return (
    <TeamInfoContainer>
      <TeamHero />
      <TeamAbout />
      <TeamMember />
      <TeamIntro />
    </TeamInfoContainer>
  )
}

export default TeamInfoSection;