import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";

export default function Project({ trans, service, locale }) {
  const videoUrls = JSON.parse(service.videoUrl);
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
        slidesPerView:
          videoUrls.length >= 3 ? 3 : videoUrls.length === 2 ? 2 : 1,
      },
    },
    speed: 1000,
  };
  return (
    <section className="mt-16 lg:mt-20 relative z-10 bg-[#193b3f] text-white py-12 service-detail-project">
      <div className="container mx-auto">
        <p className="font-bold uppercase text-xl lg:text-3xl leading-6 lg:leading-[55px] text-center">
          {locale === "vi" ? service.projectTitle_VN : service.projectTitle_EN}
        </p>
        <Swiper {...settings} className="w-full mt-10" data-aos="fade-zoom-in">
          {videoUrls.map((url, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <iframe
                    className="w-full h-64 rounded-xl"
                    src={`https://www.youtube.com/embed/${url.split("v=")[1]}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="swiper-pagination mt-5 lg:mt-8"></div>
      </div>
    </section>
  );
}
