import React from "react";
import Link from "next/link";

export default function Breadcrumb() {
  return (
    <section>
      <div className="container mx-auto my-10">
        <div className="flex gap-2">
          <Link href={"/"}>Trang chủ</Link>/
          <span className="opacity-60">
            Thiết kế thi công sân khấu
          </span>
        </div>
      </div>
    </section>
  );
}
