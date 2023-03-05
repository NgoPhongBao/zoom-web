import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  const { children, services = [], store = {} } = props;
  return (
    <>
      <Header services={services} store={store} />
      {children}
      <Footer services={services} store={store} />
    </>
  );
}
