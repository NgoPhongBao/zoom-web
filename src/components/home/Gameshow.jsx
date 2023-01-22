import React from "react";
import Link from "next/link";

export default function Gameshow({ data, trans, services }) {
  const newData = { ...data, content: JSON.parse(data.content) };

  return (
    <section className="service1 relative mb-16 lg:mb-32 w-full">
      <div className="container mx-auto">
        <div className="flex justify-center lg:justify-between flex-wrap lg:flex-nowrap lg:gap-6">
          <div className="service1-content w-full lg:w-1/2 lg:text-center">
            <p className="text-xl lg:text-3xl uppercase leading-6 lg:leading-[55px] lg:w-10/12 mx-auto">
              {trans.organization} <br />
              <span className="font-bold text-2xl lg:text-4xl">
                {trans.event_gameshow_production}
              </span>{" "}
              <br />
              {trans.all_in_one}
            </p>
            <Link
              href={`/dich-vu/${
                services.find((el) => el.type === "video")?.url
              }`}
            >
              <button className="bg-[#e40900] hover:bg-red-400 px-3 py-1 lg:px-5 lg:py-2 text-white rounded-full mt-5">
                {trans.see_detail}
              </button>
            </Link>
          </div>
          <div className="service1-image flex items-center justify-center lg:w-1/2 gap-3 lg:gap-5">
            <img
              src={newData.content[0]?.img}
              alt="service-1"
              className="w-1/2 object-cover rounded-xl"
              data-aos="fade-up"
            />
            <img
              src={newData.content[1]?.img}
              alt="service-2"
              className="w-1/2 object-cover rounded-xl h-[200px] md:h-[400px]"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
      <div className="element one animation-moving-left-right-three z-0 absolute hidden lg:block"></div>
    </section>
  );
}
