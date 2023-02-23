import axios from 'axios';
import { useContext, useState } from 'react';
import { HiChevronLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CartContext } from '../context/CartStore';
import { useStateValue } from '../context/Store';

export default function Cart({ setIsOpen }) {
  const { removeItem, cartItems } = useContext(CartContext);
  const [{ user }, dispatch] = useStateValue();

  const navigate = useNavigate();

  const handleRemoveItem = (index) => {
    removeItem(index);
  };
  const placeOrder = async () => {
    const response = await axios.post(
      `http://localhost:1000/api/v1/cart`,
      {
        cart: cartItems.map((item) => {
          return {
            _id: item.id,
            quantity: item.quantity,
            color: item.color,
          };
        }),
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    if (response) {
      localStorage.removeItem('cartItems');
      toast.success('Almost there! Confirm your purchase.');
      navigate('/place-order');
    }
  };

  const totalItemsPrice = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((a, c) => a + c, 0);

  const tax = (totalItemsPrice * 10) / 100;
  return (
    <div
      className="w-full h-full z-40 bg-black dark:bg-gray-900 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
      id="chec-div"
    >
      <div
        className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
        id="checkout"
      >
        <div
          className="flex items-end lg:flex-row flex-col justify-end"
          id="cart"
        >
          <div
            className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto"
            id="scroll"
          >
            <div
              onClick={() => setIsOpen(false)}
              className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer"
            >
              <HiChevronLeft className="w-6 h-6" />
              <p className="text-sm pl-2 leading-none dark:hover:text-gray-200">
                Back
              </p>
            </div>
            <p className="lg:text-xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">
              My Cart ({cartItems && cartItems.length})
            </p>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div
                  className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50"
                  key={item.id}
                >
                  <div className="md:w-4/12 2xl:w-1/4 w-full">
                    <img
                      src="https://i.ibb.co/SX762kX/Rectangle-36-1.png"
                      alt="Black Leather Bag"
                      className="h-full object-center object-cover md:block hidden"
                    />
                    <img
                      src="https://i.ibb.co/g9xsdCM/Rectangle-37.pngg"
                      alt="Black Leather Bag"
                      className="md:hidden w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                    <div className="flex items-center justify-between w-full pt-1 gap-8">
                      <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                        {item.title}
                      </p>

                      <input
                        type="number"
                        id="qty"
                        value={item.quantity}
                        readOnly
                        className="py-2 px-1 border w-24 border-gray-200 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">
                      Height: 10 inches
                    </p>
                    <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
                      Color: {item.color}
                    </p>
                    <div className="flex items-center justify-between pt-5">
                      <div className="flex itemms-center">
                        <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">
                          Add to favorites
                        </p>
                        <div
                          onClick={() => handleRemoveItem(index)}
                          className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                        >
                          Remove
                        </div>
                      </div>
                      <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center">
                <div className="text-center mt-8">
                  <h1 className="font-medium text-4xl">Looks empty here.</h1>
                </div>
                <img
                  src="/images/empty-cart.jpg"
                  alt="empty"
                  className="h-full w-3/4 mx-auto"
                />
              </div>
            )}
          </div>
          <div className="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
            <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
              <div>
                <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">
                  Summary
                </p>
                <div className="flex items-center justify-between pt-16">
                  <p className="text-base leading-none text-gray-800 dark:text-white">
                    Subtotal
                  </p>
                  <p className="text-base leading-none text-gray-800 dark:text-white">
                    ${totalItemsPrice}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <p className="text-base leading-none text-gray-800 dark:text-white">
                    Shipping
                  </p>
                  <p className="text-base leading-none text-gray-800 dark:text-white">
                    $10
                  </p>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <p className="text-base leading-none text-gray-800 dark:text-white">
                    Tax
                  </p>
                  <p className="text-base leading-none text-gray-800 dark:text-white">
                    ${tax}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                  <p className="text-2xl leading-normal text-gray-800 dark:text-white">
                    Total
                  </p>
                  <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">
                    ${totalItemsPrice + 10 + tax}
                  </p>
                </div>
                <button
                  onClick={placeOrder}
                  className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
