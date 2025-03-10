import HeroSection from '../components/HeroSection';
import CombinedSection from '../components/CombinedSection';
import PopuplarTopicSection from '../components/PopuplarTopicSection';
import Layout from '../components/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <CombinedSection />
      <PopuplarTopicSection />
    </Layout>
  );
};

export default Home;
