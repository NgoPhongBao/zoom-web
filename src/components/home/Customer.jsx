import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const settings = {
  slidesPerView: 3,
  modules: [Autoplay],
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 10,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints:{
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 9,
    },
  }
};

export default function Customer() {
  return (
    <section className="service5 mb-16 lg:mb-20 relative">
      <p
        className="text-xl lg:text-4xl leading-10 uppercase text-center font-bold"
      >
        đối tác
      </p>
      <div className="mt-4 lg:mt-12 bg-red-50 px-5 py-12">
        <div data-aos="fade-zoom-in">
          <Swiper {...settings} effect={"coverflow"} className="w-full">
            <SwiperSlide>
              <div className="relative">
                <img
                  src="/images/customers/samsung.png"
                  alt="banner-zoom-01"
                  className="h-28 object-contain rounded-3xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src="/images/customers/adam.png"
                  alt="banner-zoom-01"
                  className="h-28 object-contain rounded-3xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src="/images/customers/viettel.png"
                  alt="banner-zoom-01"
                  className="h-28 object-contain rounded-3xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src="/images/customers/shopee.png"
                  alt="banner-zoom-01"
                  className="h-28 object-contain rounded-3xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src="/images/customers/tiger.png"
                  alt="banner-zoom-01"
                  className="h-28 object-contain rounded-3xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src="/images/customers/biasaigon.png"
                  alt="banner-zoom-01"
                  className="h-28 object-contain rounded-3xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src="/images/customers/grab.png"
                  alt="banner-zoom-01"
                  className="h-28 object-contain rounded-3xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src="/images/customers/vivo.png"
                  alt="banner-zoom-01"
                  className="h-28 object-contain rounded-3xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src="/images/customers/mykolor.png"
                  alt="banner-zoom-01"
                  className="h-28 object-contain rounded-3xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src="/images/customers/huyndai.png"
                  alt="banner-zoom-01"
                  className="h-28 object-contain rounded-3xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src="/images/customers/mbbank.png"
                  alt="banner-zoom-01"
                  className="h-28 object-contain rounded-3xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src="/images/customers/techcombank.png"
                  alt="banner-zoom-01"
                  className="h-28 object-contain rounded-3xl"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
