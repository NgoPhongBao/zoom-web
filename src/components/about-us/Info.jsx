import React from "react";

export default function Info() {
  return (
    <section className="relative about-us-info z-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap gap-32">
          <div className="w-1/2 items-center justify-center gap-4 hidden lg:flex">
            <img src="/images/about/about-1.jpg" alt=""  className="w-1/2 rounded-xl" data-aos="fade-right"/>
            <img src="/images/about/about-2.jpg" alt="" className="w-1/2 rounded-xl" data-aos="fade-left"/>
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-zoom-in">
            <div className="flex items-center justify-start gap-2">
              <p className="text-xl lg:text-3xl font-bold uppercase text-center">
                về
              </p>
              <img
                src="/images/quang-cao-zoom-logo.png"
                alt="logo"
                className="h-16 object-contain"
              />
            </div>
            <p className="mt-4">
              Zoom Media được thành lập từ năm 2011, bắt đầu từ việc sản xuất
              truyền hình chuyên nghiệp; cho thuê thiết bị máy quay. Đến đầu năm
              2017, Zoom Media xây dựng và cho ra mắt 2 hệ thống phim trường có
              tổng diện tích sử dụng 11.000 m2 bao gồm 7 studio có diện tích
              khác nhau – trở thành phim trường có diện tích lớn nhất Việt Nam.
              Ngoài ra Zoom Media luôn cập nhật và nhập khẩu các loại máy quay
              phim, âm thanh, ánh sáng hiện đại nhất để sản xuất ra những sản
              phẩm chuyên nghiệp và đạt chất lượng cao. <br /> <br />Đội ngũ nhân viên
              và kĩ thuật viên của Zoom Media có trình độ kĩ thuật và kinh
              nghiệm thực hiện các dự án lớn tại Việt Nam, ekip của chúng tôi có
              tinh thần làm việc hăng say, nhiệt huyết không ngại khó khăn,
              thách thức để có thể cung cấp cho khách hàng những sản phẩm chất
              lượng và những shoot quay hình hoàn mỹ nhất. <br /> <br />Hiện tại Zoom
              Media cung cấp các dịch vụ: livestream chuyên nghiệp, sản xuất
              video quảng cáo, viral, gameshow, giới thiệu doanh nghiệp, video
              theo yêu cầu; cho thuê phim trường, cho thuê các thiết bị máy
              quay, âm thanh, ánh sáng.
            </p>
          </div>
        </div>
      </div>
      <div className="element two animation-moving-left-right-two z-[-1] absolute hidden lg:block"></div>
    </section>
  );
}
