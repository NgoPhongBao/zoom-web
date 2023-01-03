import React from "react";

export default function CoreValue() {
  return (
    <section className="mt-16 lg:mt-28">
      <div className="container mx-auto">
        <p className="text-xl lg:text-3xl font-bold uppercase text-center">
          giá trị cốt lõi
        </p>
        <p className="text-center mt-2">Hãy để chúng tôi làm nên thành công của bạn</p>
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
              Điểm mạnh của Zoom Media đó là chúng tôi sở hữu những cộng sự trẻ,
              nhiệt huyết và có niềm đam mê mãnh liệt trong việc sản xuất video
              chuyên nghiệp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
