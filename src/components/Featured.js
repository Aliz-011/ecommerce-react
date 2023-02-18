import React from 'react';
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineHeart,
  HiStar,
} from 'react-icons/hi';

const Featured = () => {
  return (
    <section className="grid grid-cols-fluid gap-5">
      <div className="flex justify-between items-center col-span-full">
        <h2 className="font-semibold text-xl">Featured Collection</h2>
        <div className="flex">
          <HiChevronLeft className="h-5 w-5 cursor-pointer" />
          <HiChevronRight className="h-5 w-5 cursor-pointer" />
        </div>
      </div>

      {/* item list */}
      <div className="flex flex-col shadow-lg rounded-lg">
        <picture className="relative">
          <img
            src="/images/tab1.jpg"
            alt="img"
            className="h-40 w-full rounded-lg"
          />
          <HiOutlineHeart className="absolute h-5 w-5 cursor-pointer top-1 right-1 text-white hover:fill-red-600 hover:text-red-600" />
        </picture>

        <div className="flex flex-col gap-3 pb-3 pl-2">
          <h1 className="text-orange-600 text-sm mt-3">Samsung</h1>
          <p className="font-semibold">
            Samsung Galaxy S23 Ultra 5G 12/256GB - Black
          </p>
          <div className="flex">
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
          </div>
          <p className="text-sm">$1200</p>
        </div>
      </div>

      <div className="flex flex-col shadow-lg rounded-lg">
        <picture className="relative">
          <img
            src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
            alt="img"
            className="h-40 w-full rounded-lg"
          />
          <HiOutlineHeart className="absolute h-5 w-5 cursor-pointer top-1 right-1 text-white hover:fill-red-600 hover:text-red-600" />
        </picture>

        <div className="flex flex-col gap-3 pb-3 pl-2">
          <h1 className="text-orange-600 text-sm mt-3">Nike</h1>
          <p className="font-semibold">
            Air Jordan 1 Low Fragment Travis Scott Authentic - 40
          </p>
          <div className="flex">
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
          </div>
          <p className="text-sm">$2000</p>
        </div>
      </div>

      <div className="flex flex-col shadow-lg rounded-lg">
        <picture className="relative">
          <img
            src="/images/speaker.jpg"
            alt="img"
            className="h-40 w-full rounded-lg"
          />
          <HiOutlineHeart className="absolute h-5 w-5 cursor-pointer top-1 right-1 text-white hover:fill-red-600 hover:text-red-600" />
        </picture>

        <div className="flex flex-col gap-3 pb-3 pl-2">
          <h1 className="text-orange-600 text-sm mt-3">JBL</h1>
          <p className="font-semibold">
            JBL Tune 225 True Wireless Ghost Edition
          </p>
          <div className="flex">
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
          </div>
          <p className="text-sm">$84</p>
        </div>
      </div>

      <div className="flex flex-col shadow-lg rounded-lg">
        <picture className="relative">
          <img
            src="/images/tab2.jpg"
            alt="img"
            className="h-40 w-full rounded-lg"
          />
          <HiOutlineHeart className="absolute h-5 w-5 cursor-pointer top-1 right-1 text-white hover:fill-red-600 hover:text-red-600" />
        </picture>

        <div className="flex flex-col gap-3 pb-3 pl-2">
          <h1 className="text-orange-600 text-sm mt-3">Samsung</h1>
          <p className="font-semibold">
            Samsung Galaxy S22 Ultra 5G 12/256GB - White
          </p>
          <div className="flex">
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
          </div>
          <p className="text-sm">$1200</p>
        </div>
      </div>

      <div className="flex flex-col shadow-lg rounded-lg">
        <picture className="relative">
          <img
            src="/images/watch.jpg"
            alt="img"
            className="h-40 w-full rounded-lg"
          />
          <HiOutlineHeart className="absolute h-5 w-5 cursor-pointer top-1 right-1 text-white hover:fill-red-600 hover:text-red-600" />
        </picture>

        <div className="flex flex-col gap-3 pb-3 pl-2">
          <h1 className="text-orange-600 text-sm mt-3">Rolex</h1>
          <p className="font-semibold">
            Rolex GMT Master II - 126710BLNR Batman Oyster
          </p>
          <div className="flex">
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
          </div>
          <p className="text-sm">$2200</p>
        </div>
      </div>
    </section>
  );
};

export default Featured;
