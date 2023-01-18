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
  breakpoints: {
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 9,
    },
  },
};

export default function Customer({ customers, trans }) {
  const newData = {
    ...customers[0],
    imageUrl: JSON.parse(customers[0].imageUrl),
  };
  return (
    <section className="service5 mb-16 lg:mb-20 relative">
      <p className="text-xl lg:text-4xl leading-10 uppercase text-center font-bold">
        {trans.doi_tac}
      </p>
      <div className="mt-4 lg:mt-12 bg-red-50 px-5 py-12">
        <div data-aos="fade-zoom-in">
          <Swiper {...settings} effect={"coverflow"} className="w-full">
            {newData.imageUrl.map((img) => {
              return (
                <SwiperSlide key={img}>
                  <div className="relative">
                    <img
                      src={img}
                      alt="banner-zoom-01"
                      className="h-28 object-contain"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
