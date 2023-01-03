import React from "react";

export default function Service4() {
  return (
    <section className="service4 mb-16 lg:mb-32 relative">
      <div className="container mx-auto" >
        <p className="text-xl lg:text-4xl lg:w-1/2 leading-6 lg:leading-[55px]" data-aos="fade-up">
          Cho thuê
          <br />
          <span className="font-bold uppercase">
            phim trường - thiết bị quay phim - âm thanh - ánh sáng
          </span>
        </p>
        <div className="flex flex-wrap lg:flex-nowrap gap-2 lg:gap-4 mt-4 lg:mt-12 justify-center">
          <div className="w-full lg:w-1/2 flex flex-wrap gap-2 lg:gap-4">
            <div className="w-full hidden lg:block">
              <img
                src="/images/services/service-4-1.jpg"
                alt="service"
                className="rounded-xl"
                data-aos="fade-up"
                data-aos-duration="500"
              />
            </div>
            <div className="flex gap-2 lg:gap-4">
              <div className="w-1/2">
                <img
                  src="/images/services/service-4-2.jpg"
                  alt="service"
                  className="rounded-xl"
                  data-aos="fade-up"
                  data-aos-duration="500"
                />
              </div>
              <div className="w-1/2">
                <img
                  src="/images/services/service-4-3.jpg"
                  alt="service"
                  className="rounded-xl"
                  data-aos="fade-up"
                  data-aos-duration="500"
                />
              </div>
            </div>
            <div className="w-full">
              <img
                src="/images/services/service-4-4.jpg"
                alt="service"
                className="rounded-xl"
                data-aos="fade-up"
                data-aos-duration="500"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 hidden lg:block">
            <img
              src="/images/services/service-4-5.jpg"
              alt="service"
              className="h-full object-cover rounded-xl"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-duration="500"
            />
          </div>
        </div>
        <div className="text-center mt-5 lg:mt-10">
          <button
            className="bg-red-500 hover:bg-red-400 px-3 py-1 lg:px-5 lg:py-2 text-white rounded-full"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </section>
  );
}
