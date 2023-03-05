import React, { useState } from "react";
import Link from "next/link";
import { Tabs } from "antd";
import useTrans from "../../hooks/useTrans";
import { useRouter } from "next/router";
import { Masonry } from "masonic";

export default function index({ services, store }) {
  const [activeKey, setActiveKey] = useState("0");
  const trans = useTrans();
  const { locale } = useRouter();

  const allImg = [];
  services.forEach((el, index) => {
    const projectImgs = el.projectImg ? JSON.parse(el.projectImg) : [];
    projectImgs.forEach((img, idx) => {
      allImg.push({
        id: index + idx,
        img: img.img,
        description: locale === "vi" ? img.description_VN : img.description_EN,
      });
    });
  });

  const projects = services.map((el, index) => {
    const elImgs = (el.projectImg ? JSON.parse(el.projectImg) : []).map(
      (img) => {
        return {
          id: index + img,
          img: img.img,
          description:
            locale === "vi" ? img.description_VN : img.description_EN,
        };
      }
    );
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
              <div key={props.data.img} data-aos="fade-up">
                <img
                  src={props.data.img}
                  alt=""
                  className="rounded-xl object-contain w-full"

                  // data-aos-delay={100 * index}
                />
                <p className="font-semibold text-lg text-center">
                  {" "}
                  {props.data.description}
                </p>
              </div>
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
              src={store.projectBanner}
              alt="Banner service detail"
              className="max-h-[250px] w-full object-cover"
            />
            <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)]">
              <p className="text-lg lg:text-2xl text-white text-center font-bold uppercase ">
                {locale === "vi" ? store.projectTitle_VN : store.projectTitle_EN}
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
                        <div key={props.data.img} data-aos="fade-up">
                          <img
                            src={props.data.img}
                            alt=""
                            className="rounded-xl object-contain w-full"

                            // data-aos-delay={100 * index}
                          />
                          <p className="font-semibold text-lg text-center">
                            {" "}
                            {props.data.description}
                          </p>
                        </div>
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
