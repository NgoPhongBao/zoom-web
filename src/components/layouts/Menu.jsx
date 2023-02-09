import React, { useState } from "react";
import Link from "next/link";
import useTrans from "../../hooks/useTrans";
import { useRouter } from "next/router";

export default function Menu(props) {
  const { showMenuMobile, locale, services, setShowMenuMobile } = props;
  const trans = useTrans();
  const { asPath } = useRouter();
  const router = useRouter();
  const [showServiceMobile, setShowServiceMobile] = useState(false);
  const [showAboutMobile, setShowAboutMobile] = useState(false);
  const toggleServiceMobile = () => {
    if (showMenuMobile) setShowServiceMobile(!showServiceMobile);
  };

  const toggleAboutMobile = () => {
    if (showMenuMobile) setShowAboutMobile(!showAboutMobile);
  };

  return (
    <ul
      className={`items-center menu ${
        showMenuMobile ? "menu__mobile_show" : ""
      }`}
    >
      {/* Start home */}
      <li className={`menu__item ${asPath === "/" ? "active-link" : ""}`}>
        <Link
          href={"/"}
          className={`menu__item__link`}
          onClick={() => setShowMenuMobile(false)}
        >
          {trans.home}
        </Link>
      </li>
      {/* End home */}

      {/* Start about */}
      <li
        className={`menu__item ${showAboutMobile ? "active" : ""} ${
          asPath === "/ve-chung-toi" ? "active-link" : ""
        }`}
        onClick={() => toggleAboutMobile()}
      >
        <p className={`mr-2 menu__item__link`}>
          {trans.introduction}
          <span className={`icofont-simple-down menu__item__arrow`}></span>
        </p>

        <ul className={`menu__sub`}>
          <li className="py-2 px-5">
            <Link
              href={`/ve-chung-toi`}
              onClick={() => setShowMenuMobile(false)}
              className={`menu__sub__link inline-block ${
                asPath === "/ve-chung-toi" ? "active-link" : ""
              }`}
            >
              {trans.about_us}
            </Link>
          </li>
          <li className="py-2 px-5">
            <Link
              href={`/files/Portfolio-ZoomMedia.pdf`}
              locale="vi"
              target={"_blank"}
              onClick={() => setShowMenuMobile(false)}
              className="menu__sub__link inline-block"
            >
              {trans.capacity_profile}
            </Link>
          </li>
        </ul>
      </li>
      {/* End about */}

      {/* Start service */}
      <li
        className={`menu__item ${showServiceMobile ? "active" : ""} ${
          asPath.includes("/dich-vu/") ? "active-link" : ""
        }`}
        onClick={() => toggleServiceMobile()}
      >
        <p className={`mr-2 menu__item__link`}>
          {trans.service}
          <span className={`icofont-simple-down menu__item__arrow`}></span>
        </p>

        <ul className={`menu__sub min-400`}>
          {services.map((service) => {
            return (
              <li className="py-2 px-5" key={service.id}>
                <Link
                  href={`/dich-vu/${service.url}`}
                  onClick={() => setShowMenuMobile(false)}
                  className={`menu__sub__link inline-block hover:text-[#e40900] ${
                    asPath === "/dich-vu/" + service.url ? "active-link" : ""
                  }`}
                >
                  {locale === "vi" ? service.name_VN : service.name_EN}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
      {/* End service */}

      {/* Start project */}
      <li className={`menu__item ${asPath === "/du-an" ? "active-link" : ""}`}>
        <Link
          href={"/du-an"}
          className={`menu__item__link`}
          onClick={() => setShowMenuMobile(false)}
        >
          {trans.project}
        </Link>
      </li>
      {/* End project */}

      {/* Start customer */}
      <li
        className={`menu__item ${
          asPath === "/khach-hang" ? "active-link" : ""
        }`}
      >
        <Link
          href={"/khach-hang"}
          className={`menu__item__link`}
          onClick={() => setShowMenuMobile(false)}
        >
          {trans.customer}
        </Link>
      </li>
      {/* End customer */}

      {/* Start contact */}
      <li
        className={`menu__item ${asPath === "/lien-he" ? "active-link" : ""}`}
      >
        <Link
          href={"/lien-he"}
          className={`menu__item__link`}
          onClick={() => setShowMenuMobile(false)}
        >
          {trans.contact}
        </Link>
      </li>
      {/* End contact */}

      {/* Start lang mobile */}
      <li className={` menu__item lg:hidden`}>
        <div className={`menu__item__link`}>
          <div className="flex items-center">
            <p className="mr-4">{trans.language}: </p>
            <div className="flex items-center">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  router.push(asPath, asPath, {
                    locale: "vi",
                    scroll: false,
                  });
                  setShowMenuMobile(false);
                }}
              >
                <img
                  src="/images/icons/flag_vietnam.png"
                  alt="vi"
                  className="h-3 mr-1"
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
                onClick={() => {
                  router.push(asPath, asPath, {
                    locale: "en",
                    scroll: false,
                  });
                  setShowMenuMobile(false);
                }}
              >
                <img
                  src="/images/icons/flag_usa.png"
                  alt="en"
                  className="h-3 mr-1"
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
          </div>
        </div>
      </li>

      {/* End lang mobile  */}
    </ul>
  );
}
