import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

const settings = {
  slidesPerView: 1,
  modules: [EffectCards],
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
    dynamicBullets: true,
  },
  grabCursor: true,
  centeredSlides: true,
  cardsEffect: {
    perSlideOffset: 60,
    perSlideRotate: 0,
    rotate: true,
    slideShadows: true,
  },
  initialSlide: 1,
  loop: true
};

export default function Service2() {
  return (
    <section className="service2 mb-16 lg:mb-32">
      <div className="container mx-auto rounded-3xl overflow-hidden">
        <p
          className="text-xl lg:text-4xl uppercase text-center pt-4 leading-6 lg:leading-[55px]"
          data-aos="fade-up"
        >
          Sản xuất <span className="font-bold">TVC - KV - BILLBOARD</span>
        </p>
        <div className="lg:mt-16">
          <Swiper
            {...settings}
            effect={"cards"}
            className="lg:w-[80%]"
            data-aos="fade-up"
          >
            <SwiperSlide className="p-8 sm:px-16 lg:px-24 pt-10">
              <img
                src="/images/banners/banner-zoom-01.jpg"
                alt="banner-zoom-01"
                className="object-cover rounded-lg lg:rounded-[40px] transition-all duration-300"
              />
              <p className="font-bold lg:text-2xl uppercase text-center">TVC</p>
            </SwiperSlide>
            <SwiperSlide className="p-8 sm:px-16 lg:px-24 pt-10">
              <img
                src="/images/banners/banner-zoom-02.jpg"
                alt="banner-zoom-02"
                className="object-cover rounded-lg lg:rounded-[40px]  transition-all duration-300"
              />
              <p className="font-bold lg:text-2xl uppercase text-center">KV</p>
            </SwiperSlide>
            <SwiperSlide className="p-8 sm:px-16 lg:px-24 pt-10">
              <img
                src="/images/banners/banner-zoom-03.jpg"
                alt="banner-zoom-03"
                className="object-cover rounded-lg lg:rounded-[40px]  transition-all duration-300"
              />
              <p className="font-bold lg:text-2xl uppercase text-center">
                BILLBOARD
              </p>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="text-center">
          <button
            className="bg-red-500 hover:bg-red-400 px-3 py-1 lg:px-5 lg:py-2 text-white rounded-full lg:mt-5"
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
