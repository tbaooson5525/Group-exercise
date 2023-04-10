export default function Location() {
  return (
    <section>
      {/* Container */}
      <div className="my-12 mx-4">
        {/* Location-container */}
        <div className="relative mx-auto max-w-full">
          <div className="">
            <img
              className="w-full h-[280px] lg:h-[400px] object-cover"
              src="https://cdn.shopify.com/s/files/1/0691/4641/files/poketo_d32cc356-f79d-464c-8f1a-e0963921d82b_1380x400_crop_center.jpg?v=1613532931"
              alt=""
            />
          </div>
          <div className="text-center text-base mt-5 lg:absolute lg:left-2/4 lg:top-2/4 lg:-translate-x-2/4 lg:-translate-y-2/4 lg:border lg:p-6 bg-white">
            <h4 className="pb-5 font-medium text-gray-600">VICTORIA LOCATION</h4>
            <p className="pb-1.5 font-extralight">1221 Broad Street</p>
            <p className="pb-1.5 font-extralight">Tuesday to Sunday: 10 - 5</p>
            <p className="font-extralight">+1 (250) 555-5555</p>
          </div>
        </div>
      </div>
    </section>
  );
}
