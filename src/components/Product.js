import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineHeart, HiOutlineShoppingCart, HiStar } from 'react-icons/hi';
import { actionType, useStateValue } from '../context/Store';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CartContext } from '../context/CartStore';

const Product = ({ product }) => {
  const [{ user }, dispatch] = useStateValue();
  const { addItem } = useContext(CartContext);

  const addToWishlist = async (id) => {
    const response = await axios.put(
      'http://localhost:1000/api/v1/product/wishlist',
      { prodId: id },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    toast.success(response.data.message);

    return response.data;
  };

  const addToCart = () => {
    const item = {
      id: product._id,
      slug: product.slug,
      title: product.title,
      brand: product.brand,
      price: product.price,
      quantity: 1,
      color: product.color[0],
    };
    addItem(item);
  };

  return (
    <>
      {product && (
        <div className="flex flex-col shadow-lg rounded-lg px-2 py-3">
          <picture className="relative">
            <img
              src="/images/tab1.jpg"
              alt="img"
              className="h-40 w-full rounded-lg"
            />
            {user ? (
              <HiOutlineHeart
                onClick={() => addToWishlist(product._id)}
                className="absolute h-5 w-5 cursor-pointer top-1 right-1 text-white hover:fill-red-600 hover:text-red-600"
              />
            ) : (
              <HiOutlineHeart
                onClick={() => (window.location.href = '/login')}
                className="absolute h-5 w-5 cursor-pointer top-1 right-1 text-white hover:fill-red-600 hover:text-red-600"
              />
            )}
          </picture>

          <p className="text-orange-600 text-sm mb-4">{product.brand}</p>
          <Link to={`/${product.slug}`} className="font-semibold">
            {product.title}
          </Link>
          <div className="flex my-3">
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
            <HiStar className="fill-yellow-500 h-3 w-3" />
          </div>
          <div className="flex items-center justify-between mt-auto">
            <p className="text-sm ">${product.price}</p>
            <button
              onClick={addToCart}
              className="uppercase text-base font-normal bg-orange-500 shadow-md p-2 rounded-full"
            >
              <HiOutlineShoppingCart className="text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
