import React from "react";

export default function Service5() {
  return (
    <section className="service5 mb-16 lg:mb-32 relative">
      <div className="container mx-auto">
        <p
          className="text-xl lg:text-4xl leading-6 lg:leading-[55px] uppercase text-center"
          data-aos="fade-up"
        >
          <span className="font-bold">thiết kế - thi công </span>
          sân khấu
        </p>
        <div className="mt-4 lg:mt-12">
          <img
            src="/images/services/service-5-1.jpg"
            alt="service"
            className="h-[200px] lg:h-auto w-full object-cover rounded-3xl"
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
      <div className="element two animation-moving-left-right-two z-0 absolute hidden lg:block"></div>
    </section>
  );
}
