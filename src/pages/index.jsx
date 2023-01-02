import React from "react";
import Banner from "../components/home/Banner";
import Service1 from "../components/home/Service1";
import Service2 from "../components/home/Service2";
import Service3 from "../components/home/Service3";
import Service4 from "../components/home/Service4";
import Service5 from "../components/home/Service5";
import Customer from "../components/home/Customer";

export default function Home() {
  return (
    <>
      <Banner />
      <Service1 />
      <Service2 />
      <Service3 />
      <Service4 />
      <Service5 />
      <Customer />
    </>
  );
}
