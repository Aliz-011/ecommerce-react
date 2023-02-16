import axios from 'axios';
import { useEffect, useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Footer, Header } from '../components';
import { useStateValue } from '../context/Store';
import { ReactComponent as NotFound } from '../images/404.svg';

export default function Favorite() {
  const [{ user }, dispatch] = useStateValue();

  const [favorites, setFavorites] = useState([]);

  const fetchFavorite = async () => {
    const response = await axios.get(
      'http://localhost:1000/api/v1/auth/wishlist',
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    setFavorites(response.data.wishlist);

    return true;
  };

  const removeFromWishlist = async (id) => {
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

  useEffect(() => {
    fetchFavorite();
  }, [favorites]);

  return (
    <>
      <Header />
      <main className="container mx-auto max-w-7xl min-h-screen">
        <section className="grid grid-cols-5 gap-5 pb-10">
          <div className="col-span-full mx-auto my-8">
            <h2>
              Home / <Link to="/favorite">Favorite</Link>
            </h2>
          </div>

          {favorites.length > 0 ? (
            favorites.map((favorite, index) => (
              <div
                className="flex flex-col shadow-lg rounded-lg px-2 py-3"
                key={index}
              >
                <picture className="relative">
                  <img
                    src="/images/tab1.jpg"
                    alt="img"
                    className="h-40 w-full rounded-lg"
                  />

                  <HiOutlineX
                    onClick={() => removeFromWishlist(favorite._id)}
                    className="absolute h-5 w-5 cursor-pointer top-1 right-1 text-black"
                  />
                </picture>

                <div className="flex flex-col gap-3 pb-3 pl-2">
                  <h1 className="text-orange-600 text-sm">{favorite.brand}</h1>
                  <p className="font-semibold">{favorite.title}</p>

                  <p className="text-sm">${favorite.price}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full h-1/2 w-full">
              <NotFound className="h-full w-3/4 mx-auto" />
              <div className="text-center my-8">
                <h1 className="font-medium text-4xl">
                  Choose your favorite product now {':)'}
                </h1>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
