export default function Ads() {
  return (
    <section className="container max-w-7xl mx-auto">
      <div className="grid grid-cols-4 gap-5">
        <div className="flex relative bg-black">
          <img
            src="/images/brand-06.png"
            alt="ads"
            className="object-contain w-full h-full"
          />
          <div className="absolute text-white">
            <h1>Big Screen</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
