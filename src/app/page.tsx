import {
  About,
  Contact,
  Experience,
  Hero,
  Layout
} from '@/containers';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
