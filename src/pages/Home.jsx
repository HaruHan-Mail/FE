import HeroSection from '../components/HeroSection';
import CombinedSection from '../components/CombinedSection.jsx';
import PopuplarTopicSection from '../components/PopuplarTopicSection';
import Layout from '../components/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <div>
      <CombinedSection />
      </div>
      <PopuplarTopicSection />
    </Layout>
  );
};

export default Home;
