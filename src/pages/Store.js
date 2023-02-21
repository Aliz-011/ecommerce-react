import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Header, Product, Footer } from '../components';
import { useStateValue } from '../context/Store';

export default function Store() {
  const [colors, setColors] = useState([
    'red',
    'yellow',
    'blue',
    'amber',
    'gray',
    'black',
    'white',
    'orange',
    'indigo',
  ]);

  const [shopBy, setShopBy] = useState({
    categories: '',
    availability: '',
    price: { min: 0, max: 99999 },
    color: '',
    size: '',
  });

  const [sortBy, setSortBy] = useState('');

  const [state, dispatch] = useStateValue();

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get(
      `http://localhost:1000/api/v1/product?sort=${sortBy}`
    );
    setProducts(response.data);
    return;

    return response.data;
  };

  useEffect(() => {
    if (state.products.length > 0) {
      setProducts(state.products);
    } else {
      fetchProducts();
    }
  }, [products]);

  return (
    <>
      <Header />
      <main className="container mx-auto max-w-7xl">
        <section className="grid grid-cols-4 gap-5 pb-10">
          <div className="col-span-full mx-auto my-8">
            <h2>
              Home / <Link to="/store">Our Store</Link>
            </h2>
          </div>

          <div className="flex flex-row sm:flex-col gap-5 shadow-md w-full px-2">
            <div>
              <h2 className="font-semibold text-base mb-3">
                Shop by Categories
              </h2>
              <div className="flex flex-row sm:flex-col capitalize font-extralight">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="checkboxCategories" className="" />
                  <label htmlFor="checkboxCategories">Headphone</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="checkboxCategories" className="" />
                  <label htmlFor="checkboxCategories">TV</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="checkboxCategories" className="" />
                  <label htmlFor="checkboxCategories">Smartphone</label>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-base mb-3">Filter by</h2>
              <h2 className="font-semibold mb-2">Availability</h2>
              <div className="flex flex-row sm:flex-col capitalize font-extralight mb-3">
                <div className="flex gap-2">
                  <input type="checkbox" className="" />
                  <label htmlFor="inStock">In Stock ({products.length})</label>
                </div>
                <div className="flex gap-2">
                  <input type="checkbox" className="" />
                  <label htmlFor="outOfStock">Out Of Stock</label>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-semibold mb-2">Price</h2>
              <div className="flex flex-row capitalize font-extralight gap-2 mb-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    onChange={(e) =>
                      setShopBy({ ...shopBy, price: { min: e.target.value } })
                    }
                    pattern="[0-9]+"
                    placeholder="From"
                    className="rounded w-full border px-2 py-1.5"
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    onChange={(e) =>
                      setShopBy({ ...shopBy, price: { max: e.target.value } })
                    }
                    pattern="[0-9]+"
                    placeholder="To"
                    className="rounded w-full border px-2 py-1.5"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-semibold mb-2">Colors</h2>
              <div className="flex gap-2">
                {colors &&
                  colors.map((color, index) => (
                    <div
                      className={`rounded-full w-10 h-7 bg-${color}-400`}
                      key={index}
                    />
                  ))}
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-base mb-3">Size</h2>
              <div className="flex flex-row sm:flex-col capitalize font-extralight mb-3">
                <div className="flex gap-2">
                  <input type="checkbox" id="small" className="" />
                  <label htmlFor="small">S (7)</label>
                </div>
                <div className="flex gap-2">
                  <input type="checkbox" id="medium" className="" />
                  <label htmlFor="medium">M (4)</label>
                </div>
                <div className="flex gap-2">
                  <input type="checkbox" id="large" className="" />
                  <label htmlFor="large">L (3)</label>
                </div>
                <div className="flex gap-2">
                  <input type="checkbox" id="xlarge" className="" />
                  <label htmlFor="xlarge">XL (2)</label>
                </div>
              </div>
            </div>
          </div>

          {/* items list */}
          <div className="col-span-3">
            <div className="flex items-center justify-between w-full mb-2">
              <div className="flex items-center gap-5">
                <h2 className="font-semibold">Sort by:</h2>
                <select
                  className="cursor-pointer"
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="title">A-Z</option>
                  <option value="-title">Z-A</option>
                  <option value="price">Cheapest - Expensive</option>
                  <option value="-price">Expensive - Cheapest</option>
                  <option value="best-sell">Best Selling</option>
                </select>
              </div>

              <div className="flex items-center">
                <p className="font-semibold">{products.length} Products</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-5">
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
