import React, { useState } from "react";
import Link from "next/link";
import useTrans from "../../hooks/useTrans";

export default function Menu(props) {
  const { showMenuMobile, locale, isMenuFooter } = props;
  const trans = useTrans();
  const [showServiceMobile, setShowServiceMobile] = useState(false);
  const toggleServiceMobile = () => {
    if (showMenuMobile && setShowServiceMobile)
      setShowServiceMobile(!showServiceMobile);
  };

  return (
    <ul
      className={`items-center menu ${
        showMenuMobile ? "menu__mobile_show" : ""
      }`}
    >
      {/* Start home */}
      <li className={`menu__item`}>
        <Link href={"/"} className={`menu__item__link`}>
          {trans.menu.home}
        </Link>
      </li>
      {/* End home */}

      {/* Start about */}
      <li className={`menu__item`}>
        <Link href={"/ve-chung-toi"} className={`mr-2 menu__item__link`}>
          {trans.menu.about}
        </Link>
      </li>
      {/* End about */}

      {/* Start service */}
      <li
        className={`menu__item ${showServiceMobile ? "active" : ""}`}
        onClick={() => toggleServiceMobile()}
      >
        <p className={`mr-2 menu__item__link`}>
          {trans.menu.service}
          <span className={`icofont-simple-down pt-1 menu__item__arrow`}></span>
        </p>

        <ul className={`menu__sub`}>
          <li className="my-3">
            <Link
              href={`/dich-vu-thiet-ke-thi-cong-san-khau`}
              className="hover:text-blue-400"
            >
              Sản Xuất Video
            </Link>
          </li>
          <li className="my-3">
            <Link
              href={`/dich-vu-thiet-ke-thi-cong-san-khau`}
              className="hover:text-blue-400"
            >
              Livestream
            </Link>
          </li>
          <li className="my-3">
            <Link
              href={`/dich-vu-thiet-ke-thi-cong-san-khau`}
              className="hover:text-blue-400"
            >
              Thiết Kế Thi Công Sân Khấu
            </Link>
          </li>
          <li className="my-3">
            <Link
              href={`/dich-vu-thiet-ke-thi-cong-san-khau`}
              className="hover:text-blue-400"
            >
              Cho Thuê Phim Trường
            </Link>
          </li>
          <li className="my-3">
            <Link
              href={`/dich-vu-thiet-ke-thi-cong-san-khau`}
              className="hover:text-blue-400"
            >
              Cho Thuê Thiết Bị Quay Phim
            </Link>
          </li>
          <li className="my-3">
            <Link
              href={`/dich-vu-thiet-ke-thi-cong-san-khau`}
              className="hover:text-blue-400"
            >
              Cho Thuê Thiết Bị Âm Thanh - Ánh Sáng
            </Link>
          </li>
        </ul>
      </li>
      {/* End service */}

      {/* Start project */}
      <li className={`menu__item`}>
        <Link href={"/du-an"} className={`menu__item__link`}>
          {trans.menu.project}
        </Link>
      </li>
      {/* End project */}

      {/* Start customer */}
      <li className={`menu__item`}>
        <Link href={"/khach-hang"} className={`menu__item__link`}>
          {trans.menu.customer}
        </Link>
      </li>
      {/* End customer */}

      {/* Start contact */}
      <li className={`menu__item`}>
        <Link href={"/lien-he"} className={`menu__item__link`}>
          {trans.menu.contact}
        </Link>
      </li>
      {/* End contact */}

      {/* Start lang mobile */}
      {!isMenuFooter ? (
        <li className={` menu__item lg:hidden`}>
          <div className={`menu__item__link`}>
            <div className="flex items-center">
              <p className="mr-4">{trans.menu.language}: </p>
              <div className="flex items-center">
                <Link href="/" locale="vi">
                  <div className="flex items-center">
                    <img
                      src="/images/icons/flag_vietnam.png"
                      alt="vi"
                      className="h-3 mr-1"
                    />
                    <span
                      className={`${
                        locale === "vi" ? "font-bold text-red-500" : ""
                      }`}
                    >
                      VI
                    </span>
                  </div>
                </Link>
                <div className="mx-2">|</div>
                <Link href="/" locale="en">
                  <div className="flex items-center">
                    <img
                      src="/images/icons/flag_usa.png"
                      alt="en"
                      className="h-3 mr-1"
                    />
                    <span
                      className={`${
                        locale === "en" ? "font-bold text-red-500" : ""
                      }`}
                    >
                      EN
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </li>
      ) : null}

      {/* End lang mobile  */}
    </ul>
  );
}
