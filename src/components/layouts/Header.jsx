import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import menuStyles from "../../styles/Menu.module.scss";
import useTrans from "../../hooks/useTrans";

export default function Header() {
  const trans = useTrans();
  const { locale } = useRouter();
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [showServiceMobile, setShowServiceMobile] = useState(false);
  const [isFixedMenu, setIsFixedMenu] = useState(false);
  const headerRef = useRef(null);

  const toggleMenuMobile = () => {
    setShowMenuMobile(!showMenuMobile);
  };

  const toggleServiceMobile = () => {
    if (showMenuMobile) setShowServiceMobile(!showServiceMobile);
  };

  useEffect(() => {
    if (typeof window) {
      if (window.innerWidth > 1024) {
        setShowMenuMobile(false);
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth > 1024) {
          setShowMenuMobile(false);
        }
      });

      // const headerHeight = headerRef.current.offsetHeight;
      // window.addEventListener("scroll", () => {
      //   if (window.pageYOffset > headerHeight) {
      //     setIsFixedMenu(true);
      //   } else {
      //     setIsFixedMenu(false);
      //   }
      // });
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className={`${menuStyles.fixed} transition-all duration-500`}
    >
      <div className="container mx-auto py-4 relative z-30">
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
              className="h-16 object-cover z-10 relative"
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
            <li className={`${menuStyles.menu__item}`}>
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
              <p
                className={`mr-2 ${menuStyles.menu__item__link}`}
              >
                {trans.menu.service}
                <span
                  className={`icofont-simple-down pt-1 ${menuStyles.menu__item__arrow}`}
                ></span>
              </p>

              <ul className={`${menuStyles.menu__sub}`}>
                <li className="my-3">
                  <Link
                    href={`/dich-vu-thiet-ke-thi-cong-san-khau`}
                    className="hover:text-blue-400"
                  >
                    Tổ Chức Sự Kiện - Sản Xuất Gameshow Trọn Gói
                  </Link>
                </li>
                <li className="my-3">
                  <Link
                    href={`/dich-vu-thiet-ke-thi-cong-san-khau`}
                    className="hover:text-blue-400"
                  >
                    Sản Xuất TVC - KV - BILLBOARD
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
                    Cho Thuê Phim Trường - Thiết Bị Quay Phim - Âm Thanh - Ánh
                    Sáng
                  </Link>
                </li>
                <li className="my-3">
                  <Link
                    href={`/dich-vu-thiet-ke-thi-cong-san-khau`}
                    className="hover:text-blue-400"
                  >
                    Thiết kế - Thi công Sân khấu
                  </Link>
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

            {/* Start lang mobile */}
            <li className={` ${menuStyles.menu__item} lg:hidden`}>
              <div className={`${menuStyles.menu__item__link}`}>
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
            {/* End lang mobile  */}
          </ul>
          <div className="hidden items-center justify-between lg:flex">
            <Link href="/" locale="vi">
              <div className="flex items-center">
                <img
                  src="/images/icons/flag_vietnam.png"
                  alt="vi"
                  className="h-4 mr-1"
                />
                <span
                  className={`${
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
                  className="h-4 mr-1"
                />
                <span
                  className={`${
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
  );
}
