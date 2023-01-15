import useTrans from "../../hooks/useTrans";
import Menu from "./Menu";
import { useRouter } from "next/router";

export default function Footer({ services, store }) {
  const trans = useTrans();
  const { locale } = useRouter();
  console.log(store);
  return (
    <footer className="footer pb-10 h-auto mt-14 lg:mt-32">
      <div className="container mx-auto">
        <div>
          <img
            src="/images/quang-cao-zoom-logo.png"
            alt="logo"
            className="h-16 lg:h-20 object-contain mx-auto"
          />
          <p className="text-center mt-4">
            {locale === "vi" ? store.slogan_VN : store.slogan_EN}
          </p>
        </div>

        <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* gioi thieu */}
          <div className="flex gap-4">
            <div>
              <span className="icofont-street-view text-4xl lg:text-[60px] text-red-500"></span>
            </div>
            <div>
              <p className="font-bold text-lg">Giới thiệu</p>
              <p className="my-1">
                {locale === "vi" ? store.intro_VN : store.intro_EN}
              </p>
            </div>
          </div>
          {/* lien he */}
          <div className="flex gap-4">
            <div>
              <span className="icofont-phone text-4xl lg:text-[50px] text-red-500"></span>
            </div>
            <div>
              <p className="font-bold text-lg">Liên hệ</p>
              <p className="my-1">
                <span className="font-bold underline underline-offset-4">
                  Hotline:
                </span>{" "}
                {store.hotLine}
              </p>
              <p className="my-1">
                <span className="font-bold underline underline-offset-4">
                  Email:
                </span>{" "}
                {store.email}
              </p>
              <p className="my-1">
                <span className="font-bold underline underline-offset-4">
                  Facebook:
                </span>{" "}
                {store.faceBook}
              </p>
              <p className="my-1">
                <span className="font-bold underline underline-offset-4">
                  Giờ làm việc:
                </span>{" "}
                {store.openTime}
              </p>
            </div>
          </div>
          {/* cong viec */}
          <div className="flex gap-4">
            <div>
              <span className="icofont-computer text-4xl lg:text-[50px] text-red-500"></span>
            </div>
            <div>
              <p className="font-bold text-lg">Công việc</p>
              <p className="my-1">
                {locale === "vi" ? store.jobInfo_VN : store.jobInfo_EN}
              </p>
            </div>
          </div>
          {/* doi ngu nhan su */}
          <div className="flex gap-4">
            <div>
              <span className="icofont-people text-4xl lg:text-[50px] text-red-500"></span>
            </div>
            <div>
              <p className="font-bold text-lg">Đội ngũ nhân sự</p>
              <p className="my-1">
                {locale === "vi" ? store.teamInfo_VN : store.teamInfo_EN}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* phim truong */}
          <div className="flex gap-4">
            <div>
              <span className="icofont-location-pin text-4xl lg:text-[50px] text-red-500"></span>
            </div>
            <div>
              <p className="font-bold text-lg">Phim trường ZoOm Media</p>
              <p className="my-1">
                {locale === "vi" ? store.address1_VN : store.address1_EN}
              </p>
              <p className="my-1">
                {locale === "vi" ? store.address2_VN : store.address2_EN}
              </p>
            </div>
          </div>
          {/* email */}
          <div className="flex gap-4">
            <div>
              <span className="icofont-email text-4xl lg:text-[50px] text-red-500"></span>
            </div>
            <div>
              <p className="font-bold text-lg mt-1">{store.email}</p>
            </div>
          </div>
          {/* sdt */}
          <div className="flex gap-4">
            <div>
              <span className="icofont-phone text-4xl lg:text-[50px] text-red-500"></span>
            </div>
            <div>
              <p className="font-bold text-lg mt-1">{store.hotLine}</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Menu locale={locale} isMenuFooter services={services} />
        </div>
      </div>
    </footer>
  );
}
