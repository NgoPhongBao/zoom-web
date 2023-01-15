import React, {useState} from "react";
import Link from "next/link";
import { Tabs } from "antd";

export default function index() {
  const [activeKey, setActiveKey] = useState(1)

  return (
    <>
      <section>
        <div className="container mx-auto my-10">
          <div className="flex gap-2">
            <Link href={"/"}>Trang chủ</Link>/
            <span className="opacity-60">Dự án</span>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div className="container mx-auto">
          <div
            className="relative rounded-md lg:rounded-3xl overflow-hidden"
            data-aos="fade-zoom-in"
          >
            <img
              src="/images/services/banner-service-detail.jpg"
              alt="Banner service detail"
              className="max-h-[250px] w-full object-cover"
            />
            <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)]">
              <p className="text-lg lg:text-2xl text-white text-center font-bold uppercase ">
                các dự án zoom media tham gia và hợp tác
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 lg:mt-20 project-project">
        <div className="container mx-auto">
          <Tabs
            centered
            activeKey={activeKey}
            onChange={(key) => setActiveKey(key)}
            items={[
              {
                label: <p className="px-5 py-2">Tất cả</p>,
                key: 1,
                children: (
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    <div className="flex gap-4 flex-wrap">
                      <img
                        src="/images/project/project-1.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-2.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-3.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                    </div>
                    <div className="flex gap-4 flex-wrap">
                      <img
                        src="/images/project/project-4.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-5.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-6.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                    </div>
                    <div className="grid grid-cols-2 lg:flex gap-4 flex-wrap col-span-2 lg:col-span-1">
                      <img
                        src="/images/project/project-7.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-8.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-9.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                    </div>
                  </div>
                ),
              },
              {
                label: (
                  <p className="px-5 py-2">Cho thuê phim trường - thiết bị</p>
                ),
                key: 2,
                children: (
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    <div className="flex gap-4 flex-wrap">
                      <img
                        src="/images/project/project-1.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-2.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-3.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                    </div>
                    <div className="flex gap-4 flex-wrap">
                      <img
                        src="/images/project/project-7.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-8.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-9.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                    </div>
                    <div className="grid grid-cols-2 lg:flex gap-4 flex-wrap col-span-2 lg:col-span-1">
                      <img
                        src="/images/project/project-4.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-5.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-6.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                    </div>
                  </div>
                ),
              },
              {
                label: <p className="px-5 py-2">Livestreaming</p>,
                key: 3,
                children: (
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    <div className="flex gap-4 flex-wrap">
                      <img
                        src="/images/project/project-7.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-8.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-9.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                    </div>
                    <div className="flex gap-4 flex-wrap">
                      <img
                        src="/images/project/project-1.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-2.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-3.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                    </div>

                    <div className="grid grid-cols-2 lg:flex gap-4 flex-wrap col-span-2 lg:col-span-1">
                      <img
                        src="/images/project/project-4.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-5.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-6.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                    </div>
                  </div>
                ),
              },
              {
                label: <p className="px-5 py-2">Sản xuất video</p>,
                key: 4,
                children: (
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    <div className="flex gap-4 flex-wrap">
                      <img
                        src="/images/project/project-1.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-2.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-3.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                    </div>
                    <div className="flex gap-4 flex-wrap">
                      <img
                        src="/images/project/project-7.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-8.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-9.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                    </div>

                    <div className="grid grid-cols-2 lg:flex gap-4 flex-wrap col-span-2 lg:col-span-1">
                      <img
                        src="/images/project/project-4.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-5.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                      <img
                        src="/images/project/project-6.jpg"
                        alt=""
                        className="rounded-xl object-cover w-full"
                        data-aos="fade-up"
                      />
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
