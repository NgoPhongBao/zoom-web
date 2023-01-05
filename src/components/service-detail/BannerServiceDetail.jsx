import React from "react";

export default function BannerServiceDetail() {
  return (
    <section className="mt-4">
      <div className="container mx-auto">
        <div className="relative rounded-md lg:rounded-3xl overflow-hidden" data-aos="fade-zoom-in">
          <img
            src="/images/services/banner-service-detail.jpg"
            alt="Banner service detail"
            className="h-[150px] lg:h-[250px] max-h-[250px] w-full object-cover"
          />
          <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)]">
            <p className="text-lg lg:text-2xl text-white text-center font-bold uppercase ">
              thiết kế thi công sân khấu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
