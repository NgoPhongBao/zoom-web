import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";

const settings = {
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  modules: [Pagination, Autoplay],
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 15,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
  speed: 1000,
};

export default function Project() {
  return (
    <section
      className="mt-16 lg:mt-20 relative z-10 bg-cyan-900 text-white py-12 service-detail-project"
      data-aos="fade-up"
    >
      <div className="container mx-auto">
        <p className="font-bold uppercase text-xl lg:text-3xl leading-6 lg:leading-[55px] text-center">
          Dự án thực tế được thi công bởi
        </p>
        <img
          src="/images/quang-cao-zoom-logo.png"
          alt="logo"
          className="h-16 object-contain mx-auto mt-1"
        />
        <Swiper {...settings} className="w-full mt-10">
          <SwiperSlide>
            <div>
              <iframe
                className="w-full h-64 rounded-xl"
                src="https://www.youtube.com/embed/pRxQw_0yRrA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <iframe
                className="w-full h-64 rounded-xl"
                src="https://www.youtube.com/embed/J_ywlojWnPU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <iframe
                className="w-full h-64 rounded-xl"
                src="https://www.youtube.com/embed/yqTNk5j0v3o"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <iframe
                className="w-full h-64 rounded-xl"
                src="https://www.youtube.com/embed/J_ywlojWnPU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <iframe
                className="w-full h-64 rounded-xl"
                src="https://www.youtube.com/embed/yqTNk5j0v3o"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination mt-5 lg:mt-8"></div>
      </div>
    </section>
  );
}
