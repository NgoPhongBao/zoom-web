import React from "react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      {/* breadcrumb */}
      <section>
        <div className="container mx-auto my-10">
          <div className="flex gap-2">
            <Link href={"/"}>Trang chủ</Link>/
            <span className="opacity-60">Giới thiệu</span>
          </div>
        </div>
      </section>
      {/* info */}
      <section className="relative about-us-info z-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap gap-32">
            <div className="w-1/2 items-center justify-center gap-4 hidden lg:flex">
              <img
                src="/images/about/about-1.jpg"
                alt=""
                className="w-1/2 rounded-xl"
                data-aos="fade-right"
              />
              <img
                src="/images/about/about-2.jpg"
                alt=""
                className="w-1/2 rounded-xl"
                data-aos="fade-left"
              />
            </div>
            <div className="w-full lg:w-1/2" data-aos="fade-zoom-in">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <p className="text-xl lg:text-3xl font-bold uppercase text-center">
                  về
                </p>
                <img
                  src="/images/quang-cao-zoom-logo.png"
                  alt="logo"
                  className="h-12 lg:h-16 object-contain"
                />
              </div>
              <p className="mt-4">
                Zoom Media được thành lập từ năm 2011, bắt đầu từ việc sản xuất
                truyền hình chuyên nghiệp; cho thuê thiết bị máy quay. Đến đầu
                năm 2017, Zoom Media xây dựng và cho ra mắt 2 hệ thống phim
                trường có tổng diện tích sử dụng 11.000 m2 bao gồm 7 studio có
                diện tích khác nhau – trở thành phim trường có diện tích lớn
                nhất Việt Nam. Ngoài ra Zoom Media luôn cập nhật và nhập khẩu
                các loại máy quay phim, âm thanh, ánh sáng hiện đại nhất để sản
                xuất ra những sản phẩm chuyên nghiệp và đạt chất lượng cao.{" "}
                <br /> <br />
                Đội ngũ nhân viên và kĩ thuật viên của Zoom Media có trình độ kĩ
                thuật và kinh nghiệm thực hiện các dự án lớn tại Việt Nam, ekip
                của chúng tôi có tinh thần làm việc hăng say, nhiệt huyết không
                ngại khó khăn, thách thức để có thể cung cấp cho khách hàng
                những sản phẩm chất lượng và những shoot quay hình hoàn mỹ nhất.{" "}
                <br /> <br />
                Hiện tại Zoom Media cung cấp các dịch vụ: livestream chuyên
                nghiệp, sản xuất video quảng cáo, viral, gameshow, giới thiệu
                doanh nghiệp, video theo yêu cầu; cho thuê phim trường, cho thuê
                các thiết bị máy quay, âm thanh, ánh sáng.
              </p>
            </div>
          </div>
        </div>
        <div className="element two animation-moving-left-right-two z-[-1] absolute hidden lg:block"></div>
      </section>
      {/* gia tri cot loi */}
      <section className="mt-16 lg:mt-28">
        <div className="container mx-auto">
          <p className="text-xl lg:text-3xl font-bold uppercase text-center">
            giá trị cốt lõi
          </p>
          <p className="text-center mt-2">
            Hãy để chúng tôi làm nên thành công của bạn
          </p>
          <div className="grid lg:grid-cols-3 gap-5 mt-5 lg:mt-10 bg-gray-50 p-4 lg:p-10 rounded-xl lg:rounded-3xl">
            <div
              className="text-center bg-white p-3 lg:p-10 rounded-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="/images/services/icon-service-team.jpg"
                className="h-20 object-contain mx-auto"
              />
              <p className="uppercase font-bold py-4">TEAMWORK</p>
              <p>
                Khi làm việc, chúng tôi cùng phối hợp nhịp nhàng, xây dựng lòng
                tin và tạo nên sự gắn kết tuyệt đối để có thể sản xuất ra những
                thành phẩm khiến khách hàng hài lòng.
              </p>
            </div>
            <div
              className="text-center bg-white p-3 lg:p-10 rounded-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="/images/services/icon-service-box.jpg"
                className="h-20 object-contain mx-auto"
              />
              <p className="uppercase font-bold py-4">MẠNG LƯỚI</p>
              <p>
                Chúng tôi sở hữu mạng lưới nhân sự kết hợp với nhiều đối tác bao
                gồm những đạo diễn, nghệ sĩ xuất sắc nhất.
              </p>
            </div>
            <div
              className="text-center bg-white p-3 lg:p-10 rounded-xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img
                src="/images/services/icon-service-rocket.jpg"
                className="h-20 object-contain mx-auto"
              />
              <p className="uppercase font-bold py-4">NHIỆT HUYẾT</p>
              <p>
                Điểm mạnh của Zoom Media đó là chúng tôi sở hữu những cộng sự
                trẻ, nhiệt huyết và có niềm đam mê mãnh liệt trong việc sản xuất
                video chuyên nghiệp.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* cac dich vu */}
      <section className="relative mt-16 lg:mt-28 about-us-service z-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2">
            <p className="text-xl lg:text-3xl font-bold uppercase text-center">
              dịch vụ của
            </p>
            <img
              src="/images/quang-cao-zoom-logo.png"
              alt="logo"
              className="h-12 lg:h-16 object-contain"
            />
          </div>
          <div className="flex justify-center gap-2 lg:gap-4 mt-4 lg:mt-12">
            <div className="flex flex-wrap gap-2 lg:gap-4  w-1/2 lg:mb-12">
              <img
                src="/images/about/service-1.jpg"
                alt=""
                className="w-full rounded-md lg:rounded-xl"
                data-aos="fade-up"
              />
              <img
                src="/images/about/service-2.jpg"
                alt=""
                className="w-full rounded-md lg:rounded-xl"
                data-aos="fade-up"
                data-aos-deay="100"
              />
            </div>
            <div className="flex flex-wrap gap-2 lg:gap-4 w-1/2 lg:mt-12">
              <img
                src="/images/about/service-3.jpg"
                alt=""
                className="w-full rounded-md lg:rounded-xl"
                data-aos="fade-up"
                data-aos-deay="200"
              />
              <img
                src="/images/about/service-4.jpg"
                alt=""
                className="w-full rounded-md lg:rounded-xl"
                data-aos="fade-up"
                data-aos-deay="300"
              />
            </div>
          </div>
        </div>
        <div className="element two animation-moving-left-right-two z-[-1] absolute hidden lg:block"></div>
      </section>
      {/* info2 */}
      <section className="mt-16 lg:mt-28 z-10 pb-24" >
        <div className="container mx-auto">
          <div
            className="p-5 lg:p-10 rounded-xl lg:rounded-3xl relative"
            style={{ background: "rgba(56, 249, 215, 0.3)" }}
          >
            <p className="font-bold text-lg lg:text-2xl">
              Sản xuất video - Livestreaming - Cho thuê phim trường và thiết bị
              chuyên nghiệp
            </p>
            <p className="mt-5 lg:mt-8 text-md lg:text-lg lg:w-1/2 xl:w-2/3" data-aos="fade-up">
              Zoom Media sở hữu hệ thống máy móc và thiết bị quay tương đương
              đài truyền hình quốc gia, chúng tôi cam kết sẽ mang đến cho quý
              doanh nghiệp những sản phẩm hoàn chỉnh và đạt đến chất lượng tốt
              nhất ở thời điểm hiện tại.{" "}
            </p>
            <div className="mt-5 lg:mt-10 text-center lg:text-left">
              <Link href="/lien he">
                <button
                  className="bg-red-500 hover:bg-red-400 px-3 py-1 lg:px-5 lg:py-2 text-white rounded-full"
                  data-aos="fade-up"
                  data-aos-duration="200"
                >
                  Liên hệ với chúng tôi
                </button>
              </Link>
            </div>
            <div className="absolute right-[-5%] top-[30%] gap-5 hidden lg:flex">
              <div>
                <img
                  src="/images/about/about-3.jpg "
                  className="w-[220px] rounded-xl object-contain mt-24"
                  alt=""
                  data-aos="fade-right"
                />
              </div>
              <div>
                <img
                  src="/images/about/about-4.jpg"
                  className="w-[220px] rounded-xl object-contain"
                  alt=""
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
