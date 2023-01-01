import { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/layouts/Layout";
import AOS from "aos";

import "aos/dist/aos.css";
import "../styles/globals.scss";


export default function App({ Component, pageProps }) {
  useEffect(function () {
    AOS.init({
      once: false,
      offset: 50,
      duration: 1000
    });
  }, []);

  return (
    <>
      <Head>
        <title>Quảng Cáo Zoom</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
