import { HeroSection, KnowledgeSection, PopularTopicSection } from '@features/home';
import Layout from '@layout/Layout';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <KnowledgeSection />
      <PopularTopicSection />
    </Layout>
  );
};

export default Home;
