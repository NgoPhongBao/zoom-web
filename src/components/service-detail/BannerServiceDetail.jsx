import React from "react";

export default function BannerServiceDetail({ service, locale }) {
  return (
    <section className="mt-4">
      <div className="container mx-auto">
        <div
          className="relative rounded-md lg:rounded-3xl overflow-hidden"
          data-aos="fade-zoom-in"
        >
          <img
            src={service.bannerUrl}
            alt="Banner service detail"
            className="max-h-[250px] w-full object-cover"
          />
          <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)]">
            <p className="text-lg lg:text-2xl text-white text-center font-bold uppercase ">
              {locale === "vi" ? service.name_VN : service.name_EN}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
