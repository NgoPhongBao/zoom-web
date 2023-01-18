import React, { use, useState } from "react";
import Link from "next/link";
import { Tabs } from "antd";
import useTrans from "../../hooks/useTrans";
import { useRouter } from "next/router";
import { Masonry } from "masonic";

export default function index({ services }) {
  const [activeKey, setActiveKey] = useState("0");
  const trans = useTrans();
  const { locale } = useRouter();

  const allImg = [];
  services.forEach((el, index) => {
    const projectImgs = JSON.parse(el.projectImg) || [];
    projectImgs.forEach((img, idx) => {
      allImg.push({ id: index + idx, img });
    });
  });

  const projects = services.map((el, index) => {
    const elImgs = (JSON.parse(el.projectImg) || []).map((img) => {
      return { id: index + img, img };
    });
    return {
      label: (
        <p className="px-3 py-2">{locale === "vi" ? el.name_VN : el.name_EN}</p>
      ),
      key: (index + 1).toString(),
      children: (
        <Masonry
          items={elImgs}
          columnGutter={20}
          columnWidth={350}
          overscanBy={20}
          render={(props) => {
            return (
              <img
                key={props.data.img}
                src={props.data.img}
                alt=""
                className="rounded-xl object-cover h-full w-full"
                data-aos="fade-up"
                // data-aos-delay={100 * index}
              />
            );
          }}
        />
      ),
    };
  });

  return (
    <main>
      <section>
        <div className="container mx-auto my-10">
          <div className="flex gap-2">
            <Link href={"/"}>{trans.home}</Link>/
            <span className="opacity-60">{trans.project}</span>
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
                {trans.cac_du_an_media_da_tham_gia_va_hop_tac}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 lg:mt-20 project-project">
        <div className="container mx-auto">
          <Tabs
            // centered
            activeKey={activeKey}
            onChange={(key) => {
              setActiveKey(key);
            }}
            items={[
              {
                label: <p className="px-5 py-2">{trans.tat_ca}</p>,
                key: "0",
                children: (
                  <Masonry
                    items={allImg}
                    columnGutter={20}
                    columnWidth={350}
                    overscanBy={20}
                    render={(props) => {
                      return (
                        <img
                          key={props.data.img}
                          src={props.data.img}
                          alt=""
                          className="rounded-xl object-cover h-full w-full"
                          data-aos="fade-up"
                          // data-aos-delay={100 * index}
                        />
                      );
                    }}
                  />
                ),
              },
              ...projects,
            ]}
          />
        </div>
      </section>
    </main>
  );
}
