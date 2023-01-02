import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

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

export default function Banner() {
  return (
    <section className="mainbanner relative mt-28 mb-20 lg:mb-56">
      <div className="container mx-auto">
        <div className="relative z-10" data-aos="fade-zoom-in">
          <div className="rounded-lg lg:rounded-[50px] overflow-hidden">
            <Swiper {...settings} effect={"coverflow"} className="w-full">
              <SwiperSlide>
                <div className="relative">
                  <img
                    src="/images/banners/banner-zoom-01.jpg"
                    alt="banner-zoom-01"
                    className="max-h-[550px] w-full object-cover rounded-3xl"
                  />
                  {/* <div
                    className="absolute text-white text-center contentbanner"
                    style={{
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      left: "50%",
                    }}
                  >
                    <p className="uppercase text-2xl">Công ty</p>
                    <p className="uppercase text-3xl font-bold">
                      Sản xuất video, livestream và cho thuê thiết bị
                    </p>
                    <p className="uppercase text-2xl">Hàng đầu việt nam</p>
                  </div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative">
                  <img
                    src="/images/banners/banner-zoom-02.jpg"
                    alt="banner-zoom-02"
                    className="max-h-[550px] w-full object-cover rounded-3xl"
                  />
                  {/* <div
                    className="absolute text-white text-center contentbanner"
                    style={{
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      left: "50%",
                    }}
                  >
                    <p className="uppercase text-2xl">Công ty</p>
                    <p className="uppercase text-3xl font-bold">
                      Sản xuất video, livestream và cho thuê thiết bị
                    </p>
                    <p className="uppercase text-2xl">Hàng đầu việt nam</p>
                  </div> */}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="swiper-btn-prev cursor-pointer">
            <i className="icofont-thin-left text-3xl lg:text-[60px] text-red-500"></i>
          </div>
          <div className="swiper-btn-next cursor-pointer">
            <i className="icofont-thin-right text-3xl lg:text-[60px] text-red-500"></i>
          </div>
        </div>
      </div>
     
    </section>
  );
}
