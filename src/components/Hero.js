import React from 'react';

const Hero = () => {
  return (
    <section className="grid grid-cols-4 gap-5">
      <div className="col-span-2">
        <div className="w-full h-96 relative">
          <img
            src="/images/main-banner.jpg"
            alt=""
            className="object-contain rounded-lg"
          />
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-5">
        <div className="w-full h-auto relative">
          <img
            src="/images/catbanner-01.jpg"
            className="object-contain rounded-lg"
            alt=""
          />
        </div>
        <div className="w-full h-auto relative">
          <img
            src="/images/catbanner-02.jpg"
            className="object-contain rounded-lg"
            alt=""
          />
        </div>
        <div className="w-full h-auto relative">
          <img
            src="/images/catbanner-03.jpg"
            className="object-contain rounded-lg"
            alt=""
          />
        </div>
        <div className="w-full h-auto relative">
          <img
            src="/images/catbanner-04.jpg"
            className="object-contain rounded-lg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
