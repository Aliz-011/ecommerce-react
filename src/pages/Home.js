import React from 'react';
import {
  Header,
  Hero,
  Service,
  Categories,
  Featured,
  Footer,
  Ads,
  SpecialProducts,
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
        <Ads />
        <div className="py-8" />
        <SpecialProducts />
        <div className="py-8" />
      </div>

      <Footer />
    </>
  );
};

export default Home;
