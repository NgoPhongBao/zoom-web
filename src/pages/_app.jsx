import { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/layouts/Layout";
import LayoutAdmin from "../admin-components/LayoutAdmin";
import AOS from "aos";
import App from "next/app";
import "aos/dist/aos.css";
import "../styles/globals.scss";
import "../styles/admin.scss";
import api from "../service/apiService";
import ContextProviver from "../context";

function MyApp({ Component, pageProps, services, store }) {
  useEffect(function () {
    AOS.init({
      once: false,
      offset: 50,
      duration: 500,
    });
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  return (
    <>
      <Head>
        <title>
          Công ty Zoom Media | Sản xuất video – Livestream – Cho thuê phim
          trường và thiết bị
        </title>
        <meta
          name="description"
          content="Zoom Media cung cấp các dịch vụ: livestream chuyên nghiệp, sản xuất video quảng cáo, viral, gameshow, giới thiệu doanh nghiệp, video theo yêu cầu,....."
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {Component.isAdmin ? (
        <ContextProviver>
          {Component.isLogin ? (
            <Component {...pageProps} />
          ) : (
            <LayoutAdmin>
              <Component {...pageProps} />
            </LayoutAdmin>
          )}
        </ContextProviver>
      ) : (
        <Layout services={services} store={store}>
          <Component {...pageProps} services={services} store={store} />
        </Layout>
      )}
    </>
  );
}
MyApp.getInitialProps = async (appContext) => {
  try {
    const appProps = await App.getInitialProps(appContext);
    const res = await Promise.all([api.get("/service"), api.get("/store")]);
    return {
      ...appProps,
      services: res[0].data || [],
      store: res[1].data || {},
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
export default MyApp;
