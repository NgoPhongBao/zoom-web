import React from "react";
import Link from "next/link";
import useTrans from "../../hooks/useTrans";
import api from "../../service/apiService";

export default function index({ customers }) {
  const trans = useTrans();
  const customersParsed = {
    ...customers[0],
    imageUrl: JSON.parse(customers[0].imageUrl),
    aboutImg: JSON.parse(customers[0].aboutImg),
  };
  return (
    <main>
      {/* breadcrumb */}
      <section>
        <div className="container mx-auto my-10">
          <div className="flex gap-2">
            <Link href={"/"}>{trans.home}</Link>/
            <span className="opacity-60">{trans.customer}</span>
          </div>
        </div>
      </section>
      {/* intro */}
      <section className="customer-intro relative mb-16 lg:mb-32 mt-16 lg:mt-36">
        <div className="container mx-auto">
          <div className="flex justify-center lg:justify-between flex-wrap lg:flex-nowrap lg:gap-6">
            <div className="service1-content w-full lg:w-1/2">
              <p className="text-2xl lg:text-4xl uppercase leading-6 lg:leading-[55px] mx-auto mb-4">
                <span className="font-bold">{trans.truc_tiep_gian_tiep}</span>{" "}
                {trans.thuc_hien_cac_du_an_cho_cac_doi_tac}
                <span className="font-bold"> {trans.trong_va_ngoai_nuoc}</span>
              </p>
            </div>
            <div className="service1-image flex items-center justify-center lg:w-1/2 gap-3 lg:gap-5">
              <img
                src={customersParsed.aboutImg[0]}
                alt="service-1"
                className="w-1/2 object-contain rounded-xl"
                data-aos="fade-up"
              />
              <img
                src={customersParsed.aboutImg[1]}
                alt="service-2"
                className="w-1/2 object-contain rounded-xl"
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </div>
          </div>
        </div>
        <div className="element one animation-moving-left-right-three z-0 absolute hidden lg:block"></div>
      </section>
      {/* customer */}
      <section className="customer-customer mb-16 lg:mb-32 mt-16 lg:mt-36 bg-teal-900  p-14 lg:-24">
        <div className="container mx-auto">
          <p className="text-2xl lg:text-4xl uppercase leading-6 lg:leading-[55px] text-white font-bold text-center">
            {trans.doi_tac}
          </p>
          <div
            className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-10 lg:mt-20"
            data-aos="fade-up"
          >
            {customersParsed.imageUrl.map((img, index) => {
              return (
                <div key={img} data-aos="fade-up" data-aos-delay={100*index}>
                  <img
                    src={img}
                    alt="banner-zoom-01"
                    className="h-24 lg:h-36 object-contain mx-auto"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await Promise.all([api.get("/partner")]);
    return {
      props: {
        customers: res[0].data || [],
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
