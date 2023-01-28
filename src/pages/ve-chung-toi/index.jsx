import React from "react";
import Link from "next/link";
import useTrans from "../../hooks/useTrans";
import { useRouter } from "next/router";

export default function AboutUs({ store }) {
  const trans = useTrans();
  const { locale } = useRouter();
  const coreValue = JSON.parse(store.corevalue);
  const abouttitle_1 = JSON.parse(store.abouttitle_1);
  const aboutcontent_1 = JSON.parse(store.aboutcontent_1);
  const abouttitle_2 = JSON.parse(store.abouttitle_2);
  const aboutcontent_2 = JSON.parse(store.aboutcontent_2);
  const aboutImg_1 = JSON.parse(store.aboutImg_1);
  const aboutImg_2 = JSON.parse(store.aboutImg_2);
  const serviceImgs = JSON.parse(store.serviceImg);
  return (
    <main>
      {/* breadcrumb */}
      <section>
        <div className="container mx-auto my-10">
          <div className="flex gap-2">
            <Link href={"/"}>{trans.home}</Link>/
            <span className="opacity-60">{trans.about_us}</span>
          </div>
        </div>
      </section>
      {/* info */}
      <section className="relative about-us-info z-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap gap-32">
            <div className="w-1/2 items-center justify-center gap-4 hidden lg:flex">
              <img
                src={aboutImg_1[0]}
                alt=""
                className="w-1/2 rounded-xl h-[200px] md:h-[400px] "
                data-aos="fade-up"
              />
              <img
                src={aboutImg_1[1]}
                alt=""
                className="w-1/2 rounded-xl object-cover"
                data-aos="fade-up"
              />
            </div>
            <div className="w-full lg:w-1/2" data-aos="fade-zoom-in">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <p className="text-xl lg:text-3xl font-bold uppercase text-center">
                  {trans.ve}
                </p>
                <img
                  src="/images/quang-cao-zoom-logo.png"
                  alt="logo"
                  className="h-12 lg:h-16 object-contain"
                />
              </div>
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{
                  __html:
                    locale === "vi"
                      ? aboutcontent_1.content_VN
                      : aboutcontent_1.content_EN,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="element two animation-moving-left-right-two z-[-1] absolute hidden lg:block"></div>
      </section>
      {/* gia tri cot loi */}
      <section className="mt-16 lg:mt-28">
        <div className="container mx-auto">
          <p className="text-xl lg:text-3xl font-bold uppercase text-center">
            {trans.gia_tri_cot_loi}
          </p>
          <p className="text-center mt-2">
            {locale === "vi" ? store.slogan_VN : store.slogan_EN}
          </p>
          <div className="grid lg:grid-cols-3 gap-5 mt-5 lg:mt-10 bg-gray-50 p-4 lg:p-10 rounded-xl lg:rounded-3xl">
            {coreValue.map((el, idx) => {
              return (
                <div
                  className="text-center bg-white p-3 lg:p-10 rounded-xl"
                  data-aos="fade-up"
                  data-aos-delay={100 * idx}
                  key={el.title_EN}
                >
                  <img
                    src={el.img}
                    className="h-20 object-contain mx-auto"
                    alt={locale === "vi" ? el.title_VN : el.title_EN}
                  />
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
      {/* cac dich vu */}
      <section className="relative mt-16 lg:mt-28 about-us-service z-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2">
            <p className="text-xl lg:text-3xl font-bold uppercase text-center">
              {trans.dich_vu_cua}
            </p>
            <img
              src="/images/quang-cao-zoom-logo.png"
              alt="logo"
              className="h-12 lg:h-16 object-contain"
            />
          </div>
          <div className="flex justify-center gap-2 lg:gap-4 mt-4 lg:mt-12">
            <div className="flex flex-wrap gap-2 lg:gap-4  w-1/2 lg:mb-12">
              <img
                src={serviceImgs[0]}
                alt=""
                className="w-full rounded-md lg:rounded-xl"
                data-aos="fade-up"
              />
              <img
                src={serviceImgs[1]}
                alt=""
                className="w-full rounded-md lg:rounded-xl"
                data-aos="fade-up"
                data-aos-deay="100"
              />
            </div>
            <div className="flex flex-wrap gap-2 lg:gap-4 w-1/2 lg:mt-12">
              <img
                src={serviceImgs[2]}
                alt=""
                className="w-full rounded-md lg:rounded-xl"
                data-aos="fade-up"
                data-aos-deay="200"
              />
              <img
                src={serviceImgs[3]}
                alt=""
                className="w-full rounded-md lg:rounded-xl"
                data-aos="fade-up"
                data-aos-deay="300"
              />
            </div>
          </div>
        </div>
        <div className="element two animation-moving-left-right-two z-[-1] absolute hidden lg:block"></div>
      </section>
      {/* info2 */}
      <section className="mt-16 lg:mt-28 z-10 pb-24">
        <div className="container mx-auto">
          <div
            className="p-5 lg:p-10 rounded-xl lg:rounded-3xl relative"
            style={{ background: "rgba(56, 249, 215, 0.3)" }}
          >
            <p className="font-bold text-lg lg:text-2xl">
              {locale === "vi" ? abouttitle_2.title_VN : abouttitle_2.title_EN}
            </p>
            <p
              className="mt-5 lg:mt-8 text-md lg:text-lg lg:w-1/2 xl:w-2/3"
              data-aos="fade-up"
            >
              {locale === "vi"
                ? aboutcontent_2.content_VN
                : aboutcontent_2.content_EN}
            </p>
            <div className="mt-5 lg:mt-10 text-center lg:text-left">
              <Link href="/lien-he">
                <button
                  className="bg-[#e40900] hover:bg-red-400 px-3 py-1 lg:px-5 lg:py-2 text-white rounded-full"
                >
                  {trans.lien_he_voi_chung_toi}
                </button>
              </Link>
            </div>
            <div className="absolute right-[-5%] top-[30%] gap-5 hidden lg:flex">
              <div>
                <img
                  src={aboutImg_2[0]}
                  className="w-[220px] rounded-xl object-cover mt-24"
                  alt=""
                  data-aos="fade-up"
                />
              </div>
              <div>
                <img
                  src={aboutImg_2[1]}
                  className="w-[220px] rounded-xl object-cover h-[200px] md:h-[340px]"
                  alt=""
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
