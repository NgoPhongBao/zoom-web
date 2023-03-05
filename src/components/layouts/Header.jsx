import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Menu from "./Menu";

export default function Header({ services, store }) {
  const { locale, asPath } = useRouter();
  const router = useRouter();
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [isFixedMenu, setIsFixedMenu] = useState(false);
  const headerRef = useRef(null);
  const toggleMenuMobile = () => {
    setShowMenuMobile(!showMenuMobile);
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

      const headerHeight = headerRef.current.offsetHeight;
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > headerHeight) {
          setIsFixedMenu(true);
        } else {
          setIsFixedMenu(false);
        }
      });
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className={`header mb-5 ${isFixedMenu ? "mb-24" : ""}`}
    >
      <div
        className={`${
          isFixedMenu ? "fixed" : ""
        } z-30 transition-all duration-300`}
      >
        <div className={`container mx-auto `}>
          <div
            className={`overlaybg ${showMenuMobile ? "show" : ""}`}
            onClick={() => toggleMenuMobile()}
          ></div>
          <div
            className={`${
              isFixedMenu ? "py-2" : "py-4"
            } flex justify-between items-center`}
          >
            <Link href={"/"}>
              <img
                src="/images/quang-cao-zoom-logo.png"
                alt="logo"
                className={`${
                  isFixedMenu ? "h-10" : "h-16"
                } object-cover z-10 relative transition-all`}
              />
            </Link>
            <Menu
              showMenuMobile={showMenuMobile}
              setShowMenuMobile={setShowMenuMobile}
              locale={locale}
              services={services}
              store={store}
            />
            <div className="hidden items-center justify-between lg:flex">
              <div
                className="flex items-center cursor-pointer"
                onClick={() =>
                  router.push(asPath, asPath, {
                    locale: "vi",
                    scroll: false,
                  })
                }
              >
                <img
                  src="/images/icons/flag_vietnam.png"
                  alt="vi"
                  className="h-4 mr-1"
                />
                <span
                  className={`${
                    locale === "vi" ? "font-bold text-[#e40900]" : ""
                  }`}
                >
                  VI
                </span>
              </div>
              <div className="mx-2">|</div>
              <div
                className="flex items-center cursor-pointer"
                onClick={() =>
                  router.push(asPath, asPath, {
                    locale: "en",
                    scroll: false,
                  })
                }
              >
                <img
                  src="/images/icons/flag_usa.png"
                  alt="en"
                  className="h-4 mr-1"
                />
                <span
                  className={`${
                    locale === "en" ? "font-bold text-[#e40900]" : ""
                  }`}
                >
                  EN
                </span>
              </div>
            </div>
            <div
              className={`hambuger__menu ${showMenuMobile ? "active" : ""}`}
              onClick={() => toggleMenuMobile()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
