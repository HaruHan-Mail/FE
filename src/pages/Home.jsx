import HeroSection from '../components/_Home/HeroSection';
import KnowledgeSection from '../components/_Home/KnowledgeSection.jsx';
import PopularTopicSection from '../components/_Home/PopularTopicSection';
import Layout from '../components/Layout/Layout';

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
