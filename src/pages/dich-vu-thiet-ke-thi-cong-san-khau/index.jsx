import React from "react";
import Breadcrumb from "../../components/service-detail/Breadcrumb";
import BannerServiceDetail from "../../components/service-detail/BannerServiceDetail";
import ServiceValue from "../../components/service-detail/ServiceValue";

export default function index() {
  return (
    <>
      <Breadcrumb />
      <BannerServiceDetail />
      <ServiceValue />
    </>
  );
}
