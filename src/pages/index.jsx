import React from "react";
import { useRouter } from "next/router";
import api from "../service/apiService";
import Banner from "../components/home/Banner";
import Gameshow from "../components/home/Gameshow";
import TVC from "../components/home/TVC";
import Livestream from "../components/home/Livestream";
import Rental from "../components/home/Rental";
import Design from "../components/home/Design";
import Customer from "../components/home/Customer";

export default function Home({ banners, homeServices, customers }) {
  const { locale } = useRouter();
  return (
    <>
      <Banner banners={banners} locale={locale} />
      <Gameshow
        data={homeServices.find((el) => el.kind === "GAMESHOW") || {}}
        locale={locale}
      />
      <TVC
        data={homeServices.find((el) => el.kind === "TVC") || {}}
        locale={locale}
      />
      <Livestream
        data={homeServices.find((el) => el.kind === "LIVETREAM") || {}}
        locale={locale}
      />
      <Rental
        data={homeServices.find((el) => el.kind === "RENTAL") || {}}
        locale={locale}
      />
      <Design
        data={homeServices.find((el) => el.kind === "DESIGN") || {}}
        locale={locale}
      />
      <Customer locale={locale} customers={customers}/>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await Promise.all([
      api.get("/banner"),
      api.get("/servicehome"),
      api.get("/partner"),
    ]);
    return {
      props: {
        banners: res[0].data || [],
        homeServices: res[1].data || [],
        customers: res[2].data || [],
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
