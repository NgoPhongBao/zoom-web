import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <>
      {/* breadcrumb */}
      <section>
        <div className="container mx-auto my-10">
          <div className="flex gap-2">
            <Link href={"/"}>Trang chủ</Link>/
            <span className="opacity-60">Khách hàng</span>
          </div>
        </div>
      </section>
      {/* intro */}
      <section className="customer-intro relative mb-16 lg:mb-32 mt-16 lg:mt-36">
        <div className="container mx-auto">
          <div className="flex justify-center lg:justify-between flex-wrap lg:flex-nowrap lg:gap-6">
            <div className="service1-content w-full lg:w-1/2">
              <p className="text-2xl lg:text-4xl uppercase leading-6 lg:leading-[55px] mx-auto mb-4">
                <span className="font-bold">trực tiếp - gián tiếp </span>
                thực hiện các dự án cho các đối tác
                <span className="font-bold"> trong và ngoài nước</span>
              </p>
            </div>
            <div className="service1-image flex items-center justify-center lg:w-1/2 gap-3 lg:gap-5">
              <img
                src="/images/customers/customer-intro-1.jpg"
                alt="service-1"
                className="w-1/2 object-contain rounded-xl"
                data-aos="fade-up"
                data-aos-delay="100"
              />
              <img
                src="/images/customers/customer-intro-2.jpg"
                alt="service-2"
                className="w-1/2 object-contain rounded-xl"
                data-aos="fade-up"
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
            đối tác
          </p>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-10 lg:mt-20" data-aos="fade-up">
            <div>
              <img
                src="/images/customers/samsung.png"
                alt="banner-zoom-01"
                className="h-24 lg:h-36 object-contain mx-auto"
              />
            </div>
            <div>
              <img
                src="/images/customers/adam.png"
                alt="banner-zoom-01"
                className="h-24 lg:h-36 object-contain mx-auto"
              />
            </div>
            <div>
              <img
                src="/images/customers/viettel.png"
                alt="banner-zoom-01"
                className="h-24 lg:h-36 object-contain mx-auto"
              />
            </div>
            <div>
              <img
                src="/images/customers/shopee.png"
                alt="banner-zoom-01"
                className="h-24 lg:h-36 object-contain mx-auto"
              />
            </div>
            <div>
              <img
                src="/images/customers/tiger.png"
                alt="banner-zoom-01"
                className="h-24 lg:h-36 object-contain mx-auto"
              />
            </div>
            <div>
              <img
                src="/images/customers/biasaigon.png"
                alt="banner-zoom-01"
                className="h-24 lg:h-36 object-contain mx-auto"
              />
            </div>
            <div>
              <img
                src="/images/customers/grab.png"
                alt="banner-zoom-01"
                className="h-24 lg:h-36 object-contain mx-auto"
              />
            </div>
            <div>
              <img
                src="/images/customers/vivo.png"
                alt="banner-zoom-01"
                className="h-24 lg:h-36 object-contain mx-auto"
              />
            </div>
            <div>
              <img
                src="/images/customers/mykolor.png"
                alt="banner-zoom-01"
                className="h-24 lg:h-36 object-contain mx-auto"
              />
            </div>
            <div>
              <img
                src="/images/customers/huyndai.png"
                alt="banner-zoom-01"
                className="h-24 lg:h-36 object-contain mx-auto"
              />
            </div>
            <div>
              <img
                src="/images/customers/mbbank.png"
                alt="banner-zoom-01"
                className="h-24 lg:h-36 object-contain mx-auto"
              />
            </div>
            <div>
              <img
                src="/images/customers/techcombank.png"
                alt="banner-zoom-01"
                className="h-24 lg:h-36 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
