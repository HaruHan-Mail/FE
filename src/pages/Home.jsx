import { lazy, Suspense } from 'react';
import Layout from '@layout/Layout';
import { HeroSection } from '@features/home';
import LoadingSpinner from '@common/LoadingSpinner.jsx';

const AboutSection = lazy(() => import('@features/home/AboutSection'));
const KnowledgeSection = lazy(() => import('@features/home/KnowledgeSection'));
const PopularTopicSection = lazy(() => import('@features/home/PopularTopicSection'));

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Suspense fallback={<LoadingSpinner />}>
        <AboutSection />
        <KnowledgeSection />
        <PopularTopicSection />
      </Suspense>
    </Layout>
  );
};

export default Home;
