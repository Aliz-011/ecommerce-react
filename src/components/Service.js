import React from 'react';
import { TbTruckDelivery, TbHeadset, TbDiscount2 } from 'react-icons/tb';
import { AiOutlineGift, AiOutlineCreditCard } from 'react-icons/ai';

const Service = () => {
  return (
    <section className="flex justify-between items-center gap-6">
      <div className="flex items-center gap-4">
        <TbTruckDelivery className="w-10 h-10" />
        <div>
          <h2 className="text-md font-semibold">Free shipping</h2>
          <p className="text-sm font-extralight">
            From all orders over Rp 300.000
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <AiOutlineGift className="w-10 h-10" />
        <div>
          <h2 className="text-md font-semibold">Daily surprise offers</h2>
          <p className="text-sm font-extralight">Save up to 50% off</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <TbHeadset className="w-10 h-10" />
        <div>
          <h2 className="text-md font-semibold">Support 24/7</h2>
          <p className="text-sm font-extralight">Contact us if you struggle</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <TbDiscount2 className="w-10 h-10" />
        <div>
          <h2 className="text-md font-semibold">Affordable Price</h2>
          <p className="text-sm font-extralight">
            Mid to high tier product with direct price
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <AiOutlineCreditCard className="w-10 h-10" />
        <div>
          <h2 className="text-md font-semibold">Secure Payment</h2>
          <p className="text-sm font-extralight">100% protected payments</p>
        </div>
      </div>
    </section>
  );
};

export default Service;
