import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import api from "../../service/apiService";

const settings = {
  slidesPerView: 1,
  modules: [Navigation, Pagination, EffectCoverflow],
  loop: true,
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
    dynamicBullets: true,
  },
  pagination: { clickable: true },
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
};

function Banner({ banners }) {
  return (
    <section className="mainbanner relative mb-20 lg:mb-56 mt-10">
      <div className="container mx-auto">
        <div className="relative z-10" data-aos="fade-zoom-in">
          <div className="rounded-lg lg:rounded-[50px] overflow-hidden">
            <Swiper {...settings} effect={"coverflow"} className="w-full">
              {banners.map((banner) => {
                return (
                  <SwiperSlide key={banner.id}>
                    <div className="relative h-full max-h-[550px]">
                      <img
                        src={banner.imageUrl}
                        alt="banner-zoom-01"
                        className="h-full w-full object-cover rounded-xl lg:rounded-3xl"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="swiper-btn-prev cursor-pointer hidden lg:block">
            <i className="icofont-thin-left text-3xl lg:text-[60px] text-red-500"></i>
          </div>
          <div className="swiper-btn-next cursor-pointer hidden lg:block">
            <i className="icofont-thin-right text-3xl lg:text-[60px] text-red-500"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner
