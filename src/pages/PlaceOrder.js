import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Footer, Header } from '../components';
import { useStateValue } from '../context/Store';

export default function PlaceOrder() {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const [userCart, setUserCart] = useState(null);
  const [COD, setCOD] = useState(false);
  const [address, setAddress] = useState('');

  const fetchUserCart = async () => {
    const response = await axios.get('http://localhost:1000/api/v1/cart', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });

    if (response.statusText == 'OK') {
      setUserCart(response.data);
      return;
    }

    return response.data;
  };

  const placeOrder = async () => {
    const userAddress = await axios.put(
      'http://localhost:1000/api/v1/auth/save-address',
      {
        address,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    const createOrder = await axios.post(
      'http://localhost:1000/api/v1/order',
      {
        COD: true,
        couponApplied: false,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    if (!address) {
      toast.error('please insert your address.');
      return;
    } else if (
      userAddress.statusText == 'OK' &&
      createOrder.statusText == 'OK'
    ) {
      toast.success('Your order has been placed!');
      navigate('/');
    } else {
      toast.error('sorry, something wrong.');
    }
  };

  useEffect(() => {
    fetchUserCart();
  }, []);

  return (
    <>
      <Header />
      <main className="container max-w-7xl mx-auto h-screen">
        <div className="text-center my-8">
          <h2>
            Home / <Link to="/place-order">Place order</Link>
          </h2>
        </div>

        {userCart && (
          <div className="flex flex-col text-sm bg-slate-900 p-6 rounded-2xl mb-8">
            {userCart.products.map((product, index) => (
              <div key={index} className="text-white flex justify-between p-6">
                <p>#{product.productId._id.substring(0, 6)}</p>
                <h2>{product.productId.title}</h2>
                <p className="capitalize">{product.color}</p>
                <div className="flex gap-5">
                  <p className="capitalize">x {product.quantity}</p>
                  <p>${product.price}</p>
                </div>
              </div>
            ))}

            <div className="text-white flex justify-between bg-slate-600 rounded-t-xl mt-5 p-6">
              <p>Total</p>
              <p>${userCart.cartTotal}</p>
            </div>
            <div className="text-white flex flex-col justify-between bg-gray-800 rounded-b-xl">
              <textarea
                placeholder="Address..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-transparent w-full p-6 resize-none"
              ></textarea>
              <button
                className="bg-orange-500 w-full px-6 py-2 rounded-full mt-5"
                onClick={placeOrder}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
