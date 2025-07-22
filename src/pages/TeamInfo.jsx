import React from 'react';
import { TeamMember, TeamIntro } from '@features/team';
import Layout from '@layout/Layout';

const TeamInfo = () => {
  return (
    <Layout>
      {/* <TeamHeroSection /> */}
      <TeamMember />
      <TeamIntro />
    </Layout>
  );
};

export default TeamInfo;
