import React from "react";

export default function Service5() {
  return (
    <section className="service5 mb-16 lg:mb-32 relative">
      <div className="container mx-auto">
        <p
          className="text-xl lg:text-4xl leading-10 uppercase text-center"
          data-aos="fade-up"
        >
          <span className="font-bold">thiết kế - thi công</span>
          sân khấu
        </p>
        <div className="mt-8 lg:mt-16">
          <img
            src="/images/services/service-5-1.jpg"
            alt="service"
            className="w-full object-cover rounded-3xl"
            data-aos="fade-up"
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
      <div class="element-group">
        <div class="element two animation-moving-left-right-two"></div>
      </div>
    </section>
  );
}
