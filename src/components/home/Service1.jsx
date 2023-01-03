import React from "react";

export default function Service1() {
  return (
    <section className="service1 relative mb-16 lg:mb-32 w-full">
      <div className="container mx-auto">
        <div className="flex justify-center lg:justify-between flex-wrap lg:flex-nowrap lg:gap-6">
          <div className="service1-content w-full lg:w-1/2 lg:text-center">
            <p
              className="text-xl lg:text-3xl uppercase leading-6 lg:leading-[55px] lg:w-10/12 mx-auto"
              data-aos="fade-up"
            >
              Tổ chức <br />
              <span className="font-bold text-2xl lg:text-4xl">
                Sự kiện - sản xuất gameshow
              </span>{" "}
              <br />
              trọn gói
            </p>
            <button
              className="bg-red-500 hover:bg-red-400 px-3 py-1 lg:px-5 lg:py-2 text-white rounded-full mt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Xem chi tiết
            </button>
          </div>
          <div className="service1-image flex items-center justify-center lg:w-1/2 gap-3 lg:gap-5">
            <img
              src="/images/services/service-1-1.jpg"
              alt="service-1"
              className="w-1/2 object-contain rounded-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <img
              src="/images/services/service-1-2.jpg"
              alt="service-2"
              className="w-1/2 object-contain rounded-xl"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
      <div className="element one animation-moving-left-right-three z-0 absolute hidden lg:block"></div>
    </section>
  );
}
