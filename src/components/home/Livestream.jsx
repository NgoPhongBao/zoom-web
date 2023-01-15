import React from "react";
import Link from "next/link";
import { services as services_const } from "../../utils/constants";

export default function Livestream({ data }) {
  const newData = { ...data, content: JSON.parse(data.content) };
  
  return (
    <section className="service3 mb-16 lg:mb-32 relative">
      <div className="container mx-auto">
        <p className="text-xl lg:text-4xl uppercase text-center font-bold leading-6 lg:leading-[55px]">
          <span className="relative">
            livestream
            <span className="absolute i-circle"></span>
          </span>
        </p>
        <div className="flex justify-center gap-2 lg:gap-5 mt-4 lg:mt-12">
          <img
            src={newData.content[0]?.img}
            alt="service"
            className="w-1/2 rounded-xl object-cover"
            data-aos="fade-up"
          />
          <img
            src={newData.content[1]?.img}
            alt="service"
            className="w-1/2 rounded-xl object-cover"
            data-aos="fade-up"
          />
        </div>
        <div className="text-center mt-5 lg:mt-10">
          <Link
            href={`/dich-vu/${
              services_const.find((el) => el.type === "livetream")?.url
            }`}
          >
            <button
              className="bg-[#e40900] hover:bg-red-400 px-3 py-1 lg:px-5 lg:py-2 text-white rounded-full"
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
