import React from "react";
import { Collapse } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default function Experience() {
  return (
    <section className="mt-16 lg:mt-20 relative service-detail-experience-accordion z-10">
      <div className="container mx-auto">
        <p
          className="font-bold uppercase text-xl lg:text-3xl lg:w-[40%] leading-6 lg:leading-[55px]"
          data-aos="fade-up"
        >
          kinh nghiệm thiết kế sân khấu chuẩn
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
            <Collapse.Panel
              header={<p className="font-bold text-lg">An toàn là trên hết</p>}
              key="1"
            >
              <p>{text}</p>
            </Collapse.Panel>
            <Collapse.Panel
              header={
                <p className="font-bold text-lg">
                  Kích thước sân khấu phù hợp với tính chất sự kiện
                </p>
              }
              key="2"
            >
              <p>{text}</p>
            </Collapse.Panel>
            <Collapse.Panel
              header={
                <p className="font-bold text-lg">
                  Hệ thống âm thanh - ánh sáng chuyên nghiệp
                </p>
              }
              key="3"
            >
              <p>{text}</p>
            </Collapse.Panel>
            <Collapse.Panel
              header={
                <p className="font-bold text-lg">
                  Hiểu rõ sự kiện tổ chức và mong muốn của khách hàng
                </p>
              }
              key="4"
            >
              <p>{text}</p>
            </Collapse.Panel>
          </Collapse>
        </div>
      </div>
      <div className="element two animation-moving-left-right-two z-[-1] absolute hidden lg:block"></div>
    </section>
  );
}
