import React from 'react';
import {
  Header,
  Hero,
  Service,
  Categories,
  Featured,
  Footer,
} from '../components';

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-7xl">
        <div className="py-8" />
        <Hero />
        <div className="py-8" />
        <Service />
        <div className="py-8" />
        <Categories />
        <div className="py-8" />
        <Featured />
        <div className="py-8" />
      </div>

      <Footer />
    </>
  );
};

export default Home;
