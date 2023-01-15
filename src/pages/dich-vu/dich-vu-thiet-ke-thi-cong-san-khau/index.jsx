import React from "react";
import Breadcrumb from "../../../components/service-detail/Breadcrumb";
import BannerServiceDetail from "../../../components/service-detail/BannerServiceDetail";
import ServiceValue from "../../../components/service-detail/ServiceValue";
import Experience from "../../../components/service-detail/Experience";
import Project from "../../../components/service-detail/Project";

export default function index() {
  return (
    <>
      <Breadcrumb />
      <BannerServiceDetail />
      <ServiceValue />
      <Experience/>
      <Project/>
    </>
  );
}
