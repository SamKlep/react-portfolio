import React, { Fragment } from 'react';
import Banner from '../components/banner';
import Services from '../components/services';
import About from '../components/about';
import Skills from '../components/skills';
// import Pricing from '../components/pricing';
// import Counter from '../components/counter';
// import Testimonials from '../components/testimonials';
// import Partner from '../components/partner';
import Contact from '../components/contact';
import Portfolio from '../components/portfolio';

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Services />
      <About />
      <Skills />
      {/* <Pricing />
      <Counter />
      <Testimonials /> */}
      {/* <Partner /> */}
      <Portfolio />
      <Contact />
    </Fragment>
  );
};

export default Home;
