import React from "react";
import ServiceDetail from "../../admin-components/ServiceDetail";

export default function Cp() {
  return <ServiceDetail serviceType={"movie_rental"} />;
}

Cp.isAdmin = true
