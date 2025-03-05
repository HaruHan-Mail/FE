import HeroSection from '../components/HeroSection';
import DescriptionSection from '../components/DescriptionSection';
import PopuplarTopicSection from '../components/PopuplarTopicSection';
import ClosingSection from '../components/ClosingSection';
import Layout from '../components/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <DescriptionSection />
      {/* <PopuplarTopicSection /> */}
      <ClosingSection />
    </Layout>
  );
};

export default Home;
