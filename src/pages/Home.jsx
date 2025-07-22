import Layout from '@layout/Layout';
import { HeroSection, AboutSection, KnowledgeSection, PopularTopicSection } from '@features/home';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <KnowledgeSection />
      <PopularTopicSection />
    </Layout>
  );
};

export default Home;
