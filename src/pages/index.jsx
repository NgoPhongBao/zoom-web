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
import useTrans from "../hooks/useTrans";

export default function Home({ banners, homeServices, customers, services }) {
  const { locale } = useRouter();
  const trans = useTrans();
  return (
    <main>
      <Banner banners={banners} />
      <Gameshow
        data={homeServices.find((el) => el.kind === "GAMESHOW") || {}}
        trans={trans}
        services={services}
      />
      <TVC
        data={homeServices.find((el) => el.kind === "TVC") || {}}
        trans={trans}
        services={services}
      />
      <Livestream
        data={homeServices.find((el) => el.kind === "LIVESTREAM") || {}}
        trans={trans}
        services={services}
      />
      <Rental
        data={homeServices.find((el) => el.kind === "RENTAL") || {}}
        trans={trans}
        services={services}
      />
      <Design
        data={homeServices.find((el) => el.kind === "DESIGN") || {}}
        trans={trans}
        services={services}
      />
      <Customer customers={customers} trans={trans} />
    </main>
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
