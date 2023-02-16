import { HiStar } from 'react-icons/hi';

export default function SpecialProducts() {
  return (
    <section className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-3 gap-5">
        <h2 className="col-span-full text-xl font-semibold">
          Special Products
        </h2>

        {/* items list */}
        <div className="grid grid-cols-2 gap-2 shadow-md py-4 px-3">
          {/* left */}
          <div className="flex flex-col w-full">
            <div>
              <img
                src="/images/tab3.jpg"
                className="h-full w-full"
                alt="product_img"
              />
            </div>

            <div className="flex">
              <div>
                <img
                  src="/images/tab1.jpg"
                  className="h-full w-full"
                  alt="product_img"
                />
              </div>
              <div>
                <img
                  src="/images/tab2.jpg"
                  className="h-full w-full"
                  alt="product_img"
                />
              </div>
            </div>
          </div>

          {/* right */}
          <div className="flex flex-col">
            <h3 className="text-sm font-light text-orange-600 mb-3">Brand</h3>
            <p className="text-base font-semibold">
              Samsung Galaxy S23 Ultra 5G 12/256GB - Black
            </p>
            <div className="flex my-3">
              <HiStar className="fill-yellow-500 h-3 w-3" />
              <HiStar className="fill-yellow-500 h-3 w-3" />
              <HiStar className="fill-yellow-500 h-3 w-3" />
              <HiStar className="fill-yellow-500 h-3 w-3" />
              <HiStar className="fill-yellow-500 h-3 w-3" />
            </div>
            <span className="text-base font-medium text-orange-800">$1200</span>
            <div className="flex items-center my-5 gap-1">
              <p className="font-semibold text-sm">30 Days</p>
              <p className="py-1 px-1.5 rounded-full text-sm text-white bg-red-500">
                08
              </p>
              :
              <p className="py-1 px-1.5 rounded-full text-sm text-white bg-red-500">
                53
              </p>
              :
              <p className="py-1 px-1.5 rounded-full text-sm text-white bg-red-500">
                20
              </p>
            </div>
            <div className="flex flex-col gap-2 tracking-wider mb-4">
              <p className="font-light text-sm">Products: 400</p>
              <div className="w-full h-1 bg-gray-300 rounded-full">
                <div className="bg-green-500 h-full w-2/5" />
              </div>
            </div>
            <div>
              <button className="px-5 py-1.5 shadow rounded-full bg-slate-900 uppercase text-white">
                option
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
