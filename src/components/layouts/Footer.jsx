import useTrans from "../../hooks/useTrans";
import { useRouter } from "next/router";

export default function Footer({ services, store }) {
  const trans = useTrans();
  const { locale } = useRouter();
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
            <div className="w-[32px] min-w-[32px]">
              <img
                src={store.iconIntro}
                alt=""
                className="w-full object-contain block"
              />
            </div>
            <div className="flex-auto">
              <p className="font-bold text-lg">{trans.introduction}</p>
              <p className="my-1">
                {locale === "vi" ? store.intro_VN : store.intro_EN}
              </p>
            </div>
          </div>
          {/* lien he */}
          <div className="flex gap-4">
            <div className="w-[32px] min-w-[32px]">
              <img
                src={store.iconContact}
                alt=""
                className="w-full object-contain block"
              />
            </div>
            <div className="flex-auto">
              <p className="font-bold text-lg">{trans.contact}</p>
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
                  {trans.gio_lam_viec}:
                </span>{" "}
                {store.openTime}
              </p>
            </div>
          </div>
          {/* cong viec */}
          <div className="flex gap-4">
            <div className="w-[32px] min-w-[32px]">
              <img
                src={store.iconJobInfo}
                alt=""
                className="w-full object-contain block"
              />
            </div>
            <div className="flex-auto">
              <p className="font-bold text-lg">{trans.cong_viec}</p>
              <p className="my-1">
                {locale === "vi" ? store.jobInfo_VN : store.jobInfo_EN}
              </p>
            </div>
          </div>
          {/* doi ngu nhan su */}
          <div className="flex gap-4">
            <div className="w-[32px] min-w-[32px]">
              <img
                src={store.iconTeamInfo}
                alt=""
                className="w-full object-contain block"
              />
            </div>
            <div className="flex-auto">
              <p className="font-bold text-lg">{trans.doi_ngu_nhan_su}</p>
              <p className="my-1">
                {locale === "vi" ? store.teamInfo_VN : store.teamInfo_EN}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* phim truong */}
          <div className="flex gap-4">
            <div className="w-[32px] min-w-[32px]">
              <img
                src={store.iconAddress}
                alt=""
                className="w-full object-contain block"
              />
            </div>
            <div className="flex-auto">
              <p className="font-bold text-lg">
                {trans.phim_truong_zoom_media}
              </p>
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
            <div className="w-[32px] min-w-[32px]">
              <img
                src={store.iconEmail}
                alt=""
                className="w-full object-contain block"
              />
            </div>
            <div className="flex-auto">
              <p className="font-bold text-lg mt-1">{store.email}</p>
            </div>
          </div>
          {/* sdt */}
          <div className="flex gap-4">
            <div className="w-[32px] min-w-[32px]">
              <img
                src={store.iconHotline}
                alt=""
                className="w-full object-contain block"
              />
            </div>
            <div className="flex-auto">
              <p className="font-bold text-lg mt-1">{store.hotLine}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
