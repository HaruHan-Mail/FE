import HeroSection from '../components/HeroSection';
import KnowledgeSection from '../components/_Home/KnowledgeSection.jsx';
import PopuplarTopicSection from '../components/PopuplarTopicSection';
import Layout from '../components/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <KnowledgeSection />
      <PopuplarTopicSection />
    </Layout>
  );
};

export default Home;
