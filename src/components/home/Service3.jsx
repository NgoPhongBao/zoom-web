import React from "react";

export default function Service3() {
  return (
    <section className="service3 mb-16 lg:mb-32 relative">
      <div className="container mx-auto">
        <p
          className="text-xl lg:text-4xl uppercase text-center font-bold leading-6 lg:leading-[55px]"
          data-aos="fade-up"
        >
          <span className="relative">
            livestream
            <span className="absolute i-circle"></span>
          </span>
        </p>
        <div className="flex justify-center gap-2 lg:gap-5 mt-4 lg:mt-12">
          <img
            src="/images/services/service-3-1.jpg"
            alt="service"
            className="h-[200px] lg:h-auto w-1/2 rounded-xl object-cover"
            data-aos="fade-up"
          />
          <img
            src="/images/services/service-3-2.jpg"
            alt="service"
            className="h-[200px] lg:h-auto w-1/2 rounded-xl object-cover"
            data-aos="fade-up"
          />
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
      <div className="element two animation-moving-left-right-two z-[-1] absolute hidden lg:block"></div>
    </section>
  );
}
