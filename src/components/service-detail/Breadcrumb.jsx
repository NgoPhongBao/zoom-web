import React from "react";
import Link from "next/link";

export default function Breadcrumb({ trans, service, locale }) {
  return (
    <section>
      <div className="container mx-auto my-10">
        <div className="flex gap-2">
          <Link href={"/"}>{trans.home}</Link>/
          <span className="opacity-60">
            {locale === "vi" ? service.name_VN : service.name_EN}
          </span>
        </div>
      </div>
    </section>
  );
}
