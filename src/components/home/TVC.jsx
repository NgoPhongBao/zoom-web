import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-coverflow";

const settings = {
  slidesPerView: 1,
  modules: [EffectCards],
  grabCursor: true,
  centeredSlides: true,
  cardsEffect: {
    perSlideOffset: 60,
    perSlideRotate: 0,
    rotate: true,
    slideShadows: true,
  },
  initialSlide: 1,
  loop: true,
};

export default function TVC({ data, trans, services }) {
  const newData = { ...data, content: JSON.parse(data.content) };
  
  return (
    <section className="service2 mb-16 lg:mb-32">
      <div className="container mx-auto rounded-3xl overflow-hidden">
        <p className="text-xl lg:text-4xl uppercase text-center pt-4 leading-6 lg:leading-[55px]">
          {trans.produce} <span className="font-bold">TVC - KV - BILLBOARD</span>
        </p>
        <div className="lg:mt-12">
          <Swiper {...settings} effect={"cards"} data-aos="fade-up">
            <SwiperSlide className="p-8 sm:px-16 lg:px-24 pt-10">
              <Link
                href={`/dich-vu/${
                  services.find((el) => el.type === "video")?.url
                }`}
              >
                <div>
                  <img
                    src={newData.content[0]?.img}
                    alt="banner-zoom-01"
                    className=" w-full object-cover rounded-lg lg:rounded-[40px] transition-all duration-300"
                  />
                  <p className="font-bold lg:text-2xl uppercase text-center">
                    TVC
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="p-8 sm:px-16 lg:px-24 pt-10">
              <Link
                href={`/dich-vu/${
                  services.find((el) => el.type === "video")?.url
                }`}
              >
                <div>
                  <img
                    src={newData.content[1]?.img}
                    alt="banner-zoom-01"
                    className=" w-full object-cover rounded-lg lg:rounded-[40px] transition-all duration-300"
                  />
                  <p className="font-bold lg:text-2xl uppercase text-center">
                    KV
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="p-8 sm:px-16 lg:px-24 pt-10">
              <Link
                href={`/dich-vu/${
                  services.find((el) => el.type === "video")?.url
                }`}
              >
                <div>
                  <img
                    src={newData.content[2]?.img}
                    alt="banner-zoom-01"
                    className=" w-full object-cover rounded-lg lg:rounded-[40px] transition-all duration-300"
                  />
                  <p className="font-bold lg:text-2xl uppercase text-center">
                    BILLBOARD
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* <div className="text-center">
          <Link href="/dich-vu-thiet-ke-thi-cong-san-khau">
            <button
              className="bg-[#e40900] hover:bg-red-400 px-3 py-1 lg:px-5 lg:py-2 text-white rounded-full"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              {trans.see_detail}
            </button>
          </Link>
        </div> */}
      </div>
    </section>
  );
}
