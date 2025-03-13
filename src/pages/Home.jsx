import HeroSection from '../components/_Home/HeroSection';
import KnowledgeSection from '../components/_Home/KnowledgeSection.jsx';
import PopuplarTopicSection from '../components/_Home/PopuplarTopicSection';
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
