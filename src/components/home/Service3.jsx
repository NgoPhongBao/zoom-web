import React from "react";

export default function Service3() {
  return (
    <section className="service3 mb-16 lg:mb-32 relative">
      <div className="container mx-auto">
        <p
          className="text-xl lg:text-4xl uppercase text-center font-bold"
          data-aos="fade-up"
        >
          <span className="relative">
            livestream
            <span className="absolute i-circle"></span>
          </span>
        </p>
        <div className="flex justify-center flex-wrap lg:flex-nowrap gap-2 lg:gap-5 mt-8 lg:mt-16">
          <img
            src="/images/services/service-3-1.jpg"
            alt="service"
            className="w-full lg:w-1/2 rounded-xl object-cover"
            data-aos="fade-up-right"
          />
          <img
            src="/images/services/service-3-2.jpg"
            alt="service"
            className="w-full lg:w-1/2 rounded-xl object-cover"
            data-aos="fade-up-left"
          />
        </div>
        <div className="text-center">
          <button
            className="bg-red-500 hover:bg-red-400 px-5 py-2 text-white rounded-full mt-5 lg:mt-10"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
      <div className="element-group">
        <div className="element two animation-moving-left-right-two"></div>
      </div>
    </section>
  );
}
