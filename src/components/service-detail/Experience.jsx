import React from "react";
import { Collapse } from "antd";

export default function Experience({ trans, service, locale }) {
  const collapseContentEN = JSON.parse(service.contentCollapse_EN);
  const collapseContentVI = JSON.parse(service.contentCollapse_VN);

  return (
    <section className="mt-16 lg:mt-20 relative service-detail-experience-accordion z-10">
      <div className="container mx-auto">
        <p
          className="font-bold uppercase text-xl lg:text-3xl lg:w-[40%] leading-6 lg:leading-[55px]"
          data-aos="fade-up"
        >
          {locale === "vi"
            ? service.collapseTitle_VN
            : service.collapseTitle_EN}
        </p>
        <div className="mt-4 lg:mt-8" data-aos="fade-up">
          <Collapse
            // defaultActiveKey={["1"]}
            bordered={false}
            className="bg-none"
            expandIcon={() => (
              <span
                className="icofont-simple-down"
                style={{ fontSize: "20px" }}
              ></span>
            )}
            accordion
          >
            {(locale === "vi" ? collapseContentVI : collapseContentEN).map(
              (el) => {
                return (
                  <Collapse.Panel
                    header={<p className="font-bold text-lg">{el.title}</p>}
                    key={el.title}
                  >
                    <p>{el.content}</p>
                  </Collapse.Panel>
                );
              }
            )}
          </Collapse>
        </div>
      </div>
      <div className="element two animation-moving-left-right-two z-[-1] absolute hidden lg:block"></div>
    </section>
  );
}
