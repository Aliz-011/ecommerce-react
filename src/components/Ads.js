export default function Ads() {
  return (
    <section className="container max-w-7xl mx-auto">
      <div className="grid grid-cols-4 gap-5 h-96">
        <div className="flex relative bg-black rounded h-full">
          <img
            src="/images/brand-06.png"
            alt="ads"
            className="w-2/3 h-2/3 object-contain mx-auto mt-auto"
          />
          <div className="absolute text-white space-y-2 top-10 left-5">
            <h1 className="font-light text-sm">Big Screen</h1>
            <p className="text-2xl font-semibold">Smart TV Android 10</p>
            <p className="text-sm font-extralight">
              From $900 or $75/mo. for 12 mo*
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
