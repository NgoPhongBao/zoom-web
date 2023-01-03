import React from "react";
import Link from "next/link";

export default function Breadcrumb() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex gap-2">
          <Link href={"/"}>Trang chủ</Link>/
          <Link href={"/"} disabled className="opacity-40">
            Thiết kế thi công sân khấu
          </Link>
        </div>
      </div>
    </section>
  );
}
