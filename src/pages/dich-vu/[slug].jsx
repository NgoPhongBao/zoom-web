import React from "react";
import { useRouter } from "next/router";
import useTrans from "../../hooks/useTrans";
import Breadcrumb from "../../components/service-detail/Breadcrumb";
import BannerServiceDetail from "../../components/service-detail/BannerServiceDetail";
import ServiceValue from "../../components/service-detail/ServiceValue";
import Experience from "../../components/service-detail/Experience";
import Project from "../../components/service-detail/Project";

export default function index({ services }) {
  const { locale } = useRouter();
  const trans = useTrans();
  const { slug } = useRouter().query;
  const service = services.find((el) => el.url === slug);
  const serviceProps = { trans, locale, service };
  return (
    <main data-aos="fade-zoom-in" key={new Date().getTime().toString()}>
      <Breadcrumb {...serviceProps} />
      <BannerServiceDetail {...serviceProps} />
      <ServiceValue {...serviceProps} />
      <Experience {...serviceProps} />
      <Project {...serviceProps} />
    </main>
  );
}
