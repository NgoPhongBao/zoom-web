import React from "react";
import ServiceDetail from "../../admin-components/ServiceDetail";

export default function Cp() {
  return <ServiceDetail serviceType={"gameshow"} />;
}

Cp.isAdmin = true