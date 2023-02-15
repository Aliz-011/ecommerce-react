import React from 'react';

const Categories = () => {
  return (
    <section className="grid grid-cols-4">
      <h2 className="col-span-full font-semibold">Categories</h2>

      <div className="flex items-center gap-8 p-4 shadow-md">
        <div>
          <p className="font-semibold">Camera & Video</p>
          <span>12 Items</span>
        </div>

        <img src="/images/camera.jpg" alt="img" className="h-32 w-40" />
      </div>

      <div className="flex items-center gap-8 p-4 shadow-md">
        <div>
          <p className="font-semibold">Headphones</p>
          <span>200 Items</span>
        </div>

        <img src="/images/headphone.jpg" alt="img" className="h-32 w-40" />
      </div>

      <div className="flex items-center gap-8 p-4 shadow-md">
        <div>
          <p className="font-semibold">Mobile & Tablets</p>
          <span>200 Items</span>
        </div>

        <img src="/images/tab.jpg" alt="img" className="h-32 w-40" />
      </div>

      <div className="flex items-center gap-8 p-4 shadow-md">
        <div>
          <p className="font-semibold">Music & Gaming</p>
          <span>200 Items</span>
        </div>

        <img src="/images/acc.jpg" alt="img" className="h-32 w-40" />
      </div>
    </section>
  );
};

export default Categories;
