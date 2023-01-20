import React from "react";
import Link from "next/link";

export default function Rental({ data, trans, services }) {
  const newData = { ...data, content: JSON.parse(data.content) };

  return (
    <section className="service4 mb-16 lg:mb-32 relative">
      <div className="container mx-auto">
        <p className="text-xl lg:text-4xl w-1/2 leading-6 lg:leading-[55px]">
          {trans.cho_thue}
          <br />
          <span className="font-bold uppercase">
            {trans.phim_truong_thiet_bi_am_thanh_anh_sang}
          </span>
        </p>
        <div className="flex flex-wrap lg:flex-nowrap gap-2 lg:gap-4 mt-4 lg:mt-12 justify-center">
          <div className="w-full lg:w-1/2 flex flex-wrap gap-2 lg:gap-4">
            <div className="w-full hidden lg:block">
              <Link
                href={`dich-vu/${
                  services.find(
                    (el) => el.type === (newData.content[0]?.type || "")
                  )?.url || "/"
                }`}
              >
                <img
                  src={newData.content[0]?.img}
                  alt="service"
                  className="rounded-xl"
                  data-aos="fade-up"
                />
              </Link>
            </div>
            <div className="flex gap-2 lg:gap-4">
              <div className="w-1/2">
                <Link
                  href={`dich-vu/${
                    services.find(
                      (el) => el.type === (newData.content[1]?.type || "")
                    )?.url || "/"
                  }`}
                >
                  <img
                    src={newData.content[1]?.img}
                    alt="service"
                    className="rounded-xl"
                    data-aos="fade-up"
                  />
                </Link>
              </div>
              <div className="w-1/2">
                <Link
                  href={`dich-vu/${
                    services.find(
                      (el) => el.type === (newData.content[2]?.type || "")
                    )?.url || "/"
                  }`}
                >
                  <img
                    src={newData.content[2]?.img}
                    alt="service"
                    className="rounded-xl"
                    data-aos="fade-up"
                  />
                </Link>
              </div>
            </div>
            <div className="w-full">
              <Link
                href={`dich-vu/${
                  services.find(
                    (el) => el.type === (newData.content[3]?.type || "")
                  )?.url || "/"
                }`}
              >
                <img
                  src={newData.content[3]?.img}
                  alt="service"
                  className="rounded-xl"
                  data-aos="fade-up"
                />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 hidden lg:block">
            <Link
              href={`dich-vu/${
                services.find(
                  (el) => el.type === (newData.content[4]?.type || "")
                )?.url || "/"
              }`}
            >
              <img
                src={newData.content[4]?.img}
                alt="service"
                className="rounded-xl h-full object-cover"
                data-aos="fade-up"
              />
            </Link>
          </div>
        </div>
        {/* <div className="text-center mt-5 lg:mt-10">
          <Link href="/dich-vu-thiet-ke-thi-cong-san-khau">
            <button
              className="bg-[#e40900] hover:bg-red-400 px-3 py-1 lg:px-5 lg:py-2 text-white rounded-full"
            >
              {trans.see_detail}
            </button>
          </Link>
        </div> */}
      </div>
    </section>
  );
}
