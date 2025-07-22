import styled from '@emotion/styled';
import TeamIntro from './TeamIntro';
import TeamMember from './TeamMember';

const TeamInfoContainer = styled.div``;

const TeamInfoSection = () => {
  return (
    <TeamInfoContainer>
      <TeamMember />
      <TeamIntro />
    </TeamInfoContainer>
  );
};

export default TeamInfoSection;
