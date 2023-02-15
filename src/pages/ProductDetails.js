import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiStar } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import { Header, Footer } from '../components';

export default function ProductDetails() {
  const { slug } = useParams();

  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `http://localhost:1000/api/v1/product/${slug}`
      );
      setProduct(response.data);
      return response.data;
    };
    fetchProduct();
  }, []);

  const addToCart = async () => {};

  return (
    <>
      <Header />
      <main className="container max-w-7xl mx-auto">
        {product && (
          <section className="grid grid-cols-2 gap-5">
            <div className="relative">
              <picture>
                <img
                  src="/images/tab1.jpg"
                  alt="img"
                  className="object-contain w-full h-full"
                />
              </picture>
            </div>

            <div className="flex flex-col my-auto">
              <h2 className="font-semibold text-xl mb-5">{product.title}</h2>
              <p className="font-medium">${product.price}</p>
              <div className="flex items-center my-3">
                <HiStar className="fill-yellow-500 h-3 w-3" />
                <HiStar className="fill-yellow-500 h-3 w-3" />
                <HiStar className="fill-yellow-500 h-3 w-3" />
                <HiStar className="fill-yellow-500 h-3 w-3" />
                <HiStar className="fill-yellow-500 h-3 w-3" />
                <p className="text-sm ml-2">(4 Reviews)</p>
              </div>

              <p className="font-semibold mb-3">
                Brand: <span className="font-light">{product.brand}</span>
              </p>

              <div className="font-semibold flex gap-2">
                Availability:{' '}
                {product.quantity > 0 ? (
                  <div className="flex">
                    <span className="font-light">In Stock</span>
                    <span className="font-light">({product.quantity})</span>
                  </div>
                ) : (
                  <span className="font-light">Out Of Stock</span>
                )}
              </div>

              <div className="flex items-center my-6">
                <div className="flex items-center gap-2">
                  <label htmlFor="qty" className="font-semibold">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="qty"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    className="border rounded w-1/3 px-2 py-1.5"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setItems([...cart, product])}
                    className="uppercase text-base font-normal bg-slate-900 shadow-md text-white px-7 py-2 rounded-full"
                  >
                    Add To Cart
                  </button>
                  <button className="uppercase text-base font-normal bg-orange-300 shadow-md text-white px-7 py-2 rounded-full">
                    buy now
                  </button>
                </div>
              </div>

              <p className="font-semibold mb-5">
                Color(s): <span className="font-light">{product.color}</span>
              </p>

              <div className="flex items-center gap-1 cursor-pointer">
                <AiOutlineHeart className="w-7 h-7" />
                <p className="font-light">Add to Wishlist</p>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
