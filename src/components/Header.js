import React, { Fragment, useContext, useEffect, useState } from 'react';
import {
  MdOutlineKeyboardArrowDown,
  MdSearch,
  MdOutlineShoppingCart,
} from 'react-icons/md';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { Menu } from '@headlessui/react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { actionType, useStateValue } from '../context/Store';
import axios from 'axios';
import { toast } from 'react-toastify';
import Cart from './Cart';
import { CartContext } from '../context/CartStore';

const Header = () => {
  const [{ user, products }, dispatch] = useStateValue();
  const { cartItems } = useContext(CartContext);

  const [searchInput, setSearchInput] = useState('');
  const [msg, setMsg] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/menswear', label: 'menswear' },
    { href: '/womenswear', label: 'womenswear' },
    { href: '/elektronik', label: 'elektronik' },
  ];

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchInput) {
      const response = await axios.get(`http://localhost:1000/api/v1/product`);

      const searchedProducts = response.data.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      );

      setSearchInput('');
      dispatch({ type: actionType.SET_PRODUCTS, products: searchedProducts });
    }
  };

  const logout = async () => {
    await fetch('http://localhost:1000/api/v1/auth/logout');
    dispatch({ type: actionType.SET_USER, user: null });
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const fetchCart = async () => {
      const response = await axios.get('http://localhost:1000/api/v1/cart', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (response.statusText !== 'OK') {
        setMsg('Your cart is empty');
        return;
      }
    };

    fetchCart();
  }, [user]);

  return (
    <header>
      <div className="py-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center text-sm border-b border-gray-700 pb-3">
            <h3 className="capitalize">free shipping over Rp 300.000</h3>
            <div className="flex justify-between items-center gap-8">
              <p className="border-r border-gray-600 pr-6">
                Hotline:{' '}
                <a
                  href="tel:085254354689"
                  className="text-blue-400 hover:underline"
                >
                  +6285254354689
                </a>
              </p>
              <p className="flex items-center">
                Indonesia <MdOutlineKeyboardArrowDown className="h-5 w-5" />
              </p>
              <p className="flex items-center">
                IDR
                <MdOutlineKeyboardArrowDown className="h-5 w-5" />
              </p>
            </div>
          </div>

          <nav className="flex justify-between items-center gap-12 pt-4">
            <Link to={'/'} className="text-3xl">
              Logo
            </Link>

            <div className="w-1/2 mx-auto">
              <form
                onSubmit={handleSearch}
                className="flex items-center rounded bg-white"
              >
                <input
                  type="text"
                  className="pl-3 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
                  placeholder="Search Product Here..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button className="inline-flex items-center py-1 gap-1 px-4 text-white rounded-sm transition-all ease-out duration-150 bg-yellow-500 hover:bg-yellow-600 cursor-pointer">
                  <MdSearch className="w-6 h-6" />
                </button>
              </form>
            </div>

            <div className="flex items-center gap-4 text-xl">
              <Link
                to={'/favorite'}
                className="flex items-center gap-1 cursor-pointer"
              >
                <AiOutlineHeart className="fill-red-700" />
                Favorite
              </Link>
              {user ? (
                <div
                  onClick={logout}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <AiOutlineUser />
                  <span>Logout</span>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <AiOutlineUser />
                  Login
                </Link>
              )}

              <div className="flex items-center cursor-pointer">
                <MdOutlineShoppingCart
                  onClick={() => setIsOpen(true)}
                  className="fill-yellow-600"
                />
                <p className="text-sm">{cartItems.length}</p>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="py-2 bg-slate-700 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center uppercase">
            <Menu
              as="div"
              className="relative inline-block py-1 border-r-2 border-gray-500 pr-4"
            >
              <Menu.Button className="relative z-10 flex items-center border-none p-0">
                <span className="mx-1">CATEGORIES</span>
                <MdOutlineKeyboardArrowDown className="h-5 w-5" />
              </Menu.Button>

              <Menu.Items className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md border shadow-xl dark:bg-gray-800">
                {links.map((link) => (
                  <Menu.Item key={link.href} as={Fragment}>
                    <Link
                      to={link.href}
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
            <div className="flex items-center gap-8 ml-6">
              <Link to="/">Home</Link>

              <Link to="/store">Our Store</Link>

              <Link to="#">Contact</Link>

              <Link to="#">Blog</Link>
            </div>
          </div>
        </div>
      </div>

      {isOpen && <Cart setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Header;
