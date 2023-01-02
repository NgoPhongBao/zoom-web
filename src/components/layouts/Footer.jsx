import useTrans from "../../hooks/useTrans";

export default function Footer() {
  const trans = useTrans();

  return (
    <footer className="pb-10 h-auto">
      <div className="container mx-auto">
        <div>
          <img
            src="/images/quang-cao-zoom-logo.png"
            alt="logo"
            className="h-16 lg:h-20 object-contain mx-auto"
          />
          <p className="text-center mt-4">
            {trans.footer.let_us_make_your_success}
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
                Zoom Media cung cấp các dịch vụ: livestream chuyên nghiệp, sản
                xuất video quảng cáo, viral, gameshow, giới thiệu doanh nghiệp,
                video theo yêu cầu, cho thuê phim trường, cho thuê các thiết bị
                máy quay, âm thanh, ánh sáng.
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
                0919 833 441 - 0974 57 1018 - (028) 7307 8887
              </p>
              <p className="my-1">
                <span className="font-bold underline underline-offset-4">
                  Email:
                </span>{" "}
                info@quangcaozoom.com
              </p>
              <p className="my-1">
                <span className="font-bold underline underline-offset-4">
                  Facebook:
                </span>{" "}
                Zoommediavn
              </p>
              <p className="my-1">
                <span className="font-bold underline underline-offset-4">
                  Giờ làm việc:
                </span>{" "}
                Mon - Sun / 9:00 AM - 5:30 PM
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
                Khi làm việc, chúng tôi phối hợp nhịp nhàng, xây dựng lòng tin
                và tạo nên sự gắn kết tuyệt đối để có thể sản xuất ra những
                thành phẩm khiến khách hàng hài lòng.
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
                Đội ngũ nhân viên và kỹ thuật viên của Zoom Media có trình độ kỹ
                thuật và kinh nghiệm thực hiện các dự án mới tại Việt Nam. Ekip
                chúng tôi có tinh thần làm việc hăng say, nhiệt huyết không ngại
                khó khăn, thách thức để có thể cung cấp cho khách hàng những sản
                phẩm chất lượng và những shoot quay hoàn mỹ nhất.
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
              <p className="font-bold text-lg">Phim trường Zoom Media</p>
              <p className="my-1">
                44/1 Tân Thới Nhất 8, Phường Tân Thới Nhất, Quận 12, TP.HCM
              </p>
              <p className="my-1">
                221/3 Phan Huy Ích, Phường 14, Quận Gò Vấp, TP.HCM
              </p>
            </div>
          </div>
          {/* email */}
          <div className="flex gap-4">
            <div>
              <span className="icofont-email text-4xl lg:text-[50px] text-red-500"></span>
            </div>
            <div>
              <p className="font-bold text-lg mt-1">
                Zoommediaviethnam@gmail.com
              </p>
            </div>
          </div>
          {/* sdt */}
          <div className="flex gap-4">
            <div>
              <span className="icofont-phone text-4xl lg:text-[50px] text-red-500"></span>
            </div>
            <div>
              <p className="font-bold text-lg mt-1">0919-833-441</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
