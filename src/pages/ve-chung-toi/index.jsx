import React from "react";
import Breadcrumb from "../../components/about-us/Breadcrumb";
import Info from "../../components/about-us/Info";
import CoreValue from "../../components/about-us/CoreValue";
import Service from "../../components/about-us/Service";

export default function AboutUs() {
  return (
    <>
      <Breadcrumb />
      <Info />
      <CoreValue />
      <Service />
    </>
  );
}
