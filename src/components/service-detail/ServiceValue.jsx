import React from "react";

export default function ServiceValue({ service, trans, locale }) {
  const serviceValues = JSON.parse(service.valueService);

  return (
    <section className="mt-16 lg:mt-20 ">
      <div className="container mx-auto">
        <p className="text-xl lg:text-3xl font-bold uppercase text-center">
          {trans.gia_tri_dich_vu}
        </p>
        <div className="grid lg:grid-cols-3 gap-5 mt-5 lg:mt-10 bg-gray-50 p-4 lg:p-10 rounded-xl lg:rounded-3xl">
          {serviceValues.map((el, index) => {
            return (
              <div
                className="text-center bg-white p-3 lg:p-10 rounded-xl"
                data-aos="fade-up"
                data-aos-delay={100 * index}
                key={el.title_EN}
              >
                <img src={el.img} className="h-20 object-contain mx-auto" />
                <p className="uppercase font-bold py-4">
                  {locale === "vi" ? el.title_VN : el.title_EN}
                </p>
                <p>{locale === "vi" ? el.content_VN : el.content_EN}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
