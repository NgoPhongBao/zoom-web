import React from "react";
import Link from "next/link";

export default function Breadcrumb() {
  return (
    <section>
      <div className="container mx-auto my-10">
        <div className="flex gap-2">
          <Link href={"/"}>Trang chủ</Link>/
          <span className="opacity-60">
            Giới thiệu
          </span>
        </div>
      </div>
    </section>
  );
}
