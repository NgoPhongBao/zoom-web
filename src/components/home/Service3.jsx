import React from "react";

export default function Service3() {
  return (
    <section className="service3 mb-16 lg:mb-24 relative">
      <div className="container mx-auto" data-aos="fade-up">
        <p className="text-xl lg:text-4xl uppercase text-center font-bold">
          <span className="relative">
            livestream
            <span className="absolute i-circle"></span>
          </span>
        </p>
        <div className="flex justify-center gap-5 mt-20">
          <img
            src="/images/services/service-3-1.jpg"
            alt="service"
            className="w-1/2 rounded-xl object-cover"
            data-aos="fade-up-right"
          />
          <img
            src="/images/services/service-3-2.jpg"
            alt="service"
            className="w-1/2 rounded-xl object-cover"
            data-aos="fade-up-left"
          />
        </div>
      </div>
      <div class="element-group">
        <div class="element two animation-moving-left-right-two"></div>
      </div>
    </section>
  );
}
