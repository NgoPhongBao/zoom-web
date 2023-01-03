import React from "react";

export default function Service() {
  return (
    <section className="relative mt-16 lg:mt-28 about-us-service z-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2">
          <p className="text-xl lg:text-3xl font-bold uppercase text-center">
            dịch vụ của
          </p>
          <img
            src="/images/quang-cao-zoom-logo.png"
            alt="logo"
            className="h-16 object-contain"
          />
        </div>
        <div className="flex justify-center gap-2 lg:gap-4 mt-4 lg:mt-12">
          <div className="flex flex-wrap gap-2 lg:gap-4  w-1/2 lg:mb-12">
            <img src="/images/about/service-1.jpg" alt="" className="w-full rounded-md lg:rounded-xl" data-aos="fade-up"/>
            <img src="/images/about/service-2.jpg" alt="" className="w-full rounded-md lg:rounded-xl" data-aos="fade-up" data-aos-deay="100"/>
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-4 w-1/2 lg:mt-12">
            <img src="/images/about/service-3.jpg" alt="" className="w-full rounded-md lg:rounded-xl" data-aos="fade-up" data-aos-deay="200"/>
            <img src="/images/about/service-4.jpg" alt="" className="w-full rounded-md lg:rounded-xl" data-aos="fade-up" data-aos-deay="300"/>
          </div>
        </div>
      </div>
      <div className="element two animation-moving-left-right-two z-[-1] absolute hidden lg:block"></div>
    </section>
  );
}
