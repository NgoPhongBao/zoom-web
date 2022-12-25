import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import menuStyles from "../styles/Menu.module.scss";
import useTrans from "../hooks/useTrans";

export default function Home() {
  const trans = useTrans();
  const { locale } = useRouter();
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [showServiceMobile, setShowServiceMobile] = useState(false);

  const toggleMenuMobile = () => {
    setShowMenuMobile(!showMenuMobile);
  };

  const toggleServiceMobile = () => {
    setShowServiceMobile(!showServiceMobile);
  };

  return (
    <>
      <header>
        <div className="container mx-auto">
          <div
            className={`${menuStyles.overlaybg} ${
              showMenuMobile ? menuStyles.show : ""
            }`}
            onClick={() => toggleMenuMobile()}
          ></div>
          <div className="flex justify-between items-center ">
            <Link href={"/"}>
              <img
                src="/images/quang-cao-zoom-logo.png"
                alt="logo"
                className="h-16 object-cover"
              />
            </Link>
            <ul
              className={`items-center ${menuStyles.menu} ${
                showMenuMobile ? menuStyles.menu__mobile_show : ""
              }`}
            >
              {/* Start home */}
              <li className={`${menuStyles.menu__item}`}>
                <Link href={"/"} className={`${menuStyles.menu__item__link}`}>
                  {trans.menu.home}
                </Link>
              </li>
              {/* End home */}

              {/* Start about */}
              <li
                className={`flex justify-between items-center ${menuStyles.menu__item}`}
              >
                <Link
                  href={"/"}
                  className={`mr-2 ${menuStyles.menu__item__link}`}
                >
                  {trans.menu.about}
                </Link>
              </li>
              {/* End about */}

              {/* Start service */}
              <li
                className={`${menuStyles.menu__item} ${
                  showServiceMobile ? menuStyles.active : ""
                }`}
                onClick={() => toggleServiceMobile()}
              >
                <Link
                  href={"/"}
                  className={`mr-2 ${menuStyles.menu__item__link}`}
                >
                  {trans.menu.service}
                </Link>
                <span
                  className={`icofont-simple-down pt-1 ${menuStyles.menu__item__arrow}`}
                ></span>
                <ul className={`${menuStyles.menu__sub}`}>
                  <li>
                    <ul className="h-full">
                      <li className="my-3">
                        <Link href="/" className="hover:text-blue">
                          Tổ Chức Sự Kiện - Sản Xuất Gameshow Trọn Gói
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link href="/" className="hover:text-blue">
                          Sản Xuất TVC - KV - BILLBOARD
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link href="/" className="hover:text-blue">
                          Livestream
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link href="/" className="hover:text-blue">
                          Cho Thuê Phim Trường - Thiết Bị Quay Phim - Âm Thanh -
                          Ánh Sáng
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link href="/" className="hover:text-blue">
                          Thiết kế - Thi công Sân khấu
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* End service */}

              {/* Start project */}
              <li className={`${menuStyles.menu__item}`}>
                <Link href={"/"} className={`${menuStyles.menu__item__link}`}>
                  {trans.menu.project}
                </Link>
              </li>
              {/* End project */}

              {/* Start customer */}
              <li className={`${menuStyles.menu__item}`}>
                <Link href={"/"} className={`${menuStyles.menu__item__link}`}>
                  {trans.menu.customer}
                </Link>
              </li>
              {/* End customer */}

              {/* Start contact */}
              <li className={`${menuStyles.menu__item}`}>
                <Link href={"/"} className={`${menuStyles.menu__item__link}`}>
                  {trans.menu.contact}
                </Link>
              </li>
              {/* End contact */}
            </ul>
            <div className="hidden items-center justify-between lg:flex">
              <Link href="/" locale="vi">
                <div className="flex items-center">
                  <img
                    src="/images/icons/flag_vietnam.png"
                    alt="vi"
                    className="h-3 mr-1"
                  />
                  <span
                    className={`text-xs ${
                      locale === "vi" ? "font-bold text-red-400" : ""
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
                    className={`text-xs ${
                      locale === "en" ? "font-bold text-red-400" : ""
                    }`}
                  >
                    EN
                  </span>
                </div>
              </Link>
            </div>
            <div
              className={`${menuStyles.hambuger__menu} ${
                showMenuMobile ? menuStyles.active : ""
              }`}
              onClick={() => toggleMenuMobile()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
