import React from "react";
import Link from "next/link";

export default function Service5() {
  return (
    <section className="service5 mb-16 lg:mb-32 relative">
      <div className="container mx-auto">
        <p
          className="text-xl lg:text-4xl leading-6 lg:leading-[55px] uppercase text-center"
        >
          <span className="font-bold">thiết kế - thi công </span>
          sân khấu
        </p>
        <div className="mt-4 lg:mt-12">
          <img
            src="/images/services/service-5-1.jpg"
            alt="service"
            className="w-full object-cover rounded-xl lg:rounded-3xl"
            data-aos="fade-up"
          />
        </div>
        <div className="text-center mt-5 lg:mt-10">
          <Link href="/dich-vu-thiet-ke-thi-cong-san-khau">
            <button
              className="bg-[#e40900] hover:bg-red-400 px-3 py-1 lg:px-5 lg:py-2 text-white rounded-full"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              Xem chi tiết
            </button>
          </Link>
        </div>
      </div>
      <div className="element two animation-moving-left-right-two z-[-1] absolute hidden lg:block"></div>
    </section>
  );
}
